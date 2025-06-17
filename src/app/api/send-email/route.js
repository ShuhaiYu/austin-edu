// app/api/send-email/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    let emailContent = '';
    let subject = '';

    if (type === 'trial-lesson') {
      subject = 'New Trial Lesson Request - Austin Education';
      emailContent = generateTrialLessonEmail(data);
    } else if (type === 'consultation') {
      subject = 'New Consultation Meeting Request - Austin Education';
      emailContent = generateConsultationEmail(data);
    } else if (type === 'webinar') {
      subject = 'New Webinar Registration - Austin Education';
      emailContent = generateWebinarEmail(data);
    } else {
      return NextResponse.json({ error: 'Invalid email type' }, { status: 400 });
    }

    const { data: emailData, error } = await resend.emails.send({
      from: 'Austin Education <noreply@austinedu.com.au>',
      to: ['rachelle@austinedu.com.au'],
      subject: subject,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function generateConsultationEmail(data) {
  // 处理附加学生信息
  let additionalStudentsHtml = '';
  if (data.additionalStudents && data.additionalStudents.length > 0) {
    additionalStudentsHtml = `
      <div class="section">
        <h3>👥 Additional Students Information</h3>
        ${data.additionalStudents.map((student, index) => `
          <div class="student-info" style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 5px;">
            <h4 style="margin: 0 0 10px 0; color: #285ea9;">Student ${index + 2}</h4>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${student.name || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${student.email || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${student.phone || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${Array.isArray(student.schoolYear) ? student.schoolYear.join(', ') : (student.schoolYear || 'Not specified')}</span>
            </div>
            <div class="info-row">
              <span class="label">Topics:</span>
              <span class="value">${Array.isArray(student.topics) ? student.topics.join(', ') : (student.topics || 'Not specified')}</span>
            </div>
          </div>
        `).join('')}
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
              <span class="value">${data.parentName || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.parentEmail || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.parentPhone || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h3>👨‍🎓 Student Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.studentName || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.studentEmail || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.studentPhone || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Academic Information</h3>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${data.schoolYear || 'Not specified'}</span>
            </div>
          </div>

          <div class="section">
            <h3>🎯 Consultation Topics</h3>
            <div class="highlight">
              <div class="info-row">
                <span class="label">Selected Topics:</span>
                <span class="value">${data.topics || 'Not specified'}</span>
              </div>
            </div>
          </div>

          ${additionalStudentsHtml}

          ${data.questions ? `
          <div class="section">
            <h3>❓ Questions & Concerns</h3>
            <p style="background-color: #f5f5f5; padding: 10px; border-radius: 3px;">${data.questions}</p>
          </div>
          ` : ''}

          <div class="section">
            <h3>📞 Preferred Contact Method</h3>
            <div class="info-row">
              <span class="label">Contact Method:</span>
              <span class="value">${data.contactMethod || 'Not specified'}</span>
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
              <span class="value">${data.campus || 'Not specified'}</span>
            </div>
          </div>

          <div class="section">
            <h3>👤 Parent/Guardian Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.parentName || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.parentEmail || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.parentPhone || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h3>👨‍🎓 Student Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.studentName || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.studentEmail || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.studentPhone || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Trial Lesson Details</h3>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${data.schoolYear || 'Not specified'}</span>
            </div>
            <div class="info-row">
              <span class="label">Subjects:</span>
              <span class="value">${data.subjects || 'Not specified'}</span>
            </div>
          </div>

          ${data.questions ? `
          <div class="section">
            <h3>❓ Questions & Concerns</h3>
            <p style="background-color: #f5f5f5; padding: 10px; border-radius: 3px;">${data.questions}</p>
          </div>
          ` : ''}

          <div class="section">
            <h3>📞 Preferred Contact Method</h3>
            <div class="info-row">
              <span class="label">Contact Method:</span>
              <span class="value">${data.contactMethod || 'Not specified'}</span>
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
              <span class="value">${data.parentName || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.parentEmail || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.parentPhone || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h3>👨‍🎓 Student Information</h3>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${data.studentName || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.studentEmail || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.studentPhone || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Academic Information</h3>
            <div class="info-row">
              <span class="label">School Year:</span>
              <span class="value">${data.schoolYear || 'Not specified'}</span>
            </div>
          </div>

          <div class="section">
            <h3>🎯 Webinar Interest</h3>
            <div class="highlight">
              <div class="info-row">
                <span class="label">Selected Webinar:</span>
                <span class="value">${data.webinars || 'Not specified'}</span>
              </div>
            </div>
          </div>

          <div class="section">
            <h3>🌐 Language Preference</h3>
            <div class="info-row">
              <span class="label">Preferred Language:</span>
              <span class="value">${data.language || 'Not specified'}</span>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}