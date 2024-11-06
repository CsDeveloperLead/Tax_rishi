const MsmeSec2 = () => {
  return (
    <div className="px-4 md:px-20 font-montserrat">
      {/* section1 */}
      <div className="w-full flex flex-col-reverse md:flex-row md:gap-20 items-center mt-10 md:my-20">
        <div className="w-full md:w-1/2 flex flex-col items-center md:text-start text-center  gap-4">
          <div className="text-2xl md:text-5xl font-bold md:leading-[48px]">
            What this scheme is about?
          </div>
          <div className="flex flex-col gap-4 text-gray-600 text-sm md:leading-7">
            <p>
              All the Lorem Ipsum generators on the Montserratnet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Montserratnet. Et harum quidem rerum facilis est
              et expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus.
            </p>
            <p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat.
            </p>
            <p>
              All the Lorem Ipsum generators on the Montserratnet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Montserratnet. Et harum quidem rerum facilis est
              et expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-10 md:mb-0 rounded-3xl flex justify-center items-center">
          <img
            src="https://via.placeholder.com/600x500"
            alt=""
            className="rounded-3xl"
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="mb-10 md:mb-20">
        <div className="px-4 md:px-20 bg-[#c4c4c4] rounded-3xl  w-full md:h-[400px] h-[200px] ">
          <img
            src=""
            alt=""
            className="rounded-3xl"
          />
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col text-center md:text-start gap-4 md:gap-8">
        <div className="text-2xl md:text-5xl font-bold md:leading-[48px]">
          What this scheme is about?
        </div>
        <div className="flex flex-col gap-2 text-gray-600 text-sm md:leading-7">
          <p>
            All the Lorem Ipsum generators on the Montserratnet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Montserratnet. Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus.
          </p>
          <p>
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores alias consequatur aut perferendis
            doloribus asperiores repellat.
          </p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-base flex gap-1 md:gap-6 mt-4 md:mt-0 mb-10 md:text-justify">
            <span>
              <img src="/src/assets/comma1.png" alt="" className="w-28 md:w-16" />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Tincidunt habitant egestas erat
            lectus congue nisl dapibus nostra bibendum. In est in vitae dictumst
            varius lorem congue rutrum eget primis augue. At orci cubilia duis
            orci consequat libero malesuada mi.
            <span className="flex items-end">
              {" "}
              <img src="/src/assets/comma2.png" alt="" className="w-28 md:w-16" />
            </span>
          </p>
        </div>
      </div>

      {/* section4 */}
      <section className="py-6 md:py-12 text-center md:text-start ">
        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold mb-4 ">How to learn?</h2>

        {/* Paragraphs */}
        <div className="text-gray-600 text-sm space-y-4">
          <p>
            All the Lorem Ipsum generators on the Montserratnet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Montserratnet. Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus.
          </p>
          <p>
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores alias consequatur aut perferendis
            doloribus asperiores repellat.
          </p>
         
        </div>

        {/* Checklist and Image */}
        <div className="flex flex-col md:flex-row text-center md:text-start  items-center mt-8 justify-between">
          {/* Checklist */}
          
          <div className="space-y-4 text-gray-600 w-full md:w-1/2">
          <p className="md:mr-10 text-sm text-gray-600 md:leading-7">
            All the Lorem Ipsum generators on the Montserratnet tend to repeat
            predefined chunks as  Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, making this the first true
            generator on the Montserratnet.
          </p>
            {[
              "Fermentum Magna Id Tortor.",
              "Quis Ridiculus Pharetra Luctus Augue Duis.",
              "Lorem Non Sit Vivamus Convallis.",
              "Vivamus Hendrerit Nunc.",
              "Lorem Ipsum Pharetra Luctus Amet Duis.",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-white bg-main w-6 h-6 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-400 w-full h-[350px] md:w-1/2 rounded-2xl mt-8 md:mt-0"></div>
        </div>

        {/* Bottom Text */}
        <p className="text-sm md:text-base text-justify mt-8">
          Nostra Dapibus Varius Et Semper Semper Rutrum Ad Risus Felis Eros.
          Cursus Libero Viverra Tempus Netus Diam Vestibulum Lorem Tincidunt
          Congue Porta. Nam Ligula Egestas Commodo Massa. Lorem Non Sit Vivamus
          Convallis Elit Mollis. Viverra Sodales Feugiat Natoque Sem Morbi Hac
          Nunc Ultricies Nibh Netus Facilisis Blandit. Felis Purus Et Iaculis.
        </p>
      </section>
    </div>
  );
};

export default MsmeSec2;
