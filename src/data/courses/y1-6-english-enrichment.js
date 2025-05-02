import { sub } from "date-fns";

const courseData = {
  slug: "y1-6-english-enrichment",
  title: "Year 1-6 English Enrichment Program",
  heroSection: {
    achievements: {
      title: "Past Academic Achievements",
      currentYear: {
        subtitle:
          "In the 2024 VCE, Austin’s English courses (ENG + EAL) achieved outstanding results",
        year: "2024",
        items: [
          {
            number: 20,
            label: "students achieved",
            subtitle: "a raw score of 45+",
          },
          {
            number: "40%",
            label: "of students achieved",
            subtitle: "a raw score of 40+",
          },
          {
            number: "96%",
            label: "of students achieved",
            subtitle: "a raw score of 30+",
          },
        ],
      },
      historical: {
        range: "From 2017 to 2024",
        items: [
          {
            number: 5,
            label: "top scorers in ENG + EAL",
            subtitle:
              "8 students with raw score 49 nearly 20 students with raw score 48.",
          },
          {
            number: "270+",
            title: "Over",
            label: "students with raw score 40+",
            subtitle:
              "140+ students with raw score 45+ in the ENG + EAL program",
          },

          {
            number: "76%",
            title: "In the EFL Program",
            label: "achieved raw 40+",
            subtitle: "ENGLan program",
          },
          {
            number: "40%",
            title: "In the ENGLan program",
            label: "students with raw 45+",
            subtitle: "ENG + EAL program",
          },
          {
            number: "80%",
            title: "Across All English Programs",
            label: "students have earned A+",
            subtitle: "ENG + EAL program",
          },
        ],
      },
    },
    schoolLogos: [
      "Scotch College",
      "Presbyterian Ladies’ College",
      "Melbourne Grammar",
      "Trinity Grammar",
      "Caulfield Grammar",
      "Yarra Valley Grammar",
      "Wesley College",
      "Korowa Anglican Girls’ School",
    ],
  },
  coreFeatures: {
    sections: [
      {
        title:
          "Curriculum Aligned with VCE Exams for Steady High-Score Development",
        list: [
          "Weekly homework and essay reviews",
          "Weekly mock exams and feedback",
          "Regular parent-teacher meetings",
          "Recorded lessons for review",
        ],
        paragraph:
          "The curriculum is designed to align with VCE exams, ensuring that students are well-prepared for the challenges ahead. With a focus on steady high-score development, students will receive weekly homework and essay reviews, as well as regular mock exams and feedback. Parent-teacher meetings and recorded lessons are also part of the program, providing a comprehensive support system for students and their families.",
      },
      {
        title:
          "Curriculum Aligned with VCE Exams for Steady High-Score Development",
        list: [
          "Weekly homework and essay reviews",
          "Weekly mock exams and feedback",
          "Regular parent-teacher meetings",
          "Recorded lessons for review",
        ],
      },
      {
        title:
          "Curriculum Aligned with VCE Exams for Steady High-Score Development",
        list: [
          "Weekly homework and essay reviews",
          "Weekly mock exams and feedback",
          "Regular parent-teacher meetings",
          "Recorded lessons for review",
        ],
      },
      {
        title:
          "Curriculum Aligned with VCE Exams for Steady High-Score Development",
        list: [
          "Weekly homework and essay reviews",
          "Weekly mock exams and feedback",
          "Regular parent-teacher meetings",
          "Recorded lessons for review",
        ],
      },
      {
        title:
          "Curriculum Aligned with VCE Exams for Steady High-Score Development",
        list: [
          "Weekly homework and essay reviews",
          "Weekly mock exams and feedback",
          "Regular parent-teacher meetings",
          "Recorded lessons for review",
        ],
      },
    ],
  },
  customCourseFeature: {
    title: "High-Standard Essay Refinement Process",
    description: [
      "One of the key factors for achieving high scores in the VCE English exam is receiving precise, personalised refinement and guidance for each essay. At Austin, our English team refines nearly a thousand student essays each year, ensuring that every essay is meticulously pol- ished word by word. Our teachers not only focus on improving language expression and optimising structure but also guide students to think critically, expand their viewpoints, and en- hance their writing logic.",
      "Austin teachers accurately predicted the essay topic, led students through practice, and meticu- lously refined this particular piece.",
      "At most day schools, essay corrections often only provide simple feedback. However, at Austin, we insist on in-depth revisions and one-on-one communication, helping students truly understand and improve their writing skills. We do not encourage rote memorisation, but instead, through a systematic revision process, we cultivate students’ independent thinking and high-quality writing abilities.",
      "Our high-standard essay refinement process includes five core steps, ensuring that every student can achieve their best performance in SACs and exams.",
    ],
    images: [
      "https://placehold.co/400x600?text=Image+1",
      "https://placehold.co/400x1000?text=Image+2",
    ],
    steps: [
      {
        step: 1,
        title: "Holistic Evaluation",
        content: "Assess argument strength, clarity, and topic relevance",
      },
      {
        step: 2,
        title: "Sentence Polishing",
        content: "Grammar correction and language enhancement",
      },
      {
        step: 3,
        title: "Argument Deepening",
        content: "Critical analysis and evidence strengthening",
      },
      {
        step: 4,
        title: "Structural Optimization",
        content: "Paragraph reorganization for logical flow",
      },
      {
        step: 5,
        title: "Exemplar Comparison",
        content: "Sample paragraphs for quality benchmarking",
      },
    ],
  },
  resources: {
    packages: [
      { icon: "📘", title: "Exclusive Textbooks", desc: "4 volumes" },
      { icon: "📝", title: "Weekly Homework", desc: "6-8 hours" },
      { icon: "✍️", title: "Reviewed Essays", desc: "34/term" },
      { icon: "📊", title: "Mock Exams", desc: "Full-length x12" },
      { icon: "📚", title: "Recorded Lessons", desc: "Full access" },
      { icon: "🗣️", title: "1-on-1 Consultations", desc: "Full access" },
      { icon: "📅", title: "Parent-Teacher Meetings", desc: "Full access" },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      { icon: "📖", title: "Recorded Lessons Library", desc: "Full access" },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      { icon: "📖", title: "Recorded Lessons Library", desc: "Full access" },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      { icon: "📖", title: "Recorded Lessons Library", desc: "Full access" },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      { icon: "📖", title: "Recorded Lessons Library", desc: "Full access" },
    ],
  },
  courseStructure: {
    title: "Course Structure",
    sections: [
      {
        title: "Introduction to Genres",
        subtitle: "Module 1",
        lessons: [
          "lintroducing the Graphic Novel (Nimon ",
          "Reading a Graphic Novel (Nimona ",
          "Introduction to Genre (Nimona) ",
          "Reading Fables (Nimona) ",
          "A odern Fable (The Hobbit) ",
          "The Moral of Animal Farm (The Hobbit ",
          "Reading Fantasy (The Hobbit ",
          "The Hobbit (The Hobbit) ",
          "Topic Test and Miarking & Feedback",
        ],
      },
      {
        title: "Introduction to Genres",
        subtitle: "Module 2",
        lessons: [
          "lintroducing the Graphic Novel (Nimon ",
          "Reading a Graphic Novel (Nimona ",
          "Introduction to Genre (Nimona) ",
          "Reading Fables (Nimona) ",
          "A odern Fable (The Hobbit) ",
          "The Moral of Animal Farm (The Hobbit ",
          "Reading Fantasy (The Hobbit ",
          "The Hobbit (The Hobbit) ",
          "Topic Test and Miarking & Feedback",
        ],
      },
      {
        title: "Introduction to Genres",
        subtitle: "Module 3",
        lessons: [
          "lintroducing the Graphic Novel (Nimon ",
          "Reading a Graphic Novel (Nimona ",
          "Introduction to Genre (Nimona) ",
          "Reading Fables (Nimona) ",
          "A odern Fable (The Hobbit) ",
          "The Moral of Animal Farm (The Hobbit ",
          "Reading Fantasy (The Hobbit ",
          "The Hobbit (The Hobbit) ",
          "Topic Test and Miarking & Feedback",
        ],
      },
      {
        title: "Introduction to Genres",
        subtitle: "Module 4",
        lessons: [
          "lintroducing the Graphic Novel (Nimon ",
          "Reading a Graphic Novel (Nimona ",
          "Introduction to Genre (Nimona) ",
          "Reading Fables (Nimona) ",
          "A odern Fable (The Hobbit) ",
          "The Moral of Animal Farm (The Hobbit ",
          "Reading Fantasy (The Hobbit ",
          "The Hobbit (The Hobbit) ",
          "Topic Test and Miarking & Feedback",
        ],
      },
    ],
  },
  relatedCourses: [
    {
      title: "VCE",
      subtitle: "English Unit 1-4",
      slug: "y1-6-english-enrichment",
    },
    {
      title: "VCE",
      subtitle: "SM Unit 1-4",
      slug: "y1-6-english-enrichment",
    },
    {
      title: "VCE",
      subtitle: "Science Unit 1-4",
      slug: "y1-6-english-enrichment",
    },
  ],
};

export default courseData;
