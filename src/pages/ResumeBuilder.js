import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  LinearProgress,
  TextField,
  Autocomplete,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import Footer from '../components/Footer';

import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const VvipContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#737373',
  color: '#f5f5f7',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
}));

const VvipButton = styled(Button)({
  backgroundColor: '#bfa14a',
  color: '#121212',
  fontWeight: '700',
  fontSize: '1.1rem',
  padding: '12px 30px',
  borderRadius: '30px',
  boxShadow: '0 4px 15px rgba(191, 161, 74, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#d4bb5e',
    boxShadow: '0 6px 20px rgba(212, 187, 94, 0.7)',
  },
});

const VvipListItem = styled(ListItem)({
  borderBottom: '1px solid #333',
  padding: '12px 0',
});

const roles = [
  {
    label: 'Software Engineer',
    keywords: [
      'JavaScript', 'React', 'Node.js', 'AWS', 'Git', 'TypeScript', 'Docker',
      'Kubernetes', 'REST API', 'GraphQL', 'Agile', 'TDD', 'Microservices',
      'CI/CD', 'SQL',
    ],
  },
  {
    label: 'Marketing Manager',
    keywords: [
      'SEO', 'Content Marketing', 'Google Analytics', 'PPC', 'Social Media',
      'Email Marketing', 'Lead Generation', 'Brand Management', 'CRM',
      'Market Research', 'Campaign Management', 'Google Ads', 'Copywriting',
      'Conversion Rate', 'Analytics',
    ],
  },
  {
    label: 'Sales Executive',
    keywords: [
      'CRM', 'Lead Generation', 'Negotiation', 'Customer Retention',
      'Sales Forecasting', 'B2B Sales', 'Cold Calling', 'Account Management',
      'Pipeline Management', 'Quota Achievement', 'Sales Strategy',
      'Product Knowledge', 'Closing Deals', 'Networking', 'Sales Presentations',
    ],
  },
  {
    label: 'Data Scientist',
    keywords: [
      'Python', 'R', 'Machine Learning', 'Data Analysis', 'TensorFlow',
      'PyTorch', 'SQL', 'Data Visualization', 'Statistics', 'Big Data',
      'Hadoop', 'Spark', 'Predictive Modeling', 'Deep Learning', 'ETL',
    ],
  },
  {
    label: 'Project Manager',
    keywords: [
      'Project Planning', 'Risk Management', 'Agile', 'Scrum', 'Stakeholder Management',
      'Budgeting', 'Scheduling', 'Resource Allocation', 'Communication',
      'Leadership', 'MS Project', 'JIRA', 'Kanban', 'Change Management', 'Team Building',
    ],
  },
  {
    label: 'UX Designer',
    keywords: [
      'User Research', 'Wireframing', 'Prototyping', 'Adobe XD', 'Figma',
      'Usability Testing', 'Interaction Design', 'Information Architecture',
      'Responsive Design', 'User Flows', 'Sketch', 'Persona Development',
      'Accessibility', 'Visual Design', 'Design Systems',
    ],
  },
  {
    label: 'DevOps Engineer',
    keywords: [
      'CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'Jenkins',
      'Monitoring', 'Ansible', 'Linux', 'Scripting', 'Cloud Infrastructure',
      'Automation', 'Networking', 'Security',
    ],
  },
  {
    label: 'Business Analyst',
    keywords: [
      'Requirements Gathering', 'Stakeholder Management', 'Process Mapping',
      'UML', 'Data Analysis', 'Agile', 'JIRA', 'Communication', 'Documentation',
      'Wireframes', 'Use Cases', 'Problem Solving', 'SQL', 'Business Process',
      'Risk Analysis',
    ],
  },
  {
    label: 'Quality Assurance Engineer',
    keywords: [
      'Test Automation', 'Selenium', 'JUnit', 'Load Testing', 'Bug Tracking',
      'Manual Testing', 'Test Plans', 'Regression Testing', 'API Testing',
      'Performance Testing', 'Agile', 'CI/CD', 'Test Cases', 'Postman', 'JIRA',
    ],
  },
  {
    label: 'Content Writer',
    keywords: [
      'SEO', 'Copywriting', 'Blogging', 'Content Strategy', 'Editing',
      'Social Media', 'Research', 'CMS', 'Proofreading', 'Storytelling',
      'Keyword Research', 'Google Analytics', 'Creative Writing', 'Marketing',
      'Technical Writing',
    ],
  },
  {
    label: 'HR Manager',
    keywords: [
      'Recruitment', 'Employee Relations', 'Performance Management',
      'Onboarding', 'Payroll', 'HRIS', 'Training & Development', 'Compliance',
      'Conflict Resolution', 'Benefits Administration', 'Labor Laws',
      'Talent Acquisition', 'Succession Planning', 'Workforce Planning', 'Employee Engagement',
    ],
  },
  {
    label: 'Financial Analyst',
    keywords: [
      'Financial Modeling', 'Forecasting', 'Budgeting', 'Excel', 'SAP',
      'Variance Analysis', 'Data Analysis', 'Reporting', 'Accounting',
      'Investment Analysis', 'Risk Management', 'Power BI', 'SQL',
      'Financial Statements', 'Cost Analysis',
    ],
  },
  {
    label: 'Graphic Designer',
    keywords: [
      'Adobe Photoshop', 'Illustrator', 'InDesign', 'Branding', 'Typography',
      'Layout Design', 'Creative Suite', 'UX/UI', 'Print Design', 'Color Theory',
      'Sketch', 'Photography', 'Web Design', 'Animation', 'Visual Communication',
    ],
  },
  {
    label: 'Network Engineer',
    keywords: [
      'Cisco', 'Routing', 'Switching', 'Firewalls', 'VPN', 'Network Security',
      'TCP/IP', 'LAN/WAN', 'Wi-Fi', 'Troubleshooting', 'Network Monitoring',
      'Load Balancing', 'Firewall Configuration', 'Cloud Networking', 'SDN',
    ],
  },
  {
    label: 'Product Manager',
    keywords: [
      'Roadmap Planning', 'Market Research', 'User Stories', 'Agile',
      'Scrum', 'Stakeholder Management', 'Product Lifecycle', 'KPIs',
      'Wireframing', 'User Feedback', 'Prioritization', 'JIRA', 'Communication',
      'Go-to-Market', 'Competitive Analysis',
    ],
  },
  {
    label: 'Mobile Developer',
    keywords: [
      'Swift', 'Kotlin', 'React Native', 'Flutter', 'Android SDK', 'iOS SDK',
      'REST API', 'Git', 'UI/UX', 'Testing', 'Agile', 'Firebase', 'Debugging',
      'App Store', 'Play Store',
    ],
  },
  {
    label: 'Cybersecurity Analyst',
    keywords: [
      'Penetration Testing', 'Firewalls', 'SIEM', 'Threat Analysis', 'Incident Response',
      'Vulnerability Assessment', 'Network Security', 'Encryption', 'Risk Management',
      'Compliance', 'Malware Analysis', 'SOC', 'IDS/IPS', 'Forensics', 'Security Policies',
    ],
  },
  {
    label: 'Database Administrator',
    keywords: [
      'SQL', 'Oracle', 'MySQL', 'Performance Tuning', 'Backup & Recovery',
      'Replication', 'Security', 'Data Migration', 'Indexing', 'Stored Procedures',
      'High Availability', 'Disaster Recovery', 'Monitoring', 'Cloud Databases', 'Troubleshooting',
    ],
  },
  {
    label: 'Technical Support Specialist',
    keywords: [
      'Troubleshooting', 'Customer Service', 'Windows', 'Linux', 'Networking',
      'Remote Support', 'Ticketing Systems', 'Hardware', 'Software Installation',
      'Active Directory', 'VPN', 'Help Desk', 'Communication', 'Problem Solving', 'Documentation',
    ],
  },
  {
    label: 'Operations Manager',
    keywords: [
      'Process Improvement', 'Logistics', 'Supply Chain', 'Budgeting', 'Team Management',
      'KPI Tracking', 'Vendor Management', 'Scheduling', 'Quality Control', 'Lean',
      'Six Sigma', 'Inventory Management', 'Reporting', 'Communication', 'Strategic Planning',
    ],
  },
  {
    label: 'Social Media Manager',
    keywords: [
      'Content Creation', 'Analytics', 'SEO', 'Facebook Ads', 'Instagram',
      'Twitter', 'Engagement', 'Brand Awareness', 'Campaigns', 'Copywriting',
      'Scheduling Tools', 'Community Management', 'Google Analytics', 'PPC', 'Strategy',
    ],
  },
  {
    label: 'Electrical Engineer',
    keywords: [
      'Circuit Design', 'AutoCAD', 'MATLAB', 'PCB Layout', 'Power Systems',
      'Troubleshooting', 'Testing', 'Control Systems', 'Simulations', 'Project Management',
      'Embedded Systems', 'Signal Processing', 'Instrumentation', 'Safety Standards', 'Quality Assurance',
    ],
  },
  {
    label: 'Legal Advisor',
    keywords: [
      'Contract Law', 'Compliance', 'Legal Research', 'Negotiation', 'Risk Management',
      'Corporate Law', 'Litigation', 'Regulatory Affairs', 'Intellectual Property',
      'Due Diligence', 'ADR', 'Legal Drafting', 'Policy Development', 'Case Management', 'Client Counseling',
    ],
  },
  {
    label: 'Content Strategist',
    keywords: [
      'Content Planning', 'SEO', 'Editorial Calendar', 'Audience Research', 'Copywriting',
      'Analytics', 'CMS', 'Social Media', 'Brand Voice', 'Storytelling',
      'Content Audits', 'Keyword Research', 'Project Management', 'Collaboration', 'UX Writing',
    ],
  },
  {
    label: 'Cloud Engineer',
    keywords: [
      'AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD',
      'Networking', 'Security', 'Linux', 'Scripting', 'Monitoring', 'Cloud Architecture',
      'Automation', 'Serverless',
    ],
  },
  {
    label: 'Machine Learning Engineer',
    keywords: [
      'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Preprocessing',
      'Model Deployment', 'Deep Learning', 'NLP', 'Computer Vision', 'Statistics',
      'Algorithms', 'Big Data', 'Cloud ML Services', 'Feature Engineering', 'Hyperparameter Tuning',
    ],
  },
  {
    label: 'HR Specialist',
    keywords: [
      'Recruitment', 'Onboarding', 'Employee Relations', 'Payroll', 'Benefits Administration',
      'HRIS', 'Training', 'Compliance', 'Performance Management', 'Conflict Resolution',
      'Labor Laws', 'Talent Acquisition', 'Succession Planning', 'Employee Engagement', 'Reporting',
    ],
  },
  {
    label: 'Video Editor',
    keywords: [
      'Adobe Premiere', 'Final Cut Pro', 'After Effects', 'Color Grading', 'Motion Graphics',
      'Storyboarding', 'Audio Editing', 'Video Compression', 'Editing Software', 'Visual Effects',
      'Transitions', 'Exporting', 'Scriptwriting', 'Collaboration', 'Project Management',
    ],
  },
  {
    label: 'Customer Service Representative',
    keywords: [
      'Communication', 'Problem Solving', 'CRM', 'Call Handling', 'Conflict Resolution',
      'Product Knowledge', 'Time Management', 'Multitasking', 'Customer Satisfaction',
      'Data Entry', 'Complaint Handling', 'Teamwork', 'Active Listening', 'Empathy', 'Reporting',
    ],
  },
  {
    label: 'Research Scientist',
    keywords: [
      'Experimental Design', 'Data Analysis', 'Scientific Writing', 'Grant Writing',
      'Lab Techniques', 'Statistics', 'Project Management', 'Literature Review',
      'Collaboration', 'Presentation Skills', 'Hypothesis Testing', 'Data Collection',
      'Critical Thinking', 'Problem Solving', 'Innovation',
    ],
  },
  {
    label: 'Translator',
    keywords: [
      'Language Proficiency', 'Interpretation', 'Localization', 'CAT Tools', 'Proofreading',
      'Cultural Awareness', 'Terminology Management', 'Editing', 'Transcription',
      'Communication', 'Project Management', 'Research', 'Time Management', 'Confidentiality', 'Accuracy',
    ],
  },
];


const ResumeBuilderATS = () => {
  const [fileText, setFileText] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type === 'application/pdf') {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let text = '';

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => item.str).join(' ');
          text += pageText + '\n';
        }

        setFileText(text);
      } catch (error) {
        alert('Error reading PDF file: ' + error.message);
      }
    } else {
      alert('Please upload a PDF file.');
    }
  };

  const evaluateResume = () => {
    if (!fileText || !selectedRole) {
      alert('Please upload your resume and select a job role.');
      return;
    }

    const resumeLower = fileText.toLowerCase();
    const keywords = selectedRole.keywords.map((k) => k.toLowerCase());

    const matchedKeywords = keywords.filter((k) => resumeLower.includes(k));
    const missingKeywords = keywords.filter((k) => !resumeLower.includes(k));

    const scorePercent = Math.round((matchedKeywords.length / keywords.length) * 100);

    setScore(scorePercent);

    const newSuggestions = [];
    if (missingKeywords.length) {
      newSuggestions.push(`Add these important keywords to your resume: ${missingKeywords.join(', ')}`);
    }
    if (scorePercent < 70) {
      newSuggestions.push('Consider adding a professional summary and skills section.');
    }
    setSuggestions(newSuggestions);
  };

  return (
    <>
      <VvipContainer maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{fontWeight: '900', letterSpacing: 3, mb: 4, fontSize: '3rem'  }}>
          Premium Resume ATS Compatibility Checker
        </Typography>

        <Box sx={{ my: 3 }}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            style={{
              display: 'block',
              marginBottom: '10px',
              borderRadius: '8px',
              padding: '8px',
              backgroundColor: '#2c2c2c',
              color: '#f5f5f7',
              border: 'none',
              width: '100%',
              cursor: 'pointer',
            }}
          />
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1, }}>
            Upload a PDF resume. The system will analyze it based on your selected job role.
          </Typography>
        </Box>

        <Autocomplete
          options={roles}
          getOptionLabel={(option) => option.label}
          onChange={(event, newValue) => setSelectedRole(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Job Role"
              variant="filled"
              sx={{
                backgroundColor: '#2c2c2c',
                borderRadius: 2,
                input: { color: '#f5f5f7' },
                '& .MuiInputLabel-root': { color: '#bfa14a' },
                '& .MuiFilledInput-root': {
                  backgroundColor: '#2c2c2c',
                  '&:hover': { backgroundColor: '#3a3a3a' },
                  '&.Mui-focused': { backgroundColor: '#3a3a3a' },
                },
              }}
            />
          )}
          sx={{ mb: 4 }}
        />

        <VvipButton variant="contained" onClick={evaluateResume} disabled={!fileText || !selectedRole}>
          Evaluate Resume
        </VvipButton>

        {score !== null && (
          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: '600', mb: 2 }}>
              ATS Compatibility Score: <span style={{ color: '#bfa14a' }}>{score}%</span>
            </Typography>
            <LinearProgress
              variant="determinate"
              value={score}
              sx={{
                height: 14,
                borderRadius: 7,
                backgroundColor: '#333',
                '& .MuiLinearProgress-bar': { backgroundColor: '#bfa14a' },
              }}
            />

           {suggestions.length > 0 && (
           <>
             <Typography
      variant="h6"            // Use a heading variant for bigger text
      sx={{ fontWeight: 'bold', fontSize: '1.3rem', mt: 2, mb: 1, color: '#bfa14a' }} // Customize size, weight & color
    >
      Suggestions to Improve Your Resume:
    </Typography>
    <List>
      {suggestions.map((sugg, idx) => (
        <ListItem key={idx}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', fontSize: '2.2rem',  }}
          >
            {sugg}
          </Typography>
        </ListItem>
      ))}
    </List>
  </>
)}


          </Box>
        )}
      </VvipContainer>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Footer />
      </Container>
    </>
  );
};

export default ResumeBuilderATS;
