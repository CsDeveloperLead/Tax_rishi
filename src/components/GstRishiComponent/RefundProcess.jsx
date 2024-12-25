import React from 'react'
import img18 from '../../assets/gstrishi18.png'
import img19 from '../../assets/gstrishi19.png'
import img20 from '../../assets/gstrishi20.png'
import img21 from '../../assets/gstrishi21.png'
import img22 from '../../assets/gstrishi22.png'
import img23 from '../../assets/gstrishi23.png'
import img24 from '../../assets/gstrishi24.png'
import img25 from '../../assets/gstrishi25.png'
import img26 from '../../assets/gstrishi26.png'
import img27 from '../../assets/gstrishi27.png'
import img28 from '../../assets/gstrishi28.png'
import img29 from '../../assets/gstrishi29.png'
import img30 from '../../assets/gstrishi30.png'
import img31 from '../../assets/gstrishi31.png'
import img32 from '../../assets/gstrishi32.png'
import img33 from '../../assets/gstrishi33.png'
import img34 from '../../assets/gstrishi34.png'
import img35 from '../../assets/gstrishi35.png'
import img36 from '../../assets/gstrishi36.png'
import img37 from '../../assets/gstrishi37.png'
import img38 from '../../assets/gstrishi38.png'
import img39 from '../../assets/gstrishi39.png'
import img40 from '../../assets/gstrishi40.png'
import img41 from '../../assets/gstrishi41.png'
import img42 from '../../assets/gstrishi42.png'
import img43 from '../../assets/gstrishi43.png'
import img44 from '../../assets/gstrishi44.png'
import img45 from '../../assets/gstrishi45.png'
import img46 from '../../assets/gstrishi46.png'
import img47 from '../../assets/gstrishi47.png'
import img48 from '../../assets/gstrishi48.png'
import img49 from '../../assets/gstrishi49.png'
import img50 from '../../assets/gstrishi50.png'
import img51 from '../../assets/gstrishi51.png'
import img52 from '../../assets/gstrishi52.png'
import img53 from '../../assets/gstrishi53.png'
import img54 from '../../assets/gstrishi54.png'
import img55 from '../../assets/gstrishi55.png'
import img56 from '../../assets/gstrishi56.png'
import img57 from '../../assets/gstrishi57.png'
import { Link } from 'react-router-dom'

function RefundProcess() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]'>
            <div className='w-[80%] flex flex-col gap-4'>
                <h1 className="text-4xl leading-[40px] font-semibold">
                    GST Refund: Step-by-Step Guide to GST Refund Claims
                </h1>
                <p className="text-base leading-8">
                    The GST refund process requires the taxpayer to follow specific steps, submit documents and declaration if required, to the GST authorities for claiming a GST refund. The refunds under GST can be for the excess cash balance deposited in the electronic cash ledger or tax paid by mistake or the accumulated Input Tax Credit (ITC) which couldn't be utilised for tax payments due to zero-rated sales or inverted tax structure.
                    <br /> <br />
                    The forms in which a GST refund is claimed varies according to the type of GST refund being claimed. For instance, the refund of IGST in exports (with tax payment) can be claimed only through reporting details in the GSTR-1 and GSTR-3B. However, the refund of cash paid in excess of the electronic cash ledger can be claimed by applying in form RFD-01. Therefore, the steps or the process differs with the type of GST refund.
                    <br /> <br />
                    This article provides the step-by-step guide to apply for different types of GST refunds.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Latest Updates on GST Refund
                </h2>

                <div className='text-base leading-8'>
                    <p className="text-base leading-8 mt-2"><strong>10th November 2022:</strong></p>
                    <p className="text-base leading-8 mt-2">
                        Circular 181 was issued to clarify that refund-related amendments will apply prospectively.
                    </p>

                    <p className="text-base leading-8 mt-2"><strong>5th July 2022:</strong></p>
                    <p>
                        <strong>Exclusion of COVID Pandemic Period:</strong><br />
                        Taxpayers can exclude the COVID pandemic period (from <strong>1st March 2020 to 28th February 2022</strong>) when calculating the time limit for filing GST refund applications under <strong>Sections 54 or 55</strong> of the <strong>CGST Act</strong>.
                    </p>

                    <p className="text-base leading-8 mt-2"><strong>1st February 2022:</strong></p>
                    <p className="text-base leading-8 mt-2">
                        Budget 2022 Update -
                    </p>
                    <ol className='list-decimal list-inside pl-6 text-base leading-8 mt-4'>
                        <li children='mt-2'>Section 54 is amended to provide that refund claim of any balance in the electronic cash ledger can be made in a particular form and manner prescribed.</li>
                        <li children='mt-2'>The time limit to claim refund by UN agencies is now two years from last day of quarter when supply was received instead of six months.</li>
                        <li children='mt-2'>The restriction to refund taxpayers for tax defaults, that earlier applied to unutilised ITC refund, is now extended to other types of refunds.</li>
                        <li children='mt-2'>The relevant date to file refund claim application for supplies to SEZ is clarified in new sub-clause (ba) of clause (2) of the explanation.</li>
                    </ol>

                    <p className="text-base leading-8 mt-2"><strong>1st May 2021:</strong></p>
                    <p className="text-base leading-8 mt-2">
                        Where the time limit to pass orders for rejecting any refund claim, fully or partly, falls between <strong>15th April 2021 and 30th May 2021</strong>, it has been extended. The extended time limit shall be the later of the following two dates:
                    </p>
                    <ul className='list-disc pl-6'>
                        <li>15 days after the reply to notice</li>
                        <li>31st May 2021</li>
                    </ul>
                </div>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Steps to submit a refund pre-application form
                </h2>

                <p className='text-base leading-8'>
                    Refund pre-application is a form that taxpayers must fill out to offer information about their business, Aadhaar number, income tax details, export data, expenditure and investment, and so on. Taxpayers must file this pre-application form for all types of GST refund. This form need not be signed and cannot be edited once submitted. Hence, the user must be careful while entering the details.
                    <br /> <br />
                    The two steps involved in filing the GST refund pre-application form are as follows:
                </p>
                <p className='text-base leading-8'><span className='font-semibold'>Step 1</span> – Log in to the GST portal, go to the ‘Services’ tab, click on ‘Refunds’ and select the ‘Refund pre-application form’ option.</p>
                <img src={img18} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'><span className='font-semibold'>Step 2</span> – On the page displayed called ‘Refund pre-application form’, fill in the details asked, and click on ‘Submit’. A confirmation of submission will be displayed on the screen.</p>
                <p className='text-base leading-8'>
                    The following details must be reported:
                </p>
                <ul className='list-disc pl-6'>
                    <li className='mt-2'><strong>Nature of business:</strong> Manufacturer, merchant exporter, trader, and service provider</li>
                    <li className='mt-2'><strong>Date of issue of IEC (only for exporters):</strong> Those applying for a refund on account of exports (without payment of tax) must furnish the date of issue of the Import Export Certificate.</li>
                    <li className='mt-2'><strong>Aadhaar number of the primary authorised signatory:</strong> This is mandatory.</li>
                    <li className='mt-2'><strong>Value of exports made in the FY 2019-2020 (only for exporters):</strong> This must be computed at the GSTIN level and not PAN level.</li>
                    <li className='mt-2'><strong>Income tax paid in FY 2018-2019:</strong> Must be provided.</li>
                    <li className='mt-2'><strong>Advance tax paid in FY 2019-2020:</strong> Must be included.</li>
                    <li className='mt-2'><strong>Capital expenditure and investment made in FY 2018-2019:</strong> Must be specified.</li>
                </ul>
                <img src={img19} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Refund process of IGST paid on export of goods (with tax payment)
                </h2>

                <p className='text-base leading-8'>
                    Exports are considered as ‘Zero-rated supplies’ under GST. Hence, the tax paid (IGST and cess, if any) is eligible for a refund by the exporter. Since the quantum of transactions can be huge in exporters, the GST portal facilitates a simpler process of GST refund. No separate application in form RFD-01 is required in this case. However, exporter shall satisfy certain conditions for a GST refund.
                    <br /> <br />
                    Firstly, Table 6A in GSTR-1 must be filled up with Shipping bill details related to export transactions (with payment of tax) and filed by the due date. Secondly, the summary details must be reported in item 3.1 (b) of GSTR-3B. Further, the corresponding tax must be paid, and the return should be filed by the due date prescribed by GST law.
                    <br /> <br />
                    In the export invoice data provided under Table 6A of Form GSTR-1, the complete shipping bill number, shipping bill date, and port code details must be provided. It should be noted that export transactions carried out in a tax period must be filed in the GSTR-1 and GSTR-3B of the same tax period. Further, you must make sure that the total IGST and cess mentioned in in Table 3.1 of GSTR-3B must be equal to or higher compared to Table 6A and Table 6B of GSTR-1.
                    <br /> <br />
                    The GST authority considers the shipping bill as a refund application. The GST portal sends export details to the ICEGATE as disclosed on GSTR-1. Also, a confirmation that GSTR-3B was filed for the relevant tax period is sent. The Customs system compares the information on GSTR-1 to the information on their shipping bill and Export General Manifest (EGM) and then processes the refund.
                    <br /> <br />
                    The ICEGATE system will share payment information with the GST portal once the refund payment has been credited to the taxpayers’ accounts. The GST portal will share the information with the taxpayers by SMS and e-mail.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Steps to Apply in Form RFD-01 for Different Types of GST Refund
                </h2>

                <div className='text-base leading-8'>
                    <p className='text-base leading-8'>
                        RFD-01 must be filed for the following types of GST refund claims:
                    </p>

                    <ul className='list-disc pl-6'>
                        <li className='mt-2'>Excess cash balance from the electronic cash ledger or excess tax payment.</li>
                        <li className='mt-2'>IGST paid on export of services (with payment of tax).</li>
                        <li className='mt-2'>Accumulated ITC due to exports of goods and services without payment of tax.</li>
                        <li className='mt-2'>Accumulated ITC due to supplies made to SEZ unit/SEZ developer (without payment of tax).</li>
                        <li className='mt-2'>ITC accumulated due to inverted tax structure (tax on inputs higher than tax on outputs).</li>
                        <li className='mt-2'>Receiving deemed exports.</li>
                        <li className='mt-2'>Tax paid on supplies made to SEZ units/SEZ developers (with payment of tax).</li>
                        <li className='mt-2'>Tax paid on an intrastate supply later held as interstate supply and vice versa.</li>
                        <li className='mt-2'>If a supplier of deemed exports paid tax on deemed supplies without charging and collecting tax from the buyer of deemed exports, then he would be eligible to claim it as a refund (on a declaration that the recipient or buyer of such deemed exports does not claim a refund).</li>
                        <li className='mt-2'>On account of Assessment or Provisional Assessment or Appeal or any other order.</li>
                        <li className='mt-2'>Refund on ‘Any other ground’ using RFD-01.</li>
                        <li className='mt-2'>Refund claim by unregistered taxpayer.</li>
                    </ul>

                    <p className='text-base leading-8'>
                        Taxpayer must declare accurate information of the invoices in GSTR-1 and RFD-01. A certificate by a chartered accountant/cost accountant needs to be submitted in certain cases.
                    </p>
                </div>
                <p className='text-base leading-8'>Follow the below steps to file a refund application in RFD-01:</p>
                <p className='text-base leading-8'><span className='font-semibold'>Step 1</span> – Log in to the GST portal and go to the ‘Services’ tab, click on ‘Refunds’ and select the ‘Application of refund’ option.</p>
                <img src={img20} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'><span className='font-semibold'>Step 2</span> – In the page that appears, select the reason for refund or the type of refund and click on ‘Create refund application’.</p>
                <img src={img21} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'><span className='font-semibold'>Step 3</span> – Select the period for which a refund is to be applied and select ‘Yes’ or ‘No’ on the dialogue box- ‘If you want to file a nil refund’. </p>
                <img src={img22} alt="image" className='w-[60%] mx-auto' />
                <img src={img23} alt="image" className='w-[30%] mx-auto' />
                <p className='text-base leading-8'>
                    In case of nil refund application, the taxpayer can checkmark the declaration and proceed to file using either DSC or EVC.
                    <br /> <br />
                    This step is not applicable in types of refunds such as excess cash balance in the ledger, intrastate supply later held as interstate supply and vice versa, assessment or provisional assessment or appeal or any other order.
                </p>
                <p className='text-base leading-8'><span className='font-semibold'>Step 4</span> – Enter the details on the relevant page that gets displayed, based on the type of refund selected in the previous step.</p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 1: Excess cash balance in electronic cash ledger
                </h2>
                <p className='text-base leading-8'>
                    Enter the amount of cash to be claimed as a refund.
                </p>
                <img src={img24} alt="image" className='w-[40%] mx-auto' />
                <img src={img25} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 2: Excess tax paid through GSTR-3B
                </h2>
                <p className='text-base leading-8'>
                    Enter details of the GSTR-3B in which such tax payment was done in cash.
                </p>
                <img src={img26} alt="image" className='w-[50%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 3: Accumulated ITC due to exports of goods and services without payment of tax
                </h2>
                <p className='text-base leading-8'>
                    Step a: Download Statement 3 and enter the details of export invoice documents on which refund is claimed.
                </p>
                <img src={img27} alt="image" className='w-[50%] mx-auto' />
                <img src={img28} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    Step b: Generate the JSON file and upload it on the GST portal. Validate errors, if any.
                </p>
                <img src={img29} alt="image" className='w-[60%] mx-auto' />
                <img src={img30} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    Step c: In the column, ‘Computation of Refund to be claimed Statement-3A [rule 89(4)]’, enter aggregate turnover, adjusted total turnover and net input tax credit.
                </p>
                <img src={img31} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    Step d: Validations take place to compute the maximum amount of refund that the taxpayer is eligible for.
                </p>
                <img src={img32} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 4: Accumulated ITC due to supplies made to SEZ unit/SEZ developer (without payment of tax)
                </h2>
                <p className='text-base leading-8'>
                    There is a prerequisite that GSTR-1 and GSTR-3B of the selected period must be filed. The steps remain the same as the ones laid down for the Type 3 refund given above. However, the statement will be Statement 5 and a CSV file can be uploaded instead of JSON.
                </p>
                <img src={img33} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 5: ITC accumulated due to inverted tax structure
                </h2>
                <p className='text-base leading-8'>
                    Inverted tax structure means the tax rate and amount paid on inputs are higher than the outputs. The steps remain the same as the ones laid down for the Type 3 refund given above. However, the statement will be Statement 1A. Thereafter, enter details such as turnover of inverted rated supply, tax payable, adjusted total turnover and net input tax credit.
                </p>
                <img src={img34} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 6: Refund by the recipient of deemed exports
                </h2>
                <p className='text-base leading-8'>
                    If a recipient of deemed exports has paid the tax on inward supplies that qualify as deemed exports and has claimed ITC for the tax paid in their electronic credit ledger, the recipient of these deemed exports is eligible for a refund of the tax amount paid. However, the supplier of such deemed exports shall not claim a refund.
                    <br /> <br />
                    The steps remain the same as the ones laid down for the Type 3 refund given above. However, the statement will be Statement 5B. Thereafter, enter details such as net input tax credit of deemed exports and the refund to be claimed.
                </p>
                <img src={img35} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 7: Tax paid on supplies made to SEZ unit/SEZ developer (with payment of tax)
                </h2>
                <p className='text-base leading-8'>
                    The steps remain the same as the ones laid down for the Type 3 refund given above. However, the statement will be Statement 4. The refund amount will get auto-populated based on the statement uploaded.
                </p>
                <img src={img36} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 8: Tax paid on an intrastate supply later held as interstate supply and vice versa
                </h2>
                <p className='text-base leading-8'>
                    The steps remain the same as the ones laid down for the Type 3 refund given above. However, the statement will be Statement 6. The refund amount will get auto-populated based on the statement uploaded.
                </p>
                <img src={img37} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 9: Refund by the supplier of deemed exports
                </h2>
                <p className='text-base leading-8'>
                    The steps remain the same as the ones laid down for the Type 3 refund given above. However, the statement will be Statement 5B. The refund amount will get auto-populated based on the statement uploaded.
                </p>
                <img src={img38} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 10: Refund of IGST paid on export of services (with tax payment)
                </h2>
                <p className='text-base leading-8'>
                    The steps remain the same as the ones laid down for the Type 3 refund given above. However, the statement will be Statement 2. The refund amount will get auto-populated based on the statement uploaded.
                </p>
                <img src={img39} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 11: On account of assessment or provisional assessment or appeal or any other order
                </h2>
                <p className='text-base leading-8'>
                    Make the selection of the type of order and enter details of the same, as per the below screenshot:
                </p>
                <img src={img40} alt="image" className='w-[60%] mx-auto' />
                <img src={img41} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Type 12: Refund on ‘any other ground’
                </h2>
                <p className='text-base leading-8'>
                    Reasons could be excess interest paid via GSTR-3B. Mention the reason for refund specifically in 200 characters along with the amount.
                </p>
                <img src={img42} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'><span className='font-semibold'>Step 5</span> – Enter bank account details for the refund, upload the supporting documents and declaration, in refund types that mandate it.</p>
                <p className='text-base leading-8'>
                    Up to 10 supporting documents can be uploaded, with file size limited to 5 MB each.
                    <br /> <br />
                    Preview the application and click on ‘Save’. The saved application remains for 15 days for the taxpayer’s action. Click on the ‘Proceed’ button after checking the boxes against undertaking and self-declaration.
                </p>
                <img src={img43} alt="image" className='w-[60%] mx-auto' />
                <img src={img44} alt="image" className='w-[60%] mx-auto' />
                <img src={img45} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'><span className='font-semibold'>Step 5</span> – File RFD-01 using EVC or DSC.</p>
                <img src={img46} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    Application reference number or ARN gets generated and displayed on the screen. Taxpayers can track using this number. The ARN is also sent to the email address and mobile number.
                </p>
                <img src={img47} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    The refund application is thereafter assigned to the refund processing officer. It will be processed, and the refund status gets updated.
                </p>
                <img src={img48} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    Refund claim by unregistered person
                </h2>
                <p className='text-base leading-8'>
                    The unregistered person shall get the GST registration. Then apply for a refund in RFD-01 using statement 8, supplier certificate and supporting documents.
                </p>
                <img src={img49} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    GST refund process for embassies and international organisations
                </h2>
                <p className='text-base leading-8'>
                    There are two ways in which refunds can be claimed:
                </p>
                <ul className='list-disc pl-6 list-item'>
                    <li className='mt-2'>Use GSTR-11  to generate a refund application in form RFD-10.</li>
                    <li className='mt-2'>Obtain the RFD-10 form on the dashboard after logging into the GST portal.</li>
                </ul>
                <p className='text-base leading-8'>
                    In the first case, go to GSTR-11 already filed by selecting the tax period/quarter. Click on the ‘Generate RFD-10’ button.
                </p>
                <img src={img50} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    Select the embassy or organisation radio button and click on the ‘Create’ button. Table ‘Details of the tax paid on purchases as reported under GSTR-11’ will have amounts as auto-populated from the return of the respective period, editable as well.
                </p>
                <img src={img51} alt="image" className='w-[60%] mx-auto' />
                <img src={img52} alt="image" className='w-[60%] mx-auto' />
                <img src={img53} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    Preview and submit using DSC or EVC.
                </p>
                <img src={img54} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    In the second case, on the dashboard after logging in to the GST portal, go to the services tab and select refunds. Thereafter, choose the ‘Application for refund’ option.
                </p>
                <img src={img55} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    On the page that gets displayed, choose ‘Embassy/International Organisation’ as the option and click on ‘Create’.
                </p>
                <img src={img56} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    The details of tax paid eligible for refund get auto-populated from GSTR-11, already filed.
                    <br /> <br />
                    Verify and edit or enter the refund amount.
                </p>
                <img src={img57} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    The rest of the steps remain the same as the first case.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>
                    What happens after the GST refund is applied?
                </h2>
                <p className='text-base leading-8'>
                    The application filed by a refund applicant or taxpayer will appear on the dashboard of the tax officer or refund processing officer as a pending work item. He or she will verify and scrutinise the application along with the documents.
                    <br /> <br />
                    Filed applications can be tracked using the “Track Application Status” under Refunds. After inspection by a GST authorities refund amount will be credited to the applicant bank account.
                    <br /> <br />
                    Following will be the officer’s actions:
                </p>
                <ul className='list-disc pl-6 list-inside'>
                    <li className='mt-2'>Provisional refund can be granted in form RFD-04 for certain types of refunds. It is to be issued within 7 days from the acknowledgement date, with at least 90% of the amount of the refund claimed granted.</li>
                    <li className='mt-2'>Acknowledgement in form RFD-02 is issued within 15 days from filing the refund application if it is complete in all aspects.</li>
                    <li className='mt-2'>An option has been introduced to withdraw the application of refund by the applicant in form RFD-01W. Once the withdrawal application is submitted, the refund, which was debited to the taxpayer’s electronic credit or cash ledger upon filing the refund application, will be credited back to the respective ledger.</li>
                    <li className='mt-2'>A deficiency memo in form RFD-03 can be issued by the officer within the same time limit to rectify any deficiencies by the applicant. At this point, an auto re-credit of the amount of refund claimed in the electronic cash/credit ledger will happen if the ledger had been debited at the time of filing the refund. A fresh application must be submitted in such cases.</li>
                    <li className='mt-2'>A notice to seek clarification in form RFD-08 can be issued by the officer for rejecting the application or for recovery of refund granted by mistake. In such cases, the applicant must reply within 15 days in form RFD-09.</li>
                    <li className='mt-2'>A sanction or rejection order shall be passed by the officer in form RFD-06. Following this, in cases of sanction, a payment order in form RFD-05 is passed. Alternatively, RFD-05 is sometimes issued after RFD-04.</li>
                    <li className='mt-2'>In certain cases, the officer may pass an order for withholding the refund sanctioned in form RFD-07 (part-B). In this case, RFD-05 is never issued.</li>
                    <li className='mt-2'>An order to re-credit the refund from the taxpayer’s electronic cash or credit ledger in cases of rejection or when the provisional refund was granted in form PMT-03.</li>
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

export default RefundProcess