import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import quiz from "../assets/quiz2.png";
import logo from "../assets/Logo.png";

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
  const [order, setOrder] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const location = useLocation();

  const handleAnswerClick = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentStep] = index;
    setSelectedAnswers(updatedAnswers);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
    }
  };
  const handleIncrement = () => {
    setQuizStarted(true);
    setOrder((prevOrder) => prevOrder + 1);
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

  useEffect(() => {
    if (location.pathname === "/") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const closeModal = () => {
    setIsOpen(false);
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
      <div
        className={`w-full flex flex-row ${
          order % 2 === 0 ? "reverse" : ""
        } h-full p-1 rounded-2xl`}
        
      >
        {/* Left Section */}
        <div
          className="w-full md:w-1/2 h-full transform rounded-l-[8px] text-main rounded-2xl box1"
          style={{ transition: "transform 1s ease" }}
        >
          <div className="w-full h-full">
            <img
              src={quiz}
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2 h-full transform flex flex-col items-center  relative box2 "
          style={{ transition: "transform 1s ease" }}
        >
          {/* Progress Bar */}
          {/* {quizStarted && score === null && (
            <div className="w-full bg-gray-200 h-2 mb-4 absolute -top-0">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="bg-main h-2 transition-all duration-300 absolute -top-0"
              ></div>
            </div>
          )} */}

          {/* Quiz Content */}
          {quizStarted ? (
            score === null ? (
              <>
                <div className="w-full px-2 h-full flex flex-col ">
                  <div className="w-full flex justify-between items-center mt-4">
                    <img src={logo} alt="logo" className="w-20 h-20" />
                    <div>
                      <p className="text-base  bg-main text-white font-semibold rounded-full px-10 py-2">
                        {currentStep + 1}/{questions.length}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full flex flex-col items-center justify-center">
                  <p className="text-md font-medium text-center mb-8 ">
                    Q{currentStep + 1}. {questions[currentStep].question}
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <div className="grid grid-cols-1 gap-6">
                      {questions[currentStep].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerClick(index)}
                          className={`w-[220px] text-sm py-2 border rounded-3xl hover:scale-110 transition duration-200 ${
                            selectedAnswers[currentStep] === index
                              ? "bg-main text-white"
                              : "bg-white border-2 border-gray-500 hover:bg-blue-500 hover:text-white"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <button
                  onClick={nextStep}
                  disabled={selectedAnswers[currentStep] === null}
                  className="mt-6 w-[120px] text-base bg-blue-600 text-white py-2 rounded-md mb-4"
                >
                  {currentStep < questions.length - 1 ? "Next" : "See Results"}
                </button>
                </div>
                  </div>
                </div>
               
              </>
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center text-center ">
                <p className="text-lg font-medium">
                  Your Financial Knowledge Score:
                </p>
                <p className="text-2xl font-bold text-blue-600">{score}%</p>
                <button
                  onClick={closeModal}
                  className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md mb-4"
                >
                  Close
                </button>
              </div>
            )
          ) : (
            <div className="w-full flex flex-col gap-20 h-full p-4">
              <div className="w-full flex justify-between items-center mt-10">
                <img src={logo} alt="logo" className="w-20 h-20" />
                <div className="flex flex-col items-center">
                  <p className="text-xl font-medium text-[#b2b2b2]">
                    Knowledge
                  </p>
                  <p className="text-2xl font-medium text-main">Quiz ?</p>
                </div>
              </div>
              <div className="flex items-center justify-center h-1/2">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-lg font-medium mb-4">
                    Do you want to take the quiz?
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={handleIncrement}
                      className="px-10 py-1 bg-main text-white rounded-md"
                    >
                      Yes
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-10 py-1 border-main border-2 text-black rounded-md"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default FinancialQuizModal;