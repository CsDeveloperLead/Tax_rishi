import React from 'react'
import img13 from '../../assets/gstrishi13.png'

function InvoicingGst() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col font-montserrat text-[#14598D]'>
            <h2 className='text-4xl leading-[40px] font-semibold'>What is e-Invoicing Under GST? Applicability, Limit, Rules & Implementation Date</h2>

            <p className='text-base leading-8'>
                e-Invoicing under GST denotes electronic invoicing defined by the GST law. Just how a GST-registered business uses an e-way bill while transporting goods from one place to another. Similarly, certain notified GST-registered businesses must generate an e-invoice for Business-to-Business (B2B) transactions. Taxpayers must comply with e-invoicing from 1st August 2023 if their annual aggregate turnover exceeds Rs.5 crore in any financial year from 2017-18 onwards.
            </p>

            <p className='text-base leading-8'>
                Clear is officially a GSTN-approved IRP. More than 3,000 large enterprises trust the Clear e-Invoicing solution for unified e-invoicing and e-way bill compliance journey. We provide the best-in-class e-invoicing solution for businesses of any scale and industry. Do not miss exploring the Clear e-Invoicing solution!
            </p>
            <h2 className='text-4xl leading-[40px] font-semibold'>What is e-invoicing under GST?</h2>

            <p className='text-base leading-8'>
                ‘e-Invoicing’ or ‘electronic invoicing’ is a system in which B2B invoices and a few other documents are authenticated electronically by GSTN for further use on the common GST portal.
            </p>

            <p className='text-base leading-8'>
                In its 35th meeting, the GST Council decided to implement a system of e-Invoicing, covering specific categories of persons, mostly large enterprises. Later on, it has been expanded to cover mid-sized businesses and small businesses as well.
            </p>

            <p className='text-base leading-8'>
                e-Invoicing does not imply the generation of invoices on the GST portal but it means submitting an already generated standard invoice on a common e-invoice portal. Thus, it automates multi-purpose reporting with a one-time input of invoice details. The CBIC notified a set of common portals to prepare e-invoice via Notification No.69/2019 – Central Tax.
            </p>

            <p className='text-base leading-8'>
                Under the electronic invoicing system, an identification number will be issued against every invoice by the Invoice Registration Portal (IRP), managed by the GST Network (GSTN). The National Informatics Centre launched the first IRP at <a href="https://einvoice1.gst.gov.in" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">einvoice1.gst.gov.in</a>.
            </p>

            <p className='text-base leading-8'>
                All invoice information gets transferred from this portal to both the GST portal and the e-way bill portal in real-time. Therefore, it eliminates the need for manual data entry while filing GSTR-1 returns and generation of part-A of the e-way bills, as the information is passed directly by the IRP to the GST portal.
            </p>
            <h2 className='text-4xl leading-[40px] font-semibold'>Who must generate e-invoice and its applicability?</h2>

            <p className='text-base leading-8'>
                The e-invoice applicability can be explained as follows:
            </p>

            <h3 className='text-2xl leading-[30px] font-semibold'>Turnover Criteria or e-Invoice Limit</h3>

            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-4 text-left">Phase</th>
                        <th className="border border-gray-300 p-4 text-left">Applicable to taxpayers having an aggregate turnover of more than</th>
                        <th className="border border-gray-300 p-4 text-left">Applicable date</th>
                        <th className="border border-gray-300 p-4 text-left">Notification number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">I</td>
                        <td className="border border-gray-300 p-4">Rs 500 crore</td>
                        <td className="border border-gray-300 p-4">01.10.2020</td>
                        <td className="border border-gray-300 p-4">61/2020 – Central Tax and 70/2020 – Central Tax</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">II</td>
                        <td className="border border-gray-300 p-4">Rs 100 crore</td>
                        <td className="border border-gray-300 p-4">01.01.2021</td>
                        <td className="border border-gray-300 p-4">88/2020 - Central Tax</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">III</td>
                        <td className="border border-gray-300 p-4">Rs 50 crore</td>
                        <td className="border border-gray-300 p-4">01.04.2021</td>
                        <td className="border border-gray-300 p-4">5/2021 - Central Tax</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">IV</td>
                        <td className="border border-gray-300 p-4">Rs 20 crore</td>
                        <td className="border border-gray-300 p-4">01.04.2022</td>
                        <td className="border border-gray-300 p-4">1/2022 - Central Tax</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">V</td>
                        <td className="border border-gray-300 p-4">Rs 10 crore</td>
                        <td className="border border-gray-300 p-4">01.10.2022</td>
                        <td className="border border-gray-300 p-4">17/2022 – Central Tax</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">VI</td>
                        <td className="border border-gray-300 p-4">Rs 5 crore</td>
                        <td className="border border-gray-300 p-4">01.08.2023</td>
                        <td className="border border-gray-300 p-4">10/2023 - Central Tax</td>
                    </tr>
                </tbody>
            </table>
            <p className='text-base leading-8'>
                For example, taxpayers must comply with e-invoicing in FY 2022-23 and onwards if their Annual Aggregate Turnover (AATO) exceeds the specified limit in any financial year from 2017-18 to 2021-22. The aggregate turnover will include the turnover of all GSTINs under a single PAN across India.
                <br /> <br />
                If the turnover in the last FY was below the threshold limit but it increased beyond the threshold limit in the current year, then e-Invoicing would apply from the beginning of the next financial year i.e. FY 2023-24.
                <br /> <br />
                Suppose, ABC ltd aggregate turnover was as follows-
                <br /> <br />
                FY 2017-18: Rs 15 crore <br />
                FY 2018-19: Rs 17 crore <br />
                FY 2019-20: Rs 24 crore <br />
                FY 2020-21: Rs 19 crore <br />
                FY 2021-22: Rs 18 crore <br />
                <br />
                Suppose, QPR ltd started business in FY 2019-20 and earned aggregate turnover as follows- <br />
                FY 2019-20: Rs 4 crore <br />
                FY 2020-21: Rs 7 crore <br />
                FY 2021-22: Rs 11 crore <br />
                <br />
                The ABC Ltd shall mandatorily generate e invoices from 01.04.2022 irrespective of the current year’s aggregate turnover as it has crossed the Rs 20 crore turnover limit in FY 2019-20.<br />

                On the other hand, QPR ltd should comply with e-Invoicing from 1st October 2022 since its previous year’s annual turnover exceeds Rs.10 crore.<br />

                The sixth phase of e-Invoicing works similar to the fifth phase. You can watch the video below to understand more.<br />
            </p>
            <h2 className='text-4xl leading-[40px] font-semibold'>To which transactions and documents does e-Invoicing apply to?</h2>

            <p className='text-base leading-8'>
                The following transactions and documents listed below fall under
                e invoicing applicability –
            </p>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-4 text-left">Documents</th>
                        <th className="border border-gray-300 p-4 text-left">Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">Tax invoices, credit notes and debit notes under Section 34 of the CGST Act</td>
                        <td className="border border-gray-300 p-4">Taxable Business-to-Business sale of goods or services, Business-to-government sale of goods or services, exports, deemed exports, supplies to SEZ (with or without tax payment), stock transfers or supply of services to distinct persons, SEZ developers, and supplies under reverse charge covered by Section 9(3) of the CGST Act.</td>
                    </tr>
                </tbody>
            </table>
            <h2 className='text-4xl leading-[40px] font-semibold'>Who need not comply with e-Invoicing?</h2>

            <p className='text-base leading-8'>
                However, irrespective of the turnover, e-Invoicing shall not be applicable to the following categories of registered persons for now, as notified in CBIC Notification No.13/2020 – Central Tax, amended from time to time-
            </p>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-4 text-left">Notified Businesses</th>
                        <th className="border border-gray-300 p-4 text-left">Documents</th>
                        <th className="border border-gray-300 p-4 text-left">Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">1. An insurer or a banking company or a financial institution, including an NBFC
                            2. A Goods Transport Agency (GTA)
                            3. A registered person supplying passenger transportation services
                            4. A registered person supplying services by way of admission to the exhibition of cinematographic films in multiplex services
                            5. An SEZ unit (excluded via CBIC Notification No. 61/2020 – Central Tax)
                            6. A government department and Local authority (excluded via CBIC Notification No. 23/2021 – Central Tax)
                            7. Persons registered in terms of Rule 14 of CGST Rules (OIDAR)</td>
                        <td className="border border-gray-300 p-4">Delivery challans, Bill of supply, financial or commercial credit note or debit note, bill of entry, and ISD invoices.</td>
                        <td className="border border-gray-300 p-4">Any Business-to-Consumers (B2C) sales, Nil-rated or non-taxable or exempt B2B sale of goods or services, nil-rated or non-taxable or exempt B2G sale of goods or services, imports, high sea sales and bonded warehouse sales, Free Trade & Warehousing Zones (FTWZ), and supplies under reverse charge covered by Section 9(4) of the CGST Act.</td>
                    </tr>
                </tbody>
            </table>
            <h2 className='text-4xl leading-[40px] font-semibold'>Systems before and after e-invoicing</h2>

            <p className='text-base leading-8'>
                Before e-invoicing could apply, businesses generated invoices through various software, and the details of these invoices were manually uploaded in the GSTR-1 return or using ERP.
                <br /> <br />
                Once the respective suppliers file the GSTR-1, the invoice information gets reflected in GSTR-2B for the recipients. On the other hand, the consignor or transporters had to generate e-way bills by again importing the invoices in Excel or JSON manually or via ERP.
                <br /> <br />
                Under the e-invoicing system, the process of generating and uploading invoice details will remain the same. It’s done by importing using the Excel tool/JSON or via API integration, either directly or through a GST Suvidha Provider (GSP). The data will seamlessly flow for GSTR-1 preparation and for the e-way bill generation too. The e-invoicing system will be the key tool to enable this.
            </p>
            <h2 className='text-4xl leading-[40px] font-semibold'>Time limit to generate e-Invoice</h2>

            <p className='text-base leading-8'>
                Until 30th April 2023, there was no time limit fixed by the GST system or the GST law to generate e-invoices. From 1st May 2023 onwards, the government announced that taxpayers with Annual Aggregate Turnover (AATO) equal to or more than Rs.100 crore must generate e-invoices for tax invoices and credit-debit notes within 7 days of invoice date, failing which such invoices and CDNs will be considered non-compliant. However, the 7-day rule wasn't implemented.
                <br /> <br />
                Instead, from 1st November 2023, the government mandated businesses with an AATO of Rs.100 crore or more to report all tax invoices, credit notes and debit notes to any notified IRP within 30 days from the date of issue of the document. Later, as per the 5th November 2024 advisory issued on the GSTN portal, the time limit of 30 days for reporting e-Invoices on IRP portals has been extended for taxpayers with an AATO of Rs.10 crore and above. To provide sufficient time for taxpayers to comply with this requirement, the changes would come into effect from 1st April 2025 onwards.
            </p>
            <h2 className='text-4xl leading-[40px] font-semibold'>
                Process of Getting an e-Invoice
            </h2>

            <p className='text-base leading-8'>
                The following are the stages involved in generating or raising an e-invoice:
            </p>

            <ol className='list-decimal list-inside pl-6 text-base leading-8'>
                <li className='mt-2'>The taxpayer has to ensure to use of the reconfigured ERP system as per PEPPOL standards. He could coordinate with the software service provider to incorporate the standard set for e-invoicing, i.e. e invoice schema (standards) and must have the mandatory parameters notified by the CBIC, at least.</li>
                <li className='mt-2'>
                    Any taxpayer has got primarily two options for IRN generation:
                    <ol className='list-decimal text-base list-inside pl-8 mt-2'>
                        <li className='mt-2'>The IP address of the computer system can be whitelisted on the e-invoice portal for a direct API integration or integration via GST Suvidha Provider (GSP)</li>
                        <li className='mt-2'>Download the bulk generation tool to bulk upload invoices. It will generate a JSON file that can be uploaded to the e invoice portal to generate IRNs in bulk.</li>
                    </ol>
                </li>
                <li className='mt-2'>The taxpayer must thereafter raise a regular invoice on that software. He must give all the necessary details like billing name and address, GSTN of the supplier, transaction value, item rate, GST rate applicable, tax amount, etc.</li>
                <li className='mt-2'>Once either of the above options is chosen, raise the invoice on the respective ERP software or billing software. Thereafter, upload the details of the invoice, especially mandatory fields, onto the IRP using the JSON file or via an application service provider (app or through GSP) or through direct API. The IRP will act as the central registrar for e-invoicing and its authentication. There are several other modes of interacting with IRP, such as SMS-based and mobile app-based.</li>
                <li className='mt-2'>IRP will validate the key details of the B2B invoice, check for any duplications and generate an invoice reference number (hash) for reference. There are four parameters based on which IRN is generated: Seller GSTIN, invoice number, FY in YYYY-YY, and document type (INV/DN/CN).</li>
                <li className='mt-2'>IRP generates the invoice reference number (IRN), digitally signs the invoice and creates a QR code in Output JSON for the supplier. On the other hand, the seller of the supply will get intimated about the e invoice generation through email (if provided in the invoice).</li>
                <li className='mt-2'>IRP will send the authenticated payload to the GST portal for GST returns. Additionally, details will be forwarded to the e-way bill portal, if applicable. The GSTR-1 of the seller gets auto-filled for the relevant tax period. In turn, it determines the tax liability.</li>
            </ol>
            <img src={img13} alt="image" className='w-[60%] mx-auto' />
            <p className='text-base leading-8'>
                A taxpayer can continue to print his invoice as being done presently with a logo. The e-invoicing system only mandates all taxpayers to report invoices on IRP in electronic format. You can follow this step-by-step guide to understand the detailed process of generating an e-invoice.
            </p>
            <h2 className='text-4xl leading-[40px] font-semibold'>Benefits of e-Invoicing to businesses</h2>
            <p className='text-base leading-8'>
                Businesses will have the following benefits by using e-invoice initiated by GSTN-
            </p>
            <ul className='list-disc pl-6 mt-4'>
                <li className='mt-2'>e-Invoice resolves and plugs a major gap in data reconciliation under GST to reduce mismatch errors.</li>
                <li className='mt-2'>e-Invoices created on one software can be read by another, allowing interoperability and helping reduce data entry errors.</li>
                <li className='mt-2'>Real-time tracking of invoices prepared by the supplier is enabled by e-invoice.</li>
                <li className='mt-2'>Backward integration and automation of the GST return filing process – the relevant details of the invoices would be auto-populated in the various returns, especially for generating part-A of e-way bills.</li>
                <li className='mt-2'>Faster availability of genuine input tax credit.</li>
                <li className='mt-2'>Lesser possibility of audits/surveys by the tax authorities since the information they require is available at a transaction level.</li>
                <li className='mt-2'>Faster and easy access to formal credit routes such as invoice discounting or financing, especially for small businesses.</li>
                <li className='mt-2'>Improved customer relations and growth in prospects for small businesses to do business with large enterprises.</li>
            </ul>
            <h2 className='text-4xl leading-[40px] font-semibold'>How can e-invoicing curb tax evasion?</h2>
            <p className='text-base leading-8'>
                It will help in curbing tax evasion in the following ways-
            </p>
            <ul className='list-disc pl-6'>
                <li className='mt-2'>Tax authorities will have access to transactions as they take place in real-time since the e invoice will have to be compulsorily generated through the GST portal.</li>
                <li className='mt-2'>There will be less scope for manipulating invoices since the invoice gets generated before carrying out a transaction.</li>
                <li className='mt-2'>It will reduce the chances of fake GST invoices, and only genuine input tax credit can be claimed as all invoices need to be generated through the GST portal. Since the input credit can be matched with output tax details, it becomes easier for GSTN to track fake tax credit claims.</li>
            </ul>
            <h2 className="text-4xl leading-[50px] font-semibold">Mandatory Fields of an e-Invoice</h2>
            <p className="text-base leading-8">e-Invoice must primarily adhere to the GST invoicing rules. Apart from this, it should also accommodate the invoicing system or policies followed by each industry or sector in India. Certain information is made mandatory, whereas the rest of it is optional for businesses. Many fields are also made optional, and users can choose to fill up relevant fields only. It has also described every field along with the sample inputs for the interested users. One can see that certain required fields from the e-way bill format are included now in the e-invoice, such as the sub-supply type.</p>

            <p className="text-base leading-8">Below is the gist of the contents of the latest e-invoice format as notified on 30th July 2020 via Notification No.60/2020 – Central Tax:</p>

            <ul className="list-disc pl-6 list-inside">
                <li className='mt-2'>12 sections (mandatory + optional) and six annexures consisting of a total of 138 fields.</li>
                <li className='mt-2'>Out of the 12 sections, five are mandatory, and seven are optional. Two annexures are mandatory.</li>
                <li className='mt-2'>The five mandatory sections are basic details, supplier information, recipient information, invoice item details, and document total. The two mandatory annexures are details of the items and the document total.</li>
            </ul>
            <p className="text-base leading-8">The following fields must be compulsorily be declared in an e-invoice:</p>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-4 text-left">Sl. no.</th>
                        <th className="border border-gray-300 p-4 text-left">Name of the field</th>
                        <th className="border border-gray-300 p-4 text-left">List of choices/ specifications/sample Inputs</th>
                        <th className="border border-gray-300 p-4 text-left">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">1</td>
                        <td className="border border-gray-300 p-4">Document Type Code</td>
                        <td className="border border-gray-300 p-4">Enumerated List such as INV/CRN/DBN</td>
                        <td className="border border-gray-300 p-4">Type of document must be specified</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">2</td>
                        <td className="border border-gray-300 p-4">Supplier_Legal Name</td>
                        <td className="border border-gray-300 p-4">String Max length: 100 </td>
                        <td className="border border-gray-300 p-4">Legal name of the supplier must be as per the PAN card</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">3</td>
                        <td className="border border-gray-300 p-4">Supplier_GSTIN</td>
                        <td className="border border-gray-300 p-4">Max length: 15  Must be alphanumeric </td>
                        <td className="border border-gray-300 p-4">GSTIN of the supplier raising the e-invoice</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">4</td>
                        <td className="border border-gray-300 p-4">Supplier_Address</td>
                        <td className="border border-gray-300 p-4">Max length: 100 </td>
                        <td className="border border-gray-300 p-4">Building/Flat no., Road/Street, Locality, etc. of the supplier raising the e-invoice</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">5</td>
                        <td className="border border-gray-300 p-4">Supplier_Place</td>
                        <td className="border border-gray-300 p-4">Max length: 50</td>
                        <td className="border border-gray-300 p-4">Supplier’s location such as city/town/village must be mentioned</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">6</td>
                        <td className="border border-gray-300 p-4">Supplier_State_Code</td>
                        <td className="border border-gray-300 p-4">Enumerated list of states</td>
                        <td className="border border-gray-300 p-4">The state must be selected from the latest list given by GSTN</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">7</td>
                        <td className="border border-gray-300 p-4">Supplier Pincode</td>
                        <td className="border border-gray-300 p-4">Six digit code</td>
                        <td className="border border-gray-300 p-4">The place (locality/district/state) of the supplier’s locality</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">8</td>
                        <td className="border border-gray-300 p-4">Document Number</td>
                        <td className="border border-gray-300 p-4">Max length: 16 Sample can be “ Sa/1/2019”</td>
                        <td className="border border-gray-300 p-4">For unique identification of the invoice, a sequential number is required within the business context, time frame, operating systems and records of the supplier. No identification scheme is to be used.</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">9</td>
                        <td className="border border-gray-300 p-4">Preceeding_Invoice_Reference and date</td>
                        <td className="border border-gray-300 p-4">Max length:16 Sample input is  “ Sa/1/2019” and “16/11/2020”</td>
                        <td className="border border-gray-300 p-4">Detail of original invoice which is being amended by a subsequent document such as a debit and credit note. It is required to keep future expansion of e-versions of credit notes, debit notes and other documents required under GST.</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">10</td>
                        <td className="border border-gray-300 p-4">Document Date</td>
                        <td className="border border-gray-300 p-4">String (DD/MM/YYYY) as per the technical field specification</td>
                        <td className="border border-gray-300 p-4">The date when the invoice was issued. However, the format under explanatory notes refers to ‘YYYY-MM-DD’. Further clarity will be required. Document period start and end date must also be specified if selected.</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">11</td>
                        <td className="border border-gray-300 p-4">Recipient_ Legal Name</td>
                        <td className="border border-gray-300 p-4">Max length: 100</td>
                        <td className="border border-gray-300 p-4">The name of the buyer as per the PAN</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">12</td>
                        <td className="border border-gray-300 p-4">Recipient’s GSTIN</td>
                        <td className="border border-gray-300 p-4">Max length: 15</td>
                        <td className="border border-gray-300 p-4">The GSTIN of the buyer to be declared here</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">13</td>
                        <td className="border border-gray-300 p-4">Recipient’s Address</td>
                        <td className="border border-gray-300 p-4">Max length: 100</td>
                        <td className="border border-gray-300 p-4">Building/flat no., road/street, locality, etc. of the supplier raising the e-invoice</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">14</td>
                        <td className="border border-gray-300 p-4">Recipient’s State Code</td>
                        <td className="border border-gray-300 p-4">Enumerated list</td>
                        <td className="border border-gray-300 p-4">The place of supply state code to be selected here</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">15</td>
                        <td className="border border-gray-300 p-4">Place_Of_Supply_State_ Code</td>
                        <td className="border border-gray-300 p-4">Enumerated list of states</td>
                        <td className="border border-gray-300 p-4">The state must be selected from the latest list given by GSTN</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">16</td>
                        <td className="border border-gray-300 p-4">Pincode</td>
                        <td className="border border-gray-300 p-4">Six digit code</td>
                        <td className="border border-gray-300 p-4">The place (locality/district/state) of the buyer on whom the invoice is raised/ billed to must be declared here if any</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">17</td>
                        <td className="border border-gray-300 p-4">Recipient Place</td>
                        <td className="border border-gray-300 p-4">Max length: 100</td>
                        <td className="border border-gray-300 p-4">Recipient’s location (City/Town/Village)</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">18</td>
                        <td className="border border-gray-300 p-4">Supplier_State_Code</td>
                        <td className="border border-gray-300 p-4">Enumerated list of states</td>
                        <td className="border border-gray-300 p-4">The state must be selected from the latest list given by GSTN</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">1</td>
                        <td className="border border-gray-300 p-4">Document Type Code</td>
                        <td className="border border-gray-300 p-4">Enumerated List such as INV/CRN/DBN</td>
                        <td className="border border-gray-300 p-4">Type of document must be specified</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">2</td>
                        <td className="border border-gray-300 p-4">Supplier_Legal Name</td>
                        <td className="border border-gray-300 p-4">String Max length: 100 </td>
                        <td className="border border-gray-300 p-4">Legal name of the supplier must be as per the PAN card</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">3</td>
                        <td className="border border-gray-300 p-4">Supplier_GSTIN</td>
                        <td className="border border-gray-300 p-4">Max length: 15  Must be alphanumeric </td>
                        <td className="border border-gray-300 p-4">GSTIN of the supplier raising the e-invoice</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">4</td>
                        <td className="border border-gray-300 p-4">Supplier_Address</td>
                        <td className="border border-gray-300 p-4">Max length: 100 </td>
                        <td className="border border-gray-300 p-4">Building/Flat no., Road/Street, Locality, etc. of the supplier raising the e-invoice</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">5</td>
                        <td className="border border-gray-300 p-4">Supplier_Place</td>
                        <td className="border border-gray-300 p-4">Max length: 50</td>
                        <td className="border border-gray-300 p-4">Supplier’s location such as city/town/village must be mentioned</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">6</td>
                        <td className="border border-gray-300 p-4">Supplier_State_Code</td>
                        <td className="border border-gray-300 p-4">Enumerated list of states</td>
                        <td className="border border-gray-300 p-4">The state must be selected from the latest list given by GSTN</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">1</td>
                        <td className="border border-gray-300 p-4">Document Type Code</td>
                        <td className="border border-gray-300 p-4">Enumerated List such as INV/CRN/DBN</td>
                        <td className="border border-gray-300 p-4">Type of document must be specified</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">2</td>
                        <td className="border border-gray-300 p-4">Supplier_Legal Name</td>
                        <td className="border border-gray-300 p-4">String Max length: 100 </td>
                        <td className="border border-gray-300 p-4">Legal name of the supplier must be as per the PAN card</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">3</td>
                        <td className="border border-gray-300 p-4">Supplier_GSTIN</td>
                        <td className="border border-gray-300 p-4">Max length: 15  Must be alphanumeric </td>
                        <td className="border border-gray-300 p-4">GSTIN of the supplier raising the e-invoice</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">4</td>
                        <td className="border border-gray-300 p-4">Supplier_Address</td>
                        <td className="border border-gray-300 p-4">Max length: 100 </td>
                        <td className="border border-gray-300 p-4">Building/Flat no., Road/Street, Locality, etc. of the supplier raising the e-invoice</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">5</td>
                        <td className="border border-gray-300 p-4">Supplier_Place</td>
                        <td className="border border-gray-300 p-4">Max length: 50</td>
                        <td className="border border-gray-300 p-4">Supplier’s location such as city/town/village must be mentioned</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="border border-gray-300 p-4">6</td>
                        <td className="border border-gray-300 p-4">Supplier_State_Code</td>
                        <td className="border border-gray-300 p-4">Enumerated list of states</td>
                        <td className="border border-gray-300 p-4">The state must be selected from the latest list given by GSTN</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InvoicingGst