
const Section3 = () => {
    const cardData = [
        {   
            id: 1,
            logo: "/images/section3/1.png",
            title: "Tax Consulting",
            description: "Our individualized tax planning and preparation services are designed to maximize your returns and minimize your liabilities."
        },
        {   
            id: 2,
            logo: "/images/section3/2.png",  // Add your image source
            title: "Business Strategy",
            description: "We help businesses create effective strategies that lead to success in today's competitive market."
        },
        {   
            id: 3,
            logo: "/images/section3/3.png",  // Add your image source
            title: "Financial Advisory",
            description: "Our expert financial advisors guide you through complex decisions and offer tailored solutions."
        },
        {   
            id: 1,
            logo: "/images/section3/1.png",
            title: "Tax Consulting",
            description: "Our individualized tax planning and preparation services are designed to maximize your returns and minimize your liabilities."
        },
        {   
            id: 2,
            logo: "/images/section3/2.png",  // Add your image source
            title: "Business Strategy",
            description: "We help businesses create effective strategies that lead to success in today's competitive market."
        },
        {   
            id: 3,
            logo: "/images/section3/3.png",  // Add your image source
            title: "Financial Advisory",
            description: "Our expert financial advisors guide you through complex decisions and offer tailored solutions."
        }
    ];
    
  return (
    <div className="w-full flex flex-col items-center justify-center font-montserrat mt-40 mb-20 gap-10">
      <div className="bg-[#cdd4f1] text-main font-bold px-4 py-2 flex justify-center items-center rounded-[48px] w-[300px]">
      Why Choose Tax Rishi?
      </div>
      <div className="flex flex-col text-5xl font-bold text-center gap-4"><h1>Unmatched Expertise and</h1>
      <h1>Personal Service</h1>
      </div>
      
      <p className="">Trust us to make tax season stress-free and beneficial for you</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cardData.map((card) => (
                <div 
                    key={card.id} 
                    className="bg-white w-[400px] shadow-md rounded-lg transition-transform transform hover:scale-110"
                >
                    <img src={card.logo} alt={card.title} className="w-24 mb-4" />
                    <h3 className="text-xl font-semibold text-center mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-center">{card.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Section3
