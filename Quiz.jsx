import { useState } from "react";

const questions = [
  {
    question: "In what year did 16VC start as an angel investment group?",
    options: ["A) 2020", "B) 2022", "C) 2024", "D) 2025"],
    answer: "B) 2022",
  },
  {
    question: "How much AUM does 16VC have to invest in startups?",
    options: ["A) $10M", "B) $15M", "C) $20M", "D) $25M"],
    answer: "C) $20M",
  },
  {
    question: "What happened to 16VC in 2024?",
    options: [
      "A) It was acquired by a major fund",
      "B) It stopped investing in startups",
      "C) It became a Venture Capital firm",
      "D) It launched an acceleration program",
    ],
    answer: "C) It became a Venture Capital firm",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(option) {
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Quiz of Knowledge</h1>
      {showResult ? (
        <div>
          <h2 className="text-xl">
            You got it right {score} out of {questions.length} questions!
          </h2>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className="block w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}