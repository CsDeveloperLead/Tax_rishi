import React from 'react'
import img1 from '../../assets/gstrishi1.png'
import img2 from '../../assets/gstrishi2.png'
import img3 from '../../assets/gstrishi3.png'
import img4 from '../../assets/gstrishi4.png'
import img5 from '../../assets/gstrishi5.png'

function GstBasics() {
    return (
        <div className='w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col font-montserrat text-[#14598D]'>
            <h1 className='text-4xl leading-[40px] font-bold'>Introduction to GST</h1>
            <p className='text-base leading-8'>On July 1st, 2017, India moved to a new tax system – one that aims at converting the entire nation into a single market. If you are new to GST and keen to know how this new tax will affect you and your business, this section will help you understand the basics of the ‘Good and Simple Tax’.</p>
            <h1 className='text-4xl leading-[40px] font-bold'>What is the Goods and Services Tax (GST)?</h1>
            <h2 className='text-3xl leading-[30px] font-bold'>What is GST in India?</h2>
            <p className='text-base leading-8'>GST is known as the Goods and Services Tax. It is an indirect tax which has replaced many indirect taxes in India such as the excise duty, VAT, services tax, etc. The Goods and Service Tax Act was passed in the Parliament on 29th March 2017 and came into effect on 1st July 2017.
                <br /><br />
                In other words, Goods and Service Tax (GST) is levied on the supply of goods and services. Goods and Services Tax Law in India is a comprehensive, multi-stage, destination-based tax that is levied on every value addition. After subsuming majority indirect taxes, GST is a single domestic indirect tax law for the entire country.
                <br /><br />
                Before the Goods and Services Tax could be introduced, the structure of indirect tax levy on goods in India was as follows:</p>
            <img src={img1} alt="image" className='w-[60%] mx-auto' />
            <p className='text-base leading-8'>Under the GST regime, the tax is levied at every point of sale. In the case of intra-state sales, Central GST and State GST are charged. All the inter-state sales are chargeable to the Integrated GST.
                <br /><br />
                Now, let us understand the definition of Goods and Service Tax, as mentioned above, in detail.</p>
            <h1 className='text-4xl leading-[40px] font-bold'>Multi-stage</h1>
            <p className='text-base leading-8'>An item goes through multiple change-of-hands along its supply chain: Starting from manufacture until the final sale to the consumer.
                <br /><br />
                Let us consider the following stages:</p>
            <ul className='list-disc list-inside text-base'>
                <li>Purchase of raw materials</li>
                <li>Production or manufacture</li>
                <li>Warehousing of finished goods</li>
                <li>Selling to wholesalers</li>
                <li>Sale of the product to the retailers</li>
                <li>Selling to the end consumers</li>
            </ul>
            <img src={img2} alt="image" className='w-[60%] mx-auto' />
            <p className='text-base leading-8'>The Goods and Services Tax is levied on each of these stages making it a multi-stage tax.</p>
            <h1 className='text-4xl leading-[40px] font-bold'>Value Addition</h1>
            <img src={img3} alt="image" className='w-full mx-auto' />
            <p className='text-base leading-8'>
                A manufacturer who makes biscuits buys flour, sugar and other material. The value of the inputs increases when the sugar and flour are mixed and baked into biscuits.
                <br /><br />
                The manufacturer then sells these biscuits to the warehousing agent who packs large quantities of biscuits in cartons and labels it. This is another addition of value to the biscuits. After this, the warehousing agent sells it to the retailer.
                <br /><br />
                The retailer packages the biscuits in smaller quantities and invests in the marketing of the biscuits, thus increasing its value. GST is levied on these value additions, i.e. the monetary value added at each stage to achieve the final sale to the end customer.
            </p>
            <h1 className='text-4xl leading-[40px] font-bold'>Destination-Based</h1>
            <p className='text-base leading-8'>
                Consider goods manufactured in Maharashtra and sold to the final consumer in Karnataka. Since the Goods and Service Tax is levied at the point of consumption, the entire tax revenue will go to Karnataka and not Maharashtra.
            </p>

            {/* Journey of GST in India */}
            <h1 className='text-4xl leading-[40px] font-bold'>The Journey of GST in India</h1>
            <p className='text-base leading-8'>
                The GST journey began in the year 2000 when a committee was set up to draft the law. It took 17 years from then for the law to evolve. In 2017, the GST Bill was passed in the Lok Sabha and Rajya Sabha. On 1st July 2017, the GST Law came into force.
            </p>
            <img src={img4} alt="image" className='w-[60%] mx-auto' />
            {/* Objectives of GST */}
            <h1 className='text-4xl leading-[40px] font-bold'>Objectives Of GST</h1>

            <h2 className='text-3xl leading-[30px] font-bold'>1. To Achieve ‘One Nation, One Tax’</h2>
            <p className='text-base leading-8'>
                GST has replaced multiple indirect taxes, which were existing under the previous tax regime. The advantage of having one single tax means every state follows the same rate for a particular product or service. Tax administration is easier with the Central Government deciding the rates and policies. Common laws can be introduced, such as e-way bills for goods transport and e-invoicing for transaction reporting. Tax compliance is also better as taxpayers are not bogged down with multiple return forms and deadlines. Overall, it’s a unified system of indirect tax compliance.
            </p>

            <h2 className='text-3xl leading-[30px] font-bold'>2. To Subsumed a Majority of the Indirect Taxes in India</h2>
            <p className='text-base leading-8'>
                India had several erstwhile indirect taxes such as service tax, Value Added Tax (VAT), Central Excise, etc., which used to be levied at multiple supply chain stages. Some taxes were governed by the states and some by the Centre. There was no unified and centralised tax on both goods and services. Hence, GST was introduced. Under GST, all the major indirect taxes were subsumed into one. It has greatly reduced the compliance burden on taxpayers and eased tax administration for the government.
            </p>

            <h2 className='text-3xl leading-[30px] font-bold'>3. To Eliminate the Cascading Effect of Taxes</h2>
            <p className='text-base leading-8'>
                One of the primary objectives of GST was to remove the cascading effect of taxes. Previously, due to different indirect tax laws, taxpayers could not set off the tax credits of one tax against the other. For example, the excise duties paid during manufacture could not be set off against the VAT payable during the sale. This led to a cascading effect of taxes. Under GST, the tax levy is only on the net value added at each stage of the supply chain. This has helped eliminate the cascading effect of taxes and contributed to the seamless flow of input tax credits across both goods and services.
            </p>

            <h2 className='text-3xl leading-[30px] font-bold'>4. To Curb Tax Evasion</h2>
            <p className='text-base leading-8'>
                GST laws in India are far more stringent compared to any of the erstwhile indirect tax laws. Under GST, taxpayers can claim an input tax credit only on invoices uploaded by their respective suppliers. This way, the chances of claiming input tax credits on fake invoices are minimal. The introduction of e-invoicing has further reinforced this objective. Also, due to GST being a nationwide tax and having a centralised surveillance system, the clampdown on defaulters is quicker and far more efficient. Hence, GST has curbed tax evasion and minimised tax fraud from taking place to a large extent.
            </p>

            <h2 className='text-3xl leading-[30px] font-bold'>5. To Increase the Taxpayer Base</h2>
            <p className='text-base leading-8'>
                GST has helped in widening the tax base in India. Previously, each of the tax laws had a different threshold limit for registration based on turnover. As GST is a consolidated tax levied on both goods and services, it has increased tax-registered businesses. Besides, the stricter laws surrounding input tax credits have helped bring certain unorganised sectors under the tax net. For example, the construction industry in India.
            </p>

            {/* More Objectives */}
            <h2 className='text-3xl leading-[30px] font-bold'>6. Online Procedures for Ease of Doing Business</h2>
            <p className='text-base leading-8'>
                Previously, taxpayers faced a lot of hardships dealing with different tax authorities under each tax law. Now, GST procedures are carried out almost entirely online, from registration to return filing to refunds to e-way bill generation. It has contributed to the overall ease of doing business in India and simplified taxpayer compliance to a massive extent.
            </p>

            <h2 className='text-3xl leading-[30px] font-bold'>7. Improved Logistics and Distribution System</h2>
            <p className='text-base leading-8'>
                A single indirect tax system reduces the need for multiple documentation for the supply of goods. GST minimises transportation cycle times, improves supply chain and turnaround time, and leads to warehouse consolidation, among other benefits. The e-way bill system under GST has improved transit and destination efficiency.
            </p>

            <h2 className='text-3xl leading-[30px] font-bold'>8. Competitive Pricing and Increased Consumption</h2>
            <p className='text-base leading-8'>
                GST has led to an increase in consumption and indirect tax revenues. The removal of the cascading effect of taxes has made goods more competitively priced. This has contributed to increased consumption and higher revenues.
            </p>

            {/* GST Rates */}
            <h1 className='text-4xl leading-[40px] font-bold'>GST Rates in India</h1>
            <p className='text-base leading-8'>
                GST rates refer to the percentage rates of tax imposed on the sale of goods or services under the CGST, SGST, and IGST Acts. The primary GST slabs for regular taxpayers are presently pegged at 0%, 5%, 12%, 18%, and 28%. For interstate transactions (IGST), the rate is approximately the sum of the CGST and SGST rate.
            </p>

            {/* Tax Laws Before GST */}
            <h1 className='text-4xl leading-[40px] font-bold'>Tax Laws Before GST</h1>
            <p className='text-base leading-8'>
                In the earlier indirect tax regime, there were many taxes levied by both the state and the centre. For example, excise duty was charged by the centre and VAT by the state. This led to a tax on tax effect, also known as the cascading effect of taxes.
            </p>

            {/* Advantages of GST */}
            <h1 className='text-4xl leading-[40px] font-bold'>Advantages of GST</h1>
            <p className='text-base leading-8'>
                GST has mainly removed the cascading effect on the sale of goods and services, reducing costs. It is also technologically driven, allowing for online registration, return filing, and refunds.
            </p>
            <img src={img5} alt="image" className='w-[60%] mx-auto' />

            {/* Components of GST */}
            <h1 className='text-4xl leading-[40px] font-bold'>What are the Components of GST</h1>
            <p className='text-base leading-8'>
                There are three taxes applicable under this system: CGST, SGST/UTGST & IGST.
                <ul className='list-disc list-inside text-base'>
                    <li>CGST: It is the tax collected by the Central Government on an intra-state sale (e.g., a transaction happening within Maharashtra)</li>
                    <li>SGST/UTGST: It is the tax collected by the state government/Union Territories on an intra-state sale (e.g., a transaction happening within Maharashtra)</li>
                    <li>IGST: It is a tax collected by the Central Government for an inter-state sale (e.g., Maharashtra to Tamil Nadu)</li>
                </ul>
            </p>
            <p>In most cases, the tax structure under the new regime will be as follows:</p>
            <table class="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 p-4 text-left">Transaction</th>
                        <th class="border border-gray-300 p-4 text-left">New Regime</th>
                        <th class="border border-gray-300 p-4 text-left">Old Regime</th>
                        <th class="border border-gray-300 p-4 text-left">Revenue Distribution</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Sale within the State/UT</td>
                        <td class="border border-gray-300 p-4">CGST + SGST/UTGST</td>
                        <td class="border border-gray-300 p-4">VAT + Central Excise/Service Tax</td>
                        <td class="border border-gray-300 p-4">Revenue will be shared equally between the Centre and the State/UT</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Sale to another State</td>
                        <td class="border border-gray-300 p-4">IGST</td>
                        <td class="border border-gray-300 p-4">Central Sales Tax + Excise/Service Tax</td>
                        <td class="border border-gray-300 p-4">There will only be one type of tax (central) in case of inter-state sales. The Centre will then share the IGST revenue based on the destination of goods.</td>
                    </tr>
                </tbody>
            </table>
            <h1 className='text-4xl leading-[40px] font-bold'>Illustration:</h1>
            <ul className='list-disc list-inside text-base'>
                <li>Let us assume that a dealer in Gujarat had sold the goods to a dealer in Punjab worth Rs. 50,000. The tax rate is 18% comprising of only IGST.</li>
            </ul>
            <p className='text-base leading-8'>In such a case, the dealer has to charge IGST of Rs.9,000. This revenue will go to Central Government.</p>
            <ul className='list-disc list-inside text-base'>
                <li>The same dealer sells goods to a consumer in Gujarat worth Rs. 50,000. The GST rate on goods is 12%. This rate comprises CGST at 6% and SGST at 6%.</li>
            </ul>
            <p className='text-base leading-8'>The dealer has to collect Rs.6,000 as Goods and Service Tax, Rs.3,000 will go to the Central Government and Rs.3,000 will go to the Gujarat government since the sale is within the state.</p>
            <h1 className='text-4xl leading-[40px] font-bold'>GST Rates in India</h1>
            <p className='text-base leading-8'>
                GST rates refer to the percentage rates of tax imposed on the sale of goods or services under the CGST, SGST and IGST Acts. A business registered under the GST law must issue invoices with GST amounts charged on the value of supply.
                <br /><br />
                The GST rates in CGST and SGST (For intrastate transactions) are approximately the same. Whereas, the GST rate in the case of IGST (For interstate transactions) is approximately the sum total of CGST and SGST rate.
                <br /><br />
                The primary GST slabs for any regular taxpayers are presently pegged at 0% (nil-rated), 5%, 12%, 18% & 28%. There are a few lesser-used GST rates such as 3% and 0.25%.
            </p>
            <h1 className='text-4xl leading-[40px] font-bold'>Tax Laws before GST</h1>
            <p className='text-base leading-8'>
                In the earlier indirect tax regime, there were many indirect taxes levied by both the state and the centre. States mainly collected taxes in the form of Value Added Tax (VAT). Every state had a different set of rules and regulations.
                <br /><br />
                Inter-state sale of goods was taxed by the centre. CST (Central State Tax) was applicable in case of inter-state sale of goods. The indirect taxes such as the entertainment tax, octroi and local tax were levied together by state and centre. These led to a lot of overlapping of taxes levied by both the state and the centre.
                <br /><br />
                For example, when goods were manufactured and sold, excise duty was charged by the centre. Over and above the excise duty, VAT was also charged by the state. It led to a tax on tax effect, also known as the cascading effect of taxes.
                <br /><br />
                The following table list down the taxes in pre-GST regime:
            </p>
            <table class="table-auto w-full lg:w-[60%] mx-auto border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 p-4 text-left">Taxes which are subsumed by GST</th>
                        <th class="border border-gray-300 p-4 text-left">Taxes which are still present post-GST</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Central Excise Duty</td>
                        <td class="border border-gray-300 p-4">Basic Customs Duty</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Duties of Excise</td>
                        <td class="border border-gray-300 p-4">Tax on Petrol and Diesel</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Additional Duties of Excise</td>
                        <td class="border border-gray-300 p-4">Tax on Tobacco and Alcohol</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Additional Duties of Customs</td>
                        <td class="border border-gray-300 p-4">Stamp Duty on Property</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Special Additional Duty of Customs</td>
                        <td class="border border-gray-300 p-4">Electricity Duty</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Cess</td>
                        <td class="border border-gray-300 p-4">Vehicle Tax</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">State VAT</td>
                        <td class="border border-gray-300 p-4">Property Tax</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">*Central Sales Tax</td>
                        <td class="border border-gray-300 p-4"></td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Purchase Tax</td>
                        <td class="border border-gray-300 p-4"></td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Luxury Tax</td>
                        <td class="border border-gray-300 p-4"></td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Entertainment Tax</td>
                        <td class="border border-gray-300 p-4"></td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Entry Tax</td>
                        <td class="border border-gray-300 p-4"></td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Taxes on advertisements</td>
                        <td class="border border-gray-300 p-4"></td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Taxes on lotteries, betting, and gambling</td>
                        <td class="border border-gray-300 p-4"></td>
                    </tr>
                </tbody>
            </table>
            <p className='text-base leading-8'>
                *Certain taxes such as the GST levied for the inter-state purchase at a concessional rate of 2% by the issue and utilisation of ‘Form C’ is still prevalent.
                <br /><br />
                It applies to certain non-GST goods such as:
            </p>
            <ul className='list-disc list-inside text-base'>
                <li>Petroleum crude;</li>
                <li>High-speed diesel</li>
                <li>Motor spirit (commonly known as petrol);</li>
                <li>Natural gas;</li>
                <li>Aviation turbine fuel; and</li>
                <li>Alcoholic liquor for human consumption.</li>
            </ul>
            <p className='text-base leading-8'>It applies to the following transactions only:</p>
            <ul className='list-disc list-inside text-base'>
                <li>Resale</li>
                <li>Use in manufacturing or processing</li>
                <li>Use in certain sectors such as the telecommunication network, mining, the generation or distribution of electricity or any other power sector</li>
            </ul>
            <h1 className='text-4xl leading-[40px] font-bold'>How Has GST Helped in Price Reduction?</h1>
            <p className='text-base leading-8'>
                During the pre-GST regime, every purchaser, including the final consumer paid tax on tax. This condition of tax on tax is known as the cascading effect of taxes.
                <br /><br />
                GST has removed the cascading effect. Tax is calculated only on the value-addition at each stage of the transfer of ownership. Understand what the cascading effect is and how GST helps by watching this simple video:
                <br /><br />
                The indirect tax system under GST will integrate the country with a uniform tax rate. It will improve the collection of taxes as well as boost the development of the Indian economy by removing the indirect tax barriers between states.
            </p>
            <h1 className='text-4xl leading-[40px] font-bold'>Illustration:</h1>
            <p className='text-base leading-8'>
                Based on the above example of the biscuit manufacturer, let’s take some actual figures to see what happens to the cost of goods and the taxes, by comparing the earlier GST regimes.
                <br /><br />
                Tax calculations in earlier regime:
            </p>
            <table class="table-auto w-full lg:w-[80%] mx-auto border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 p-4 text-left">Action</th>
                        <th class="border border-gray-300 p-4 text-left">Cost (Rs)</th>
                        <th class="border border-gray-300 p-4 text-left">Tax rate at 10% (Rs)</th>
                        <th class="border border-gray-300 p-4 text-left">Invoice Total (Rs)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Manufacturer</td>
                        <td class="border border-gray-300 p-4">1,000</td>
                        <td class="border border-gray-300 p-4">100</td>
                        <td class="border border-gray-300 p-4">1,100</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Warehouse adds a label and repacks at Rs.300</td>
                        <td class="border border-gray-300 p-4">1,400</td>
                        <td class="border border-gray-300 p-4">140</td>
                        <td class="border border-gray-300 p-4">1,540</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Retailer advertises at Rs. 500</td>
                        <td class="border border-gray-300 p-4">2,040</td>
                        <td class="border border-gray-300 p-4">204</td>
                        <td class="border border-gray-300 p-4">2,244</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Total</td>
                        <td class="border border-gray-300 p-4">1,800</td>
                        <td class="border border-gray-300 p-4">444</td>
                        <td class="border border-gray-300 p-4">2,244</td>
                    </tr>
                </tbody>
            </table>
            <p className='text-base leading-8'>
                The tax liability was passed on at every stage of the transaction, and the final liability comes to a rest with the customer. This condition is known as the cascading effect of taxes, and the value of the item keeps increasing every time this happens.
                <br /><br />
                Tax calculations in current regime:
            </p>
            <table class="table-auto w-full lg:w-[80%] mx-auto border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 p-4 text-left">Action</th>
                        <th class="border border-gray-300 p-4 text-left">Cost (Rs)</th>
                        <th class="border border-gray-300 p-4 text-left">Tax rate at 10% (Rs)</th>
                        <th class="border border-gray-300 p-4 text-left">Tax liability to be deposited (Rs)</th>
                        <th class="border border-gray-300 p-4 text-left">Invoice Total (Rs)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Manufacturer</td>
                        <td class="border border-gray-300 p-4">1,000</td>
                        <td class="border border-gray-300 p-4">100</td>
                        <td class="border border-gray-300 p-4">100</td>
                        <td class="border border-gray-300 p-4">1,100</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Warehouse adds a label and repacks at Rs.300</td>
                        <td class="border border-gray-300 p-4">1,300</td>
                        <td class="border border-gray-300 p-4">130</td>
                        <td class="border border-gray-300 p-4">30</td>
                        <td class="border border-gray-300 p-4">1,430</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Retailer advertises at Rs. 500</td>
                        <td class="border border-gray-300 p-4">1,800</td>
                        <td class="border border-gray-300 p-4">180</td>
                        <td class="border border-gray-300 p-4">50</td>
                        <td class="border border-gray-300 p-4">1,980</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 p-4">Total</td>
                        <td class="border border-gray-300 p-4">1,800</td>
                        <td class="border border-gray-300 p-4"></td>
                        <td class="border border-gray-300 p-4">180</td>
                        <td class="border border-gray-300 p-4">1,980</td>
                    </tr>
                </tbody>
            </table>
            <p className='text-base leading-8'>
                In the case of Goods and Services Tax, there is a way to claim the credit for tax paid in acquiring input. The individual who has already paid a tax can claim credit for this tax when he submits his GST returns.
                <br /><br />
                In the end, every time an individual is able to claims the input tax credit, the sale price is reduced and the cost price for the buyer is reduced because of lower tax liability. The final value of the biscuits is therefore reduced from Rs.2,244 to Rs.1,980, thus reducing the tax burden on the final customer.
            </p>
            <h1 className='text-4xl leading-[40px] font-bold'>New Compliances Under GST</h1>
            <p className='text-base leading-8'>
                Apart from online filing of GST returns, the GST regime has introduced several new systems to streamline operations and reduce tax evasion.
            </p>

            <h2 className='text-2xl leading-[36px] font-semibold'>e-Way Bills</h2>
            <p className='text-base leading-8'>
                GST introduced a centralized system of waybills with the launch of "e-way bills" on 1st April 2018 for inter-state movement of goods and 15th April 2018 for intra-state movement. This system allows manufacturers, traders, and transporters to generate e-way bills for the transportation of goods between origin and destination. The e-way bill system benefits tax authorities by reducing time at check-posts and helps reduce tax evasion.
            </p>

            <h2 className='text-2xl leading-[36px] font-semibold'>E-Invoicing</h2>
            <p className='text-base leading-8'>
                The e-invoicing system was introduced on 1st October 2020 in a phased manner. From 1st August 2023, it was extended to businesses with an annual aggregate turnover of more than Rs. 5 crore in any preceding financial year since 2017-18. These businesses must obtain a unique invoice reference number by uploading their invoices on the GSTN’s invoice registration portal. The portal verifies and authorizes the invoice, providing a digital signature and a QR code.
            </p>
            <p className='text-base leading-8'>
                e-Invoicing allows for interoperability of invoices, reducing data entry errors. It also simplifies the filing process by directly transmitting invoice information to the GST portal and e-way bill portal, thus eliminating the need for manual data entry in GSTR-1 and facilitating the generation of e-way bills.
            </p>
        </div>
    )
}

export default GstBasics