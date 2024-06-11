import {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext.tsx';
import { ReviewSection } from './ReviewSection.tsx';
import Images from "./Images.tsx";
import SizeInput from "./SizeInput.tsx";
import Breadcrumb from "./Breadcrumbs.tsx";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useContext(ProductContext);
    const product = products.find(product => product.id.toString() === id);

    const [size, setSize] = useState<string | null>(null);
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        if (product && product.sizes.length > 0) {
            setSize(product.sizes[0]);
            setPrice(product.prices[0]); // assuming sizes and prices arrays have same length
        }
    }, [product]);

    useEffect(() => {
        if (size && product && product.sizes.length > 0) {
            const index = product.sizes.findIndex(s => s === size);
            if (index !== -1) {
                setPrice(product.prices[index]);
            }
        }
    }, [size, product]);

    useEffect(() => {
        if (product) {
            console.log(product);  // Log the product
        }
    }, [product]);

    if (!product) {
        return null;
    }

    return (
        <>
            <Breadcrumb product={{ category: product.category, name: product.name }}/>
            <section className="overflow-auto h-[calc(100vh-12.5rem)] sm:h-[calc(100vh-12rem)] md:h-[calc(100vh-13rem)] lg:md:h-[calc(100vh-6rem)] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-4 sm:px-16 py-8">
                <Images images={product.images}/>
                <section className="flex flex-col max-md:items-center w-full h-full md:gap-y-20">
                    <div className="flex flex-col gap-y-4 md:gap-y-6 w-full">
                        <h1 className="flex-auto text-lg lg:text-xl font-bold">{product.name}</h1>
                        <span className="flex w-full text-xs md:text-sm font-medium">
                        {product.description}
                    </span>
                        <span className="flex w-full text-xs md:text-sm font-bold">Reviews</span>

                        <ReviewSection reviews={product.reviews}/>

                        <SizeInput sizes={product.sizes} size={size} setSize={setSize}/>

                    </div>
                    <div className="flex flex-row justify-between  w-full max-md:mt-16">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold">{price}€</p>
                        <button type="submit"
                                className="text-sm sm:text-sm md:text-md lg:text-xl font-bold border-0 rounded-lg cursor-pointer bg-[#260065] text-white hover:bg-[#531DACFF] transition hover:transition-250 px-4 py-2 sm:px-4 sm:py-2 md:px-5 lg:px-8">ADD
                            TO CART
                        </button>
                    </div>
                </section>
            </section>
        </>


    );
};

export default ProductDetail;