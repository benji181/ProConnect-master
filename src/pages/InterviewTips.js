import React from 'react';
import Footer from '../components/Footer';
import interviewTypeImg from '../assets/InterviewTypeImg.jpg';
import equipmentTestImg from '../assets/equipment-test.jpg';
import professionalSetupImg from '../assets/professional-setup.webp';
import documentsImg from '../assets/document.jpeg';
import practiceQuestionsImg from '../assets/practice-questions.webp';
import backupDevicesImg from '../assets/backup-devices.webp';
import mockInterviewImg from '../assets/mockinterviews.jpg';


const virtualInterviewSteps = [
  {
    title: 'Determine The Type of Virtual Interview',
    description: `Find out if it’s a one-way video call, a regular video call, or a voice call. 
Confirm the time zone and prepare accordingly.`,
    imgAlt: 'Person checking interview type on laptop',
    imgSrc: interviewTypeImg
  },
  {
    title: 'Test Your Equipment & Software',
    description: `Check your device’s internet, camera, microphone, and the interview platform (Zoom, Google Meet, etc.). 
Familiarize yourself with the interface and features.`,
    imgAlt: 'Testing webcam and microphone',
    imgSrc: equipmentTestImg
  },
  {
    title: 'Create a Professional Environment',
    description: `Choose a quiet, well-lit space with a neutral background. Dress professionally as you would for an in-person interview.`,
    imgAlt: 'Professional interview setup with good lighting',
    imgSrc: professionalSetupImg
  },
  {
    title: 'Gather Your Credentials',
    description: `Have your CV, work samples, and any other documents ready to share during the interview.`,
    imgAlt: 'Organized documents and resume',
    imgSrc:documentsImg
  },
  {
    title: 'Practice Interview Questions',
    description: `Prepare your elevator pitch and answers to common questions. Research the company and understand your role.`,
    imgAlt: 'Person practicing interview questions',
    imgSrc: practiceQuestionsImg
  },
  {
    title: 'Get Options for Fallibles',
    description: `Have backup devices, power sources, and internet options ready to avoid technical issues.`,
    imgAlt: 'Backup power bank and internet devices',
    imgSrc:backupDevicesImg
  },
  {
    title: 'Test, Test, Test',
    description: `Do mock interviews, check your body language, and ensure your tech setup works flawlessly.`,
    imgAlt: 'Mock interview session',
    imgSrc:mockInterviewImg
  },
];

const InterviewTips = () => (
  <div style={{ marginTop: 40, fontSize: '20px' }}>
    <h3 style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: 15 }}>Quick Interview Tips</h3>
    <ul style={{ fontSize: '18px', lineHeight: 1.8 }}>
      <li>Research the company before your interview.</li>
      <li>Practice common interview questions.</li>
      <li>Dress professionally and be punctual.</li>
      <li>Prepare thoughtful questions to ask the interviewer.</li>
    </ul>
  </div>
);

const VirtualInterviewPrep = () => {
  return (
    <>
    <div style={{ maxWidth: 900, margin: 'auto', padding: 30, fontFamily: 'Arial, sans-serif', lineHeight: 1.8, fontSize: '20px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '36px', marginBottom: 20 }}>
        How to Prepare For a Virtual Interview: Things Recruiters Wished You Knew
      </h1>
      <p style={{ fontStyle: 'italic', fontSize: '18px', marginBottom: 30 }}>Written by Olabisi boluwatife</p>

      <p style={{ marginBottom: 20 }}>
        The adoption of remote work has created a need for companies to interview candidates virtually. 
        So, how do you prepare for a virtual interview as a jobseeker?
      </p>

      <p style={{ marginBottom: 30 }}>
        Imagine you’re scheduled for an interview with a company you’ve been eager to join, and you do your prep, 
        but everything falls through on the interview day. There are basic rules you may have overlooked and tips you might not know.
      </p>

      <h2 style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: 20 }}>Understanding Virtual Interviews</h2>
      <p style={{ marginBottom: 30 }}>
        Virtual interviews are conducted online, mostly via voice or video calls. They are faster, more convenient, and cost-effective. 
        Types include one-on-one calls, one-way video responses, and panel interviews. This guide focuses on one-on-one video calls.
      </p>

      <h2 style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: 25 }}>7 Steps to Prepare for a Virtual Interview</h2>
     
     
     {virtualInterviewSteps.map((step, index) => (
  <div key={index} style={{ marginBottom: 40 }}>
    <h3 style={{ fontWeight: 'bold', fontSize: '26px', marginBottom: 10 }}>
      {index + 1}. {step.title}
    </h3>
    <p style={{ marginBottom: 15 }}>{step.description}</p>
    {step.imgSrc ? (
      <img
        src={step.imgSrc}
        alt={step.imgAlt}
        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
      />
    ) : (
      <div style={{
        width: '100%',
        height: 200,
        backgroundColor: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '18px',
        fontStyle: 'italic',
        borderRadius: 8
      }}>
        [Image: {step.imgAlt}]
      </div>
    )}
  </div>
))}

      <p style={{ marginBottom: 40 }}>
        By following these guidelines, you’ll be well-equipped to ace your next virtual interview, no matter where you are! 
        Come back and share the good news after you snag that job. Think we missed anything? Let us know.
      </p>

      
    </div>
    <InterviewTips/>
    <Footer />
    </>
  );
};

export default VirtualInterviewPrep;
