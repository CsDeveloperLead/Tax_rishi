import { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import quiz from "../assets/quiz2.png";
import logo from "../assets/Logo.png";
import emailjs from "emailjs-com";

// Set up the Modal's root element for accessibility
Modal.setAppElement("#root");

const questions = [
  {
    question:
      "Which of the following instruments do you think can offer tax-free guaranteed income?  ",
    options: [
      "Savings accounts with high interest rates",
      "Government-backed schemes like PPF, Sukanya Samriddhi Yojana, or tax-free bonds",
      "Insurance-based products like LIC policies or ULIPs (with tax benefits)  ",
      "Insurance-based products like LIC policies or ULIPs (with tax benefits)  ",
    ],
    answer: 2,
  },
  {
    question:
      "How familiar are you with government initiatives and subsidies for MSMEs and startups? ",
    options: [
      "I am not aware of such initiatives or subsidies.  ",
      "I know of schemes like Mudra Yojana or CGTMSE but haven’t explored them. ",
      "I have applied for benefits under programs like SIDBI’s MSME loans or Startup India schemes.  ",
      "I actively leverage government subsidies, tax exemptions, and export incentives to boost my business.  ",
    ],
    answer: 4,
  },
  {
    question: "How do you approach tax planning and optimization? ",
    options: [
      "I do not actively plan for taxes.  ",
      "I use traditional tax-saving instruments like PPF, ELSS, and NPS.  ",
      "I blend traditional options with advanced planning like deductions under Sections 80C, 80D, and 10(10D).  ",
      "I consult tax professionals to structure my investments and deductions for maximum tax efficiency. ",
    ],
    answer: 4,
  },
  {
    question:
      "How prepared are you to handle unexpected financial emergencies?  ",
    options: [
      "I do not have an emergency fund in place.  ",
      "I have basic savings but not dedicated to emergencies.  ",
      "I maintain an emergency fund covering 3–6 months of personal or business expenses.  ",
      "I combine emergency funds, insurance, and credit tools to manage unforeseen situations effectively.  ",
    ],
    answer: 4,
  },
  {
    question:
      "Are you utilizing financial or tax benefits designed for startups?  ",
    options: [
      "I am not aware of startup-specific benefits.  ",
      "I’ve heard of schemes like Startup India but haven’t explored them fully.  ",
      "I have availed benefits like tax holidays under Startup India or government funding schemes.  ",
      "I actively utilize multiple benefits, including capital gains exemptions, tax breaks, and startup grants.  ",
    ],
    answer: 4,
  },
];

const FinancialQuizModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [user, setUser] = useState({
    name: "",
    age: "",
    number: "",
    city: "",
  });

  const form = useRef();

  const location = useLocation();

  const handleAnswerClick = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentStep] = index;
    setSelectedAnswers(updatedAnswers);
    nextStep();
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g5mi40g", // replace with your EmailJS service ID
        "template_6cxp6cl", // replace with your EmailJS template ID
        form.current,
        "BBL1j3BSWBcAq19wP" // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  const nextStep = () => {
    if (currentStep < 4) {
      // For steps 1-4, simply move to the next step
      console.log(currentStep);
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 4) {
      // When reaching step 4, validate all fields

      setCurrentStep(currentStep + 1);
      calculateScore();
    } else if (currentStep === 5) {
      console.log(currentStep);
      // When reaching step 5, validate all fields
      if (user.name === "" || user.age === "" || user.number === "") {
        alert("Please fill all the fields.");
      } else if (!validateAge(user.age)) {
        alert("Please enter a valid age.");
      } else if (!validatePhoneNumber(user.number)) {
        alert("Please enter a valid phone number.");
      } else {
        console.log(user);
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
    console.log("perc:", percentage);
    localStorage.setItem("score", JSON.stringify(percentage));
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
    localStorage.removeItem("score");
  };

  const handleToggleClass = () => {
    setQuizStarted(true);
    const isSmallScreen = window.innerWidth < 768; // Example breakpoint for small screens
    setIsReversed((prev) => !prev); // Toggle the reverse state
  };

  // Progress percentage calculation
  useEffect(() => {
    // Retrieve the score from localStorage
    const storedScore = localStorage.getItem("score");
    setScore(storedScore || "Not Available");
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Financial Knowledge Quiz"
      className="modal-content "
      overlayClassName="modal-overlay"
    >
      <div
        className={`w-full flex flex-col md:flex-row ${
          isReversed ? (window.innerWidth < 768 ? "reverse2" : "reverse") : ""
        } h-full md:h-full  md:p-3 rounded-2xl mt-0 md:mt-0 relative overflow-y-auto`}
      >
        {/* Left Section */}
        <div
          className="w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex justify-center items-center text-black absolute top-2 md:top-2 right-2 md:right-2 border-2 z-50 border-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          X
        </div>

        <div
          className="w-full md:w-1/2 h-auto md:h-full transform rounded-l-[8px] text-main rounded-2xl box1 "
          style={{ transition: "transform 1s ease" }}
        >
          <div className="w-full h-full md:h-full ">
            <img
              src={quiz}
              alt="quiz logo"
              className="h-full md:h-full w-full  rounded-xl "
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2 h-full transform flex flex-col items-center relative box2 "
          style={{ transition: "transform 1s ease" }}
        >
          {/* Quiz Content */}
          {quizStarted ? (
            currentStep <= 5 ? (
              <>
                {currentStep <= 4 ? (
                  <div className="w-full px-2 h-full flex flex-col mb-6 md:mb-0  text-black rounded-2xl">
                    <div className="w-full h-[50px] flex justify-between items-center">
                      <img src={logo} alt="logo" className="w-20 h-20" />
                    </div>
                    <div className="w-full h-[340px] md:h-full flex flex-col items-center justify-center -mt-10 ">
                      <p className="text-md md:text-xl font-semibold mb-3 md:mb-6">
                        Question {currentStep + 1} out of {questions.length}
                      </p>
                      <p className="text-md md:mx-4 md:text-3xl font-bold text-center mb-4 md:mb-8">
                        {questions[currentStep].question}
                      </p>
                      <div className="flex flex-col items-center gap-4">
                        <div className="grid grid-cols-1 gap-4">
                          {questions[currentStep].options.map(
                            (option, index) => (
                              <button
                                key={index}
                                onClick={() => handleAnswerClick(index + 1)}
                                className={`w-[320px] md:w-[380px] px-2 md:px-6 text-[10px] md:text-sm py-2 md:py-3 border-2 rounded-full text-center hover:scale-105 transition duration-200 ${
                                  selectedAnswers[currentStep] === index + 1
                                    ? "bg-[#4EBA42] text-white"
                                    : "bg-white text-gray-700 hover:bg-[#4EBA42] hover:text-white"
                                }`}
                              >
                                {option}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-[420px] md:h-full font-montserrat px-4  md:mt-0  text-black rounded-2xl">
                    <h1 className="text-md md:text-xl font-bold">
                      Thank you for completing quiz!!!
                    </h1>
                    <p className="text-xl font-bold md:mb-4">
                      Your score is:{" "}
                      <span className="text-2xl text-green-600 mx-2">
                        {score}%
                      </span>
                    </p>
                    <form
                      className="w-full max-w-md bg-white shadow-md rounded-lg p-2 md:p-6 text-black"
                      ref={form}
                      onSubmit={sendEmail} // Attach the sendEmail function to onSubmit
                    >
                      <h1 className="md:text-2xl font-bold text-center md:mb-2">
                        User Information
                      </h1>
                      <p className="text-sm text-center text-red-500">
                        ***Fill All Information for Further Assistance***
                      </p>

                      <div className="w-full flex flex-col md:flex-row gap-1 md:gap-4 mt-1 md:mt-10">
                        <div className="flex w-full gap-2 md:hidden ">
                          <div className="w-1/2 md:hidden flex flex-col">
                            <label
                              htmlFor="name"
                              className="text-sm font-semibold mb-1"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="from_name" // Name attribute required for EmailJS
                              value={user.name}
                              onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                              }
                              className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="w-1/2 md:hidden flex flex-col">
                            <label
                              htmlFor="age"
                              className="text-sm font-semibold mb-1"
                            >
                              Age
                            </label>
                            <input
                              type="number"
                              id="age"
                              name="user_age" // Name attribute required for EmailJS
                              value={user.age}
                              onChange={(e) =>
                                setUser({ ...user, age: e.target.value })
                              }
                              className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                              placeholder="Enter your age"
                              required
                            />
                          </div>
                        </div>
                        <div className="w-full hidden md:flex flex-col md:w-[50%]">
                          <label
                            htmlFor="name"
                            className="text-sm font-semibold mb-1"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="from_name" // Name attribute required for EmailJS
                            value={user.name}
                            onChange={(e) =>
                              setUser({ ...user, name: e.target.value })
                            }
                            className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div className="w-full hidden md:flex flex-col md:w-[50%]">
                          <label
                            htmlFor="age"
                            className="text-sm font-semibold mb-1"
                          >
                            Age
                          </label>
                          <input
                            type="number"
                            id="age"
                            name="user_age" // Name attribute required for EmailJS
                            value={user.age}
                            onChange={(e) =>
                              setUser({ ...user, age: e.target.value })
                            }
                            className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                            placeholder="Enter your age"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
                        <label
                          htmlFor="city"
                          className="text-sm font-semibold mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="user_city" // Name attribute required for EmailJS
                          value={user.city}
                          onChange={(e) =>
                            setUser({ ...user, city: e.target.value })
                          }
                          className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                          placeholder="Enter your City"
                          required
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
                        <label
                          htmlFor="number"
                          className="text-sm font-semibold mb-1"
                        >
                          Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          name="user_number" // Name attribute required for EmailJS
                          value={user.number}
                          onChange={(e) =>
                            setUser({ ...user, number: e.target.value })
                          }
                          className="py-1 md:py-2 px-3 border rounded-full focus:ring-2 focus:ring-main focus:outline-none"
                          placeholder="Enter your number"
                          required
                        />
                      </div>
                      {/* Hidden input to include the score in the email */}
                      <input type="hidden" name="user_score" value={score} />

                      <button
                        type="submit"
                        className="w-full mt-4 md:mt-6 py-1.5 md:py-2 bg-main text-white font-medium rounded-md hover:bg-green-700"
                      >
                        Submit{" "}
                      </button>
                    </form>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center text-center mb-0 md:mb-0 ">
                <p className="text-lg font-medium">
                  Your Financial Knowledge Score:
                </p>
                <p className="text-2xl font-bold text-main">
                  {JSON.parse(localStorage.getItem("score"))}%
                </p>
                <button
                  onClick={closeModal}
                  className="mt-6 bg-main text-white py-2 px-4 rounded-md mb-4"
                >
                  Close
                </button>
              </div>
            )
          ) : (
            <div className="w-full flex flex-col gap-10 h-auto md:h-full p-4">
              <div className="w-full flex justify-around md:justify-end items-center mt-0 lg:mt-10">
                <div className="w-[150px] h-[100px] md:w-[200px] md:h-[100px]
                 ">
                  <img src={logo} alt="logo" className="w-full h-full" />
                </div>
              </div>
              <div className="flex items-center justify-center h-1/2 ">
                <div className="flex flex-col gap-6 items-center justify-center">
                  {/* <div className="w-full hidden md:flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="175"
                      height="123"
                      viewBox="0 0 175 123"
                    >
                      <defs>
                        <linearGradient
                          id="a"
                          x1="50.047%"
                          x2="50.047%"
                          y1="99.998%"
                          y2="-.014%"
                        >
                          <stop
                            offset="0%"
                            stop-color="gray"
                            stop-opacity=".25"
                          />
                          <stop
                            offset="54%"
                            stop-color="gray"
                            stop-opacity=".12"
                          />
                          <stop
                            offset="100%"
                            stop-color="gray"
                            stop-opacity=".1"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M107.54 15.04c-7.492 5.246-17.21 4.907-25.727 2.177-8.516-2.73-16.34-7.59-24.637-11.043A80.062 80.062 0 0 0 35.53.53C24.954-.679 13.145.795 5.777 9.28c-8.205 9.443-7.575 26.48 1.296 35.154 4.515 4.41 10.426 6.574 15.581 10.017 5.155 3.442 9.93 9.156 9.492 15.798-.407 6.156-5.133 10.873-10.023 13.836-3.78 2.29-8.434 4.79-8.89 9.53-.44 4.589 3.474 8.184 7.211 10.228 12.193 6.671 27.216 6.606 39.366-.162 4.332-2.422 8.311-5.636 12.855-7.512 11.931-4.944 25.08.034 37.714 1.853a75.392 75.392 0 0 0 32.076-2.334c6.256-1.849 12.537-4.674 16.932-9.937 3.17-3.796 5.145-8.598 6.998-13.342a527.957 527.957 0 0 0 5.701-15.282c1.094-3.078 2.17-6.218 2.454-9.513.512-5.97-1.646-11.87-4.584-16.91-6.978-11.97-18.729-20.382-31.456-22.519-12.726-2.137-26.19 2.037-36.06 11.169"
                          opacity=".1"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M87.585 16.913l-.617 35.802s22.343 0 41.354 6.172l.37-36.168s-30.49-7.289-41.107-5.806zM76.368 17.938l.618 35.802s-22.343 0-41.352 6.172l-.371-36.168s30.49-7.28 41.105-5.806z"
                          opacity=".1"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M66.819 21.305l.332 19.198s-11.988 0-22.178 3.31l-.2-19.396s16.353-3.903 22.046-3.112z"
                          opacity=".2"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M141.86 30.082V65.51s7.29-.866 22.591 18.022l1.358-35.428s-15.925-17.159-23.949-18.022zM24.03 30.244v35.428s-7.284-.866-22.582 18.022L.083 48.266s15.923-17.159 23.946-18.022z"
                          opacity=".1"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M93.069 23.712l15.136 2.707v2.205l-15.136-2.907z"
                          opacity=".2"
                        />
                        <path
                          fill="#FFF"
                          fill-rule="nonzero"
                          d="M63.909 45.015l-15.134 2.707v2.205l15.134-2.907zM93.27 27.822l27.663 5.714v2.204L93.27 29.827zM93.27 31.932l27.663 5.712v2.206L93.27 33.936z"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M147.987 41.036v1.946l5.934 4.821.279-1.669z"
                          opacity=".2"
                        />
                        <path
                          fill="#FFF"
                          fill-rule="nonzero"
                          d="M147.987 59.828v1.946l5.934 4.821.279-1.669zM148.08 44.373l-.093 1.948 11.218 10.567-.184-2.224zM147.987 47.99v1.853l11.218 10.755v-2.41z"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M17.97 41.457l.093 1.948L6.846 53.972l.185-2.224zM18.063 45.073v1.854L6.846 57.682v-2.41z"
                          opacity=".2"
                        />
                        <ellipse
                          cx="33.147"
                          cy="100.907"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="9.234"
                          ry="1.662"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M11.248 91.768s.889 1.163-.412 2.916c-1.3 1.753-2.373 3.24-1.944 4.335 0 0 1.962-3.262 3.564-3.308 1.602-.045.55-1.973-1.208-3.943z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M11.248 91.768c.078.112.139.235.181.365 1.559 1.83 2.39 3.54.891 3.583-1.395.039-3.078 2.535-3.47 3.166.013.047.03.095.047.142 0 0 1.962-3.263 3.564-3.308 1.602-.045.544-1.978-1.213-3.948z"
                          opacity=".1"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M12.902 93.252c0 .41-.046.742-.102.742-.057 0-.104-.332-.104-.742s.058-.217.115-.217.09-.194.09.217z"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M13.47 93.738c-.36.196-.674.314-.701.266-.028-.049.243-.25.602-.446.36-.196.218-.053.245 0 .028.054.214-.014-.146.18z"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M6.546 91.768s-.886 1.16.41 2.921c1.296 1.76 2.374 3.24 1.944 4.335 0 0-1.962-3.263-3.564-3.308-1.602-.045-.546-1.978 1.21-3.948z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M6.546 91.768a1.458 1.458 0 0 0-.181.365c-1.558 1.83-2.39 3.54-.891 3.583 1.396.039 3.078 2.535 3.47 3.166a1.221 1.221 0 0 1-.047.142s-1.962-3.263-3.564-3.308c-1.602-.045-.543-1.978 1.213-3.948z"
                          opacity=".1"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M4.892 93.252c0 .41.046.742.102.742.057 0 .104-.332.104-.742s-.058-.217-.115-.217-.09-.194-.09.217z"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M4.325 93.738c.36.196.673.314.7.266.028-.049-.243-.25-.602-.446-.36-.196-.217-.053-.245 0-.028.054-.212-.014.147.18z"
                        />
                        <path
                          fill="#A8A8A8"
                          fill-rule="nonzero"
                          d="M5.174 98.872s2.489-.076 3.24-.61c.752-.536 3.827-1.172 4.013-.315.186.857 3.739 4.259.93 4.281-2.81.023-6.527-.437-7.276-.894-.748-.457-.907-2.462-.907-2.462z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M13.407 101.93c-2.809.023-6.527-.437-7.275-.894-.57-.347-.797-1.592-.873-2.167h-.083s.162 2.007.905 2.462c.744.455 4.467.917 7.276.894.81 0 1.092-.295 1.076-.722-.112.26-.422.423-1.026.427z"
                          opacity=".2"
                        />
                        <ellipse
                          cx="97.281"
                          cy="76.417"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="15.228"
                          ry="2.608"
                        />
                        <path
                          fill="#D38884"
                          fill-rule="nonzero"
                          d="M94.21 41.216a2.12 2.12 0 0 0-.163.497l-.029.136a16.407 16.407 0 0 0-.22 1.78s-3.514-.234-2.905-.824c.157-.163.27-.364.324-.583a3.285 3.285 0 0 0 .102-.637v-.113a4.594 4.594 0 0 0-.034-.727s1.142 0 2.004.092c.58.066 1.032.181.92.379zM88.118 57.936c-1.197-.039-.314-2.532-.176-2.867.137-.336-.204-1.157-.204-1.157s-.405-2.375-.405-2.53a6.342 6.342 0 0 0-.137-.963 1.62 1.62 0 0 1 .162-.943c.138-.215.117-1.079.117-1.079V47.28l.267-.353.682.648.19.178.334 1.25-.119 1.792-.063 1.745.413 2.414s.145 3.023-1.06 2.982z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M88.497 47.871l-1.02-.424v-.166l.265-.353.684.645z"
                          opacity=".1"
                        />
                        <path
                          fill="#4C4981"
                          fill-rule="nonzero"
                          d="M88.028 45.318a4.708 4.708 0 0 0-.284 1.001c-.053.33-.142.652-.267.96l1.134.472-.583-2.433z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M88.028 45.318a4.708 4.708 0 0 0-.284 1.001c-.053.33-.142.652-.267.96l1.134.472-.583-2.433z"
                          opacity=".05"
                        />
                        <path
                          fill="#D38884"
                          fill-rule="nonzero"
                          d="M97.06 70.102l-.093.201s-.102.666-.102.682c0 .016-.295.46-.295.46l-.74.162-.315-.039a4.42 4.42 0 0 0-.084-.544 4.16 4.16 0 0 0-.554-1.327s-.55-1.354-.745-1.53c-.196-.177-.943-1.964-.864-2.395.042-.237.008-1.03-.03-1.691-.033-.54-.069-.993-.069-.993l1.865-1.102.217.342.13.202s0 .04-.008.104v.024a3.457 3.457 0 0 1-.162.81s-.14 1.002 0 1.178c.139.177.583 2.537.682 3.629v.099c.039.502.35.949.662 1.276a4.274 4.274 0 0 0 .505.452z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M95.515 71.565l.314.039.74-.162s.296-.446.296-.46c0-.015.102-.682.102-.682l.094-.201.011-.024a3.935 3.935 0 0 1-.509-.42.758.758 0 0 1-.052-.05c-.016-.018.106.648-.458.938-.274.14-.499.25-.656.324l.118.698z"
                          opacity=".1"
                        />
                        <path
                          fill="#CEDDF9"
                          fill-rule="nonzero"
                          d="M97.19 70.196l-.105.225s-.102.666-.102.682c0 .017-.295.46-.295.46l-.74.162-.426-.05c0-.086-.015-.207-.036-.355a3.8 3.8 0 0 0-.055-.294c.162-.073.413-.193.735-.36.566-.29.459-.938.459-.938.122.122.251.237.387.343.078.056.141.1.178.125z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M97.19 70.196l-.105.225s-.102.666-.102.682c0 .017-.295.46-.295.46l-.74.162-.426-.05c0-.086-.015-.207-.036-.355.09.005.18.017.269.038 0 0 1.01.215 1.06-.585.029-.454.123-.632.197-.702.078.056.141.1.178.125z"
                          opacity=".1"
                        />
                        <path
                          fill="#CC8294"
                          fill-rule="nonzero"
                          d="M97.116 70.143s-.251-.055-.302.743c-.05.799-1.059.585-1.059.585s-.496-.123-.5.083c.016.19.06.377.132.554 0 0 .03.476.123.59.094.113.034.534.034.534s.04.314.82 0c0 0 .697-.144 1.275-1.01.02-.03-.068-.119.437-.3.506-.182 1.944-1.345 1.84-1.914a.486.486 0 0 0-.343-.408.591.591 0 0 0-.452.062 3.579 3.579 0 0 1-.423.194 2.075 2.075 0 0 1-.602.144 2.318 2.318 0 0 0-.468.09.972.972 0 0 1-.512.053z"
                        />
                        <path
                          fill="#D38884"
                          fill-rule="nonzero"
                          d="M91.394 64.644a1.374 1.374 0 0 0-.285.324c-.285.436-.457 1.045-.648 1.308-.25.34-.324 1.001-.324 1.001-.067.434-.987 2.754-1.236 3.165-.25.412-.596 1.531-.596 1.531-.213.266-.2.661-.179.85 0 .032 0 .058.01.075.01.018 0 .031 0 .031v.011l-.34.579-1.082-.15-.56-.38c.047-.074.087-.152.122-.232.3-.667.512-1.86.512-1.86s.302-1.36.279-1.678c.007-.433.037-.865.089-1.296 0 0 .852-2.6 1.124-3.02.114-.167.184-.36.204-.56a.47.47 0 0 0 0-.121l.367-.365s3.013.413 2.543.787z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M88.147 72.816v.128l-.34.578-1.082-.15-.559-.38c.046-.074.087-.151.122-.231.272-.078.894.142.894.142s.672.128.956-.078c0-.001.003-.006.01-.01z"
                          opacity=".1"
                        />
                        <path
                          fill="#CEDDF9"
                          fill-rule="nonzero"
                          d="M87.883 74.36l-1.098.262-1.008-.745.052-.42a.724.724 0 0 0 .33-.463c.059-.31 1.016.03 1.016.03s.7.132.972-.09c-.019.203-.001.409.052.606a.452.452 0 0 0 .162.241c.28.193-.478.579-.478.579z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M87.883 74.36l-1.098.262-1.008-.745.052-.42a.724.724 0 0 0 .185-.162h.22c.162.016.567.737.567.737.995.067 1.296-.259 1.398-.499a.452.452 0 0 0 .162.242c.28.2-.478.585-.478.585z"
                          opacity=".1"
                        />
                        <path
                          fill="#CC8294"
                          fill-rule="nonzero"
                          d="M86.801 74.154s-.398-.721-.567-.736a3.813 3.813 0 0 0-.427 0s-.441 1.045-.603 1.134c-.162.09-.399.59-.399.59s1.167 1.134 2.294.912c.36.005.714.093 1.034.258.521.272 2.7.066 2.966-.412.198-.36.277-.62.102-.81a.473.473 0 0 0-.41-.14c-.274.038-.89.032-1.429-.63 0 0-.994-.911-1.075-.913-.081-.002.066.85-1.486.747z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M95.382 62.649l-.008.01c-.068.074-.547.6-.693.638a6.926 6.926 0 0 0-.706.312s-.295.394-.53.413a.925.925 0 0 0-.208.055c-.032-.539-.068-.993-.068-.993l1.865-1.098.217.342c.049.138.104.266.122.306l.01.015z"
                          opacity=".1"
                        />
                        <path
                          fill="#CEDDF9"
                          fill-rule="nonzero"
                          d="M88.604 55.069s-.725.946 0 2.201c.39.706.895 1.343 1.492 1.884l2.472 5.123s.648-.353.885-.373c.236-.02.53-.411.53-.411.229-.118.465-.223.706-.315.162-.039.701-.648.701-.648s-.27-.588-.21-.745c.06-.157-.177-.55-.177-.55a3.24 3.24 0 0 1-.162-.608c0-.162-.256-.53-.256-.53s-.254-.394-.254-.609c0-.215-.38-1.066-.38-1.066l-.1-3.726-5.247.373z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M95.382 62.53s-.544.608-.701.648a6.862 6.862 0 0 0-.706.315s-.295.392-.53.411a1.88 1.88 0 0 0-.486.173c-.21.096-.4.2-.4.2l-2.474-5.123a5.357 5.357 0 0 1-.601-.615 8.5 8.5 0 0 1-.891-1.269 2.124 2.124 0 0 1-.282-1.527c.046-.242.142-.47.282-.673l1.76-.124 3.503-.25.03 1.103.064 2.623s.057.131.128.305c.112.24.194.494.245.755 0 .217.254.609.254.609s.256.372.256.53c.035.207.089.411.162.609 0 0 .237.392.178.547-.058.156.21.753.21.753z"
                          opacity=".05"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M91.394 64.644a1.374 1.374 0 0 0-.285.324c-1.068.078-2.309-.486-2.631-.635a.47.47 0 0 0 0-.121l.366-.365s3.02.423 2.55.797z"
                          opacity=".1"
                        />
                        <path
                          fill="#CEDDF9"
                          fill-rule="nonzero"
                          d="M94.543 56.23s-.162.55-.215.784c-.054.235-.177 1.395-.177 1.395l-.068.324-1.12 5.346-.246 1.162c-.43.236-1.51-.394-1.51-.394-1.257.14-2.807-.666-2.807-.666s.254-.824.196-1.236c-.058-.411.353-.747.353-.747-.097-.372.255-2.002.255-2.002s.08-.608.374-.765c.295-.157-.039-.392-.118-.531a.601.601 0 0 1 .027-.36c.026-.09.056-.18.09-.267-.748-.748-.863-1.918-.864-2.568a4.15 4.15 0 0 1 .02-.474l1.62-.284 3.54-.619.362 1.112.09.278.198.512z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M94.21 41.216a2.12 2.12 0 0 0-.163.497l-.029.136c-.342.222-.552.224-.99.224-.15 0-.234-.288-.377-.324 0 0-.214-.771-.274-.121-.411-.085-.766.236-1.058-.044v-.114a4.594 4.594 0 0 0-.034-.727s1.142 0 2.004.092c.58.068 1.032.183.92.381z"
                          opacity=".1"
                        />
                        <path
                          fill="#D38884"
                          fill-rule="nonzero"
                          d="M95.02 39.894a2.19 2.19 0 0 1-2.627 2.143 2.187 2.187 0 1 1 2.627-2.143z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M93.822 43.332c-.016.181-.024.298-.024.298s-3.514-.235-2.905-.825c.157-.163.27-.364.324-.583l1.525.25s.43.333.764.648c.095.084.202.156.316.212zM94.347 55.83c-.154.02-.312.009-.462-.034a.936.936 0 0 1-.186-.083c-.295-.176-1.275.04-1.275.04s-2.67.177-2.788 0c-.066-.101-.538-.087-.923-.056-.162.013-.3.03-.399.04.046-.242.142-.471.282-.673l1.76-.125 3.54-.619.36 1.112c.024.134.054.267.091.398z"
                          opacity=".1"
                        />
                        <path
                          fill="#4C4981"
                          fill-rule="nonzero"
                          d="M92.737 42.59l-1.915-.314a.57.57 0 0 1-.361.314c-.255.058-1.393.648-1.904 1.354l-.51.708s-.413.51-.275.922c.137.411.294 1.806.294 1.806l.196 1.55s.373 1.12.256 1.61c-.116.492.059 2.552.059 2.552l-.392 2.552s1.333-.177 1.458 0c.124.176 2.788 0 2.788 0s.972-.217 1.275-.04c.198.106.425.147.648.118 0 0-.235-.81-.1-1.256.137-.445.1-1.277.1-1.277s.196-1.197.097-1.412c-.099-.216.217-1.001.217-1.001l1.04-5.476s-.126-.982-.682-1.315c-.556-.334-1.183-.433-1.516-.746-.334-.312-.773-.65-.773-.65z"
                        />
                        <path
                          fill="#D38884"
                          fill-rule="nonzero"
                          d="M93.626 47.988v.648l.605 1.63.218 1.51s.394 1.08.394 1.459.96 2.179.96 2.179.263.609.132.725c-.131.117-1.269 2.71.162 2.631 1.43-.077.981-2.786.981-2.786l-.196-1.178s-.275-2.945-.275-3.16c0 0-.353-1.256-.392-1.531-.039-.276-.295-1.669-.295-1.669l-.215-.902-2.079.444z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M92.938 50.029l-2.134 1.221-.662 1.001.883-.897zM92.291 52.368s-.972.634-1.428.634c-.457 0-1.517 1.088-1.517 1.088s1.502-.972 1.62-.941c.118.03 1.325-.78 1.325-.78zM89.803 52.707s-.912.824-.677.913c.235.09 1.458-.913 1.458-.913h-.78zM93.837 49.763s-.706.958-.515.943c.19-.015.735-.56.735-.56l-.22-.383zM93.939 50.706s-.765.868-.736 1.089c.03.22.736-1.089.736-1.089zM94.132 51.14s-.515.92-.295 1.111c.22.192.295-1.11.295-1.11zM93.464 48.777s-.384.648-.103.691c.28.044.307 0 .307 0l-.204-.691zM93.571 46.407a6.765 6.765 0 0 1-.392 1.155 5.356 5.356 0 0 1-.152-.579c.161-.21.344-.403.544-.576zM94.74 38.82a.953.953 0 0 1-.148.228c-.1.091-.19.193-.266.305-.06.167-.092.343-.095.52-.03.175-.14.37-.324.374a.658.658 0 0 1-.26-.077.264.264 0 0 0-.257.008.288.288 0 0 0-.083.194 2.57 2.57 0 0 0-.026.46c0 .062 0 .122.01.183.045.194.033.396-.034.583a.706.706 0 0 1-.363.292 2.244 2.244 0 0 1-.509.143c-.332.04-.668.051-1.002.032a.248.248 0 0 1-.091-.015.128.128 0 0 1-.039-.024c.037-.184.057-.371.06-.559a2.187 2.187 0 1 1 3.426-2.647z"
                          opacity=".1"
                        />
                        <path
                          fill="#1E1637"
                          fill-rule="nonzero"
                          d="M93.826 36.968c-.201-.02-.39.086-.589.13-.406.09-.822-.096-1.24-.094-.36.02-.71.125-1.021.305-.252.119-.482.28-.68.476-.2.2-.315.467-.324.748.027.162.022.327-.015.486-.042.08-.092.157-.15.227a.674.674 0 0 0-.069.562c.084.185.197.354.336.502.269.346.437.759.678 1.125a3.5 3.5 0 0 0 .354.448.25.25 0 0 0 .076.06c.028.01.059.015.089.013.512.015 1.041.026 1.513-.175a.692.692 0 0 0 .363-.291c.068-.187.08-.39.035-.583a2.671 2.671 0 0 1 .015-.648.285.285 0 0 1 .083-.193.26.26 0 0 1 .259-.008c.08.042.167.068.257.077.177 0 .289-.2.324-.375a.881.881 0 0 1 .362-.825c.246-.312.328-.723.222-1.106-.117-.365-.473-.82-.878-.86z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M95.927 46.272a2.55 2.55 0 0 0 0 .81c-.02.217 0 1.414 0 1.414-.648-.197-2.296.196-2.296.196l-.196-.588a1.458 1.458 0 0 1-.246-.486 5.387 5.387 0 0 1-.152-.58c-.086-.407-.15-.819-.193-1.233-.083-.623.845-1.296 1.549-1.668.703-.373 1.318 1.217 1.318 1.217s.293.61.216.918z"
                          opacity=".1"
                        />
                        <path
                          fill="#4C4981"
                          fill-rule="nonzero"
                          d="M95.927 46.16a2.558 2.558 0 0 0 0 .81c-.02.216 0 1.413 0 1.413-.648-.196-2.296.196-2.296.196l-.196-.588a1.442 1.442 0 0 1-.246-.486 5.356 5.356 0 0 1-.152-.578 12.1 12.1 0 0 1-.193-1.233c-.083-.626.845-1.296 1.549-1.67.703-.375 1.318 1.216 1.318 1.216s.293.606.216.92z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M94.68 37.829a1.296 1.296 0 0 0-.143-.316c.01.027.02.053.027.08.107.384.024.795-.222 1.107a.881.881 0 0 0-.36.825c-.028.175-.14.367-.325.374a.658.658 0 0 1-.26-.078.264.264 0 0 0-.257.008.288.288 0 0 0-.082.195 2.657 2.657 0 0 0-.015.648c.018.197.057.41-.036.585a.72.72 0 0 1-.362.291c-.472.201-1.002.19-1.514.175a.235.235 0 0 1-.089-.014.209.209 0 0 1-.076-.06 3.143 3.143 0 0 1-.353-.45c-.241-.365-.41-.777-.679-1.123-.073-.094-.162-.187-.222-.286v.02c.083.185.196.355.336.502.267.345.437.758.677 1.124.105.16.224.31.355.45.02.024.046.044.074.059.029.01.059.014.09.013.511.015 1.043.026 1.512-.175a.692.692 0 0 0 .363-.292c.068-.186.08-.389.036-.583a2.848 2.848 0 0 1 .014-.648.3.3 0 0 1 .083-.193.26.26 0 0 1 .26-.008c.08.043.167.069.257.078.178 0 .288-.2.324-.376a1.59 1.59 0 0 1 .095-.52 1.63 1.63 0 0 1 .266-.304 1.25 1.25 0 0 0 .227-1.108z"
                          opacity=".2"
                        />
                        <path
                          fill="#FFD2C6"
                          fill-rule="nonzero"
                          d="M110.474 38.255l-1.4 2.974s-.205.559-.338.663c-.133.103-.72 1.87-.72 1.87l-1.503 2.312-.102.162-.588-.162-.413-1.542.024-.447v-.057s.927-.972 1.134-1.045c0 0 .162.02.47-.733.308-.754.59-.916.59-.916l.162-.544 1.738-2.769s1.458-2.088 1.855-1.161c.397.926-.909 1.395-.909 1.395zM104.662 59.383c-.005.05-.021.099-.047.142-.162.237-1.074 5.05-1.074 5.05.073.324-.133.972-.266 1.267-.133.294-.428 1.824-.428 1.824s-.073 3.298-.262 3.813c-.19.515.06 1.62.06 1.62-.018.507.287 1.045.468 1.317l.036.052c.058.084.097.133.097.133.05.098.12.185.206.254l.042.033c.25.167.53.285.824.348h.03c.116.026.194.037.194.037l.073.399-.78.162-1.487.102s-1.752.134-1.354-.648a1.24 1.24 0 0 0 .071-.162c.016-.038.03-.077.04-.117.24-.75.079-1.662.079-1.662l-.339-2.663c-.559-2.474.439-5.226.439-5.226s-.086-.22.105-.78c.191-.558 0-1.782 0-1.782s-.102-1.574-.235-2.353a4.772 4.772 0 0 1-.053-.993c.006-.195.024-.388.053-.58l3.355-.446s.193.546.153.859z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M104.615 75.675l-.78.162-1.487.102s-1.752.135-1.354-.648a1.24 1.24 0 0 0 .071-.162c.016-.038.03-.077.04-.117.305.01.605.07.889.179.499.192.874-.31.874-.31l.243-.463.036-.066c.058.084.097.132.097.132a.81.81 0 0 0 .248.287l-.042.086-.235.496s.301.03.713.097a.324.324 0 0 0 .389-.212h.029c.116.026.194.037.194.037l.075.4z"
                          opacity=".1"
                        />
                        <path
                          fill="#626696"
                          fill-rule="nonzero"
                          d="M105.336 76.041c-.059.266-1.7.347-1.7.347s-.913-.088-1.17.125c-.255.212-1.009.162-1.038.162-.029 0-.426-.015-.581-.728-.156-.713.202-.81.218-.821.318.004.632.065.929.18.499.192.874-.31.874-.31l.279-.53c.058.085.097.133.097.133a.81.81 0 0 0 .248.287l-.277.582s.301.03.713.095a.342.342 0 0 0 .418-.367s.256.074.573.162a.591.591 0 0 1 .417.683z"
                        />
                        <path
                          fill="#FFD2C6"
                          fill-rule="nonzero"
                          d="M108.428 62.892c-.039.235-.08.844-.08.844.139.51-.215 1.722-.215 1.722l-.176.691c.078.883-.486 3.043-.486 3.043s-.378 2.002-.574 2.866A2.37 2.37 0 0 0 107 73.5l.015.036c0 .016.008.032.011.048a1.035 1.035 0 0 0 .215.394.954.954 0 0 0 .106.108c.185.164.396.294.625.386l.1.039c.102.038.206.07.312.097h.035l-.079.463-1.04-.267-1.393-.452-.676-.379s0-.037.021-.108v-.013c0-.031.013-.067.021-.109.107-.607.373-2.307.24-3.564-.162-1.55.486-3.69.637-4.199.094-.292.134-.598.118-.904-.256-.373-.314-1.865-.314-1.865s-.472-.962-.86-1.982a5.066 5.066 0 0 1-.28-1.032 3.498 3.498 0 0 1-.057-.754s3.16-2.885 3.507-.092l.034.274c.308 2.567.168 3.037.131 3.266z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M108.428 74.622l-.08.463-1.04-.267-1.392-.452-.686-.392s0-.037.021-.108v-.013c0-.031.013-.067.021-.109h.098c.198-.02.397.008.583.08.227.084.525.18.585.14a.739.739 0 0 1 .333-.058l.145-.324.022-.049c.044.12.11.23.193.324.035.041.072.08.112.115v.112l-.008.162c.155.1.324.177.5.23a.288.288 0 0 0 .14 0l.098.04c.103.037.207.07.313.096l.042.01z"
                          opacity=".1"
                        />
                        <path
                          fill="#626696"
                          fill-rule="nonzero"
                          d="M107.907 75.615c-.29-.083-.99-.217-1.104-.113-.113.103-1.083 0-1.083 0a.59.59 0 0 1-.501-.294c-.203-.314-.039-1.33-.039-1.33h.071l.12-.012c.198-.02.398.007.583.077.227.086.525.183.585.143a.724.724 0 0 1 .334-.06l.162-.365c.044.12.11.23.193.324.034.041.072.079.112.114l-.015.27c.156.1.324.177.5.232a.202.202 0 0 0 .24-.076.193.193 0 0 0 .018-.04c.131.061.27.107.412.135a.752.752 0 0 1 .81.577c.154.452-1.108.5-1.398.418z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M104.662 59.383l-.18.055a2.511 2.511 0 0 1-.433.09c-.93.132-2.46.052-2.946.022.006-.195.024-.388.053-.58l3.355-.446s.191.546.15.859z"
                          opacity=".1"
                        />
                        <path
                          fill="#626696"
                          fill-rule="nonzero"
                          d="M107.59 58.568s-1.232.191-2.235.41c-.334.073-.648.15-.873.223a2.662 2.662 0 0 1-.433.093c-1.116.162-3.099.011-3.099.011-.544-1.766.661-3.99.661-3.99-.027-.177.251-.72.251-.72v-.017l.172-.63h4.577l.056.27.117.551.72 3.413.085.386z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M108.299 59.639l-.028.011-.536.238c-.58.267-2.315.324-2.916.324a3.498 3.498 0 0 1-.057-.753s3.16-2.885 3.507-.092c.007.093.018.19.03.272z"
                          opacity=".1"
                        />
                        <path
                          fill="#626696"
                          fill-rule="nonzero"
                          d="M108.383 59.365l-.112.05-.536.238c-.59.272-2.382.324-2.955.324h-.15c-.265-.008-.53-.256-.53-.324 0-.035-.028-.21-.05-.36-.022-.12-.038-.223-.038-.223a14.167 14.167 0 0 1-1.782-.922c-.449-.306-.335-2.482-.25-3.575.031-.378.059-.625.059-.625l4.633.27.648.037.371.083.099.021s.267 1.944.398 2.106c.132.162.046.706.03 1.017 0 .134-.015.267-.044.397 0 0 .191.545.147.85-.02.213.001.43.062.636z"
                        />
                        <circle
                          cx="103.422"
                          cy="41.333"
                          r="1.899"
                          fill="#FFD2C6"
                          fill-rule="nonzero"
                        />
                        <path
                          fill="#FFD2C6"
                          fill-rule="nonzero"
                          d="M102.496 42.123s.131 1.798-.237 2.212c-.42.42-.862.818-1.325 1.192l.295 1.221 1.664.191 1.944-2.075-.443-.536s-.338-1.149-.06-1.722c.28-.573-1.838-.483-1.838-.483z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M106.513 46.074l-.102.162-.588-.162-.413-1.542.024-.447.122-.175s.648.015.62.604c-.027.516.268 1.364.337 1.56zM107.793 54.596s-.468.103-1.004.173c-.536.07-1.155.107-1.41-.042-.426-.253-2.734-.18-3.402-.154h-.113l.172-.63h4.576l.057.27.648.038.37.082c.069.159.106.263.106.263z"
                          opacity=".1"
                        />
                        <path
                          fill="#FFCDE5"
                          fill-rule="nonzero"
                          d="M105.44 44.025s.647.015.618.604c-.029.59.353 1.604.353 1.604l-.147.339s-.206.824-.044 1.03c.162.206.75.206.412 1.899 0 0-.073 1.267.103 1.678.177.412.177 1.398.441 1.811.241.44.448.898.619 1.37 0 0-1.913.425-2.414.132-.5-.293-3.577-.147-3.577-.147s.015-.516 0-.576a.476.476 0 0 1 .073-.374c.104-.14.266-.376.177-.581-.09-.206.22-.51.058-.83-.162-.319-.358-.382-.324-.557a.75.75 0 0 0-.182-.557c-.116-.148-.912-1.703-.912-1.703l-.133-.726s-1.023-.75-1.004-1.103c.02-.353.387-.844.387-.844l.985-.972s.546.588 1.076.382c.53-.205 1.669-1.192 1.669-1.192s.406-.22.435-.382c.03-.162.28-.015.28-.015s.368-.202.441-.131c.125.065.26.11.399.131l.21-.29z"
                        />
                        <path
                          fill="#FFD2C6"
                          fill-rule="nonzero"
                          d="M99.875 47.092l-.313.246a4.14 4.14 0 0 0-.394 1.604 21.152 21.152 0 0 1-.397 2.485l-.618 1.106s-1.016 2.134-1.149 2.7c-.133.568-.736 1.525-.736 1.525s-2.046 1.839-.618 2.171c1.427.332 1.472-1.458 1.472-1.458s.324-.368.387-.619c.064-.25 1.865-3.452 1.865-3.452s.633-.862.5-1.319c0 0 .825-1.944.825-2.43a8.539 8.539 0 0 0-.133-1.211l.133-1.016-.824-.332z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M104.114 51.15s-1.442.755-1.722.795c-.28.04 1.222-.162 1.222-.162l.5-.633zM105.29 51.738s-1.913.648-2.754.531c0-.003 2.093.397 2.754-.531z"
                          opacity=".1"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M105.41 51.95s-1.724 1.084-2.738.907c0 0 2.37.472 2.738.22l-1.06-.293s1.177-.623 1.06-.834zM103.426 37.99a1.792 1.792 0 0 0-1.458.274c-.295.232-.486.587-.823.76a4.408 4.408 0 0 1-.538.19 1.554 1.554 0 0 0-.948 1.672c.052.291.188.56.256.848.12.514.013 1.052-.117 1.564a16.48 16.48 0 0 1-1.636 4.058.43.43 0 0 0-.08.272.4.4 0 0 0 .1.173c.68.786 1.782 1.057 2.827 1.092.383.038.77-.026 1.12-.186.217-.125.404-.296.547-.5a2.66 2.66 0 0 0 .508-1.711c-.027-.494-.193-.993-.068-1.471a.376.376 0 0 1 .088-.18c.111-.115.298-.084.457-.104.432-.05.71-.505.763-.938.051-.432-.057-.867-.06-1.296a2.731 2.731 0 0 1 .513-1.602c.144-.198.324-.392.376-.64.062-.31-.118-.54-.274-.784-.241-.382-.36-.828-.727-1.12a1.962 1.962 0 0 0-.826-.37z"
                          opacity=".1"
                        />
                        <path
                          fill="#985C7E"
                          fill-rule="nonzero"
                          d="M103.307 37.872a1.782 1.782 0 0 0-1.448.274c-.295.233-.486.588-.824.762a4.698 4.698 0 0 1-.538.187 1.554 1.554 0 0 0-.948 1.67c.052.29.188.56.256.848.12.513.015 1.051-.117 1.563a16.45 16.45 0 0 1-1.634 4.05.415.415 0 0 0-.081.272c.016.066.05.126.099.174.68.787 1.782 1.056 2.826 1.092.384.038.77-.026 1.121-.185a1.72 1.72 0 0 0 .546-.502c.361-.495.54-1.1.507-1.711-.029-.486-.194-.993-.07-1.47a.407.407 0 0 1 .088-.18c.114-.116.298-.085.459-.103.43-.05.71-.507.761-.938.052-.43-.057-.867-.058-1.296a2.715 2.715 0 0 1 .513-1.6c.143-.2.324-.394.376-.648.06-.311-.12-.538-.275-.784-.242-.381-.36-.828-.728-1.12a1.962 1.962 0 0 0-.83-.355z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M102.672 56.277s.378 1.768 1.006 2.247l-1.006-2.247z"
                          opacity=".1"
                        />
                        <g fill="#000" fill-rule="nonzero" opacity=".1">
                          <path d="M99.66 41.163a3.37 3.37 0 0 0-.066-.206c.026.07.042.131.067.206zM105.031 39.63a.648.648 0 0 1 0 .162c-.049.248-.232.442-.376.64a2.736 2.736 0 0 0-.513 1.602c0 .436.11.87.058 1.296-.052.426-.324.888-.761.936-.162.02-.345-.01-.457.104a.41.41 0 0 0-.09.18c-.124.478.043.972.07 1.471a2.662 2.662 0 0 1-.515 1.71 1.68 1.68 0 0 1-.546.5c-.35.16-.736.224-1.12.186-1.021-.034-2.105-.298-2.792-1.055a.269.269 0 0 0-.016.143c.016.066.05.125.099.173.68.788 1.782 1.056 2.826 1.092.384.038.77-.026 1.121-.185a1.72 1.72 0 0 0 .546-.502c.361-.495.54-1.099.507-1.71-.029-.487-.194-.994-.07-1.471a.407.407 0 0 1 .088-.18c.114-.115.298-.085.459-.102.43-.05.71-.507.761-.938.052-.431-.057-.867-.058-1.296a2.715 2.715 0 0 1 .513-1.6c.143-.2.324-.395.376-.649a.727.727 0 0 0-.11-.507z" />
                        </g>
                        <ellipse
                          cx="20.927"
                          cy="81.178"
                          fill="#6C63FF"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="3.428"
                          ry="1"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M22.126 75.447s-4.471 2.31-2.161 5.022a.859.859 0 0 0 .846.549s-.127-.229.354-.412c.172-.066.335-.152.486-.256.204-.14.356-.343.433-.578 0 0 .915-1.223.206-3.486 0 0 .092-.648.01-.744l-.542.744s.562.377.627.931c0 0-.585-.93-.713-.823-.026.021-.269.407-.269.407s.972.66 1.045 1.518c0 0-.547-1.2-1.134-1.372l-.333.604s1.062.648 1.182 1.62c0 0-.617-1.234-1.247-1.482l-.248.638s1.024.648 1.118 1.458c0 0-.857-1.354-1.165-1.31 0 0-.193.599-.162.783 0 0 .726.486.739.961 0 0-.67-.845-.773-.789 0 0-.042.85.162 1.296a2.576 2.576 0 0 1-.297-1.296 1.408 1.408 0 0 0-.427.69s-.193-.468.44-.896c0 0 .06-.66.133-.741 0 0-.685.333-.972.745 0 0 .107-.613 1.037-.917l.237-.648s-.93.393-1.219.74c0 0 .208-.607 1.296-.899l.324-.596s-.826.279-1.23.596c0 0 .313-.523 1.33-.763l.262-.374s-.601.215-.768.291c-.167.077-.201.04-.201.04.306-.26.679-.428 1.076-.487 0 0 .558-.724.518-.764z"
                        />
                        <path
                          fill="url(#a)"
                          fill-rule="nonzero"
                          d="M26.53 79.558c.469.277 1.201.457 2.123-.138l-.01 1.314c.067.903 1.18 4.185 1.18 4.185l.785 2.702a21.13 21.13 0 0 1 .865 5.876c-.02.626.065 1.251.251 1.85.418 1.134-.162 2.592-.418 3.131a13.08 13.08 0 0 1-1.296.365.888.888 0 0 0-.116.035v-.008s-1.18.468-1.704.404c-.39-.049-.635.439-.324.797-.255.078-.52.113-.786.103-.525-.064-.786.838.196 1.095.982.258 6.554 0 6.554 0a.79.79 0 0 0 .42-.873c.428-.016.695-.029.695-.029s.983-.45 0-1.673l-.052.04-.21-.619v-.837s1.245-5.994.852-6.694c-.394-.7-.59-4.313-.59-4.313l.131-3.926c.355-.734.538-1.883.63-2.782.134-.43.218-.872.252-1.32.014-.21.027-.433.035-.663a4.447 4.447 0 0 0-.238-1.482c.443-.66.94-1.285 1.484-1.865a1.91 1.91 0 0 0 .59-1.673l-.324-2.189-.788-3.726c.1-1.037-.116-1.633-.356-1.97.057-.333.11-.669.15-1.004.175-1.46.097-2.94-.23-4.374-.113-.5-.268-1.014-.618-1.393-.399-.43-1.044-.692-1.191-1.254a4.084 4.084 0 0 0-.09-.423c-.145-.37-.6-.502-.999-.55-.71-.087-1.735-.153-2.417.126-.474.196-1.134.73-1.391 1.305a1.12 1.12 0 0 0-.162.81c.025.096.063.188.113.274-.105.276-.16.568-.162.863a2.513 2.513 0 0 0 1.604 2.33c.014.049.03.097.042.146.03.115.05.232.063.35-.011.228-.026.457-.037.683a.768.768 0 0 1-.024.093c-.565.25-1.115.53-1.648.84.394.579-.065 3.025-.065 3.025-.983.58-1.966 2.06-.918 3.605 1.048 1.543.458 3.2.458 3.2l-.162 2.517-.032.502h.013l-.013.19h.027v.207c-.461.162-1.134.508-1.534 1.134-.19.31-.421.593-.687.842a.505.505 0 0 0 .08.84zm7.914-6.687a2.39 2.39 0 0 1 .234-1.265h.463c.016.108.034.212.057.306.133.573-.399.844-.754.959z"
                        />
                        <path
                          fill="#DB8B8B"
                          fill-rule="nonzero"
                          d="M34.574 97.82l.253.757-.817.82-2.712.63-1.955-.19.126-.693a.834.834 0 0 1 .62-.61c.81-.19 2.337-.62 2.66-1.219l1.825.505z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M34.574 97.82l.253.757-.817.82-2.712.63-1.955-.19.126-.693a.834.834 0 0 1 .62-.61c.81-.19 2.337-.62 2.66-1.219l1.825.505z"
                          opacity=".1"
                        />
                        <path
                          fill="#2E3037"
                          fill-rule="nonzero"
                          d="M29.97 99.65l.38-.506-.38-.583s-1.134.457-1.64.393c-.505-.063-.756.822.19 1.073s6.307 0 6.307 0 .946-.44 0-1.64l-.817.63s-1.388.759-2.081.632H29.97z"
                        />
                        <path
                          fill="#DB8B8B"
                          fill-rule="nonzero"
                          d="M28.267 100.722l1.956.188 2.712-.63.82-.82-.067-.201-.094-.282-.09-.274-1.83-.505c-.093.151-.22.28-.37.373-.595.405-1.663.698-2.288.845l-.08.023a.838.838 0 0 0-.549.588l-.12.695z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M28.267 100.722l1.956.188 2.712-.63.82-.82-.067-.201-.753.578s-1.387.759-2.082.632h-1.954l.378-.505-.34-.525a.838.838 0 0 0-.55.588l-.12.695z"
                          opacity=".1"
                        />
                        <path
                          fill="#2E3037"
                          fill-rule="nonzero"
                          d="M28.9 100.532l.377-.505-.378-.583s-1.134.457-1.64.393c-.508-.063-.757.822.189 1.073.946.25 6.306 0 6.306 0s.946-.44 0-1.64l-.82.624s-1.386.758-2.081.632l-1.954.006z"
                        />
                        <path
                          fill="#DB8B8B"
                          fill-rule="nonzero"
                          d="M30.475 63.953s3.028.314 2.592-.946a2.292 2.292 0 0 1-.094-1.115c.08-.463.263-.901.537-1.283l-2.839.442c.17.285.3.591.384.91.332 1.339-.58 1.992-.58 1.992z"
                        />
                        <path
                          fill="#474463"
                          fill-rule="nonzero"
                          d="M35.646 78.332s-.063 2.712-.693 4.037l-.133 3.846s.19 3.531.567 4.226c.378.695-.82 6.56-.82 6.56v1.007s-2.016.759-2.591-.124l.576-7.506-.248-10.41 3.342-1.636z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M35.646 78.332s-.063 2.712-.693 4.037l-.133 3.846s.19 3.531.567 4.226c.378.695-.82 6.56-.82 6.56v1.007s-2.016.759-2.591-.124l.576-7.506-.248-10.41 3.342-1.636z"
                          opacity=".1"
                        />
                        <path
                          fill="#FC6681"
                          fill-rule="nonzero"
                          d="M36.908 69.628l.378 1.009.316 2.145a1.895 1.895 0 0 1-.567 1.64c-.757.756-1.766 2.334-1.766 2.334l-1.199-3.592s1.199-.19 1.01-1.01c-.19-.819-.127-2.334-.127-2.334l1.955-.192z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M36.908 69.628l.378 1.009.316 2.145a1.895 1.895 0 0 1-.567 1.64c-.757.756-1.766 2.334-1.766 2.334l-1.199-3.592s1.199-.19 1.01-1.01c-.19-.819-.127-2.334-.127-2.334l1.955-.192z"
                          opacity=".05"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M31.303 98.57c.81 1.274 2.067.551 2.29.407l-.09-.274-1.829-.505c-.093.151-.22.28-.37.373z"
                          opacity=".1"
                        />
                        <path
                          fill="#474463"
                          fill-rule="nonzero"
                          d="M28.773 80.791c.063.883 1.134 4.1 1.134 4.1l.756 2.647a20.99 20.99 0 0 1 .831 5.758 5.67 5.67 0 0 0 .248 1.813c.506 1.386-.504 3.278-.504 3.278.883 1.577 2.396.506 2.396.506v-1.01s1.2-5.486.883-6.559c-.316-1.072-.44-3.974-.44-3.974v-5.234a5.949 5.949 0 0 0 1.723-3.768c.017-.206.028-.423.036-.648.052-1.424-.922-3.09-1.296-3.687a6.761 6.761 0 0 0-.147-.224L28.817 76h-.013v.693l-.031 4.099z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M30.665 61.051c.17.285.299.591.384.91a2.454 2.454 0 0 0 1.918-.069c.08-.463.262-.901.536-1.283l-2.838.442z"
                          opacity=".1"
                        />
                        <circle
                          cx="31.925"
                          cy="59.538"
                          r="2.459"
                          fill="#DB8B8B"
                          fill-rule="nonzero"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M28.773 76.692h.026c2.645.543 5.965-2.213 5.965-2.213a3.38 3.38 0 0 1-.23-.47c-.091-.142-.148-.223-.148-.223L28.816 76l-.014.22-.03.473z"
                          opacity=".1"
                        />
                        <path
                          fill="#FC6681"
                          fill-rule="nonzero"
                          d="M29.474 63.89s3.532-2.145 4.667-1.262l1.577 2.018s1.009.314.82 2.333l.756 3.658-2.268.568s-1.34 1.26-.262 3.093c0 0-3.342 2.775-5.994 2.208l.187-2.964s.57-1.64-.44-3.153c-1.01-1.513-.063-2.965.883-3.533.003-.01.445-2.4.074-2.966z"
                        />
                        <path
                          fill="#DB8B8B"
                          fill-rule="nonzero"
                          d="M29.277 76.756s-1.324.25-1.956 1.26c-.181.303-.403.58-.659.825a.5.5 0 0 0 .078.798c.5.3 1.317.486 2.347-.361 1.766-1.452.19-2.522.19-2.522z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M31.232 65.087s1.262-.127 1.576 3.154c.315 3.28.82 4.037.82 4.037s.316 1.703-.44 2.712c-.757 1.01-2.209 3.152-2.209 3.152s-1.576.443-1.892-1.134l1.955-3.658s.316-1.26-.44-2.143c-.757-.883-1.325-6.75.63-6.12z"
                          opacity=".1"
                        />
                        <path
                          fill="#FC6681"
                          fill-rule="nonzero"
                          d="M31.106 64.902s1.262-.126 1.576 3.153c.314 3.278.821 4.037.821 4.037s.314 1.702-.442 2.711c-.757 1.01-2.208 3.153-2.208 3.153s-1.576.442-1.892-1.134l1.955-3.658s.316-1.262-.44-2.145c-.757-.883-1.326-6.752.63-6.117z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M30.066 67.262s-.127 1.956.44 3.028c.567 1.073.569 2.46 0 3.217M29.75 64.866s.505-.503 1.955-.567c1.45-.063 2.082-.505 2.082-.505"
                          opacity=".1"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M33.259 56.358c.382.047.82.178.959.54.036.136.065.275.087.414.143.551.763.81 1.145 1.23.339.37.486.875.597 1.364.314 1.406.389 2.854.222 4.285-.124 1.046-.375 2.077-.446 3.126-.071 1.05.058 2.157.633 3.04.247.379.572.712.747 1.134-.361.293-.86.335-1.325.351-.54.017-1.08.017-1.62 0a1.733 1.733 0 0 1-.828-.172 1.265 1.265 0 0 1-.434-.466c-.31-.527-.389-1.158-.376-1.77.013-.613.11-1.219.122-1.83 0-.334-.02-.687-.21-.959a3.109 3.109 0 0 0-.53-.486c-.674-.598-.906-1.558-.929-2.459-.022-.9.125-1.805.049-2.704-.03-.351-.162-.774-.507-.842a2.198 2.198 0 0 1-.324-.042c-.279-.107-.251-.5-.324-.786-.09-.324-.363-.57-.44-.896-.182-.763.788-1.673 1.425-1.944.636-.27 1.623-.212 2.307-.128z"
                          opacity=".1"
                        />
                        <path
                          fill="#472727"
                          fill-rule="nonzero"
                          d="M33.322 56.232c.382.048.82.18.959.54.036.136.066.275.087.416.143.55.763.81 1.146 1.228.338.37.486.874.596 1.364.314 1.405.389 2.854.222 4.285-.123 1.046-.374 2.076-.446 3.126-.071 1.05.059 2.156.634 3.04.246.378.572.712.746 1.133-.36.293-.86.336-1.325.352-.54.017-1.082.017-1.628 0a1.733 1.733 0 0 1-.828-.172 1.273 1.273 0 0 1-.434-.465c-.31-.528-.389-1.16-.376-1.772.013-.613.11-1.218.122-1.83 0-.331-.02-.686-.21-.958a3.175 3.175 0 0 0-.53-.486c-.674-.598-.908-1.557-.93-2.46-.023-.902.126-1.804.05-2.703-.03-.352-.162-.774-.507-.843a2.198 2.198 0 0 1-.324-.042c-.279-.107-.251-.499-.324-.785-.09-.324-.363-.57-.44-.896-.182-.762.788-1.674 1.425-1.944.636-.27 1.631-.206 2.315-.128z"
                        />
                        <ellipse
                          cx="155.705"
                          cy="112.375"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="3.888"
                          ry="1"
                        />
                        <ellipse
                          cx="140.81"
                          cy="113.886"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="3.888"
                          ry="1"
                        />
                        <ellipse
                          cx="123.267"
                          cy="111.842"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="3.888"
                          ry="1"
                        />
                        <ellipse
                          cx="146.772"
                          cy="118.185"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="2.764"
                          ry="1"
                        />
                        <ellipse
                          cx="131.314"
                          cy="117.805"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="2.764"
                          ry="1"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M140.728 113.764s5.453-17.875-.854-25.035c-4.717-5.356-10.072-4.716-12.474-4.05a4.434 4.434 0 0 0-2.86 2.378c-.838 1.808-.688 4.745 5.232 8.171 9.91 5.737 10.53 13.608 10.53 13.608l.426 4.928z"
                        />
                        <path
                          stroke="#565987"
                          stroke-width=".5"
                          d="M128.257 87.211s16.075 5.022 12.474 26.553M137.647 89.014s-2.215 1.49-1.51 3.726M129.869 90.336s1.354-1.377 3-.617M136.232 97.263s2.375-1.205 2.99.305M142.103 99.777s-1.782-.142-1.816.712"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M140.948 113.907s-6.386-12.992-8.14-12.707c-.833.134-1.217.954-1.392 1.782a5.228 5.228 0 0 0 .348 3.162c.904 2.075 3.334 6.023 9.184 7.763z"
                        />
                        <path
                          stroke="#565987"
                          stroke-width=".5"
                          d="M132.855 103.665s6.703 9.72 8 10.148M132.237 105.183h1.565M134.112 108.74l2.452.105M135.604 105.895l-.266 1.278M138.212 109.783l-.047 1.161"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M140.759 113.907s6.386-12.992 8.14-12.707c.834.134 1.218.954 1.392 1.782a5.228 5.228 0 0 1-.349 3.162c-.912 2.075-3.342 6.023-9.183 7.763z"
                        />
                        <path
                          stroke="#565987"
                          stroke-width=".5"
                          d="M148.852 103.665s-6.703 9.72-7.998 10.148M149.468 105.183h-1.565M147.593 108.74l-2.452.105M146.101 105.895l.266 1.278M143.493 109.783l.047 1.161"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M129.793 116.941a1.103 1.103 0 0 1-.363-.549.486.486 0 0 1 .254-.559c.234-.089.486.073.67.237.186.163.406.35.649.316a1 1 0 0 1-.308-.932.392.392 0 0 1 .086-.188c.13-.14.364-.08.52.03.486.346.63 1.017.633 1.62a3.06 3.06 0 0 0 0-.668.685.685 0 0 1 .252-.59.753.753 0 0 1 .382-.09.794.794 0 0 1 .62.176c.188.201.14.54-.024.762a2.373 2.373 0 0 1-.648.513c-.183.11-.34.26-.458.437a.564.564 0 0 0-.034.078h-1.389a3.836 3.836 0 0 1-.842-.593zM154.128 111.709a1.103 1.103 0 0 1-.362-.55.486.486 0 0 1 .252-.557c.234-.09.486.072.673.235.186.164.405.35.648.324a1 1 0 0 1-.308-.931.392.392 0 0 1 .086-.188c.13-.14.364-.08.52.029.486.347.63 1.017.633 1.62a3.06 3.06 0 0 0 0-.668.685.685 0 0 1 .251-.59.753.753 0 0 1 .382-.09.787.787 0 0 1 .62.177c.189.2.139.54-.025.761a2.365 2.365 0 0 1-.648.514c-.183.11-.34.259-.458.437a.564.564 0 0 0-.034.078h-1.389a3.836 3.836 0 0 1-.84-.601zM146.019 116.941a1.106 1.106 0 0 1-.365-.549.486.486 0 0 1 .255-.559c.233-.089.486.073.672.237.186.163.405.35.648.316a.993.993 0 0 1-.308-.932c.01-.07.04-.134.086-.188.13-.14.363-.08.518.03.486.346.632 1.017.634 1.62a3.06 3.06 0 0 0 .01-.668.684.684 0 0 1 .249-.59.758.758 0 0 1 .382-.09.792.792 0 0 1 .62.176c.189.201.14.54-.024.762a2.39 2.39 0 0 1-.648.513 1.41 1.41 0 0 0-.458.437.418.418 0 0 0-.034.078h-1.39a3.826 3.826 0 0 1-.847-.593zM123.016 106.364s-.521.68.24 1.71c.761 1.028 1.39 1.896 1.134 2.538 0 0-1.149-1.91-2.083-1.944-.935-.034-.32-1.16.71-2.304z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M123.016 106.364a.81.81 0 0 0-.107.214c-.912 1.071-1.398 2.072-.521 2.096.818.025 1.798 1.486 2.031 1.854a.512.512 0 0 1-.027.084s-1.149-1.91-2.084-1.944c-.934-.034-.32-1.16.708-2.304z"
                          opacity=".1"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M122.048 107.233c0 .24.027.434.06.434.032 0 .06-.195.06-.434 0-.24-.033-.127-.067-.127s-.053-.113-.053.127z"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M121.715 107.52c.211.113.394.182.41.153.017-.029-.14-.146-.351-.26-.21-.116-.128-.031-.144 0-.017.03-.125-.009.085.106z"
                        />
                        <path
                          fill="#00D09C"
                          fill-rule="nonzero"
                          d="M125.769 106.364s.52.68-.242 1.71c-.761 1.028-1.388 1.896-1.134 2.538 0 0 1.149-1.91 2.085-1.944.937-.034.32-1.16-.71-2.304z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M125.769 106.364c.045.066.08.138.105.214.914 1.071 1.4 2.072.522 2.096-.81.025-1.797 1.486-2.032 1.854 0 .029.018.056.028.084 0 0 1.148-1.91 2.085-1.944.936-.034.32-1.16-.708-2.304z"
                          opacity=".1"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M126.736 107.233c0 .24-.026.434-.06.434s-.06-.195-.06-.434c0-.24.034-.127.066-.127.033 0 .054-.113.054.127z"
                        />
                        <path
                          fill="#FFD037"
                          fill-rule="nonzero"
                          d="M127.07 107.52c-.211.113-.396.182-.41.153-.015-.029.14-.146.351-.26.21-.116.128-.031.144 0 .017.03.125-.009-.085.106z"
                        />
                        <path
                          fill="#A8A8A8"
                          fill-rule="nonzero"
                          d="M126.57 110.523s-1.457-.045-1.895-.358c-.437-.313-2.24-.685-2.349-.183-.108.502-2.19 2.493-.544 2.506 1.646.013 3.82-.256 4.259-.523.439-.268.53-1.442.53-1.442z"
                        />
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M121.751 112.313c1.646.013 3.822-.256 4.26-.523.333-.203.467-.932.511-1.269h.049s-.093 1.175-.53 1.442c-.438.267-2.615.536-4.26.523-.474 0-.639-.173-.63-.423.067.153.247.247.6.25z"
                          opacity=".2"
                        />
                        <ellipse
                          cx="27.101"
                          cy="114.549"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="5.625"
                          ry="1"
                        />
                        <ellipse
                          cx="40.72"
                          cy="122.009"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="5.625"
                          ry="1"
                        />
                        <ellipse
                          cx="100.806"
                          cy="102.57"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="3.724"
                          ry="1"
                        />
                        <ellipse
                          cx="83.396"
                          cy="114.549"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="3.724"
                          ry="1"
                        />
                        <ellipse
                          cx="75.547"
                          cy="122.009"
                          fill="#4E6F8A"
                          fill-rule="nonzero"
                          opacity=".1"
                          rx="3.724"
                          ry="1"
                        />
                      </g>
                    </svg>
                  </div> */}
                  <p className="text-lg md:text-4xl text-center font-medium xl:text-5xl">
                    <span className="text-[#4f82aa] font-montserrat  font-bold leading-[70px] md:leading-[90px]">
                      Do you want to
                    </span>
                    <br />

                   <span className='text-[#4f82aa] font-montserrat font-bold '>take the</span> {" "}
                    <span className="font-montserrat bg-[#4eba42] text-white p-2 rounded-xl font-bold">
                      Quiz
                    </span>
                  </p>
                  <p className='text-[#14598D] text-center font-montserrat font-semibold mt-4'>we specialize in providing personalized<br/>tax consulting services to help you</p>
                  <div className="flex justify-center space-x-4 mb-10 md:mb-0">
                    <button
                      onClick={handleToggleClass}
                      className="px-10 py-2 bg-main text-white rounded-md font-bold"
                    >
                      Yes
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-10 py-2 border-main border-2  rounded-md text-[#156aae] font-montserrat font-bold "
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
