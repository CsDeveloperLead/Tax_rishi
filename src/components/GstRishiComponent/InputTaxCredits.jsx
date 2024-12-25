import React from 'react'
import img6 from '../../assets/gstrishi6.png'
import img7 from '../../assets/gstrishi7.png'

function InputTaxCredits() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col font-montserrat text-[#14598D]'>
            <h1 className='text-4xl leading-[40px] font-semibold'>Input Tax Credit (ITC) under GST</h1>
            <p className='text-base leading-8'>
                If you’re a finance leader, you know that every rupee matters, making it essential to manage tax liabilities and drive initiatives for cash flow efficiency. On that note, Input Tax Credit (ITC) claims aren’t just a tax compliance checkbox; they’re a powerful tool for your entity to streamline its tax expenses and boost cash flow.
                <br /><br />
                However, tapping into the full potential of ITC requires your team to understand the rules, navigate exceptions, and handle complex reversals under the GST law.
                <br /><br />
                Here’s a breakdown of all you need to know to maximize ITC for your business:
            </p>

            <ul className='list-disc pl-6'>
                <li><strong>What is Input Tax Credit (ITC) with Example?</strong></li>
                <li><strong>Who can claim ITC? (Conditions to claim an input tax credit under GST)</strong></li>
                <li><strong>What can be claimed as ITC? (Items on which input tax credit (ITC) is not allowed)</strong></li>
                <li><strong>Eligible and Ineligible Input Tax Credit</strong></li>
                <li><strong>Documents Required for Claiming ITC</strong></li>
                <li><strong>Special Cases of ITC Claims</strong></li>
                <li><strong>Time Limit to Claim Input Tax Credit under GST</strong></li>
                <li><strong>How to Claim ITC?</strong></li>
                <li><strong>ITC Reversal Explained</strong></li>
                <li><strong>ITC Reconciliation Decoded</strong></li>
                <li><strong>How to Automate and Maximize ITC Claims?</strong></li>
                <li><strong>FAQs on Input Tax Credit</strong></li>
            </ul>
            <h1 className='text-4xl leading-[40px] font-semibold'>What is Input Tax Credit with Example?</h1>
            <p className='text-base leading-8'>
                Input Tax Credit (ITC) refers to the tax paid on purchases for the business, which can be claimed as a deduction at the time of paying tax on output tax.
            </p>

            <p className='text-base leading-8'>
                Here’s how it works:
                <br />
                When you buy a product/service from a registered dealer, you pay taxes on the purchase. Upon selling, you collect the tax. You can adjust the taxes paid at the time of purchase with the amount of output tax (tax on sales), and the balance liability of tax (tax on sales minus tax on purchase) has to be paid to the government. This mechanism is called the utilization of input tax credit.
            </p>

            <p className='text-base leading-8'>
                For example, let’s say you are a manufacturer:
            </p>

            <ul className='list-disc pl-6'>
                <li><strong>Tax payable on output (final product):</strong> Rs 450</li>
                <li><strong>Tax paid on input (purchases):</strong> Rs 300</li>
                <li><strong>You can claim input credit of Rs 300 and deposit the rest Rs 150 as taxes in cash
                </strong></li>
            </ul>
            <img src={img6} alt="image" className='w-[60%] mx-auto' />
            <h1 className='text-4xl leading-[40px] font-semibold'>Who can claim ITC?</h1>
            <p className='text-base leading-8'>
                ITC can be claimed by a person registered under GST only if they fulfill all the conditions as prescribed.
            </p>

            <p className='text-base leading-8'>
                Conditions to claim an input tax credit under GST:
            </p>

            <ol className='list-decimal list-inside pl-6'>
                <li>The dealer should be in possession of a tax invoice.</li>
                <li>The said goods/services must have been received.</li>
                <li>GSTR-3B must have been filed by the recipient.</li>
                <li>The tax charged must have been paid to the government by the supplier.</li>
                <li>The recipient must have paid towards the invoice or debit note within 180 days from the invoice date.</li>
                <li>When goods are received in installments, ITC can be claimed only when the last lot is received.</li>
                <li>ITC can only be claimed for taxable supplies of goods or services, and the purchases made must be used in the furtherance of such business.</li>
                <li>No ITC will be allowed if depreciation has been claimed on the tax component of a capital good.</li>
                <li>ITC on the document, such as an invoice or debit note, must be claimed within the time limit defined, which is the earlier of two dates:
                    <ul className='list-disc pl-6'>
                        <li>30th November of the year following the financial year in which the document is issued</li>
                        <li>Date of filing the annual returns</li>
                    </ul>
                </li>
                <li>CGST Rule 36(4) specifies that ITC claims made in GSTR-3B must match with the details appearing in GSTR-2B.</li>
                <li>The person must not be making supplies under the composition scheme.</li>
            </ol>
            <h1 className='text-4xl leading-[40px] font-semibold'>What can be claimed as ITC?</h1>
            <p className='text-base leading-8'>
                ITC can be claimed only for business purposes.
                <br />
                ITC will not be available for goods or services exclusively used for:
            </p>

            <ol className='list-decimal list-inside pl-2'>
                <li>Personal use</li>
                <li>Exempt supplies</li>
                <li>Supplies for which ITC is specifically not available under the CGST Section 17(5)</li>
            </ol>
            <h1 className='text-4xl leading-[40px] font-semibold'>Eligible and Ineligible Input Tax Credit</h1>
            <p className='text-base leading-8'>
                There is an exclusion list under Section 17(5) of the CGST Act, which keeps some transactions and businesses out of the scope of ITC claims. ITC cannot be claimed on such items. Apart from this list, all other items are eligible for ITC claims.
            </p>

            <p className='text-base leading-8'>
                Some cases of ineligible input tax credit are listed below:
            </p>

            <ul className='list-disc pl-6'>
                <li><strong>Motor Vehicles:</strong> Used for personal purposes (exceptions apply for resale, commercial use, or mandated cab services)</li>
                <li><strong>Food and Beverages:</strong> Catering, health, and similar services unless legally required</li>
                <li><strong>Membership Fees:</strong> Club or gym memberships</li>
                <li><strong>Insurance:</strong> Health and life insurance, except for government mandates</li>
                <li><strong>Construction Expenses:</strong> Building immovable property</li>
                <li><strong>Lost or Destroyed Goods:</strong> Damaged or gifted items</li>
            </ul>
            <h1 className='text-4xl leading-[40px] font-semibold'>Documents Required for Claiming ITC</h1>
            <p className='text-base leading-8'>
                The following documents are required for claiming ITC:
            </p>

            <ul className='list-disc pl-3'>
                <li><strong>Invoice issued by the supplier of goods/services</strong></li>
                <li><strong>The debit note issued by the supplier to the recipient (if any)</strong></li>
                <li><strong>Bill of entry</strong></li>
                <li><strong>An invoice issued under certain circumstances like the bill of supply issued instead of a tax invoice if the amount is less than Rs. 200 or in situations where the reverse charge is applicable as per the GST law</strong></li>
                <li><strong>An invoice or credit note issued by the Input Service Distributor (ISD) as per the invoice rules under GST</strong></li>
                <li><strong>A bill of supply issued by the supplier of goods and services or both</strong></li>
            </ul>

            <h1 className='text-4xl leading-[40px] font-semibold'>Special Cases of ITC</h1>
            <p className='text-base leading-8'>
                The GST law specifies ITC claim rules in certain scenarios, such as involving capital goods, job work, ISD, banks, and business transfers.
            </p>

            <h2 className='text-2xl leading-[40px] font-semibold'>ITC for Capital Goods & More</h2>
            <p className='text-base leading-8'>
                ITC is available for capital goods under GST. However, ITC is not available for:
            </p>

            <ol className='list-decimal pl-6'>
                <li><strong>Capital Goods used exclusively for making exempted goods</strong></li>
                <li><strong>Capital Goods used exclusively for non-business (personal) purposes</strong></li>
            </ol>

            <p className='text-base leading-8'>
                <strong>Note:</strong> No ITC will be allowed if depreciation has been claimed on the tax component of capital goods.
            </p>

            <h2 className='text-2xl leading-[40px] font-semibold'>ITC on Job Work</h2>
            <p className='text-base leading-8'>
                A principal manufacturer may send goods for further processing to a job worker. For example, a shoe manufacturing company sends half-made shoes (upper part) to job workers who will fit the soles. In such a situation, the principal manufacturer will be allowed to take credit for tax paid on the purchase of such goods sent on job work.
            </p>

            <p className='text-base leading-8'>
                ITC will be allowed when goods are sent to the job worker in both of the following cases:
            </p>

            <ul className='list-disc pl-6'>
                <li>From the principal's place of business</li>
                <li>Directly from the place of supply of the supplier of such goods</li>
            </ul>
            <h1 className='text-4xl leading-[40px] font-semibold'>ITC Provided by Input Service Distributor (ISD)</h1>
            <p className='text-base leading-8'>
                An Input Service Distributor (ISD) can be the head office (mostly), a branch office, or the registered office of a registered person under GST. The ISD collects the input tax credit (ITC) on all the purchases made and distributes it to all the recipients (branches) under different heads like CGST, SGST/UTGST, IGST, or cess.
            </p>

            <h1 className='text-4xl leading-[40px] font-semibold'>ITC on Transfer of Business</h1>
            <p className='text-base leading-8'>
                This applies in cases of amalgamations, mergers, or transfer of business. The transferor will have available ITC, which will be passed to the transferee at the time of the transfer of business.
            </p>

            <h1 className='text-xl leading-[40px] font-semibold'>ITC for Banks and Financial Institutions</h1>
            <p className='text-base leading-8'>
                Banks and financial institutions can claim ITC on taxable supplies, but they must follow a unique calculation method. The law allows a 50% ITC claim on inputs, capital goods, and input services for banks and financial institutions. This special provision is to address the mixed nature of taxable and exempt supplies, popular among banks as they also handle exempt financial services.
            </p>

            <h1 className='text-4xl leading-[40px] font-semibold'>Time Limit to Claim Input Tax Credit under GST</h1>
            <p className='text-base leading-8'>
                Input Tax Credit (ITC) can be availed in GSTR-3B on or before the expiry of the time limit defined by the GST law. The time limit to claim ITC on an invoice or debit note issued in a financial year is the earlier of the following two dates:
            </p>
            <ul className='list-disc pl-6'>
                <li>30th November of the year following such financial year, or</li>
                <li>The date of filing the annual returns for that financial year.</li>
            </ul>
            <p className='text-base leading-8'>
                <strong>Note:</strong> Even though 30th November of the following year is the deadline, since ITC is reported in GSTR-3B, the due date of GSTR-3B is considered the deadline without a late fee. The due date of GSTR-3B for October of the following financial year is due by the 20th of the following month. If anyone misses filing GSTR-3B of October by the due date (20th November), they can still claim pending ITC for a financial year in that return filed on or before 30th November with late fees.
            </p>

            <p className='text-base leading-8'>
                For example, an invoice was issued on 30th December 2023 to ABC Company. They have not yet filed the annual returns for FY 2023-24. The company can claim ITC given on this invoice before 30th November 2024. However, they can claim such ITC in the GSTR-3B of October 2024, due on 20th November 2024.
            </p>

            <h1 className='text-4xl leading-[40px] font-semibold'>How to Claim ITC?</h1>
            <p className='text-base leading-8'>
                ITC can be claimed after a thorough reconciliation of entries in the Invoice Management System and GSTR-2B is done with the purchase register. All regular taxpayers must report the amount of ITC in their monthly GST returns of Form GSTR-3B in Table 4.
            </p>

            <p className='text-base leading-8'>
                Table 4 requires the summary figure of eligible ITC, ineligible ITC, ITC reversed, and reclaimed during the tax period. The format of Table 4 of GSTR-3B has changed since July 2022. Currently, Table 4(A)(5) auto-populates the total ITC figure from the GSTR-2B, including ineligible/unavailable ITC. If the total ITC is not properly bifurcated and reversed in Table 4(B), it will wrongfully accumulate as part of the net ITC claims of the taxpayer. Hence, such ineligible/unavailable ITC figures should be identified and rightfully reversed. If reclaimed from earlier tax periods in the current period, it should be reported as well to arrive at the exact net eligible ITC figure.
            </p>

            <p className='text-base leading-8'>
                Declaring the correct ITC values in Table-4 is crucial as it contributes to the government's computation of net tax liability and GST dues. Failure to report accurate values in this table could result in discrepancies with the GSTR-2B, ultimately leading to notices and penalties!
            </p>

            <p className='text-base leading-8'>
                The government is taking initiatives to correlate the data reported in GSTR-3B with GSTR-2B instantly upon filing and, in turn, with GSTR-9 as part of the GST departmental audit. Introduction of real-time scrutiny of returns and automated intimations in DRC-01C are examples of such initiatives.
            </p>
            <img src={img6} alt="image" className='w-[60%] mx-auto' />
            <p className='text-base leading-8'>
                A taxpayer could have claimed any amount of provisional ITC until 9 October 2019. Later on, the government restricted the provisional ITC as below:
            </p>
            <table class="table-auto w-[70%] mx-auto border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 p-4 text-left">Applicable date</th>
                        <th class="border border-gray-300 p-4 text-left">% of provisional ITC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Upto 09.10.2019</td>
                        <td class="border border-gray-300 p-4">No limit</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">09.10.2019 to 31.12.2019</td>
                        <td class="border border-gray-300 p-4">20%</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">01.01.2020 to 31.12.2020</td>
                        <td class="border border-gray-300 p-4">10%</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">01.01.2021 to 31.12.2021</td>
                        <td class="border border-gray-300 p-4">5%</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">From 01.01.2022 onwards</td>
                        <td class="border border-gray-300 p-4">Nil</td>
                    </tr>
                </tbody>
            </table>
            <p className='text-base leading-8'>Accordingly, a taxpayer can claim ITC only if the same appears appears in their GSTR-2B. Hence, no provisional ITC can be claimed from 1st January 2022 onwards. Hence, matching of the purchase register with the GSTR-2B is crucial for ITC claims.</p>
            <h1 className='text-4xl leading-[40px] font-semibold'>Reversal of Input Tax Credit</h1>
            <p className='text-base leading-8'>
                ITC can be availed only on goods and services for business purposes. If they are used for non-business (personal) purposes, or for making exempt supplies ITC cannot be claimed . Apart from these, there are certain other situations where ITC will be reversed.
                <br /> <br />
                ITC will be reversed in the following cases:
            </p>

            <ol className='list-decimal pl-3'>
                <li className='text-base leading-8'>
                    <strong>Non-payment of invoices in 180 days</strong> – ITC will be reversed for invoices that were not paid within 180 days of issue.
                </li>
                <li className='text-base leading-8'>
                    <strong>Credit note issued to ISD by seller</strong> – If a credit note was issued by the seller to the Head Office (HO), then the ITC subsequently reduced will be reversed.
                </li>
                <li className='text-base leading-8'>
                    <strong>Inputs partly for business purpose and partly for exempted supplies or for personal use</strong> – If a business uses inputs for both business and non-business (personal) purposes, the ITC used for the portion of input goods/services used for personal purposes must be reversed proportionately.
                </li>
                <li className='text-base leading-8'>
                    <strong>Capital goods partly for business and partly for exempted supplies or for personal use</strong> – This is similar to the previous case, except it concerns capital goods.
                </li>
                <li className='text-base leading-8'>
                    <strong>ITC reversed is less than required</strong> – If the total ITC on inputs of exempted/non-business purpose is more than the ITC actually reversed during the year, then the difference amount will be added to the output liability. Interest will be applicable.
                </li>
            </ol>
            <p className='text-base leading-8'>The details of reversal of ITC will be furnished in GSTR-3B. Read our article to understand more about the segregation of ITC into business and personal use and subsequent calculations.</p>
            <h1 className='text-4xl leading-[40px] font-semibold'>ITC Reconciliation Decoded</h1>
            <p className='text-base leading-8'>
                ITC reconciliation is essential since it helps businesses ensure that they are claiming the correct input tax credits (ITC), thereby reducing the risk of legal issues, such as penalties or the cancellation of their GST registration. Download GSTR-2B data from the government portal and match the details prepared in draft GSTR-3B. Identify differences and correct them.
            </p>

            <p className='text-base leading-8'>
                ITC claimed by the person in GSTR-3B has to match with the details specified by their supplier in GSTR-1 and appearing in the Invoice Management System (IMS). Once accepted, the information will flow into the GSTR-2B. When the supplier saves a document, it will flow from GSTR-1/IFF/1A to the IMS of the recipient. Then, when the supplier files the respective GSTR-1/IFF/1A, the document will be populated into GSTR-2B of the recipient. If no action is taken, the invoice is automatically accepted and added to GSTR-2B. Running GSTR-2B vs purchase register reconciliation for ITC actions is critical. Not using IMS exposes enterprises to a higher risk of notices from tax authorities due to potential over-claimed ITC.
            </p>

            <p className='text-base leading-8'>
                In case of any mismatch between GSTR-3B, purchase register, and GSTR-2B, both the supplier and recipient would be communicated regarding discrepancies after the filling of GSTR-3B. Please read our article on the detailed explanation of the reasons for mismatch of ITC and the procedure to be followed to apply for re-claim of ITC.
            </p>

            <h2 className='text-3xl leading-[35px] font-semibold mt-8'>How to automate and maximise ITC claims?</h2>
            <p className='text-base leading-8'>
                Automation of ITC matching and Table-4 reporting is critical. Any manual intervention carries risks of clerical errors and omissions, leading to differences between GSTR-2B and GSTR-3B. Tracking ITC reversals and reclaims is equally challenging. The introduction of IMS has added an additional layer to ITC reconciliation.
            </p>

            <p className='text-base leading-8'>
                Businesses can tackle all repetitive and challenging actions smartly using a tech-based compliance solution. Tech-based solutions mitigate the risk of non-compliance and notices, providing a 100% reliable audit trail to avoid future discrepancies.
            </p>

            <p className='text-base leading-8'>
                Automate your enterprise's Input Tax Credit (ITC) claim journey with Clear!
            </p>
            <ul className='list-disc pl-6'>
                <li className='text-base leading-8'>
                    Instead of comparing GSTR-2B against the purchase register (PR), Clear lets you reconcile IMS + 2B against PR, providing a holistic view across sources.
                </li>
                <li className='text-base leading-8'>
                    Take ITC actions directly in Clear, which will automatically flow into IMS on the government portal.
                </li>
                <li className='text-base leading-8'>
                    GSTR-2B will be regenerated and downloaded, inheriting the actions taken on IMS.
                </li>
                <li className='text-base leading-8'>
                    Enjoy multi-GSTIN & multi-PAN ingestion of data.
                </li>
                <li className='text-base leading-8'>
                    Get access to AI-powered reconciliation engine & PAN-level matching capabilities to do GSTR-2B vs purchase register seamlessly.
                </li>
                <li className='text-base leading-8'>
                    The auto-population of Table 4 based on the GSTR-2B vs PR reconciliation is as per the latest GST return changes.
                </li>
                <li className='text-base leading-8'>
                    Every invoice flows into the right sub-section to ensure accuracy, based on the ITC claim action taken on matching status.
                </li>
                <li className='text-base leading-8'>
                    Get a calculation trail of all ITC claimed at a section and document level.
                </li>
                <li className='text-base leading-8'>
                    Easy documentation of Table 4 breakup into subsections such as deferred ITC, ITC for the current month, ITC for the previous month, etc.
                </li>
                <li className='text-base leading-8'>
                    Download an Excel file summarizing calculations, with sub-sections and amounts clearly marked.
                </li>
            </ul>
        </div>
    )
}

export default InputTaxCredits