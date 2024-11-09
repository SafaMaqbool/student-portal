import React, { useState } from "react";

const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Define the questions and answers
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tool Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Which CSS property controls the text color?",
      options: ["font-color", "color", "text-color"],
      correctAnswer: "color",
    },
    {
      question:
        "Which of the following is used to create a comment in JavaScript?",
      options: ["<!-- Comment -->", "// Comment", "/* Comment */"],
      correctAnswer: "// Comment",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<script>", "<css>"],
      correctAnswer: "<style>",
    },
    {
      question: "What is the default value of the position property in CSS?",
      options: ["static", "relative", "absolute"],
      correctAnswer: "static",
    },
  ];

  // Function to handle answer selection
  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setQuestionsAnswered(questionsAnswered + 1);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="quiz-page">
      <h2>Web Development Quiz</h2>
      <p>Score: {score}</p>
      <p>Questions Answered: {questionsAnswered}</p>
      <p>{questions[currentQuestionIndex].question}</p>
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {questionsAnswered === questions.length && (
        <div>
          <h3>
            Quiz Finished! Your score is {score} out of {questions.length}
          </h3>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
