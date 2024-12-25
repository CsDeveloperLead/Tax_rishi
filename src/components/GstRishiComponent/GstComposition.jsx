import React from 'react'
import img15 from '../../assets/gstrishi15.png'
import { Link } from 'react-router-dom'

function GstComposition() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]'>
            <div className='w-[80%] flex flex-col gap-4'>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GST Composition Scheme: Rules, Turnover Limit, Rate, Benefits
                </h2>

                <p className='text-base leading-8'>
                    The Composition Scheme under GST is a simple and easy option for taxpayers. It allows small taxpayers to avoid tedious GST formalities and pay GST at a fixed rate of turnover. This scheme is available to taxpayers with a turnover of less than Rs. 1.5 crore*.
                    <br /> <br />
                    To check if a taxpayer has opted for the Composition Scheme, you can use the GST search tool. Simply enter the GSTIN and look at the ‘Taxpayer Type’ column in the results to see if they are a regular taxpayer or under the Composition Scheme.
                    <br /> <br />
                    *Note: The CBIC has increased the threshold limit from Rs. 1.0 crore to Rs. 1.5 crore for taxpayers opting for this scheme.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Who Can Opt for Composition Scheme?
                </h2>

                <p className='text-base leading-8'>
                    A taxpayer whose turnover is below Rs 1.5 crore* can opt for the Composition Scheme. For taxpayers in North-Eastern states and Himachal Pradesh, the turnover limit is Rs 75 lakh*.
                    <br /> <br />
                    As per the CGST (Amendment) Act, 2018, a composition dealer can also supply services up to ten percent of their turnover, or Rs. 5 lakhs, whichever is higher. This amendment has been applicable since 1st February 2019.
                    <br /> <br />
                    Additionally, the GST Council proposed an increase to this limit for service providers during its 32nd meeting held on 10th January 2019*. The turnover of all businesses registered under the same PAN should be taken into consideration to calculate total turnover.
                    <br /> <br />
                    *Note: The CBIC has notified an increase in the threshold limit from Rs. 1.0 crore to Rs. 1.5 crore.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Who Cannot Opt for Composition Scheme?
                </h2>

                <p className='text-base leading-8'>
                    The following persons cannot opt for the Composition Scheme:
                </p>

                <ul className='list-disc list-inside pl-8 text-base leading-8'>
                    <li className='mt-2'>Manufacturer of ice cream, pan masala, or tobacco.</li>
                    <li className='mt-2'>A person making inter-state supplies or exempt supplies.</li>
                    <li className='mt-2'>A casual taxable person or a non-resident taxable person.</li>
                    <li className='mt-2'>A person supplying services through an e-commerce operator who is required to collect TCS under the CGST Section 52.</li>
                    <li className='mt-2'>A manufacturer of such goods or supplier of such services notified by the Government on the recommendations of the GST Council.</li>
                </ul>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What Are the Conditions for Availing Composition Scheme?
                </h2>

                <p className='text-base leading-8'>
                    The following conditions must be satisfied in order to opt for the Composition Scheme:
                </p>

                <ul className='list-disc list-inside pl-8 text-base leading-8'>
                    <li className='mt-2'>No Input Tax Credit can be claimed by a dealer opting for the Composition Scheme.</li>
                    <li className='mt-2'>The dealer cannot supply goods not taxable under GST, such as alcohol.</li>
                    <li className='mt-2'>The taxpayer has to pay tax at normal rates for transactions under the Reverse Charge Mechanism.</li>
                    <li className='mt-2'>If a taxable person has different segments of businesses (such as textile, electronic accessories, groceries, etc.) under the same PAN, they must register all such businesses under the scheme collectively or opt out of the scheme.</li>
                    <li className='mt-2'>The taxpayer has to mention the words "Composition Taxable Person" on every notice or signboard displayed prominently at their place of business.</li>
                    <li className='mt-2'>The taxpayer has to mention the words "Composition Taxable Person" on every bill of supply issued by them.</li>
                    <li className='mt-2'>As per the CGST (Amendment) Act, 2018, a manufacturer or trader can now also supply services to an extent of ten percent of turnover, or Rs. 5 lakhs, whichever is higher. This amendment will be applicable from the 1st of February, 2019.</li>
                </ul>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    How can a taxpayer opt for composition scheme?
                </h2>

                <p className='text-base leading-8'>
                    To opt for composition scheme a taxpayer has to file GST CMP-02 with the government. This can be done online by logging into the GST Portal. This intimation should be given at the beginning of every Financial Year by a dealer wanting to opt for Composition Scheme. Here is a step by step Guide to File CMP-02 on GST Portal.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>
                    How Should a Composition Dealer raise bill?
                </h2>

                <p className='text-base leading-8'>
                    A composition dealer cannot issue a tax invoice. This is because a composition dealer cannot charge tax from their customers. They need to pay tax out of their own pocket. Hence, the dealer has to issue a Bill of Supply. The dealer should also mention “composition taxable person, not eligible to collect tax on supplies”  at the top of the Bill of Supply.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Composition Scheme GST Rate for a dealer
                </h2>

                <p className='text-base leading-8'>
                    Following chart explains the rate of tax on turnover applicable for composition dealers :
                </p>

                <img src={img15} alt="image" className='w-[60%] mx-auto' />


                <p className='text-base leading-8'>
                    Following chart explains the rate of tax on turnover applicable for composition dealers :
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>
                    How should GST payment be made by a composition dealer?
                </h2>

                <p className='text-base leading-8'>
                    GST Payment has to be made out of pocket for the supplies made. The GST payment to be made by a composition dealer comprises of the following:
                </p>

                <ul className='list-disc list-inside pl-8 text-base leading-8'>
                    <li className='mt-2'>GST on supplies made.</li>
                    <li className='mt-2'>Tax on reverse charge</li>
                    <li className='mt-2'>Tax on purchase from an unregistered dealer*</li>
                </ul>
                <p className='text-base leading-8'>
                    *Only on the specified categories of goods and services and well as the notified class of registered persons with effect from 1st Feb 2019 but is yet to be notified. Hence, not applicable until then.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What are the returns to be filed by a composition dealer?
                </h2>
                <p className='text-base leading-8'>
                    A dealer is required to pay tax in a quarterly statement CMP-08 by 18th of the month after the end of the quarter. Also, a return in form GSTR-4 has to be filed annually by 30th April of next financial year from FY 2019-20 onwards. GSTR-9A is an annual return to be filed by 31st December of the next financial year. It was waived off for FY 2017-18 and FY 2019-20. Also, note that a dealer registered under composition scheme is not required to maintain detailed records.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What are the advantages of Composition Scheme?
                </h2>
                <p className='text-base leading-8'>
                    The following are the advantages of registering under composition scheme:
                </p>
                <ul className='list-disc list-inside pl-8 text-base leading-8'>
                    <li className='mt-2'>Lesser compliance (returns, maintaining books of record, issuance of invoices)</li>
                    <li className='mt-2'>Limited tax liability</li>
                    <li className='mt-2'>High liquidity as taxes are at a lower rate</li>
                </ul>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What are the disadvantages of Composition Scheme?
                </h2>
                <p className='text-base leading-8'>
                    Let us now see the disadvantages of registering under GST composition scheme:
                </p>
                <ul className='list-disc list-inside pl-8 text-base leading-8'>
                    <li className='mt-2'>A limited territory of business. The dealer is barred from carrying out inter-state transactions</li>
                    <li className='mt-2'>No Input Tax Credit available to composition dealers</li>
                    <li className='mt-2'>The taxpayer will not be eligible to supply non-taxable goods under GST such as alcohol and goods through an e-commerce portal.</li>
                </ul>
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

export default GstComposition