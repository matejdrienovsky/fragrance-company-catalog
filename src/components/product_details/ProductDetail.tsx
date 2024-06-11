import {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext.tsx';
import Images from "./Images.tsx";
import SizeInput from "./SizeInput.tsx";

const SvgIconUser = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8" width="25"
         height="25" viewBox="0 0 24 24">
        <path fill="none" stroke="#260065" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
    </svg>
);

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useContext(ProductContext);
    const product = products.find(product => product.id.toString() === id);

    const [size, setSize] = useState<string | null>(null);

    useEffect(() => {
        if (product && product.sizes.length > 0)
            setSize(product.sizes[0]);
    }, [product]);

    if (!product) {
        return null;
    }
    return (
        <section className="overflow-auto h-[calc(100vh-12.5rem)] sm:h-[calc(100vh-12rem)] md:h-[calc(100vh-13rem)] lg:md:h-[calc(100vh-6rem)] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-4 sm:px-16 py-8">
            <Images images={product.images}/>
            <section className="flex flex-col justify-between max-md:items-center w-full h-full">
                <div className="flex flex-col gap-y-4 w-full">
                    <h1 className="flex-auto text-lg lg:text-xl font-bold">{product.name}</h1>
                    <span className="flex w-full text-xs md:text-sm font-medium sm:ml-3">
                        {product.description}
                    </span>
                    <span className="flex w-full text-xs md:text-sm font-bold sm:ml-3">Reviews</span>

                    <div className="flex flex-col w-full sm:ml-3 gap-3">
                        {product.reviews.map((review, index) => (
                            <div className="flex flex-row justify-between border-b-2 border-[#260065] border-opacity-30"
                                 key={index}>
                                <div className="flex flex-row">
                                    <SvgIconUser/>
                                    <span className="text-xs self-center ml-2">{review.reviewer}</span>
                                </div>
                                <span className="text-xs self-center">{review.comment}</span>
                                <span className="text-sm  self-center">{review.rating}/5</span>
                            </div>
                        ))}
                    </div>
                    <SizeInput sizes={product.sizes} size={size} setSize={setSize}/>


                </div>
            </section>
        </section>

    );
};

export default ProductDetail;