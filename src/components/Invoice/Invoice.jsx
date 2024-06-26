import { useState } from "react";

const Invoice = () => {
    const [showInvoice, setshowInvoice] = useState(false)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [bankName, setBankName] = useState("")
    const [bankAccount, setBankAccount] = useState("")
    const [website, setWebsite] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [notes, setNotes] = useState("")
    console.log(name)
    const handlePrint = () => {
        window.print()
    }
    return (
        <div className="p-5">
            <main className="p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl  shadow-xl rounded bg-white">
                {
                    showInvoice ?
                        <div>
                            <header className="flex flex-col justify-center items-center mb-5 xl:flex-row xl:justify-between">
                                <div>
                                    <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoice</h2>
                                </div>
                                <div>
                                    <ul className="flex items-center justify-between flex-wrap">
                                        <li><button className="bg-gray-500  text-white font-medium py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300 select-none" onClick={handlePrint}>Print</button></li>
                                        <li className="mx-2"><button className="bg-blue-500  text-white font-medium py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 select-none">Donwload</button></li>
                                        <li><button className="bg-green-500 text-white font-medium py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300 select-none">Send</button></li>
                                    </ul>
                                </div>
                            </header>
                            {/* Your Details */}
                            <section className="flex flex-col  items-end justify-end">
                                {/* <input type="text" placeholder="Enter your name" required /> */}
                                <h2 className="text-xl font-bold uppercase md:text-4xl">{name}</h2>
                                <p>{address}</p>
                            </section>
                            {/* End of your details */}
                            {/* Clinet Details */}
                            <section className="mt-5">
                                <h2 className="text-xl uppercase">{clientName}</h2>
                                <p>{clientAddress}</p>
                            </section>
                            {/* End of client details */}
                            {/* Dates */}
                            <article className="my-5 flex justify-end items-end">
                                <ul>
                                    <li className="p-1"><span className="font-bold">Invoice Number:</span>{invoiceNumber} </li>
                                    <li className="p-1 bg-gray-100"><span className="font-bold">Invoice Date:</span>{invoiceDate} </li>
                                    <li className="p-1"><span className="font-bold">Due Date:</span>{dueDate} </li>
                                </ul>
                            </article>
                            {/* End of dates */}
                            {/* Table */}
                            <div className="my-5">
                                This is a table
                            </div>
                            {/* End of the table */}
                            {/* Notes */}
                            <section className="mb-5">
                                <p className="lg:w-1/2 text-justify">{notes}</p>
                            </section>
                            {/* End of the notes */}
                            {/* Footer */}
                            <footer className="invoiceFooter border-t-2 border-gray-300 pt-5">
                                <ul className="flex flex-wrap items-center justify-center">
                                    <li><span className="font-bold">Your name:</span> {name}</li>
                                    <li><span className="font-bold">Your email:</span> {email}</li>
                                    <li><span className="font-bold">Phone number:</span> {phone}</li>
                                    <li><span className="font-bold">Bank:</span> {bankName}</li>
                                    <li><span className="font-bold">Account holder:</span> {name}</li>
                                    <li><span className="font-bold">Account number:</span> {bankAccount}</li>
                                    <li><span className="font-bold">Website:</span> <a href={website} target="_blank" rel="nopenner noreferrer">{website}</a></li>
                                </ul>
                            </footer>
                            {/* End of the Footer */}
                            <button onClick={() => setshowInvoice(false)} className="bg-blue-500 mt-5 text-white font-medium py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
                        </div> : <>
                            <div className="flex flex-col justify-center">
                                <label htmlFor="name">Enter your name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="address">Enter your address</label>
                                <input type="text" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)} />
                                <label htmlFor="email">Enter your email</label>
                                <input type="text" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="website">Enter your website</label>
                                <input type="url" name="website" id="website" placeholder="Enter your website" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                <label htmlFor="phone">Enter your phone</label>
                                <input type="text" name="phone" id="phone" placeholder="Enter your phone" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <label htmlFor="bankName">Enter your bank name</label>
                                <input type="text" name="bankName" id="bankName" placeholder="Enter your bank name" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
                                <label htmlFor="bankAccount">Enter your bank account number</label>
                                <input type="text" name="bankAccount" id="bankAccount" placeholder="Enter your bank account number" autoComplete="off" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
                                <label htmlFor="clientName">{"Enter your client's name"}</label>
                                <input type="text" name="clientName" id="clientName" placeholder="Enter your client's name" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                                <label htmlFor="clientAddress">{"Enter your client's address"}</label>
                                <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter your client's address" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
                                <label htmlFor="invoiceNumber">{"Invoice Number"}</label>
                                <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Invoice number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                                <label htmlFor="invoiceDate">{"Invoice Date"}</label>
                                <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Invoice Date" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                                <label htmlFor="dueDate">{"Due Date"}</label>
                                <input type="date" name="dueDate" id="dueDate" placeholder="Due Date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                                <label htmlFor="notes">{"Additional notes"}</label>
                                <textarea name="notes" id="notes" cols={"30"} rows={"10"} placeholder="Additional notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                                <button onClick={() => setshowInvoice(true)} className="bg-blue-500 text-white font-medium py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
                            </div>
                        </>
                }
            </main>
        </div>
    );
};

export default Invoice;