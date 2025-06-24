// app/api/send-email/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const contentType = request.headers.get('content-type');
    
    let data;
    let type;
    let attachments = [];
    
    // 处理 FormData (文件上传) 或 JSON 数据
    if (contentType && contentType.includes('multipart/form-data')) {
      // 处理 FormData (包含文件上传)
      const formData = await request.formData();
      
      // 提取 type
      type = formData.get('type');
      
      // 构建数据对象
      data = {};
      for (const [key, value] of formData.entries()) {
        if (key !== 'type') { // 跳过 type 字段
          if (value instanceof File && value.size > 0) {
            // 处理文件 - 准备作为附件
            const fileBuffer = await value.arrayBuffer();
            attachments.push({
              filename: value.name,
              content: Array.from(new Uint8Array(fileBuffer)),
              type: value.type,
              disposition: 'attachment'
            });
            // 同时保存文件信息到data中用于邮件内容
            data[key] = {
              name: value.name,
              size: value.size,
              type: value.type
            };
          } else {
            // 处理普通字段
            data[key] = value;
          }
        }
      }
    } else {
      // 处理 JSON 数据
      const body = await request.json();
      type = body.type;
      data = body.data;
    }

    let emailContent = "";
    let subject = "";
    let toEmail = ["rachelle@austinedu.com.au"]; // 默认收件人

    if (type === "trial-lesson") {
      subject = "New Trial Lesson Request - Austin Education";
      emailContent = generateTrialLessonEmail(data);
    } else if (type === "consultation") {
      subject = "New Consultation Meeting Request - Austin Education";
      emailContent = generateConsultationEmail(data);
    } else if (type === "webinar") {
      subject = "New Webinar Registration - Austin Education";
      emailContent = generateWebinarEmail(data);
    } else if (type === "faq-question") {
      subject = "New FAQ Question - Austin Education";
      emailContent = generateFAQQuestionEmail(data);
    } else if (type === "job-application") {
      subject = "New Job Application - Austin Education";
      emailContent = generateJobApplicationEmail(data);
      // toEmail = ["hr@austinedu.com.au"]; // 求职申请发送到HR邮箱
      toEmail = ["yushuhai1998@gmail.com"]; // 临时使用个人邮箱接收求职申请
    } else {
      return NextResponse.json(
        { error: "Invalid email type" },
        { status: 400 }
      );
    }

    const emailOptions = {
      from: "Austin Education <noreply@austinedu.com.au>",
      to: toEmail,
      subject: subject,
      html: emailContent,
    };

    // 如果有附件，添加到邮件选项中
    if (attachments.length > 0) {
      emailOptions.attachments = attachments;
    }

    const { data: emailData, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function generateConsultationEmail(data) {
  // 处理附加学生信息
  let additionalStudentsHtml = "";
  if (data.additionalStudents && data.additionalStudents.length > 0) {
    additionalStudentsHtml = `
      <div class="section">
        <h3>👥 Additional Students Information</h3>
        ${data.additionalStudents
          .map(
            (student, index) => `
          <div class="student-info" style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 5px;">
            <h4 style="margin: 0 0 10px 0; color: #285ea9;">Student ${index + 2}</h4>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${student.name || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${student.email || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${student.phone || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${Array.isArray(student.schoolYear) ? student.schoolYear.join(", ") : student.schoolYear || "Not specified"}</span>
            </div>
            <div class="info-row">
              <span class="label">Topics:</span>
              <span class="value">${Array.isArray(student.topics) ? student.topics.join(", ") : student.topics || "Not specified"}</span>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Consultation Meeting Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .section h3 { margin-top: 0; color: #285ea9; }
        .info-row { margin-bottom: 10px; }
        .label { font-weight: bold; display: inline-block; width: 150px; }
        .value { color: #666; }
        .highlight { background-color: #e6f3ff; padding: 10px; border-radius: 3px; border-left: 4px solid #285ea9; }
        .student-info { margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📅 Consultation Meeting Request</h1>
          <p>New consultation request submitted on ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>👤 Parent/Guardian Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.parentName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.parentEmail || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.parentPhone || "Not provided"}</span>
            </div>
          </div>

          <div class="section">
            <h3>👨‍🎓 Student Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.studentName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.studentEmail || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.studentPhone || "Not provided"}</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Academic Information</h3>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${data.schoolYear || "Not specified"}</span>
            </div>
          </div>

          <div class="section">
            <h3>🎯 Consultation Topics</h3>
            <div class="highlight">
              <div class="info-row">
                <span class="label">Selected Topics:</span>
                <span class="value">${data.topics || "Not specified"}</span>
              </div>
            </div>
          </div>

          ${additionalStudentsHtml}

          ${
            data.questions
              ? `
          <div class="section">
            <h3>❓ Questions & Concerns</h3>
            <p style="background-color: #f5f5f5; padding: 10px; border-radius: 3px;">${data.questions}</p>
          </div>
          `
              : ""
          }

          <div class="section">
            <h3>📞 Preferred Contact Method</h3>
            <div class="info-row">
              <span class="label">Contact Method:</span>
              <span class="value">${data.contactMethod || "Not specified"}</span>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateTrialLessonEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Trial Lesson Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .section h3 { margin-top: 0; color: #285ea9; }
        .info-row { margin-bottom: 10px; }
        .label { font-weight: bold; display: inline-block; width: 150px; }
        .value { color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Trial Lesson Request</h1>
          <p>New request submitted on ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>📍 Campus Selection</h3>
            <div class="info-row">
              <span class="label">Selected Campus:</span>
              <span class="value">${data.campus || "Not specified"}</span>
            </div>
          </div>

          <div class="section">
            <h3>👤 Parent/Guardian Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.parentName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.parentEmail || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.parentPhone || "Not provided"}</span>
            </div>
          </div>

          <div class="section">
            <h3>👨‍🎓 Student Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.studentName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.studentEmail || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.studentPhone || "Not provided"}</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Trial Lesson Details</h3>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${data.schoolYear || "Not specified"}</span>
            </div>
            <div class="info-row">
              <span class="label">Subjects:</span>
              <span class="value">${data.subjects || "Not specified"}</span>
            </div>
          </div>

          ${
            data.questions
              ? `
          <div class="section">
            <h3>❓ Questions & Concerns</h3>
            <p style="background-color: #f5f5f5; padding: 10px; border-radius: 3px;">${data.questions}</p>
          </div>
          `
              : ""
          }

          <div class="section">
            <h3>📞 Preferred Contact Method</h3>
            <div class="info-row">
              <span class="label">Contact Method:</span>
              <span class="value">${data.contactMethod || "Not specified"}</span>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateWebinarEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Webinar Registration</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .section h3 { margin-top: 0; color: #285ea9; }
        .info-row { margin-bottom: 10px; }
        .label { font-weight: bold; display: inline-block; width: 150px; }
        .value { color: #666; }
        .highlight { background-color: #e6f3ff; padding: 10px; border-radius: 3px; border-left: 4px solid #285ea9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 Webinar Registration</h1>
          <p>New registration submitted on ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>👤 Parent/Guardian Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.parentName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.parentEmail || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.parentPhone || "Not provided"}</span>
            </div>
          </div>

          <div class="section">
            <h3>👨‍🎓 Student Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.studentName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.studentEmail || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.studentPhone || "Not provided"}</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Academic Information</h3>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${data.schoolYear || "Not specified"}</span>
            </div>
          </div>

          <div class="section">
            <h3>🎯 Webinar Interest</h3>
            <div class="highlight">
              <div class="info-row">
                <span class="label">Selected Webinar:</span>
                <span class="value">${data.webinars || "Not specified"}</span>
              </div>
            </div>
          </div>

          <div class="section">
            <h3>🌐 Language Preference</h3>
            <div class="info-row">
              <span class="label">Preferred Language:</span>
              <span class="value">${data.language || "Not specified"}</span>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateFAQQuestionEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>FAQ Question Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .section h3 { margin-top: 0; color: #285ea9; }
        .info-row { margin-bottom: 10px; }
        .label { font-weight: bold; display: inline-block; width: 120px; }
        .value { color: #666; }
        .question-box { background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #285ea9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>❓ FAQ Question Submission</h1>
          <p>New question submitted on ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>👤 User Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.name || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.email || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Page Language:</span>
              <span class="value">${data.language === "en" ? "English" : "Chinese"}</span>
            </div>
          </div>

          <div class="section">
            <h3>💬 Question Details</h3>
            <div class="question-box">
              <h4 style="margin-top: 0; color: #285ea9;">User's Question:</h4>
              <p style="margin: 0; white-space: pre-wrap;">${data.question}</p>
            </div>
          </div>

          <div class="section">
            <h3>📋 Action Required</h3>
            <p>Please respond to this question within 24 hours via email: <strong>${data.email}</strong></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateJobApplicationEmail(data) {
  // 处理简历附件信息
  let resumeSection = "";
  if (data.resume && data.resume.name) {
    resumeSection = `
      <div class="section">
        <h3>📄 Resume/CV</h3>
        <div class="highlight">
          <div class="info-row">
            <span class="label">File Name:</span>
            <span class="value">${data.resume.name}</span>
          </div>
          <div class="info-row">
            <span class="label">File Size:</span>
            <span class="value">${data.resume.size ? Math.round(data.resume.size / 1024) + ' KB' : 'Unknown'}</span>
          </div>
          <div class="info-row">
            <span class="label">File Type:</span>
            <span class="value">${data.resume.type || 'Unknown'}</span>
          </div>
          <p style="margin-top: 10px; color: #27ae60; font-weight: bold;">
            ✅ Resume file is attached to this email.
          </p>
        </div>
      </div>
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Job Application Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 700px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .section h3 { margin-top: 0; color: #285ea9; }
        .info-row { margin-bottom: 10px; }
        .label { font-weight: bold; display: inline-block; width: 180px; }
        .value { color: #666; }
        .highlight { background-color: #e6f3ff; padding: 10px; border-radius: 3px; border-left: 4px solid #285ea9; }
        .text-area { background-color: #f5f5f5; padding: 10px; border-radius: 3px; white-space: pre-wrap; }
        .text-muted { color: #999; font-style: italic; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💼 New Job Application</h1>
          <p>Application submitted on ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>👤 Personal Information</h3>
            <div class="info-row">
              <span class="label">Full Name:</span>
              <span class="value">${data.fullName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.emailAddress || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.phoneNumber || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">City:</span>
              <span class="value">${data.city || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">State:</span>
              <span class="value">${data.state || "Not provided"}</span>
            </div>
          </div>

          <div class="section">
            <h3>💼 Position Applied For</h3>
            <div class="highlight">
              <div class="info-row">
                <span class="label">Position:</span>
                <span class="value">${data.selectPosition || "Not specified"}</span>
              </div>
              <div class="info-row">
                <span class="label">Preferred Campus:</span>
                <span class="value">${data.preferredCampusLocation || "Not specified"}</span>
              </div>
            </div>
          </div>

          ${resumeSection}

          <div class="section">
            <h3>🎓 Educational Background</h3>
            <div class="info-row">
              <span class="label">Highest Qualification:</span>
              <span class="value">${data.highestQualification || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Major/Field of Study:</span>
              <span class="value">${data.majorFieldOfStudy || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Institution Name:</span>
              <span class="value">${data.institutionName || "Not provided"}</span>
            </div>
            <div class="info-row">
              <span class="label">Year of Graduation:</span>
              <span class="value">${data.yearOfGraduation || "Not provided"}</span>
            </div>
            ${data.vceSubjectsAndScores ? `
            <div class="info-row">
              <span class="label">VCE Subjects & Scores:</span>
              <div class="text-area">${data.vceSubjectsAndScores}</div>
            </div>
            ` : ""}
            ${data.educationSummary ? `
            <div class="info-row">
              <span class="label">Education Summary:</span>
              <div class="text-area">${data.educationSummary}</div>
            </div>
            ` : ""}
          </div>

          <div class="section">
            <h3>💼 Work & Teaching Experience</h3>
            <div class="info-row">
              <span class="label">Teaching Qualification:</span>
              <span class="value">${data.teachingQualification || "Not specified"}</span>
            </div>
            ${data.workExperienceSummary ? `
            <div class="info-row">
              <span class="label">Work Experience Summary:</span>
              <div class="text-area">${data.workExperienceSummary}</div>
            </div>
            ` : `<p class="text-muted">No work experience summary provided</p>`}
          </div>

          <div class="section">
            <h3>🌟 Additional Information</h3>
            <div class="info-row">
              <span class="label">Right to Work in Australia:</span>
              <span class="value">${data.rightToWork || "Not specified"}</span>
            </div>
            ${data.additionalInfo ? `
            <div class="info-row">
              <span class="label">Additional Information:</span>
              <div class="text-area">${data.additionalInfo}</div>
            </div>
            ` : ""}
          </div>

          <div class="section">
            <h3>📞 Action Required</h3>
            <p>Please review this application and contact the candidate at:</p>
            <ul>
              <li><strong>Email:</strong> ${data.emailAddress || "Not provided"}</li>
              <li><strong>Phone:</strong> ${data.phoneNumber || "Not provided"}</li>
            </ul>
            ${data.resume && data.resume.name ? `
            <p style="color: #27ae60; font-weight: bold;">
              📎 Resume file "${data.resume.name}" is attached to this email.
            </p>
            ` : `
            <p style="color: #e74c3c; font-weight: bold;">
              ⚠️ No resume file was uploaded with this application.
            </p>
            `}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}