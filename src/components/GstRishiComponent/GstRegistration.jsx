import React from 'react'
import { Link } from 'react-router-dom'


function GstRegistration() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]'>
            <div className='w-[80%] flex flex-col gap-4'>
                <h1 className='text-4xl leading-[40px] font-bold'>GST Registration Online: Documents Required, Limit, Fees, Process, Penalty</h1>
                <p className='text-base leading-8'>
                    Complete Online Document Submission & Application Tracking
                </p>

                <ul className='list-disc pl-6'>
                    <li>Filing of Application for GST Registration</li>
                    <li>Secure GST Identification Number</li>
                    <li>Dedicated manager to process your GST registration end to end</li>
                    <li>Completely Online – No need to visit office</li>
                    <li>CA Assisted GST Filing for all your GST needs</li>
                </ul>

                <h1 className='text-4xl leading-[40px] font-semibold'>What is GST Registration</h1>
                <p className='text-base leading-8'>
                    Under Goods and Services Tax (GST), businesses whose turnover exceeds the threshold limit of Rs. 40 lakh, Rs. 20 lakh, or Rs. 10 lakh (depending on the nature of the business) must register as a normal taxable person. This process is called GST registration.
                </p>
                <p className='text-base leading-8'>
                    For certain businesses, registration under GST is mandatory. If an organization operates without registering under GST, it becomes an offense, and heavy penalties may apply.
                </p>
                <p className='text-base leading-8'>
                    GST registration usually takes between 2-6 working days. Team Clear can help you obtain GST registration faster in just 3 easy steps.
                </p>
                <h1 className='text-4xl leading-[40px] font-semibold'>Who should obtain the GST registration?</h1>
                <ul className='list-disc pl-6'>
                    <li>Individuals registered under the Pre-GST law (i.e., Excise, VAT, Service Tax, etc.)</li>
                    <li>Businesses with turnover above the threshold limit of Rs. 40 lakh, Rs. 20 lakh, or Rs. 10 lakh, depending on the nature of the business</li>
                    <li>Casual taxable persons / Non-Resident taxable persons</li>
                    <li>Agents of a supplier & Input service distributors</li>
                    <li>Those paying tax under the reverse charge mechanism</li>
                    <li>A person who supplies via an e-commerce aggregator</li>
                    <li>Every e-commerce aggregator</li>
                    <li>Persons supplying online information and database access or retrieval services from a place outside India to a person in India, other than a registered taxable person</li>
                </ul>
                <h1 className='text-4xl leading-[40px] font-semibold'>All about the GST registration process</h1>
                <p className='text-base leading-8'>
                    GST registration can be obtained on the GST portal. To apply, one must fill out Form REG-01 on the GST portal, following the steps outlined in our article "How to apply for GST registration?".
                    <br /> <br />
                    However, ClearTax provides GST registration services to help your business get GST registered and obtain your GSTIN.
                    <br /> <br />
                    ClearTax experts will guide you on the applicability and compliances under GST for your business and assist you in getting your business registered under GST.
                </p>
                <h1 className='text-4xl leading-[40px] font-semibold'>Documents Required for GST Registration</h1>

                <ul className='list-disc pl-6'>
                    <li>PAN of the Applicant</li>
                    <li>Aadhaar card</li>
                    <li>Proof of business registration or Incorporation certificate</li>
                    <li>Identity and Address proof of Promoters/Director with Photographs</li>
                    <li>Address proof of the place of business</li>
                    <li>Bank Account statement/Cancelled cheque</li>
                    <li>Digital Signature</li>
                    <li>Letter of Authorization/Board Resolution for Authorized Signatory</li>
                </ul>
                <h1 className='text-4xl leading-[40px] font-semibold'>GST Registration Fees</h1>
                <p className='text-base leading-8'>
                    GST Registration is a tedious 11-step process that involves the submission of many business details and scanned documents.
                    Although there are no fees prescribed under the GST law for obtaining GST registration on the GST portal on your own, you can save a significant amount of time and effort by purchasing the GST registration plan with ClearTax.
                    You can opt for Clear GST Registration services, where a GST Expert will assist you end-to-end with the GST registration process.
                </p>
                <h1 className='text-4xl leading-[40px] font-semibold'>Penalty for not obtaining GST registration</h1>
                <p className='text-base leading-8'>
                    An offender who does not pay tax or makes short payments (due to genuine errors) will be subject to a penalty of 10% of the tax amount due, with a minimum penalty of Rs. 10,000.
                    <br /><br />
                    However, if the offender deliberately evades paying taxes, the penalty will increase to 100% of the tax amount due.
                </p>
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

export default GstRegistration