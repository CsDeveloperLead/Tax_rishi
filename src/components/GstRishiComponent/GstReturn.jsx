import React from 'react'
import { Link } from 'react-router-dom'

function GstReturn() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]'>
            <div className='w-[80%] flex flex-col gap-4'>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GST Return - What is GST Return? Who Should File, Due Dates & Types of GST Returns
                </h2>

                <p className='text-base leading-8'>
                    All GST-registered businesses have to file monthly or quarterly GST returns and an annual GST return based on the type of business. These GSTR filings are done online on the GST portal.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What is a GST Return?
                </h2>

                <p className='text-base leading-8'>
                    A GST return is a document containing details of all income/sales and/or expenses/purchases that a GST-registered taxpayer (every GSTIN) is required to file with the tax administrative authorities. This is used by tax authorities to calculate net tax liability.
                    <br /> <br />
                    Under GST, a registered dealer has to file GST returns that broadly include:
                </p>

                <ul className='list-disc list-inside pl-6 text-base leading-8'>
                    <li className='mt-2'>Purchases</li>
                    <li className='mt-2'>Sales</li>
                    <li className='mt-2'>Output GST (On sales)</li>
                    <li className='mt-2'>Input tax credit (GST paid on purchases)</li>
                </ul>

                <p className='text-base leading-8'>
                    To file GST returns or for GST filings, check out the Clear GST software that allows the import of data from various ERP systems such as Tally, Busy, custom Excel, to name a few. There is also the option to use the desktop app for Tally users to directly upload data and file.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Who should file GST Returns?
                </h2>

                <p className='text-base leading-8'>
                    Under the GST regime, regular businesses having more than Rs. 5 crore as annual aggregate turnover (and taxpayers who have not opted for the QRMP scheme) have to file two monthly returns and one annual return. This amounts to 25 returns each year.
                    <br /> <br />
                    Taxpayers with a turnover of up to Rs. 5 crore have the option to file returns under the QRMP scheme. The number of GSTR filings for QRMP filers is 9 each year, which include 4 GSTR-1 and GSTR-3B returns each and an annual return. Note that QRMP filers have to pay tax on a monthly basis even though they are filing returns quarterly.
                    <br /> <br />
                    There are also separate statements/returns required to be filed in special cases such as composition dealers where the number of GSTR filings is 5 each year (4 statement-cum-challans in CMP-08 and 1 annual return GSTR-4).
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    How many returns are there under GST?
                </h2>

                <p className='text-base leading-8'>
                    There are 13 returns under GST. They are the GSTR-1, GSTR-3B, GSTR-4, GSTR-5, GSTR-5A, GSTR-6, GSTR-7, GSTR-8, GSTR-9, GSTR-10, GSTR-11, CMP-08, and ITC-04. However, all returns do not apply to all taxpayers. Taxpayers file returns based on the type of taxpayer/type of registration obtained.
                    <br /> <br />
                    Eligible taxpayers, i.e. with a turnover exceeding Rs. 5 crore, are also required to file a self-certified reconciliation statement in Form GSTR-9C.
                    <br /> <br />
                    Besides the GST returns that are required to be filed, there are statements of input tax credit available to taxpayers, namely GSTR-2A (dynamic) and GSTR-2B (static). There is also an Invoice Furnishing Facility (IFF) available to small taxpayers who are registered under the QRMP scheme to furnish their Business to Business (B2B) sales for the first two months of the quarter. These small taxpayers will still need to pay taxes on a monthly basis using Form PMT-06.
                    <br /> <br />
                    We have explained the various GST returns, along with applicability and due dates in the section below.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What are the different types of GST returns and the due dates to file them?
                </h2>
                <p className='text-base leading-8'>
                    Here is a list of all the returns to be filed as prescribed under the GST Law along with the due dates.
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Return Form</th>
                            <th className="border border-gray-300 p-4 text-left">Description</th>
                            <th className="border border-gray-300 p-4 text-left">Frequency (Monthly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due Date (11th of the next month.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-1</td>
                            <td className="border border-gray-300 p-4">Details of outward supplies of taxable goods and/or services affected.</td>
                            <td className="border border-gray-300 p-4">Quarterly (If opted under the QRMP scheme)</td>
                            <td className="border border-gray-300 p-4">13th of the month succeeding the quarter.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">IFF (Optional by taxpayers under the QRMP scheme)</td>
                            <td className="border border-gray-300 p-4">Details of B2B supplies of taxable goods and/or services affected.</td>
                            <td className="border border-gray-300 p-4">Monthly (for the first two months of the quarter)</td>
                            <td className="border border-gray-300 p-4">13th of the next month.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-3B</td>
                            <td className="border border-gray-300 p-4">Summary return of outward supplies and input tax credit claimed, along with payment of tax by the taxpayer.</td>
                            <td className="border border-gray-300 p-4">Quarterly (For taxpayers under the QRMP scheme)</td>
                            <td className="border border-gray-300 p-4">22nd or 24th of the month succeeding the quarter***</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">CMP-08</td>
                            <td className="border border-gray-300 p-4">Statement-cum-challan to make a tax payment by a taxpayer registered under the composition scheme under Section 10 of the CGST Act.</td>
                            <td className="border border-gray-300 p-4">Quarterly</td>
                            <td className="border border-gray-300 p-4">18th of the month succeeding the quarter.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-4</td>
                            <td className="border border-gray-300 p-4">Return for a taxpayer registered under the composition scheme under Section 10 of the CGST Act.</td>
                            <td className="border border-gray-300 p-4">Annually</td>
                            <td className="border border-gray-300 p-4">30th of the month succeeding a financial year upto FY 23-24. 30th of June suceeding a financial year upto FY 24-25.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-5</td>
                            <td className="border border-gray-300 p-4">Return to be filed by a non-resident taxable person.</td>
                            <td className="border border-gray-300 p-4">Monthly</td>
                            <td className="border border-gray-300 p-4">20th of the next month.(Amended to 13th by Budget 2022; yet to be notified by CBIC.)</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-5A</td>
                            <td className="border border-gray-300 p-4">Return to be filed by non-resident OIDAR service providers.</td>
                            <td className="border border-gray-300 p-4">Monthly</td>
                            <td className="border border-gray-300 p-4">20th of the next month.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-7</td>
                            <td className="border border-gray-300 p-4">Return to be filed by registered persons deducting tax at source (TDS).</td>
                            <td className="border border-gray-300 p-4">Monthly</td>
                            <td className="border border-gray-300 p-4">10th of the next month.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-8</td>
                            <td className="border border-gray-300 p-4">Return to be filed by e-commerce operators containing details of supplies effected and the amount of tax collected at source by them.</td>
                            <td className="border border-gray-300 p-4">Monthly</td>
                            <td className="border border-gray-300 p-4">10th of the next month.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-9</td>
                            <td className="border border-gray-300 p-4">Annual return by a regular taxpayer.</td>
                            <td className="border border-gray-300 p-4">Annually</td>
                            <td className="border border-gray-300 p-4">31st December of the next financial year.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-9C</td>
                            <td className="border border-gray-300 p-4">Self-certified reconciliation statement.</td>
                            <td className="border border-gray-300 p-4">Annually</td>
                            <td className="border border-gray-300 p-4">31st December of the next financial year.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-10</td>
                            <td className="border border-gray-300 p-4">Final return to be filed by a taxpayer whose GST registration is cancelled.</td>
                            <td className="border border-gray-300 p-4">Once, when the GST registration is cancelled or surrendered.</td>
                            <td className="border border-gray-300 p-4">Within three months of the date of cancellation or date of cancellation order, whichever is later.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">GSTR-11</td>
                            <td className="border border-gray-300 p-4">Details of inward supplies to be furnished by a person having UIN and claiming a refund</td>
                            <td className="border border-gray-300 p-4">Monthly</td>
                            <td className="border border-gray-300 p-4">	28th of the month following the month for which statement is filed.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">ITC-04</td>
                            <td className="border border-gray-300 p-4">Statement to be filed by a principal/job-worker about details of goods sent to/received from a job-worker</td>
                            <td className="border border-gray-300 p-4">Annually
                                (for AATO up to Rs.5 crore)
                                <br />
                                Half-yearly
                                (for AATO {'>'} Rs.5 crore)	</td>
                            <td className="border border-gray-300 p-4">
                                25th April where AATO is up to Rs.5 crore.
                                <br />
                                25th October and 25th April where AATO exceeds Rs.5 crore.
                                <br />
                                (AATO = Annual aggregate turnover)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className='text-base leading-8'>
                    ***For the taxpayers with aggregate turnover equal to or below Rs 5 crore, eligible and remain opted into the QRMP scheme, 22nd of month next to the quarter for taxpayers in category X states/UTs and 24th of month next to the quarter for taxpayers in category Y states/UTs
                </p>
                <ul className='list-disc list-inside pl-6 text-base leading-8'>
                    <li className='mt-2'>Category X: Chhattisgarh, Madhya Pradesh, Gujarat, Maharashtra, Karnataka, Goa, Kerala, Tamil Nadu, Telangana or Andhra Pradesh or the Union territories of Daman and Diu and Dadra and Nagar Haveli, Puducherry, Andaman and Nicobar Islands and Lakshadweep.</li>
                    <li className='mt-2'>Category Y: Himachal Pradesh, Punjab, Uttarakhand, Haryana, Rajasthan, Uttar Pradesh, Bihar, Sikkim, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, Assam, West Bengal, Jharkhand or Odisha or the Union Territories of Jammu and Kashmir, Ladakh, Chandigarh and New Delhi.</li>
                </ul>
                <p className='text-base leading-8'>
                    Please note: GST filings as per the CGST Act are subject to changes by CBIC notifications/orders.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Upcoming Due Dates to File GST Returns
                </h2>

                <p className='text-base leading-8'>
                    The due dates for filing GST returns can be extended by issuing orders or notifications. Here, we have the list of GST return due dates for the FY 2024-25.
                    <br /> <br />
                    <strong>Download FY 2024-25 calendar here:</strong> GST return filing calendar April 2024 – March 2025
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Upcoming Due Dates for All Returns up to September 2024
                </h2>

                <p className='text-base leading-8'>
                    For easy access to upcoming GST due dates, here is the GST calendar for all returns up to September 2024:
                    <br /> <br />
                    <strong>Download GST Calendar:</strong> GST return filing calendar April 2024 – September 2024
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-1
                </h2>

                <p className='text-base leading-8'>
                    Quarterly filing of GSTR-1:
                    <br /> <br />
                    (Annual turnover up to Rs.5 crore can opt for quarterly filing)
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Quarter</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Apr-Jun 2024</td>
                            <td className="border border-gray-300 p-4">13th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Jul-Sept 2024</td>
                            <td className="border border-gray-300 p-4">13th Oct 2024</td>
                        </tr>
                    </tbody>
                </table>
                <p className='text-base leading-8'>
                    Note: Taxpayers with a turnover of up to Rs.5 crore can opt to furnish their Business to Business (B2B) sales for the first two months of the quarter using an Invoice Furnishing Facility (IFF). The deadline will be the 13th of the following month. However, GSTR-1 will still need to be filed quarterly, but the invoices already declared in the IFF need not be declared again.
                </p>
                <h2 className='text-2xl leading-[40px] font-semibold'>
                    Monthly filing of GSTR-1:
                </h2>

                <p className='text-base leading-8'>
                    (Annual turnover of more than Rs.5 crore must file monthly only)
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Month</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">11th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">11th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">11th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">11th August 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">August 2024</td>
                            <td className="border border-gray-300 p-4">11th September 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">September 2024</td>
                            <td className="border border-gray-300 p-4">11th October 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-2 and GSTR-3
                </h2>

                <p className='text-base leading-8'>
                    The filing of these forms is currently suspended.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-3B
                </h2>

                <p className='text-base leading-8'>
                    GSTR-3B is a monthly summary return to be filed by all taxpayers except those registered under the composition scheme.
                </p>
                <h2 className='text-2xl leading-[40px] font-semibold'>
                    Quarterly filing of GSTR-3B:
                </h2>

                <p className='text-base leading-8'>
                    (Annual turnover up to Rs.5 crore can opt for quarterly filing)
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Quarter</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Apr-Jun 2024</td>
                            <td className="border border-gray-300 p-4">22nd or 24th July 2024***</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Jul-Sept 2024</td>
                            <td className="border border-gray-300 p-4">22nd or 24th Oct 2024***</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-2xl leading-[40px] font-semibold'>
                    Monthly filing of GSTR-3B:
                </h2>

                <p className='text-base leading-8'>
                    (Annual turnover of more than Rs.5 crore must file monthly only)
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Month</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">20th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">20th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">20th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">20th August 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">August 2024</td>
                            <td className="border border-gray-300 p-4">20th September 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">September 2024</td>
                            <td className="border border-gray-300 p-4">20th October 2024</td>
                        </tr>
                    </tbody>
                </table>
                <p className='text-base leading-8'>
                    ***Category X: Chhattisgarh, Madhya Pradesh, Gujarat, Maharashtra, Karnataka, Goa, Kerala, Tamil Nadu, Telangana or Andhra Pradesh or the Union Territories of Daman and Diu and Dadra and Nagar Haveli, Puducherry, Andaman and Nicobar Islands and Lakshadweep.
                    <br /> <br />
                    Category Y: Himachal Pradesh, Punjab, Uttarakhand, Haryana, Rajasthan, Uttar Pradesh, Bihar, Sikkim, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, Assam, West Bengal, Jharkhand or Odisha or the Union Territories of Jammu and Kashmir, Ladakh, Chandigarh and New Delhi.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    PMT-06
                </h2>

                <p className='text-base leading-8'>
                    Taxpayers with a turnover of up to Rs.5 crore can opt to file a quarterly GSTR-1 and GSTR-3B under the QRMP scheme (with an optional use of the Invoice Furnishing Facility (IFF) to furnish their B2B sales for the first two months of the quarter).
                    <br /> <br />
                    These taxpayers will still need to pay taxes monthly using PMT-06 for the first two months of the quarter. The due dates are as follows:
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Period (Quarterly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">25th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">25th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">25th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">25th July 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    CMP-08
                </h2>

                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Period (Quarterly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Apr-Jun 2024</td>
                            <td className="border border-gray-300 p-4">18th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Jul-Sept 2024</td>
                            <td className="border border-gray-300 p-4">18th Oct 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-4
                </h2>

                <p className='text-base leading-8'>
                    The due date to file GSTR-4 for the FY 2023-24, the annual return by composition taxpayers, is 30th April 2024. However, for the financial year 2024-25, the due date is 30th June 2025. The due date will be revised for future financial years accordingly.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-5
                </h2>
                <p className='text-base leading-8'>
                    Summary of outward taxable supplies and tax payable by the non-resident taxable persons.
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Period (Monthly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">13th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">13th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">13th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">13th August 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">August 2024</td>
                            <td className="border border-gray-300 p-4">13th September 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">September 2024</td>
                            <td className="border border-gray-300 p-4">13th October 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-5A
                </h2>
                <p className='text-base leading-8'>
                    Summary of outward taxable supplies and tax payable by an Online Information and Database Access or Retrieval Services (OIDAR) provider:
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Period (Monthly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">20th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">20th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">20th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">20th August 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">August 2024</td>
                            <td className="border border-gray-300 p-4">20th September 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">September 2024</td>
                            <td className="border border-gray-300 p-4">20th October 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-6
                </h2>
                <p className='text-base leading-8'>
                    Details of Input Tax Credit (ITC) received and distributed by an Input Service Distributor (ISD):
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Period (Monthly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">13th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">13th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">13th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">13th August 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">August 2024</td>
                            <td className="border border-gray-300 p-4">13th September 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">September 2024</td>
                            <td className="border border-gray-300 p-4">13th October 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-7
                </h2>
                <p className='text-base leading-8'>
                    Summary of Tax Deducted at Source (TDS) and deposited under GST laws:
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Period (Monthly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">10th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">10th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">10th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">10th August 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">August 2024</td>
                            <td className="border border-gray-300 p-4">10th September 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">September 2024</td>
                            <td className="border border-gray-300 p-4">10th October 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-8
                </h2>
                <p className='text-base leading-8'>
                    Summary of Tax Collected at Source (TCS) by e-commerce operators under GST laws:
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Period (Monthly)</th>
                            <th className="border border-gray-300 p-4 text-left">Due date*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">April 2024</td>
                            <td className="border border-gray-300 p-4">10th May 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">May 2024</td>
                            <td className="border border-gray-300 p-4">10th June 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">June 2024</td>
                            <td className="border border-gray-300 p-4">10th July 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">July 2024</td>
                            <td className="border border-gray-300 p-4">10th August 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">August 2024</td>
                            <td className="border border-gray-300 p-4">10th September 2024</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">September 2024</td>
                            <td className="border border-gray-300 p-4">10th October 2024</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-9
                </h2>
                <p className='text-base leading-8'>
                    GSTR-9 is the annual return to be filed by taxpayers. The due date for filing GSTR-9 for FY 2023-24 is 31st December 2024.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GSTR-9C
                </h2>
                <p className='text-base leading-8'>
                    GSTR-9C is the annual self-certified reconciliation statement to be filed by taxpayers with a turnover exceeding Rs.5 crore. The due date for filing GSTR-9C for FY 2023-24 is 31st December 2024.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    ITC-04
                </h2>

                <p className='text-base leading-8'>
                    (1) Those with an annual aggregate turnover of more than Rs. 5 crore – Half-yearly filings:
                    <ul className='list-disc pl-6'>
                        <li>April-September 2024 – Due on 25th October 2024</li>
                        <li>October-March 2025 – Due on 25th April 2025</li>
                    </ul>
                    (2) Those with an annual aggregate turnover of up to Rs. 5 crore – Yearly filing due on 25th April 2025.
                </p>

                <p className='text-base leading-8'>
                    ITC-04 is a statement to be filed by a principal/job-worker about details of goods sent to/received from a job-worker.
                </p>

                <p className='text-base leading-8'>
                    <span className='font-semibold'>Note:</span> The due dates are subject to changes by CBIC notifications/orders.
                </p>

                <h3 className='text-4xl leading-[30px] font-semibold'>
                    Late Fees for Not Filing Return on Time
                </h3>

                <p className='text-base leading-8'>
                    If GST returns are not filed within the specified time limits, you will be liable to pay interest and a late fee.
                </p>

                <p className='text-base leading-8'>
                    Interest is charged at 18% per annum. It has to be calculated by the taxpayer on the amount of outstanding tax to be paid. The time period will be from the next day of filing to the date of payment.
                </p>

                <p className='text-base leading-8'>
                    Late fees are charged at Rs. 100 per day per Act. Hence, it will be Rs. 100 under CGST and Rs. 100 under SGST. The total will be Rs. 200 per day, subject to a maximum of Rs. 5,000.
                    Please note that from the month of/quarter ended June 2021, the maximum amount of late fees has been revised as below.
                </p>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Taxpayer category</th>
                            <th className="border border-gray-300 p-4 text-left">Late fee capped at</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Taxpayers whose total amount of central tax payable is Nil</td>
                            <td className="border border-gray-300 p-4">Rs.250^</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Taxpayers with an annual aggregate turnover up to Rs.1.5 crore in the previous financial year</td>
                            <td className="border border-gray-300 p-4">Rs.1,000^</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4">Taxpayers with an annual aggregate turnover exceeding Rs.1.5 crore and up to Rs.5 crore in the previous financial year</td>
                            <td className="border border-gray-300 p-4">Rs.2,500^</td>
                        </tr>
                    </tbody>
                </table>
                <p className='text-base leading-8'>
                    ^Taxpayers should note that an equal penalty will apply under SGST. There are no late fees under IGST.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    How are GST Returns Filed or Submitted?
                </h2>

                <p className='text-base leading-8'>
                    There are prescribed formats for each of the above GST returns. These forms need to be filed on the GST portal. However, they may seem complex and difficult to understand for many taxpayers.
                    <br /> <br />
                    Do not worry, you can also file your returns very easily using the Clear GST software.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Does GST Have to Be Paid Monthly?
                </h2>

                <p className='text-base leading-8'>
                    GST is to be paid monthly by regular taxpayers, even those who have opted for quarterly filing of returns, i.e., the QRMP scheme.
                </p>

                <p className='text-base leading-8'>
                    However, for small taxpayers, there is an option to choose the composition scheme under GST, if their annual aggregate turnover is up to Rs. 1.5 crore for manufacturers/dealers and Rs. 50 lakh for pure service providers. These taxpayers can file a quarterly statement-cum-challan and pay taxes quarterly.
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

export default GstReturn