import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";

const Section3 = () => {
  const cardData = [
    {
      id: 1,
      img: ser1,
      title: "Tax Consulting",
      description:
        "Our individualized tax planning and preparation services are designed to maximize your returns and minimize your liabilities.",
    },
    {
      id: 2,
      img: ser2, // Add your image source
      title: "Business Strategy",
      description:
        "We help businesses create effective strategies that lead to success in today's competitive market.",
    },
    {
      id: 3,
      img: ser3, // Add your image source
      title: "Financial Advisory",
      description:
        "Our expert financial advisors guide you through complex decisions and offer tailored solutions.",
    },
    {
      id: 1,
      img: ser1,
      title: "Tax Consulting",
      description:
        "Our individualized tax planning and preparation services are designed to maximize your returns and minimize your liabilities.",
    },
    {
      id: 2,
      img: ser2, // Add your image source
      title: "Business Strategy",
      description:
        "We help businesses create effective strategies that lead to success in today's competitive market.",
    },
    {
      id: 3,
      img: ser3, // Add your image source
      title: "Financial Advisory",
      description:
        "Our expert financial advisors guide you through complex decisions and offer tailored solutions.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center font-montserrat mt-20 mb-20 gap-6 md:gap-10">
      <div className="bg-[#cdd4f1] text-main font-bold px-4 py-2 flex justify-center items-center rounded-[48px] w-[300px]">
        Why Choose Tax Rishi?
      </div>
      <div className="w-full flex flex-col text-2xl md:text-5xl font-bold text-center gap-1 md:gap-4">
        <h1>Unmatched Expertise and</h1>
        <h1>Personal Service</h1>
      </div>

      <p className="w-[95%] md:w-full text-[14px] md:text-base text-center">
        Trust us to make tax season stress-free and beneficial for you
      </p>
      <div className="w-full px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-[#f8f8f8] w-full md:w-[430px] p-6 shadow-md rounded-lg transition-transform transform group cursor-pointer hover:bg-main hover:scale-105"
          >
            {" "}
            <div className="w-12 h-12 bg-main rounded-full flex justify-center items-center">
              <img
                src={card.img}
                alt={card.title}
                className="w-4 object-contain"
              />
            </div>
            <h3 className="text-lg text-main group-hover:text-white font-semibold  mb-2">
              {card.title}
            </h3>
            <p className="text-[12px] group-hover:text-white">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
