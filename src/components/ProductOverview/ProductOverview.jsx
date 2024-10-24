import { useEffect, useState } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";


const ProductOverview = ({ product }) => {
    // const axiosPublic = useAxiosPublic()
    // const [error, setError] = useState(null)
    // const [productSpecification, setProductSpecification] = useState(null)
    // const [productSpecificationLoading, setProductSpecificationLoading] = useState();
    const navigate = useNavigate()
    // useEffect(() => {
    //     const fetchProductSpecification = async () => {
    //         try {
    //             // Start loading
    //             setProductSpecificationLoading(true);

    //             // Make a GET request to the API endpoint
    //             const response = await axiosPublic.get(`show-product-specifications/${productIdInt}/?format=json`);

    //             // Extract the data from the response
    //             const fetchedData = response.data;

    //             // Update state with fetched data
    //             setProductSpecification(fetchedData);
    //         } catch (error) {
    //             // Handle errors
    //             setError(error.message);
    //         } finally {
    //             // Finish loading
    //             setProductSpecificationLoading(false)
    //         }
    //     }
    //     fetchProductSpecification()
    // }, [axiosPublic, productIdInt])
    // if (productSpecificationLoading) {
    //     return "Loading"
    // }

    const handleQuestion = (id) => {
        navigate(`/question?pid=${id}`)
    }


    return (
        <div>
            <div className="max-w-[95%] mt-10 rounded-md border-2 border-slate-200 shadow-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Specification</h2>

                <div className="space-y-4">
                    {/* Processor Section */}
                    {
                        product?.specifications?.map((item, specificationIndex) =>
                            <div key={specificationIndex}>
                                <h3 className="text-blue-800 font-semibold bg-gray-100 py-2 px-4 ">{item.title}</h3>
                                <div >
                                    {
                                        item?.features?.map((feature, featureIndex) =>
                                            <div className="flex border-b border-gray-200 py-2 hover:bg-gray-100 px-2" key={featureIndex}>
                                                <span className="w-[30%]">{feature?.name}</span>

                                                <span className="w-[70%] text-left">{feature?.value}</span>
                                            </div>)
                                    }

                                </div>
                            </div>)
                    }
                    {
                        // productSpecification?.data.map((data, index) => <div key={index}>
                        //     <h3 className="text-blue-800 font-semibold bg-gray-100 py-2 px-4 ">{data.title}</h3>
                        //     <div className="text-sm">
                        //         {/* Array of object required */}
                        //         {/* <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-100 px-2">
                        //             {

                        //             }
                        //             <span>{data.feature_name}</span>
                        //             <span >{data.feature_value}</span>
                        //         </div> */}

                        //     </div>
                        // </div>)
                    }


                    {/* Display Section */}

                </div>
            </div>
            {/* <div className="max-w-[95%] rounded-md border-2 border-slate-200 shadow-lg p-4 mt-10">
                <h3 className="text-xl font-semibold mb-5">Description</h3>
                <p className="text-xl font-semibold mb-3">Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop</p>
                <p className="font-light text-justify text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, consectetur libero! Neque a quas libero optio quo quisquam amet vel iure iusto odio reiciendis cumque voluptatem, atque dignissimos quaerat voluptatum est earum, id corporis facere porro. Dolores voluptates aliquam quibusdam molestias. Ducimus eveniet reiciendis inventore voluptate, nobis quasi dolor laudantium laboriosam commodi voluptas, molestias aut quod similique animi eum assumenda porro nesciunt obcaecati maxime corporis nulla quia rem. Ut alias dicta dolorum saepe. Consequatur earum a maxime non in quos reiciendis vitae voluptatem, nesciunt nostrum, quod dolorum similique tenetur tempore atque nemo voluptas dolore! Quidem neque ducimus illo animi! Earum impedit quos nobis esse placeat corporis tempore at officia adipisci fugiat voluptatem, fugit nisi ea veniam enim provident non est eveniet quas. Accusantium eligendi sed sapiente, voluptates reprehenderit vero harum dolores, numquam repellat totam ut. Voluptates ea similique doloribus, inventore voluptate aperiam quod sit ipsam, maxime explicabo sequi, omnis excepturi?</p>


            </div> */}
            <div className="max-w-[95%] rounded-md border-2 border-slate-200 shadow-lg p-4 mt-10">
                <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-8">
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Questions (0)</h3>
                        <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rem!</p>
                    </div>
                    <div>
                        <button onClick={() => handleQuestion(product.id)} className="btn btn-outline btn-primary">Ask Question</button>
                    </div>

                </div>
                <div className="my-24">
                    <div className="flex justify-center">
                        <div className="avatar placeholder">
                            <div className="bg-gray-100 text-neutral-content w-20 rounded-full">
                                <RiMessage2Line className="text-4xl text-blue-800" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="mt-4 text-sm text-center">There are no questions asked yet. Be the first one to ask a question.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[95%] rounded-md border-2 border-slate-200 shadow-lg p-4 mt-10">
                <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-8">
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Reviews (0)</h3>
                        <p className="font-light text-sm">Get specific details about this product from customers who own it.</p>
                    </div>
                    <div>
                        <button className="btn btn-outline btn-primary">Write a Review</button>
                    </div>

                </div>
                <div className="my-24">
                    <div className="flex justify-center">
                        <div className="avatar placeholder">
                            <div className="bg-gray-100 text-neutral-content w-20 rounded-full">
                                <BiMessageAltDetail className="text-4xl text-blue-800" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="mt-4 text-sm text-center">This product has no reviews yet. Be the first one to write a review.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;