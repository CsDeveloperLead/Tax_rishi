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
  const [isReversed, setIsReversed] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [user, setUser] = useState({
    name: "",
    age: "",
    number: "",
    city: ""
  })

  const location = useLocation();

  const handleAnswerClick = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentStep] = index;
    setSelectedAnswers(updatedAnswers)
    nextStep();
  };

  const nextStep = () => {
    if (currentStep <= 4) {
      // For steps 1-4, simply move to the next step
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 5) {
      // When reaching step 5, validate all fields
      if (user.name === "" || user.age === "" || user.number === "") {
        alert("Please fill all the fields.");
      } else if (!validateAge(user.age)) {
        alert("Please enter a valid age.");
      } else if (!validatePhoneNumber(user.number)) {
        alert("Please enter a valid phone number.");
      } else {
        // If everything is valid, proceed to the next step and calculate score
        setCurrentStep(currentStep + 1);
        calculateScore();
      }
    }
  };

  // Helper function to validate age
  const validateAge = (age) => {
    const agePattern = /^[1-9][0-9]*$/; // Basic check for valid positive integers
    return agePattern.test(age);
  };

  // Helper function to validate phone number
  const validatePhoneNumber = (number) => {
    const phonePattern = /^[0-9]{10}$/; // Assuming 10-digit phone number
    return phonePattern.test(number);
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
    localStorage.setItem("score", JSON.stringify(percentage))
    localStorage.setItem("user", JSON.stringify(user))
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
    localStorage.removeItem("score")
  };




  const handleToggleClass = () => {
    setQuizStarted(true);
    const isSmallScreen = window.innerWidth < 768; // Example breakpoint for small screens
    setIsReversed((prev) => !prev); // Toggle the reverse state
  };

  // Progress percentage calculation
  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Financial Knowledge Quiz"
      className="modal-content "
      overlayClassName="modal-overlay"
    >
      <div
        className={`w-full flex flex-col md:flex-row ${isReversed ? (window.innerWidth < 768 ? "reverse2" : "reverse") : ""
          } h-full md:h-full p-1 rounded-2xl mt-0 md:mt-0`}
      >
        {/* Left Section */}
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full transform rounded-l-[8px] text-main rounded-2xl box1 "
          style={{ transition: "transform 1s ease" }}
        >
          <div className="w-full h-full md:h-full">
            <img
              src={quiz}
              alt="quiz logo"
              className="h-full md:h-full w-full md:object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2 h-full transform flex flex-col items-center  relative box2  "
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
            currentStep <= 5 ? (
              <>
                {
                  currentStep <= 4
                    ? <div className="w-full px-2 h-full flex flex-col mb-6 md:mb-0">
                      <div className="w-full flex justify-between items-center">
                        <img src={logo} alt="logo" className="w-20 h-20" />
                        <div>
                          <p className="text-base  bg-main text-white font-semibold rounded-full px-10 py-2">
                            {currentStep + 1}/{questions.length}
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-full flex flex-col items-center justify-center ">
                        <p className="text-md font-medium text-center mb-8 ">
                          Q{currentStep + 1}. {questions[currentStep].question}
                        </p>
                        <div className="flex flex-col items-center gap-2 md:gap-4">
                          <div className="grid grid-cols-1 gap-2  md:gap-6">
                            {questions[currentStep].options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => handleAnswerClick(index + 1)}
                                className={`w-[220px] text-sm py-1 md:py-2 border rounded-3xl hover:scale-110 transition duration-200 ${selectedAnswers[currentStep] === index + 1
                                  ? "bg-main text-white"
                                  : "bg-white border-2 border-gray-500 hover:bg-green-700 hover:text-white"
                                  }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    : <div className="flex flex-col items-center justify-center w-full h-full font-montserrat px-4">
                      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-2 md:p-6">
                        <h1 className="md:text-2xl font-bold text-center  md:mb-2">User Information</h1>
                        <p className="text-sm text-center text-red-500">*Fill Information to get your result</p>

                        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-10">
                          <div className="w-full flex flex-col md:w-[50%]">
                            <label htmlFor="name" className="text-sm font-semibold mb-1">Name</label>
                            <input
                              type="text"
                              id="name"
                              value={user.name}
                              onChange={(e) => setUser({ ...user, name: e.target.value })}
                              className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="w-full flex flex-col md:w-[50%]">
                            <label htmlFor="age" className="text-sm font-semibold mb-1">Age</label>
                            <input
                              type="number"
                              id="age"
                              value={user.age}
                              onChange={(e) => setUser({ ...user, age: e.target.value })}
                              className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                              placeholder="Enter your age"
                            />
                          </div>
                        </div>
                        <div className="w-full flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
                          <label htmlFor="city" className="text-sm font-semibold mb-1">City</label>
                          <input
                            type="text"
                            id="city"
                            value={user.city}
                            onChange={(e) => setUser({ ...user, city: e.target.value })}
                            className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                            placeholder="Enter your City"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
                          <label htmlFor="number" className="text-sm font-semibold mb-1">Number</label>
                          <input
                            type="number"
                            id="number"
                            value={user.number}
                            onChange={(e) => setUser({ ...user, number: e.target.value })}
                            className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                            placeholder="Enter your number"
                          />
                        </div>

                        <button
                          onClick={nextStep}
                          className="w-full mt-4 md:mt-6 py-1.5 md:py-2 bg-main text-white font-medium rounded-md hover:bg-green-700"
                        >
                          Click to View Result
                        </button>
                      </div>
                    </div>
                }

              </>
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center text-center mb-0 md:mb-0 ">
                <p className="text-lg font-medium">
                  Your Financial Knowledge Score:
                </p>
                <p className="text-2xl font-bold text-main">{JSON.parse(localStorage.getItem("score"))}%</p>
                <button
                  onClick={closeModal}
                  className="mt-6 bg-main text-white py-2 px-4 rounded-md mb-4"
                >
                  Close
                </button>
              </div>
            )
          ) : (
            <div className="w-full flex flex-col gap-10 md:gap-20 h-full p-4">
              <div className="w-full flex justify-between items-center mt-0 lg:mt-10">
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
                  <div className="flex justify-center space-x-4 mb-10 md:mb-0">
                    <button
                      onClick={handleToggleClass}
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
