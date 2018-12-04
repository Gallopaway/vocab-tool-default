import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {
  terms:any;
  alphabet:any;
  constructor() { 
    this.terms = this.getTerms();
    this.alphabet = this.getAlphabet();
  }

  getAlphabet(){
    return [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
  }

  getTerms(){
    return [
      {
        "title": "Assessment",
        "definition": "A process that measures learning and development by evaluating a learner’s performance against specified outcomes.",
        "teams": "tt, gs"
      },
      {
        "title": "Assessment methodology", 
        "definition": "The strategy used to gather evidence of achievement. Includes decisions on factors such as how and when formative and summative assessment will be applied, the design of the assessment tools to be used and the level of mapping required.",
        "teams": "tt, gs"
      },
      {
        "title": "Assessment methods or tools",
        "definition": "The instruments that support an assessment. For example, written questionnaires, practical observation checklists, portfolios of evidence, professional discussion records, case studies, workplace documentation, assessor guides, mapping documents.",
        "teams": "gs"
      },
      {
        "title": "Assessment tasks",
        "definition": "The label given to the discrete activities placed within the various assessment tools.  For example, a written assessment may have two tasks while a practical assessment may have five.",
        "teams": "tt, gs"
      },
      {
        "title": "Assessor",
        "definition": "A person who conducts assessment. Grid Skills trainers and staff may act as assessors where they meet the Grid Skills assessor criteria (refer to Assessment and moderation policy and procedure). ",
        "teams": "tt, gs"
      },
      {
        "title": "Block course",
        "definition": "Trainer led, face to face training. ",
        "teams": "gs"
      },
      {
        "title": "Competent",
        "definition": "The term used by the employer to endorse that a worker “has demonstrated … the necessary knowledge, skills and experience to carry out work safely and to the standards used by the employer” (source: SME-EI). Grid Skills does not deem a learner competent – an employee in the transmission sector can only be endorsed as competent by their employer. ",
        "teams": "gs, tt"
      },
      {
        "title": "Course",
        "definition": "A set of learning objects that forms a cohesive training delivery on a subject. ",
        "teams": "gs, tt"
      },
      {
        "title": "Course work",
        "definition": "The collective name of the various learning objects of a course that a learner must complete to achieve course outcomes. Examples of course work are work records, eLearning modules, block courses assessments and on-job assessments. Course work is generally set up within the MySkills LMS as a ‘curriculum’. ",
        "teams": "gs, tt"
      },
      {
        "title": "CMR",
        "definition": "Consent and Moderation Requirements outline NZQA and industry sector requirements for consent to deliver and assess programmes registered on the New Zealand Qualifications Framework. All Standard Setting Bodies must publish and maintain a CMR. ",
        "teams": "gs"
      },
      {
        "title": "Curriculum/ Curricula",
        "definition": "<b>Grid Skills Curriculum:</b> refers to the full range of courses taught by Grid Skills and the range of learner interaction with instructional content, materials, resources and evaluation processes. <b>LMS Curricula:</b> A group of learning objects (course work) within a course.  A curriculum label is set up in the MySkills LMS for each course (e.g:  TSM curriculum, FO curriculum) and denotes the course work in that course.   Once assigned, curricula appear within a learner’s transcript and allow learning progress to be tracked.  ",
        "teams": "gs, tt"
      },
      {
        "title": "eLearning module",
        "definition": "A component of learning delivered via electronic media. ",
        "teams": "gs, tt"
      },
      {
        "title": "Electronic evidence (assessment)",
        "definition":"Digital records of learner performance - may include photographs, videos, audio tapes, or any other audio or visual record. ",
        "teams": "gs"
      },
      {
        "title": "Employer attestation",
        "definition":"An assessment method used to gather underpinning evidence of learner performance in the workplace. Is document signed by an employer representative, on behalf of the employer.  Commonly relates to verification of consistent performance over time, to the employer’s satisfaction, and to industry and company standards. Attestations are commonly signed by an employer representative, on behalf of the employer. ",
        "teams": "gs"
      },
      {
        "title": "Event (LMS)",
        "definition":"Title given to block courses. In the LMS system, scheduled instances of an event are referred to as sessions.   ",
        "teams": "gs, tt"
      },
      {
        "title": "Evidence requirement(assessment)",
        "definition":"Specifies the type of evidence required to meet the learning outcomes. ",
        "teams": "gs"
      },
      {
        "title": "External moderation",
        "definition":"NZQA term and function. Moderation carried out by Standard Setting Bodies, on a national basis. External moderation ensures that assessment materials and the assessment judgments made by assessors are at the national standard. (This means the national industry standard, as defined through the qualification and programme of study.) ",
        "teams": "gs"
      },
      {
        "title": "Formative assessment",
        "definition":"Assessments that facilitate learning and allow learners to obtain feedback on progress, levels of skills and /or knowledge acquired during learning. Formative assessment does not contribute to the learner’s course result. ",
        "teams": "gs,tt"
      },
      {
        "title": "Internal moderation",
        "definition":"Moderation carried out to ensure assessment material and assessment judgments are at the national standard ",
        "teams":"gs"
      },
      {
        "title": "ILT (LMS)",
        "definition":"Instructor led training (block courses) held in a classroom.   ",
        "teams": "gs,tt"
      },
      {
        "title":"Learning object",
        "definition":"An activity a learner must complete to achieve course outcomes. Learning objects may include work records, eLearning modules, block courses and on-job assessment.  Learning objects within a course are referred to as course work. ",
        "teams": "gs,tt"
      },
      {
        "title":"Learning objective",
        "definition":"Statement describing what a student is expected to learn from the learning materials, module, lesson, topics. The learning objective provides a detailed description of what the student will be able to do when the instruction ends. Learning objectives collectively make up the learning outcome. ",
        "teams": "gs,tt"
      },
      {
        "title":"Learning outcomes",
        "definition":"Target statements of what the learner will be able to do once training is complete. These are defined at training pathway and course level.",
        "teams": "gs,tt"
      },
      {
        "title":"Model answers",
        "definition":"Model answers are provided for all written assessments and are intended as a guide.  They represent the depth and quality of the response required for the question.  Learner’s answers are not required to be identical to the model answer, but similar concepts and/or keywords must be used.  ",
        "teams": "gs"
      },
      {
        "title":"Moderation",
        "definition":"Quality assurance practices that promote continuous improvement in the development of assessment material and the quality of assessor judgments, to ensure the required standard is met.",
        "teams": "gs"
      },
      {
        "title":"Moderation plan",
        "definition":"A planned and approved cycle of moderation activities.",
        "teams": "gs"
      },
      {
        "title":"On-line learning",
        "definition":"Learning completed via the internet. Also known as eLearning.",
        "teams": "gs"
      },
      {
        "title":"Peer assessment or peer moderation",
        "definition":"A review of individual performance of assessors or moderators undertaken by their peers.",
        "teams": "gs"
      },
      {
        "title":"Performance to standard",
        "definition":"The ability to apply knowledge, skills, attitudes and values to the specified requirements.",
        "teams": "gs,tt"
      },
      {
        "title":"Portfolio of evidence",
        "definition":"A learner’s personal collection of evidence submitted for assessment.",
        "teams": "gs,tt"
      },
      {
        "title":"Post-assessment moderation",
        "definition":"The review of assessor decisions. Post-assessment moderation occurs after the assessment. It is used to verify that assessment decisions made about learner performance are fair and consistent and at the level defined by the assessment requirements, e.g. the level descriptors of the New Zealand Qualifications Framework and/or industry standard.",
        "teams": "gs"
      },
      {
        "title":"Practical Observation",
        "definition":"A method used to gather evidence of practical skill requirements.",
        "teams": "gs, tt"
      },
      {
        "title":"Pre-assessment moderation",
        "definition":"The review of assessment materials. Pre-assessment moderation occurs before the assessment material is used to ensure the material is appropriate, fair and valid. Pre-assessment moderation occurs internally and may occur externally after that by standard setting bodies such as industry training organisations and NZQA.", 
        "teams": "gs"
      },
      {
        "title":"Pre-work",
        "definition":"Pre-work is an activity that must be completed before another progressing to the next learning object. For example, consider a course that has three learning objects: eLearning module, block course and on-job assessment. Where the eLearning must be completed before the learner attends the block course, the eLearning is referred to as pre-work. LMS: The pre-work feature is not used, due to functionality and suitability.",
        "teams": "gs,tt"
      },
      {
        "title":"Pre-requisite",
        "definition":"A specified set of knowledge and skills that must be proven before a learner is permitted to proceed to a course. For example, the Field Operator course is a pre-requisite for the Maintenance Switcher training. A prerequisite may also be a first aid certificate.",
        "teams": "gs,tt"
      },
      {
        "title":"Programme of study(Accredited)",
        "definition":"An NZQA approved arrangement of learning or training that leads to a qualification on the New Zealand Qualifications Framework. A programme of study is based on clear and consistent aims, content, outcomes and assessment practices. ",
        "teams": "gs"
      },
      {
        "title":"Re-assessment",
        "definition":"An opportunity to re-do part, or all of an assessment at a different time but within the timing of the course.",
        "teams": "gs,tt"
      },
      {
        "title":"Recognition of current competence (RCC)", "definition":"Considers evidence from current employment activities as well as past training and work experience. ",
        "teams": "gs,tt"
      },
      {
        "title":"Recognition of prior learning (RPL)",
        "definition":" Assessment that makes use of indirect evidence of achievement; may include past training and work experience.",
        "teams": "gs,tt"
      },
      {
        "title":"Re-mark",
        "definition":"The marking of an assessment by a subject specialist other than the person who initially marked the assessment.",
        "teams": "gs,tt"
      },
      {
        "title":"Session (LMS)",
        "definition":"A specific scheduled instance of a block course delivery. Multiple sessions of the same course may occur at the same time. Sessions can have multiple parts if the session occurs across multiple days, such as for week-long training.",
        "teams": "gs,tt"
      },
      {
        "title":"Subject matter expert",
        "definition":"A person who is knowledgeable in a specialist area.",
        "teams": "gs,tt"
      },
      {
        "title":"Summative assessment",
        "definition":"Assessment activities that contribute to the result of the course.",
        "teams": "gs,tt"
      },
      {
        "title":"Supporting evidence",
        "definition":" Workplace documentation that provides additional evidence of the learner’s skills and knowledge.",
        "teams": "gs,tt"
      },
      {
        "title":"Technical expert",
        "definition":" A role that supports on-job assessment. A technical expert is a person approved to observe and verify aspects of a learner’s practical performance in the workplace.  A technical expert must be competent in the subject they are verifying.",
        "teams": "gs,tt"
      },
      {
        "title":"Training pathway ",
        "definition":" Refers to the programmes and learning experiences a learner completes, which allows them to build knowledge and skills progressively. Grid Skills training pathways align to roles identified within the Transpower Service Specifications.",
        "teams": "gs,tt"
      },
      {
        "title":"Unit standard",
        "definition":"A nationally registered, coherent set of learning outcomes, associated evidence requirements or performance criteria, and technical and management information that supports training delivery and assessment.",
        "teams": "gs"
      },
      {
        "title":"Unit standard ‘Outcome’",
        "definition":"Target statement denoting what the learner must show evidence of achieving before they can be awarded credit for the standard.  In a unit standard, ‘Outcomes’ collectively constitute the title (task) of the standard.",
        "teams": "gs"
      },
      {
        "title":"vILT",
        "definition":"Virtual Instructor led training (block courses) held in a virtual webcast format.",
        "teams": "gs,tt"

      },
      {
        "title":"Work capable",
        "definition":"A term that recognises the level of skill, knowledge and experience held by a person deemed competent by their employer.",
        "teams": "gs"
      },
      {
       "title":"Work ready",
        "definition":"A term used to recognise the level of skill, knowledge and experience held by a person who has just completed a training course. ",
        "teams": "gs"
      },
      {
        "title":"Work Record",
        "definition":"A learning tool used to plan and track a person’s involvement with job related tasks. Will generally specify the tasks required. May be used to prepare a learner for block course activity or as an assessment tool. ",
        "teams": "gs,tt"
      },
      {
        "title":"Written assessment",
        "definition":"Written activities such as questionnaires and case studies used to demonstrate knowledge-based evidence requirements.",
        "teams": "gs, tt"
       }
    ]
  }
}
