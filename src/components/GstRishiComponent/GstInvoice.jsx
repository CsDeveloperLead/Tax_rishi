import React from 'react'
import img8 from '../../assets/gstrishi8.jpg'
import img9 from '../../assets/gstrishi9.png'
import img10 from '../../assets/gstrishi10.png'
import img11 from '../../assets/gstrishi11.png'
import img12 from '../../assets/gstrishi12.png'
import { Link } from 'react-router-dom'

function GstInvoice() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]'>
            <div className='w-[80%] flex flex-col gap-4'>
                <h1 className='text-4xl leading-[40px] font-semibold'>Invoicing Under GST</h1>
                <p className='text-base leading-8'>
                    Invoicing is a crucial activity for any business, irrespective of type and size. Businesses should be careful while generating invoices as every transaction enters into books of accounts through this activity. Further, after introducing the Goods and Services Tax (GST), registered businesses must issue GST invoices, also known as GST bills.
                    <br /><br />
                    This article explains everything about invoicing under GST, including what it is, who should issue it, mandatory fields, types of invoices, revised invoices, and invoicing under special cases.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>What is a GST invoice?</h2>
                <p className='text-base leading-8'>
                    An invoice or a GST bill is a list of goods sent or services provided, along with the amount due for payment.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Who should issue GST Invoice?</h2>
                <p className='text-base leading-8'>
                    If you are a GST registered business, you need to provide GST compliant invoices for the sale of goods and/or services.
                </p>
                <p className='text-base leading-8'>
                    Also, you should receive GST invoices from your vendors to claim the Input Tax Credit (ITC).
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>What are the mandatory fields a GST Invoice should have?</h2>
                <p className='text-base leading-8'>
                    A tax invoice is generally issued to charge the tax and pass on the Input Tax Credit (ITC). A GST invoice must have the following mandatory fields:
                </p>
                <ul className='list-decimal pl-6 text-base leading-8'>
                    <li>Invoice number</li>
                    <li>Invoice date</li>
                    <li>Customer name</li>
                    <li>Shipping and billing address</li>
                    <li>Customer and taxpayer’s GSTIN (if registered)</li>
                    <li>Place of supply</li>
                    <li>HSN code/ SAC code</li>
                    <li>Item details i.e. description, quantity (number), unit (meter, kg, etc.)</li>
                    <li>Total value</li>
                    <li>Taxable value and discounts</li>
                    <li>GST rate and amount of taxes i.e. CGST/ SGST/ IGST</li>
                    <li>Whether GST is payable on reverse charge basis</li>
                    <li>Signature of the supplier</li>
                </ul>
                <p className='text-base leading-8'>
                    ** If the recipient is not registered AND the value is more than Rs. 50,000, then the invoice should carry:
                </p>
                <ul className='list-decimal pl-3 text-base leading-8'>
                    <li>Name and address of the recipient</li>
                    <li>Address of delivery</li>
                    <li>State name and state code</li>
                </ul>
                <img src={img8} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>By when should you issue invoices?</h2>
                <p className='text-base leading-8'>
                    The GST Act has defined time limits for issuing GST tax invoices, revised GST bills, debit notes, and credit notes. Following are the due dates for issuing an invoice:
                </p>
                <img src={img9} alt="image" className='w-full mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>What are other types of invoices?</h2>
                <h3 className='text-3xl leading-[40px] font-semibold'>a. Bill of supply</h3>
                <p className='text-base leading-8'>
                    A bill of supply is similar to a GST invoice except for that bill of supply does not contain any tax amount as the seller cannot charge GST to the buyer. A bill of supply is issued in cases where tax cannot be charged:
                    <ul className='text-base list-inside leading-8 list-disc pl-3'>
                        <li>Registered person is selling exempted goods/services,</li>
                        <li>Registered person has opted for composition scheme</li>
                    </ul>
                </p>
                <h3 className='text-2xl leading-[40px] font-semibold'>Invoice-cum-bill of supply</h3>
                <p className='text-base leading-8'>
                    As per Notification No. 45/2017 – Central Tax dated 13th October 2017 If a registered person is supplying taxable as well as exempted goods/ services to an unregistered person, then he can issue a single “invoice-cum-bill of supply” for all such supplies.
                </p>
                <h3 className='text-3xl leading-[40px] font-semibold'>b. Aggregate invoice</h3>
                <p className='text-base leading-8'>
                    If the value of multiple invoices is less than Rs. 200 and the buyer are unregistered, the seller can issue an aggregate or bulk invoice for the multiple invoices on a daily basis.
                    <br /><br />
                    For example, you may have issued 3 invoices in a day of Rs.80, Rs.90 and Rs. 120. In such a case, you can issue a single invoice, totalling Rs.290, to be called an aggregate invoice.
                </p>
                <h3 className='text-3xl leading-[40px] font-semibold'>c. Reverse charge invoice</h3>
                <p className='text-base leading-8'>
                    A taxpayer liable to pay tax under Reverse Charge Mechanism (RCM) has to issue an invoice for goods or services or both received by him. The receiver shall mention the fact that the tax is paid under RCM. In addition, they have to issue a payment voucher while making payment to the supplier.
                </p>
                <h3 className='text-3xl leading-[40px] font-semibold'>d. Debit and credit note</h3>
                <img src={img10} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    A debit note and credit note are issued to rectify discrepancies in the original GST invoices. These notes are used when there is a change in the transaction value after the original invoice has been issued. Here’s when they are issued:
                </p>
                <ul className='list-decimal pl-6 text-base leading-8'>
                    <li>Tax invoice has a lower taxable value than the amount that should have been charged.</li>
                    <li>Tax invoice has a lower tax value than the amount that should have been charged.</li>
                    <p className='my-4'>A credit note is issued by the seller when the value of invoice decreases:</p>
                    <li>Tax invoice has a higher taxable value than the amount that should have been charged.</li>
                    <li>Tax invoice has a higher tax value than the amount that should have been charged.</li>
                    <li>Buyer refunds the goods to the supplier.</li>
                    <li>Services are found to be deficient.</li>
                </ul>
                <h2 className='text-4xl leading-[40px] font-semibold'>Can you revise invoices issued before GST?</h2>
                <p className='text-base leading-8'>
                    Yes, you can revise invoices issued before GST. Under the GST regime, all dealers must apply for provisional registration before getting the permanent registration certificate.
                </p>
                <p className='text-base leading-8'>
                    Below image explains the process of issuing a revised invoice:
                </p>
                <img src={img11} alt="image" className='w-[60%] mx-auto' />
                <p className='text-base leading-8'>
                    This applies to all the invoices issued between the date of implementation of GST and the date your registration certificate has been issued.
                    <br /><br />
                    As a dealer, you must issue a revised invoice against the invoices already issued. The revised invoice has to be issued within 1 month from the date of issue of the registration certificate.
                </p>
                <img src={img12} alt="image" className='w-[60%] mx-auto' />
                <h2 className='text-4xl leading-[40px] font-semibold'>How to Personalize GST Invoices?</h2>
                <p className='text-base leading-8'>
                    You can personalize your invoice with your company’s logo. The ClearOne software allows you to create and personalize GST invoices at no cost.
                </p>

                <p className='text-base leading-8'>
                    In 2020, the department implemented e-invoicing where B2B invoices shall be authenticated by GSTN. This move has impacted the invoicing process of businesses.
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

export default GstInvoice