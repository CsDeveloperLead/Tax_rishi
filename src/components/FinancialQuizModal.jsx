import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";

// Set up the Modal's root element for accessibility
Modal.setAppElement("#root");

const questions = [
  {
    question: "How often do you budget your expenses?",
    options: ["Never", "Rarely", "Sometimes", "Always"],
    answer: 3,
  },
  {
    question: "What percentage of income should be saved?",
    options: ["5%", "10%", "15%", "20%"],
    answer: 3,
  },
  {
    question: "Do you track your daily expenses?",
    options: ["Never", "Rarely", "Sometimes", "Always"],
    answer: 3,
  },
  {
    question: "Which investment has the least risk?",
    options: ["Stocks", "Bonds", "Cryptocurrency", "Real estate"],
    answer: 1,
  },
  {
    question: "How often should you review your finances?",
    options: ["Yearly", "Monthly", "Quarterly", "Never"],
    answer: 1,
  },
];

const FinancialQuizModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const location = useLocation()

  const handleAnswerClick = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentStep] = index;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((answer, i) => {
      if (answer === questions[i].answer) {
        correctAnswers++;
      }
    });
    const percentage = (correctAnswers / questions.length) * 100;
    setScore(percentage);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  // Progress percentage calculation
  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Financial Knowledge Quiz"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="w-full text-center">
        {/* Progress Bar */}
        {quizStarted && score === null && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              style={{ width: `${progressPercentage}%` }}
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            ></div>
          </div>
        )}
        <h2 className="text-xl font-bold mb-4">Financial Knowledge Quiz</h2>

        {quizStarted ? (
          score === null ? (
            <>
              <div className="p-6">
                <p className="text-lg font-medium mb-4"><span>Q ({currentStep + 1}){" "}{questions[currentStep].question}</span></p>
                <div className="flex flex-col gap-4 items-center">
                  {questions[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      className={`px-4 py-2 w-2/3 border rounded-md ${selectedAnswers[currentStep] === index ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-blue-300"
                        }`}
                    >

                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={nextStep}
                disabled={selectedAnswers[currentStep] === null}
                className="mt-6 bg-blue-600 w-1/3 text-white py-2 rounded-md"
              >
                {currentStep < questions.length - 1 ? "Next" : "See Results"}
              </button>
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg font-medium">Your Financial Knowledge Score:</p>
              <p className="text-2xl font-bold text-blue-600">{score}%</p>
              <button onClick={closeModal} className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md">
                Close
              </button>
            </div>
          )
        ) : (
          <div>
            <p className="text-lg font-medium mb-4">Do you want to take the quiz?</p>
            <div className="flex justify-center space-x-4">
              <button onClick={startQuiz} className="px-4 py-2 bg-main text-white rounded-md">
                Yes
              </button>
              <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded-md">
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default FinancialQuizModal;
