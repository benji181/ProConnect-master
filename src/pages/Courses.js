import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import CourseDetails from '../components/CourseDetails';
import Footer from '../components/Footer';

const YouTubeEmbed = ({ videoUrl }) => {
  if (!videoUrl) return null;
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginTop: 20 }}>
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
};

const StepByStepQuiz = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentIndex]: option });
  };

  const handleNext = () => {
    if (answers[currentIndex] == null) return; // Prevent next without answer

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      questions.forEach((q, i) => {
        if (answers[i] === q.answer) correctCount++;
      });
      setScore(correctCount);
      setShowResult(true);
      onComplete(correctCount, questions.length);
    }
  };

  const progressPercent = ((Object.keys(answers).length) / questions.length) * 100;

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let rating = 'Beginner';
    if (percentage >= 80) rating = 'Expert';
    else if (percentage >= 50) rating = 'Intermediate';

    return (
      <div>
        <h3>Your Score: {score} / {questions.length}</h3>
        <p>Knowledge Level: {rating}</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ background: '#eee', height: 10, borderRadius: 5, marginBottom: 20 }}>
        <div style={{ width: `${progressPercent}%`, background: '#007bff', height: '100%', borderRadius: 5 }} />
      </div>

      <h4>{currentQuestion.question}</h4>
      {currentQuestion.options.map((option) => (
        <label key={option} style={{ display: 'block', marginBottom: 8 }}>
          <input
            type="radio"
            name={`question-${currentIndex}`}
            value={option}
            checked={answers[currentIndex] === option}
            onChange={() => handleAnswer(option)}
          />{' '}
          {option}
        </label>
      ))}

      <button
        onClick={handleNext}
        disabled={answers[currentIndex] == null}
        style={{ marginTop: 10, padding: '8px 16px', cursor: answers[currentIndex] == null ? 'not-allowed' : 'pointer' }}
      >
        {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setCurrentLessonIndex(0);
    setQuizResult(null);
  };

  async function saveCourseProgress(courseId, score, total) {
    if (!auth.currentUser) {
      alert('Please log in to save your progress.');
      return;
    }
    const userId = auth.currentUser.uid;
    const docRef = doc(db, 'userCourses', `${userId}_${courseId}`);

    const data = {
      courseId,
      userId,
      completedAt: new Date(),
      score,
      total,
    };

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, data);
      } else {
        await setDoc(docRef, data);
      }
      console.log('Course progress saved successfully');
    } catch (error) {
      console.error('Error saving course progress:', error);
    }
  }

  const handleCompleteLesson = () => {
    if (currentLessonIndex < selectedCourse.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setQuizResult(null);
    } else {
      alert('🎉 You have completed the course!');
      // Optionally, mark course as completed in local progress here
    }
  };

  if (!selectedCourse) {
    return (
      <>
      <div style={{ maxWidth: 800, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: 16 }}>Skill Courses</h2>
        <p style={{ marginBottom: 24, lineHeight: 1.6, fontSize: 16, color: '#333' }}>
          In today’s fast-evolving digital landscape, acquiring new skills is essential to stay competitive and unlock exciting career opportunities. 
          Our curated skill courses are designed to empower you with practical knowledge and hands-on experience in high-demand areas. 
          Whether you are starting fresh or looking to deepen your expertise, these courses provide a structured learning path tailored to your pace. 
          Gain confidence through interactive lessons, real-world projects, and quizzes that reinforce your understanding. 
          By mastering these skills, you not only enhance your employability but also open doors to innovation and personal growth. 
          Join thousands of learners who have transformed their careers and lives by investing in continuous learning. 
          Let us help you take the next step towards your professional goals and lifelong success.
        </p>
        {CourseDetails.map((course) => (
          <div
            key={course.id}
            onClick={() => handleSelectCourse(course)}
            style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 16,
              marginBottom: 12,
              backgroundColor: '#fafafa',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#eaeaea')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fafafa')}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Progress: {progress[course.id] === 'completed' ? 'Completed' : 'Not completed'}</p>
          </div>
        ))}
      </div>
      <Footer/>
      </>
    );
  }

  const lesson = selectedCourse.lessons[currentLessonIndex];

  return (
    <>
      <div style={{ maxWidth: 800, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
        <button
          onClick={() => setSelectedCourse(null)}
          style={{
            marginBottom: 20,
            padding: '8px 16px',
            cursor: 'pointer',
            borderRadius: 4,
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          ← Back to Courses
        </button>
        <h2>{selectedCourse.title}</h2>
        <h3>Lesson {currentLessonIndex + 1}</h3>
        <p style={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>{lesson.content}</p>

        <YouTubeEmbed videoUrl={lesson.videoUrl} />

        {lesson.quiz && lesson.quiz.questions && (
          <StepByStepQuiz
            questions={lesson.quiz.questions}
            onComplete={(score, total) => {
              setQuizResult({ score, total });
              saveCourseProgress(selectedCourse.id, score, total);
            }}
          />
        )}

        {quizResult && (
          <p style={{ marginTop: 20, fontWeight: 'bold' }}>
            Your score: {quizResult.score} / {quizResult.total}
          </p>
        )}

        <button
          onClick={handleCompleteLesson}
          disabled={lesson.quiz && !quizResult}
          style={{
            marginTop: 20,
            padding: '10px 20px',
            cursor: lesson.quiz && !quizResult ? 'not-allowed' : 'pointer',
            backgroundColor: lesson.quiz && !quizResult ? '#ccc' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            fontWeight: 'bold',
          }}
        >
          {currentLessonIndex < selectedCourse.lessons.length - 1 ? 'Next Lesson' : 'Finish Course'}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
