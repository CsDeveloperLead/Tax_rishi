import img1 from "../assets/start1.png";
import img2 from "../assets/start2.png";
import img3 from "../assets/start3.png";
import img4 from "../assets/start4.png";
import img5 from "../assets/start5.png";
import img6 from "../assets/start6.png";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const TaxRishiFoundation = () => {
    const tableData = [
        {
          srNo: 1,
          name: "Mr. Rishi Pal Bansal",
          designation: "President",
          pan: "AAEPB2662B",
          aadhaar: "7451 5514 9108",
        },
        {
          srNo: 2,
          name: "Mr. Bhavya Bansal",
          designation: "General Secretary",
          pan: "APMPB0774R",
          aadhaar: "4429 7008 7983",
        },
        {
          srNo: 3,
          name: "Mrs. Romila Bansal",
          designation: "Senior Vice President",
          pan: "AERPB6767L",
          aadhaar: "2693 2435 2310",
        },
        {
          srNo: 4,
          name: "Mrs. Pooja Bansal",
          designation: "Treasurer",
          pan: "BCNPG8614E",
          aadhaar: "6629 8729 6375",
        },
      ];
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex flex-col  font-montserrat text-[#14598D]">
      <div className="w-full">
        <Carousel />
      </div>
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="w-[80%] flex flex-col gap-8 ">
          <div className="p-6 font-montserrat text-[#14598D]">
            <h1 className="text-2xl font-bold mb-4">Trust Details</h1>

            {/* Name Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">1. NAME:</h2>
              <p>
                The name of the Trust shall be{" "}
                <strong>“TAXRISHI FOUNDATION”</strong>.
              </p>
            </div>

            {/* Office Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">2. OFFICE:</h2>
              <p>
                The office of the Trust for the time being shall be{" "}
                <strong>
                  203, Shree Mahaveer Arcade, 2nd Floor, C-19, Sector-15, Near
                  SBI Bank, Atal Chowk, Vasundhara, Ghaziabad, UP-201012
                </strong>{" "}
                with the power given to the Trustees to shift the same to any
                other place as they may mutually agree upon.
              </p>
            </div>

            {/* Date of Commencement */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">
                3. DATE OF COMMENCEMENT:
              </h2>
              <p>
                The date of commencement of the trust is the{" "}
                <strong>21st August 2024</strong>.
              </p>
            </div>

            {/* Objects Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">4. OBJECTS:</h2>
              <p className="mb-4">The objects of the trust are:</p>

              {/* Taxation Section */}
              <h3 className="text-md font-semibold mb-2">a) Taxation</h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  To provide educational resources and training to individuals
                  and businesses, helping them understand tax laws and
                  compliance requirements.
                </li>
                <li>
                  To work to alleviate the fear of tax authorities and
                  harassment by offering guidance on dealing with tax-related
                  issues.
                </li>
                <li>
                  To offer assistance in resolving tax disputes, ensuring fair
                  treatment, and protecting taxpayers' rights.
                </li>
                <li>
                  To assist businesses and individuals with tax filing
                  procedures, making the process easier and more efficient.
                </li>
                <li>
                  To conduct awareness campaigns to inform the public about tax
                  benefits, incentives, and the importance of tax compliance.
                </li>
                <li>
                  To launch campaigns to combat abusive tax practices and ensure
                  fair treatment of taxpayers.
                </li>
              </ul>

              {/* Economic Reforms Section */}
              <h3 className="text-md font-semibold mt-4 mb-2">
                b) Economic Reforms
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  <strong>Policy Advocacy:</strong> To advise the government on
                  necessary economic reforms that can stimulate business growth
                  and overall economic prosperity.
                </li>
                <li>
                  <strong>Research and Analysis:</strong> To conduct research on
                  taxation policies and their impact on the economy, providing
                  data-driven insights to policymakers.
                </li>
                <li>
                  <strong>Global Trade Policies:</strong> To provide
                  recommendations on global trade policies that favor India's
                  economic interests and support local businesses in global
                  markets.
                </li>
                <li>
                  <strong>Encouraging Investment:</strong> To promote tax
                  policies that attract both domestic and foreign investments,
                  contributing to economic growth and job creation.
                </li>
              </ul>

              {/* Business Support Section */}
              <h3 className="text-md font-semibold mt-4 mb-2">
                c) Business Support
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  <strong>Ease of Doing Business:</strong> To help businesses
                  navigate complex tax regulations, enabling them to focus on
                  growth and innovation.
                </li>
                <li>
                  <strong>Consultation Services:</strong> To offer consultation
                  services to businesses on tax planning, compliance, and
                  strategic decision-making.
                </li>
                <li>
                  <strong>Support for Start-ups:</strong> To provide specialized
                  support to start-ups, helping them understand tax incentives
                  and compliance requirements to foster growth.
                </li>
                <li>
                  <strong>Collaboration with Industry Bodies:</strong> To
                  collaborate with industry associations to address common tax
                  challenges and advocate for favorable policies.
                </li>
                <li>
                  <strong>Workshops and Seminars:</strong> To organize workshops
                  and seminars to keep businesses updated on the latest tax
                  laws, economic reforms, and global trade developments.
                </li>
              </ul>
            </div>

            {/* Closing Note */}
            <div className="mt-6">
              <p>
                <strong>TAXRISHI FOUNDATION</strong> will play a vital role in
                fostering a business-friendly environment, promoting economic
                growth, and ensuring a transparent and fair taxation system.
              </p>
            </div>
            <h3 className="text-md font-semibold mt-4 mb-2">
              d) Other Objects
            </h3>
            <ol className="list-disc list-inside pl-4">
              <li>
                To provide education and health services and help in the
                development of poor people in rural and urban areas without any
                distinction of caste, color, creed, or religion.
              </li>
              <li>
                To design and implement development projects aimed at improving
                the quality of life of the socially marginalized and
                economically backward classes.
              </li>
              <li>
                To develop and promote appropriate and environmentally sound
                technologies for enhancing the quality of life.
              </li>
              <li>
                To implement development projects on traditional skills with
                participation from local people and groups.
              </li>
              <li>
                To exchange all information with other organizations, groups,
                and individuals working in the same area or other areas in India
                and abroad.
              </li>
              <li>
                To network and exchange skills with other Non-Government
                Organizations, Private Limited Companies, Institutions, Donor
                Agencies, Government Institutions, and the Government.
              </li>
              <li>
                To infuse useful knowledge among the people, including medical,
                paramedical, technical, computer, vocational, and
                self-employment oriented education, and to establish, manage,
                and run schools, institutions, and centers for the benefit of
                the people.
              </li>
              <li>
                To establish a Documentation Centre and Facility Centre for the
                awareness of environment, sanitation, hygiene, and related
                issues.
              </li>
              <li>
                To grant relief during natural calamities such as famine, flood,
                fire, pestilence, and other similar situations, and to give
                donations, subscriptions, or contributions to institutions or
                persons during such relief work.
              </li>
              <li>
                To establish or assist in the establishment or support and
                maintenance of technical institutes and research institutes for
                the benefits of the people.
              </li>
              <li>
                To raise funds, accept donations, grants, subscriptions, gifts,
                benefactions, and other offerings in cash or kind of movable and
                immovable property to serve the purpose of the Trust.
              </li>
              <li>
                To develop the aforesaid objects by joining with other societies
                or trusts who also believe in the aforesaid objects and for that
                purpose to enter into all activities including affiliating,
                emulating wholly or partially taking possession on terms of
                lease license, management and control of properties,
                institutions and organizations and obtaining of gifts of money
                and acquiring movable properties.
              </li>
              <li>
                To render assistance and / or grant aid to other public
                charitable trusts or institutions.
              </li>
              <li>
                To do all such other acts and things as may be required in order
                to further its above objectives.
              </li>
            </ol>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">5. PROPERTIES:</h2>
            </div>

            <p className="my-2">The Trust properties shall consist of:-</p>
            <ol className="list-disc list-inside pl-4">
              <li>
                The amount Transferred by the SETTLOR as mentioned above,
                towards the Corpus fund of the Trust.
              </li>
              <li>
                Any cash, kind, properties, movable and immovable that may be
                acquired by purchase or otherwise or all manner of rights, title
                or interest in or over any property movable or immovable.
              </li>
              <li>
                All additions and accretions to the Trust properties and the
                income there from.
              </li>
              <li>
                All donations, gifts, legacies or grants, in cash or kind
                accepted by the Trustees upon Trust.
              </li>
            </ol>

            <div className="mt-6">
              The properties of the Trust shall be utilized for the objects set
              forth herein above and subject to the provisions and conditions
              herein mentioned.
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">
                6. BENEFICIARIES OF THE TRUST:
              </h2>
            </div>
            <p className="my-2">
              All the mankind without any discrimination on the basis of
              religion, caste, colour, creed or sex shall be beneficiaries of
              this trust. The trust shall exist solely for philanthropic
              purposes and not for purposes of profit.
            </p>
            <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">
              7. QUALIFICATION OF TRUSTEE:
            </h2>
          </div>
          <p className="my-2">
            For becoming a trustee of the trust, a person has to qualify the
            following conditions:-
          </p>
          <ol className="list-disc list-inside pl-4">
            <li>A person who have attained the age of majority.</li>
            <li>Person is to be an Indian resident.</li>
            <li>Person of good moral character.</li>
            <li>Person should be of sound mind.</li>
            <li>Person should not be declared an insolvent.</li>
            <li>
              Person shall not be barred or disqualified from entering into the
              contract by the law being in force at that time.
            </li>
          </ol>
          <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Designation</th>
              <th className="border border-gray-300 px-4 py-2">PAN</th>
              <th className="border border-gray-300 px-4 py-2">Aadhaar</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-50`}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {row.srNo}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.designation}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.pan}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.aadhaar}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </div>
          
        </div>
        <div className="w-[25%]">
          <div className="bg-[#f9f9f9] rounded-xl px-6 py-10 shadow-xl">
            <h1 className="font-bold text-2xl">BROWSE BY TOPICS</h1>
            <ul className="space-y-6 pl-4 mt-8">
              <Link to="/msme/registration">
                <li className=" font-semibold my-6">MSME Registration</li>
              </Link>
              <Link to="/msme/document">
                <li className=" font-semibold my-6">MSME Document Required</li>
              </Link>

              <Link to="/msme/scheme">
                <li className=" font-semibold my-6">MSME Schemes</li>
              </Link>
              <Link to="/msme/gst">
                <li className=" font-semibold my-6">NEW Gst Act</li>
              </Link>
              <Link to="/startup/registration">
                <li className=" font-semibold my-6">Startup Registration</li>
              </Link>
              <Link to="/startup/benefits">
                <li className=" font-semibold my-6">Startup Benefits</li>
              </Link>
              <Link to="/startup/funding">
                {" "}
                <li className=" font-semibold my-6">Startup Funding</li>
              </Link>
              <Link to="/startup/tax">
                <li className=" font-semibold my-6">
                  Tax Exemption Eligibility
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxRishiFoundation;
