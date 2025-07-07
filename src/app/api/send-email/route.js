// app/api/send-email/route.js
import {
  MailerSend,
  EmailParams,
  Sender,
  Recipient,
  Attachment,
} from "mailersend";
import { NextResponse } from "next/server";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const contentType = request.headers.get("content-type");

    let data;
    let type;
    let attachments = [];

    // 处理 FormData (文件上传) 或 JSON 数据
    if (contentType && contentType.includes("multipart/form-data")) {
      // 处理 FormData (包含文件上传)
      const formData = await request.formData();

      // 提取 type
      type = formData.get("type");

      // 构建数据对象
      data = {};
      for (const [key, value] of formData.entries()) {
        if (key !== "type") {
          // 跳过 type 字段
          if (value instanceof File && value.size > 0) {
            // 处理文件 - 准备作为附件（MailerSend格式）
            const fileBuffer = await value.arrayBuffer();
            attachments.push(
              new Attachment(
                Buffer.from(fileBuffer).toString("base64"),
                value.name,
                "attachment"
              )
            );
            // 同时保存文件信息到data中用于邮件内容
            data[key] = {
              name: value.name,
              size: value.size,
              type: value.type,
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
    let userConfirmationEmail = "";
    let userEmail = "";

    // 根据不同类型生成邮件内容和获取用户邮箱
    if (type === "trial-lesson") {
      subject = "New Trial Lesson Request - Austin Education";
      emailContent = generateTrialLessonEmail(data);
      userEmail = getUserEmail(data);
      userConfirmationEmail = generateTrialLessonConfirmation(data, userEmail);
    } else if (type === "consultation") {
      subject = "New Consultation Meeting Request - Austin Education";
      emailContent = generateConsultationEmail(data);
      userEmail = getUserEmail(data);
      userConfirmationEmail = generateConsultationConfirmation(data, userEmail);
    } else if (type === "webinar") {
      subject = "New Webinar Registration - Austin Education";
      emailContent = generateWebinarEmail(data);
      userEmail = getUserEmail(data);
      userConfirmationEmail = generateWebinarConfirmation(data, userEmail);
    } else if (type === "faq-question") {
      subject = "New FAQ Question - Austin Education";
      emailContent = generateFAQQuestionEmail(data);
      userEmail = data.email;
      userConfirmationEmail = generateFAQConfirmation(data);
    } else if (type === "job-application") {
      subject = "New Job Application - Austin Education";
      emailContent = generateJobApplicationEmail(data);
      toEmail = ["hr@austinedu.com.au"]; // 求职申请发送到HR邮箱
      userEmail = data.emailAddress;
      userConfirmationEmail = generateJobApplicationConfirmation(data);
    } else {
      return NextResponse.json(
        { error: "Invalid email type" },
        { status: 400 }
      );
    }

    // 发送给内部人员的邮件（MailerSend格式）
    const sentFrom = new Sender(
      "marketing@austinedu.com.au",
      "Austin Education"
    );
    const recipients = toEmail.map((email) => new Recipient(email));

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subject)
      .setHtml(emailContent);

    // 如果有附件，添加到邮件参数中
    if (attachments.length > 0) {
      emailParams.setAttachments(attachments);
    }

    const response = await mailerSend.email.send(emailParams);

    if (!response) {
      console.error("MailerSend error: No response received");
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // 发送用户确认邮件
    if (userEmail && userConfirmationEmail) {
      const userRecipients = [new Recipient(userEmail)];
      const userEmailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(userRecipients)
        .setSubject(getConfirmationSubject(type))
        .setHtml(userConfirmationEmail);

      try {
        await mailerSend.email.send(userEmailParams);
      } catch (userEmailError) {
        console.error("User confirmation email error:", userEmailError);
        // 不要因为确认邮件失败而让整个请求失败
      }
    }

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("MailerSend API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// 获取用户邮箱的辅助函数
function getUserEmail(data) {
  // 优先使用家长邮箱，其次学生邮箱
  return (
    data.parentEmail || data.studentEmail || data.email || data.emailAddress
  );
}

// 获取确认邮件主题的辅助函数
function getConfirmationSubject(type) {
  const subjects = {
    "trial-lesson": "Trial Lesson Request Confirmation - Austin Education",
    consultation:
      "Consultation Meeting Request Confirmation - Austin Education",
    webinar: "Webinar Registration Confirmation - Austin Education",
    "faq-question": "Question Received - Austin Education",
    "job-application": "Job Application Received - Austin Education",
  };

  return subjects[type] || "Confirmation - Austin Education";
}

// 用户确认邮件模板
function generateTrialLessonConfirmation(data, userEmail) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Trial Lesson Request Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .highlight { background-color: #e6f3ff; padding: 15px; border-radius: 5px; border-left: 4px solid #285ea9; }
        .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Trial Lesson Request Received!</h1>
          <p>Thank you for your interest in Austin Education</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>Dear ${data.parentName || data.studentName || "Student/Parent"},</h3>
            <p>Thank you for submitting your trial lesson request. We have successfully received your application and our team will review it shortly.</p>
          </div>

          <div class="highlight">
            <h3>📋 Your Request Summary:</h3>
            <p><strong>Campus:</strong> ${data.campus}</p>
            <p><strong>School Year:</strong> ${data.schoolYear}</p>
            <p><strong>Subjects:</strong> ${data.subjects}</p>
            <p><strong>Contact Method:</strong> ${data.contactMethod}</p>
          </div>

          <div class="section">
            <h3>🚀 What's Next?</h3>
            <ul>
              <li>Our academic team will review your request and reach out to you shortly</li>
              <li>We’ll contact you via your preferred method to arrange your trial lesson</li>
              <li>Before the trial, we’ll offer a free consultation to help find the most suitable class for you</li>
              <li>Make sure your contact details are correct so we can reach you easily</li>
              <li>If you have any specific questions, feel free to prepare them in advance</li>
              <li>Follow us on social media for the latest updates and announcements</li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p>If you have any questions, please don't hesitate to contact us:</p>
            <p>📧 Email: info@austinedu.com.au</p>
            <p>📱 Phone: +61 426 800 815</p>
            <p>🌐 Website: www.austineducation.com.au</p>
          </div>

          <div class="section">
            <p>We look forward to welcoming you to the Austin Education family!</p>
            <p>Best regards,<br>The Austin Education Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateConsultationConfirmation(data, userEmail) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Consultation Request Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .highlight { background-color: #e6f3ff; padding: 15px; border-radius: 5px; border-left: 4px solid #285ea9; }
        .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Consultation Request Received!</h1>
          <p>Thank you for choosing Austin Education</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>Dear ${data.parentName || data.studentName || "Student/Parent"},</h3>
            <p>Thank you for your consultation request. We have successfully received your inquiry and our experienced academic advisors will be in touch with you soon.</p>
          </div>

          <div class="highlight">
            <h3>📋 Your Consultation Summary:</h3>
            <p><strong>School Year:</strong> ${data.schoolYear}</p>
            <p><strong>Topics:</strong> ${data.topics}</p>
            <p><strong>Preferred Contact:</strong> ${data.contactMethod}</p>
          </div>

          <div class="section">
            <h3>🚀 What's Next?</h3>
            <ul>
              <li>Our academic advisor will contact you shortly</li>
              <li>We'll schedule a convenient time for your free consultation</li>
              <li>During the consultation, we'll provide personalized academic planning advice</li>
              <li>You can also book directly at: <a href="https://calendly.com/rachelle-austinedu/30min">calendly.com/rachelle-austinedu/30min</a></li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p>If you have any urgent questions, please contact us:</p>
            <p>📧 Email: info@austinedu.com.au</p>
            <p>📱 Phone: +61 426 800 815</p>
            <p>🌐 Website: www.austineducation.com.au </p>
          </div>

          <div class="section">
            <p>We're excited to help you achieve your academic goals!</p>
            <p>Best regards,<br>The Austin Education Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateWebinarConfirmation(data, userEmail) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Webinar Registration Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .highlight { background-color: #e6f3ff; padding: 15px; border-radius: 5px; border-left: 4px solid #285ea9; }
        .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 Webinar Registration Confirmed!</h1>
          <p>Welcome to Austin Education Webinars</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>Dear ${data.parentName || data.studentName || "Participant"},</h3>
            <p>Thank you for registering for our webinar! We're excited to share valuable insights about academic planning and educational opportunities with you.</p>
          </div>

          <div class="highlight">
            <h3>📋 Your Registration Details:</h3>
            <p><strong>School Year Interest:</strong> ${data.schoolYear}</p>
            <p><strong>Selected Webinar:</strong> ${data.webinars}</p>
            <p><strong>Preferred Language:</strong> ${data.language}</p>
          </div>

          <div class="section">
            <h3>🚀 What's Next?</h3>
            <ul>
              <li>We'll send you webinar details and the joining link 24-48 hours before the event</li>
              <li>Make sure to check your email (including spam folder) for updates</li>
              <li>Prepare any questions you'd like to ask during the Q&A session</li>
              <li>Follow us on social media for the latest updates</li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p>If you have any questions about the webinar:</p>
            <p>📧 Email: info@austinedu.com.au</p>
            <p>📱 Phone: +61 426 800 815</p>
            <p>🌐 Website: www.austineducation.com.au</p>
          </div>

          <div class="section">
            <p>We look forward to seeing you at the webinar!</p>
            <p>Best regards,<br>The Austin Education Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateFAQConfirmation(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Question Received Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .highlight { background-color: #e6f3ff; padding: 15px; border-radius: 5px; border-left: 4px solid #285ea9; }
        .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Question Received!</h1>
          <p>Thank you for contacting Austin Education</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>Dear ${data.name},</h3>
            <p>Thank you for your question! We have successfully received your inquiry and our team will get back to you as soon as possible.</p>
          </div>

          <div class="highlight">
            <h3>📋 Your Question:</h3>
            <p style="font-style: italic; background-color: #f8f9fa; padding: 10px; border-radius: 3px;">"${data.question}"</p>
          </div>

          <div class="section">
            <h3>🚀 What's Next?</h3>
            <ul>
              <li>Our team will review your question within 24 hours</li>
              <li>We'll send a detailed response to your email address</li>
              <li>For urgent inquiries, please call us directly</li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p>For immediate assistance:</p>
            <p>📧 Email: info@austinedu.com.au</p>
            <p>📱 Phone: +61 426 800 815</p>
            <p>🌐 Website: www.austineducation.com.au </p>
          </div>

          <div class="section">
            <p>We appreciate your interest in Austin Education!</p>
            <p>Best regards,<br>The Austin Education Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateJobApplicationConfirmation(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Job Application Received</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #285ea9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; }
        .highlight { background-color: #e6f3ff; padding: 15px; border-radius: 5px; border-left: 4px solid #285ea9; }
        .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💼 Application Received!</h1>
          <p>Thank you for applying to Austin Education</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>Dear ${data.fullName},</h3>
            <p>Thank you for your interest in joining the Austin Education team! We have successfully received your job application and appreciate the time you took to apply.</p>
          </div>

          <div class="highlight">
            <h3>📋 Application Summary:</h3>
            <p><strong>Position Applied:</strong> ${data.selectPosition}</p>
            <p><strong>Preferred Campus:</strong> ${data.preferredCampusLocation}</p>
            <p><strong>Application Date:</strong> ${new Date(data.timestamp).toLocaleDateString()}</p>
          </div>

          <div class="section">
            <h3>🚀 What's Next?</h3>
            <ul>
              <li>Our HR team will review your application within 5-7 business days</li>
              <li>If your qualifications match our requirements, we'll contact you for an interview</li>
              <li>We'll keep your application on file for future opportunities</li>
              <li>You can check our website for other open positions</li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p>If you have any questions about your application:</p>
            <p>📧 Email: hr@austinedu.com.au</p>
            <p>🌐 Website: www.austineducation.com.au</p>
          </div>

          <div class="section">
            <p>We appreciate your interest in Austin Education and look forward to potentially working with you!</p>
            <p>Best regards,<br>Austin Education HR Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// 原有的内部邮件生成函数保持不变
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
            <span class="value">${data.resume.size ? Math.round(data.resume.size / 1024) + " KB" : "Unknown"}</span>
          </div>
          <div class="info-row">
            <span class="label">File Type:</span>
            <span class="value">${data.resume.type || "Unknown"}</span>
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
            ${
              data.vceSubjectsAndScores
                ? `
            <div class="info-row">
              <span class="label">VCE Subjects & Scores:</span>
              <div class="text-area">${data.vceSubjectsAndScores}</div>
            </div>
            `
                : ""
            }
            ${
              data.educationSummary
                ? `
            <div class="info-row">
              <span class="label">Education Summary:</span>
              <div class="text-area">${data.educationSummary}</div>
            </div>
            `
                : ""
            }
          </div>

          <div class="section">
            <h3>💼 Work & Teaching Experience</h3>
            <div class="info-row">
              <span class="label">Teaching Qualification:</span>
              <span class="value">${data.teachingQualification || "Not specified"}</span>
            </div>
            ${
              data.workExperienceSummary
                ? `
            <div class="info-row">
              <span class="label">Work Experience Summary:</span>
              <div class="text-area">${data.workExperienceSummary}</div>
            </div>
            `
                : `<p class="text-muted">No work experience summary provided</p>`
            }
          </div>

          <div class="section">
            <h3>🌟 Additional Information</h3>
            <div class="info-row">
              <span class="label">Right to Work in Australia:</span>
              <span class="value">${data.rightToWork || "Not specified"}</span>
            </div>
            ${
              data.additionalInfo
                ? `
            <div class="info-row">
              <span class="label">Additional Information:</span>
              <div class="text-area">${data.additionalInfo}</div>
            </div>
            `
                : ""
            }
          </div>

          <div class="section">
            <h3>📞 Action Required</h3>
            <p>Please review this application and contact the candidate at:</p>
            <ul>
              <li><strong>Email:</strong> ${data.emailAddress || "Not provided"}</li>
              <li><strong>Phone:</strong> ${data.phoneNumber || "Not provided"}</li>
            </ul>
            ${
              data.resume && data.resume.name
                ? `
            <p style="color: #27ae60; font-weight: bold;">
              📎 Resume file "${data.resume.name}" is attached to this email.
            </p>
            `
                : `
            <p style="color: #e74c3c; font-weight: bold;">
              ⚠️ No resume file was uploaded with this application.
            </p>
            `
            }
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
