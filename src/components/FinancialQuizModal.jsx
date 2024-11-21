import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import pop1 from "../assets/pop1.png";

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

  const location = useLocation();

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
    if (location.pathname === "/") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

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
      <div className="flex h-full">
        {/* Left Section */}
        <div className="w-1/2 bg-[#caddff] rounded-l-[8px]  text-main flex items-center justify-center flex-col p-8">
          <h2 className="text-2xl font-bold mb-4">Financial Knowledge Quiz</h2>
          <p className="text-center">Test your financial knowledge and learn new insights!</p>
          <img
            src={pop1} // Replace with your illustration path
            alt="Quiz Illustration"
            className="w-3/4 mt-6"
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center  relative">
          {/* Progress Bar */}
          {quizStarted && score === null && (
            <div className="w-full bg-gray-200  h-2 mb-4 absolute -top-0">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="bg-main h-2  transition-all duration-300 absolute -top-0 "
              ></div>
            </div>
          )}

          {/* Quiz Content */}
          {quizStarted ? (
            score === null ? (
              <>
                <div>
                  <p className="text-md font-medium mb-8">
                    Q{currentStep + 1}. {questions[currentStep].question}
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <div className="grid grid-cols-2 gap-6">
                    {questions[currentStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        className={`w-[170px] text-sm py-2 border rounded-md ${
                          selectedAnswers[currentStep] === index
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 hover:bg-blue-300"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  </div>
                </div>
                <button
                  onClick={nextStep}
                  disabled={selectedAnswers[currentStep] === null}
                  className="mt-6 w-[120px] text-base bg-blue-600 text-white py-2 rounded-md"
                >
                  {currentStep < questions.length - 1 ? "Next" : "See Results"}
                </button>
              </>
            ) : (
              <div className="text-center">
                <p className="text-lg font-medium">Your Financial Knowledge Score:</p>
                <p className="text-2xl font-bold text-blue-600">{score}%</p>
                <button
                  onClick={closeModal}
                  className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                  Close
                </button>
              </div>
            )
          ) : (
            <div>
              <p className="text-lg font-medium mb-4">Do you want to take the quiz?</p>
              <div className="flex justify-center space-x-4">
                <button onClick={startQuiz} className="px-10 py-1 bg-main text-white rounded-md">
                  Yes
                </button>
                <button onClick={closeModal} className="px-10 py-1 bg-red-500 text-white rounded-md">
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default FinancialQuizModal;
