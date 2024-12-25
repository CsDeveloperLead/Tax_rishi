import React from 'react'
import { Link } from 'react-router-dom'

function ProsecutionUnderGst() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 md:flex-row flex-col font-montserrat text-[#14598D]'>
            <div className='w-[80%] flex flex-col gap-4'>
                <h2 className='text-4xl leading-[40px] font-semibold'>Prosecution, Compounding of Offences</h2>

                <p className='text-base leading-8'>
                    In our previous article we mentioned the various offences under GST and their penalties. Now we will discuss prosecution and compounding under GST.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Prosecution under GST</h2>

                <p className='text-base leading-8'>
                    Prosecution is the conducting of legal proceedings against someone in respect of a criminal charge.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Offences liable for prosecution</h2>

                <p className='text-base leading-8'>
                    Any person committing the following offences (i.e., deliberate intention of fraud) becomes liable to prosecution, i.e., face criminal charges.
                </p>
                <ol className='list-decimal list-inside pl-6'>
                    <li className='mt-2'>Supplies any goods/services without an invoice in order to evade tax.</li>
                    <li className='mt-2'>Issues any invoice without supplying any goods/services, thus taking input credit or refund by fraud.</li>
                    <li className='mt-2'>Collects any GST (even if in contravention of provisions) but does not submit it to the government within 3 months.</li>
                    <li className='mt-2'>Obtains refund of any CGST/SGST by fraud.</li>
                    <li className='mt-2'>Submits fake financial records/documents or files fake returns to evade tax.</li>
                    <li className='mt-2'>Obstructs the proper officer during his duty (for example, hinders the officer during the audit by tax authorities).</li>
                    <li className='mt-2'>Acquires/receives any goods/services with full knowledge that it is in violation of GST rules and is liable for confiscation.</li>
                    <li className='mt-2'>Destroys any evidence.</li>
                    <li className='mt-2'>Does not provide information or gives false information during proceedings.</li>
                    <li className='mt-2'>Helps any person to commit fraud under GST.</li>
                </ol>
                <h2 className='text-4xl leading-[40px] font-semibold'>Punishment</h2>

                <p className='text-base leading-8'>
                    The person committing any of the offences above shall be punished as follows:
                </p>

                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Tax amount involved</th>
                            <th className="border border-gray-300 p-4 text-left">100-200 lakhs</th>
                            <th className="border border-gray-300 p-4 text-left">200-500 lakhs</th>
                            <th className="border border-gray-300 p-4 text-left">Above 500 lakhs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4 font-bold">Bailable or Non-Bailable</td>
                            <td className="border border-gray-300 p-4">Bailable</td>
                            <td className="border border-gray-300 p-4">Bailable</td>
                            <td className="border border-gray-300 p-4">Bailable</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-300 p-4 font-bold">Jail term</td>
                            <td className="border border-gray-300 p-4">Upto 1 year</td>
                            <td className="border border-gray-300 p-4">Upto 3 years</td>
                            <td className="border border-gray-300 p-4">Upto 5 years</td>
                        </tr>
                    </tbody>
                </table>

                <p className='text-base leading-8'>
                    **If a person commits the following offences AND the amount involved exceeds 500 lakhs then the offences are non-bailable-
                </p>
                <ol className='list-decimal list-inside pl-6'>
                    <li className='mt-2'>Supplies any goods/services without an invoice in order to evade tax.</li>
                    <li className='mt-2'>Issues any invoice without supplying any goods/services, thus taking input credit or refund by fraud.</li>
                    <li className='mt-2'>Collects any GST (even if in contravention of provisions) but does not submit it to the government within 3 months.</li>
                </ol>
                <p className='text-base leading-8'>
                    This is in keeping with the government’s anti-tax evasion stance by bringing in stricter measures.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Punishment for destroying evidence</h2>

                <p className='text-base leading-8'>
                    For destroying evidence, preventing the officer from his duty, falsifying information or helping someone in the same, he is liable for up to 6 months imprisonment with fine
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Repeat offenders</h2>

                <p className='text-base leading-8'>
                    If the offense is repeated a second time then punishment can extend up to 5 years with fine. A person can not be prosecuted without the prior sanction of the Commissioner.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Compounding of offences under GST</h2>
                <h2 className='text-4xl leading-[40px] font-semibold'>What is compounding of offences?</h2>

                <p className='text-base leading-8'>
                    Compounding of offences is a shortcut method to avoid litigation. In the case of prosecution for an offence in a criminal court, the accused has to appear before the Magistrate at every hearing through an advocate. Court proceedings are time-consuming and expensive. In compounding, the accused is not required to appear personally and can be discharged on payment of compounding fee which cannot be more than the maximum fine leviable under the relevant provisions. GST Act also allows for compounding of offences.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Non-availability of compounding</h2>

                <p className='text-base leading-8'>
                    Compounding will not be available for-
                </p>

                <ul className='list-disc list-inside pl-6'>
                    <li className='mt-2'>Anyone who has already committed any of the offences mentioned under prosecution above, i.e., second-time offenders will not be allowed to compound.</li>
                    <li className='mt-2'>A person who had committed an offence before under GST involving supplies above Rs. 1 crore and has been allowed to compound before. Thus, it stands, any person previously enjoying compounding for goods/services over Rs. 1 crore will not enjoy compounding a second time.</li>
                    <li className='mt-2'>Any person who is also being tried under other acts such as Narcotic Drugs Act, FEMA, etc.</li>
                    <li className='mt-2'>Any person convicted by a court under GST.</li>
                    <li className='mt-2'>Any person giving false information during proceedings, or preventing the officer from his duty or destroying evidence.</li>
                    <li className='mt-2'>Offences related to fake ITC claims, possession of goods liable for confiscations, supplying services in contravention to the act, obstructing officers from performing duties, tampering evidence, and non-submission of proper information.</li>
                </ul>

                <p className='text-base leading-8'>
                    *Removed and ^included through Budget 2023. CBIC is yet to notify these changes.
                </p>

                <p className='text-base leading-8'>
                    Compounding will be allowed only after payment of all tax, interest and penalty dues.
                </p>

                <h2 className='text-4xl leading-[40px] font-semibold'>Amount payable for compounding</h2>

                <p className='text-base leading-8'>
                    The amount payable for compounding of offences shall be 50% of the tax involved subject to a minimum Rs. 10,000. Maximum amount for compounding is 150% of the tax OR Rs. 30,000 -Whichever is higher.
                    <br /> <br />
                    However, Budget 2023 reduced the minimum and maximum limits for compounding the offences to 25% and 100% of the tax involved. CBIC is yet to notify this amendment.
                </p>
                <h2 className='text-4xl leading-[40px] font-semibold'>Abatement of further proceedings</h2>

                <p className='text-base leading-8'>
                    On payment of the compounding amount, no further proceedings shall be initiated against the accused person for the same offence and any criminal proceedings, if already initiated, will be abated. Apart from prosecution, the offender can also be arrested. Please read our article on arrest under GST. Thus, we find that GST has severe prosecutions to punish tax evaders and the corrupt thus keeping in mind the government’s anti-tax evasion stance.
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

export default ProsecutionUnderGst