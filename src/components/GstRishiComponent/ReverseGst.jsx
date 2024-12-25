import React from 'react'
import img16 from '../../assets/gstrishi16.png'
import img17 from '../../assets/gstrishi17.png'
import { Link } from 'react-router-dom'

function ReverseGst() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]'>
            <div className='w-[80%] flex flex-col gap-4'>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    All About Reverse Charge Mechanism (RCM) under GST
                </h2>

                <p className='text-base leading-8'>
                    Reverse charge is a mechanism where the recipient of the goods or services is liable to pay Goods and Services Tax (GST) instead of the supplier.
                </p>

                <h3 className='text-2xl leading-[30px] font-semibold'>
                    Latest Updates
                </h3>

                <ul className='list-disc pl-6'>
                    <li className='text-base leading-8'>
                        <span className='font-semibold'>23rd July 2024:</span> In the Union Budget 2024, the Finance Minister proposed an amendment to Section 13 of the CGST Act to provide for the time of supply of services where the invoice is required to be issued by the recipient of services in cases of reverse charge supplies from unregistered suppliers.
                        <br />
                        <span className='italic'>*This will come into force once notified by the CBIC.</span>
                    </li>
                    <li className='text-base leading-8'>
                        <span className='font-semibold'>26th June 2024:</span> The CBIC issued the circular no. 211/5/2024-GST on 26th June 2024 to clarify the recommendation by the GST Council regarding the availing of input tax credit under section 16(4) of CGST Act for which the recipient has issued the invoice under RCM.
                    </li>
                    <li className='text-base leading-8'>
                        <span className='font-semibold'>22nd June 2024:</span> In the 53rd GST Council meeting held on 22nd June 2024, the Council recommended clarifying that in cases of supplies received from unregistered suppliers, where tax has to be paid by the recipient under reverse charge mechanism (RCM), and the invoice is to be issued by the recipient only, the relevant financial year for calculation of the time limit for availing of input tax credit under section 16(4) of CGST Act is the financial year in which the recipient has issued the invoice.
                    </li>
                </ul>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What is Reverse Charge Mechanism?
                </h2>

                <p className='text-base leading-8'>
                    Typically, the supplier of goods or services pays the tax on supply. Under the reverse charge mechanism, the recipient of goods or services becomes liable to pay the tax, i.e., the chargeability gets reversed.
                    <br /> <br />
                    The objective of shifting the burden of GST payments to the recipient is to widen the scope of the levy of tax on various unorganized sectors, to exempt specific classes of suppliers, and to tax the import of services (since the supplier is based outside India).
                    <br /> <br />
                    Only certain types of business entities are subject to the reverse charge mechanism. Find out the business constitution of any GST number using the GST search tool.
                </p>
                <img src={img16} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    When is Reverse Charge Applicable?
                </h2>

                <p className='text-base leading-8'>
                    Section 9(3), 9(4) and 9(5) of Central GST and State GST Acts govern the reverse charge scenarios for intrastate transactions. Also, sections 5(3), 5(4) and 5(5) of the Integrated GST Act govern the reverse charge scenarios for inter-state transactions. Let’s have a detailed discussion regarding these scenarios:
                </p>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    A. Supply of certain goods and services specified by the CBIC
                </h3>
                <p className='text-base leading-8'>
                    As per the powers conferred in section 9(3) of CGST Acts, the CBIC has issued a list of goods and services on which reverse charge is applicable.
                    <br /> <br />
                    Click here to access the list of goods and services on which reverse charge is applicable.
                </p>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    B. Supply from an unregistered dealer to a registered dealer
                </h3>
                <p className='text-base leading-8'>
                    Section 9(4) of the CGST Act states that if a vendor is not registered under GST supplies goods to a person registered under GST, then reverse charge would apply. This means that the GST will have to be paid directly by the receiver instead of the supplier. The registered buyer who has to pay GST under reverse charge has to do self-invoicing for the purchases made.
                    <br /> <br />
                    In intra-state purchases, CGST and SGST have to be paid under reverse charge mechanism (RCM) by the purchaser. Also, in the case of inter-state purchases, the buyer has to pay the IGST. The government notifies the list of goods or services on which this provision gets attracted from time to time.
                    <br /> <br />
                    In the real estate sector, the government notified that the promoter should buy inward supplies to the extent of 80% from registered suppliers only. Suppose the purchases from registered dealers fall short of 80%, then the promoter should pay GST at 18% on the reverse charge to the extent of the shortfall of 80% of inward supplies. However, if the promoter purchases cement from an unregistered supplier, they must pay tax at 28%. This calculation is done irrespective of the 80% calculation.
                    <br /> <br />
                    The promoter is liable to pay GST on reverse charge basis on TDR or floor space index (FSI) supplied on or after 1st April 2019. Even if a landowner is not engaged in a regular business of land-related activities, transfer of development rights by such an individual to the promoter is liable to GST as it is considered as supply of service under section 7 of CGST Act. Also, in case of outward supply of TDR by one developer to another, GST is applicable at 18% on reverse charge.
                </p>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    C. Supply of services through an e-commerce operator
                </h3>
                <p className='text-base leading-8'>
                    All types of businesses can use e-commerce operators as an aggregator to sell products or provide services. Section 9(5) of the CGST Act states that if a service provider uses an e-commerce operator to provide specified services, the reverse charge will apply to the e-commerce operator and they will be liable to pay GST. This section covers services such as:
                </p>

                <ul className='list-disc pl-6 text-base leading-8'>
                    <li>Transportation services to passengers by a radio-taxi, motor cab, maxi cab, and motorcycle (e.g., Ola, Uber).</li>
                    <li>Providing accommodation services in hotels, inns, guest houses, clubs, campsites, or other commercial places meant for residential or lodging purposes (e.g., Oyo, MakeMyTrip).</li>
                    <li>Housekeeping services, such as plumbing and carpentry, except where the person supplying such services through electronic commerce operators is liable for registration due to turnover beyond the threshold limit (e.g., Urban Company).</li>
                </ul>

                <p className='text-base leading-8'>
                    Additionally, if the e-commerce operator does not have a physical presence in the taxable territory, a person representing such an electronic commerce operator will be liable to pay tax for any purpose. If there is no representative, the operator will appoint a representative who will be held liable to pay GST.
                </p>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    Time of Supply Under RCM
                </h3>

                <h4 className='text-xl leading-8 font-semibold mt-4'>
                    A. Time of supply in case of goods
                </h4>
                <p className='text-base leading-8'>
                    In case of reverse charge, the time of supply for goods shall be the earliest of the following dates:
                </p>
                <ul className='list-disc pl-6 text-base leading-8'>
                    <li>The date of receipt of goods</li>
                    <li>The date of payment*</li>
                    <li>The date immediately after 30 days from the date of issue of an invoice by the supplier</li>
                </ul>
                <p className='text-base leading-8'>
                    If it is not possible to determine the time of supply, the time of supply shall be the date of entry in the books of account of the recipient.
                    <br /> <br />
                    *This point is no longer applicable based on Notification No. 66/2017 – Central Tax issued on 15th November 2017.
                    <br /> <br />
                    Illustration:
                    <br /> <br />
                    Date of receipt of goods: 15th May 2021
                    Date of invoice: 1st June 2021
                    Date of entry in books of receiver: 18th May 2021
                    The time of supply of service, in this case, will be 15th May 2021.
                </p>

                <h4 className='text-xl leading-8 font-semibold mt-4'>
                    B. Time of supply in case of services
                </h4>
                <p className='text-base leading-8'>
                    In case of reverse charge, the time of supply shall be the earliest of the following dates:
                </p>
                <ul className='list-disc pl-6 text-base leading-8'>
                    <li>The date of payment</li>
                    <li>The date immediately after 60 days from the date of issue of invoice by the unregistered supplier</li>
                    <li>The date of issue of invoice by the recipient*</li>
                </ul>

                <p className='text-base leading-8'>
                    If it is not possible to determine the time of supply, the time of supply shall be the date of entry in the books of account of the recipient.
                    <br /> <br />
                    *This will come into force once notified by the CBIC.
                    <br /> <br />
                    Illustration:
                    <br /> <br />
                    Date of payment: 15th July 2021
                    Date immediately after 60 days from the date of issue of the invoice (e.g., the invoice date is 15th May 2021, then 60 days from this date will be 14th July 2021)
                    Date of entry in books of receiver: 18th July 2021
                    Date of issue of invoice by the recipient: 24th July 2024
                    The time of supply of service, in this case, will be 14th July 2021.
                </p>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    Registration Rules Under RCM
                </h3>
                <p className='text-base leading-8'>
                    Section 24 of the CGST Act, 2017 states that a person liable to pay GST under the reverse charge mechanism has to compulsorily register under GST. The threshold limits of Rs.20 lakh or Rs.40 lakh, as the case may be, will not apply to them.
                </p>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    Who Should Pay GST Under RCM?
                </h3>
                <p className='text-base leading-8'>
                    The recipient of goods/services should pay GST under RCM. However, as per the provisions of GST law, the person supplying the goods must mention in the tax invoice whether tax is payable under RCM.
                    <br /> <br />

                    The following points should be kept in mind while making GST payments under RCM:
                </p>
                <ul className='list-disc pl-6 text-base leading-8'>
                    <li className='mt-2'>The recipient of goods or services can avail of the ITC on the tax amount paid under RCM only if such goods or services are used for business or the furtherance of business.</li>
                    <li className='mt-2'>A composition dealer should pay tax at the normal rates and not the composition rates while discharging liability under RCM. Also, they are ineligible to claim any input tax credit of tax paid.</li>
                    <li className='mt-2'>GST compensation cess can apply to the tax payable or paid under the RCM.</li>
                </ul>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    Input Tax Credit (ITC) Under RCM
                </h3>
                <p className='text-base leading-8'>
                    A supplier cannot take the GST paid under the RCM as ITC. The recipient can avail of ITC on GST amount paid under RCM on receipt of goods or services, only if such goods or services are used or will be used for business purposes.
                    <br /> <br />
                    The CBIC, via circular no. 211/5/2024-GST, dated 26 June 2024, clarified that the relevant financial year for calculating the time limit for availing of input tax credit under the provisions of section 16(4) of the CGST Act would be the financial year in which such self-invoice was issued.
                    <br /> <br />
                    In case the recipient issues the invoice after the time of supply of the said supply and pays tax accordingly, they will be required to pay interest on such delayed payment of tax. Further, in cases of delayed issuance of an invoice by the recipient, they may also be liable to penal action under Section 122 of the CGST Act.
                    <br /> <br />
                    The recipient cannot use the ITC to pay output GST on goods or services under reverse charge and should be paid in cash only.
                </p>

                <h3 className='text-2xl leading-8 font-semibold mt-4'>
                    What is Self Invoicing?
                </h3>
                <p className='text-base leading-8'>
                    Self-invoicing is to be done when purchased from an unregistered supplier, and such purchase of goods or services falls under reverse charge. This is because your supplier cannot issue a GST-compliant invoice to you, and thus you become liable to pay taxes on their behalf. Hence, self-invoicing, in this case, becomes necessary.
                    <br /> <br />
                    Also, section 31(3)(g) states that a recipient who is liable to pay tax under section 9(3) or 9(4) shall issue a payment voucher at the time of making payment to the supplier.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    How ClearTax Helps With Self Invoicing?
                </h2>

                <p className='text-base leading-8'>
                    You can create self invoices with ease using ClearTax GST software. Just follow the steps below:
                </p>

                <p className='text-base leading-8'><span className='font-semibold'>Step 1</span> – Login to ClearTax GST → ‘‘Create and View Invoices’’ → ‘‘Choose a Business’’ → ‘Invoices’ → ‘‘Purchase’’ → then click on ‘‘+ New Purchase Invoice’’ to create a new invoice.</p>
                <img src={img17} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'><span className='font-semibold'>Step 2</span> – As you can see, you need to fill data in multiple fields. Let’s understand each field in detail:</p>
                <ul className='list-disc pl-6 text-base leading-8'>
                    <li className='mt-2'>Enter the serial number of the bill into the field marked ‘‘Invoice Serial Number’’. Since your supplier has not issued an invoice and you are creating an invoice on their behalf, you need to add a serial number on your own. You can create and maintain a serial number series for reverse charge bills for easier invoicing.</li>
                    <li className='mt-2'>Enter the ‘‘Invoice Date’’. This date must be based on the time of supply.</li>
                    <li className='mt-2'>Enter any detail, such as the order number, etc., into the field marked ‘‘Reference Number’’.</li>
                    <li className='mt-2'>Under ‘‘Due Date’’, you have to mention the date by when you have to make the payment to the supplier for the purchase you made (mentioning this date is not mandatory).</li>
                    <li className='mt-2'>Under ‘‘Vendor Name’’, enter the supplier’s name. Remember, this name cannot be your own name, even if you are doing self-invoicing under reverse charge. If the vendor’s name is not set already, you can add a new vendor.</li>
                    <li className='mt-2'>Enter details of goods/ services purchased.</li>
                    <li className='mt-2'>From the drop-down under ‘‘Advanced Settings’’, select ‘‘Reverse Charge’’.</li>
                    <li className='mt-2'>Now, fill in all the details displayed on your screen.</li>
                </ul>
                <p className='text-base leading-8'><span className='font-semibold'>Step 3</span> – After filling in all the other details, click on Save.</p>
            </div>
            <div className="w-[25%]">
                <div className="bg-[#f9f9f9] rounded-xl px-6 py-10 shadow-xl">
                    <h1 className="font-bold text-2xl">BROWSE BY TOPICS</h1>
                    <ul className="space-y-6 pl-4 mt-8">
                        <Link to="/gstrishi/gst-basics">
                            <li className=" font-semibold my-6">Gst Basic</li>
                        </Link>
                        <Link to="/gstrishi/gst-registration">
                            <li className=" font-semibold my-6">Gst Registration</li>
                        </Link>

                        <Link to="/gstrishi/gst-input-tax-credit">
                            <li className=" font-semibold my-6">Gst Input tax</li>
                        </Link>
                        <Link to="/gstrishi/gst-invoice">
                            <li className=" font-semibold my-6">Gst Invoice</li>
                        </Link>
                        <Link to="/gstrishi/invoicing-gst">
                            <li className=" font-semibold my-6">Invoicing Gst</li>
                        </Link>
                        <Link to="/gstrishi/gst-composition-scheme">
                            <li className=" font-semibold my-6">Gst Composition Scheme</li>
                        </Link>
                        <Link to="/gstrishi/gst-returns">
                            {" "}
                            <li className=" font-semibold my-6">GST Returns</li>
                        </Link>
                        <Link to="/gstrishi/reverse-charge-gst">
                            <li className=" font-semibold my-6">Reverse Charge Gst</li>
                        </Link>
                        <Link to="/gstrishi/refund-process-gst">
                            <li className=" font-semibold my-6">Refund Process Under GST</li>
                        </Link>
                        <Link to="/gstrishi/prosecution-under-gst">
                            <li className=" font-semibold my-6">Prosecution Under GST</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReverseGst