import React from "react";

import { ProductProps } from "../types/types.ts";
const ProductCard: React.FC<ProductProps> = ({ product ,isNew }) => {

    return (
        <a className="flex flex-col gap-y-4 relative w-full h-full min-w-42 min-h-56 max-w-52 max-h-76 p-2 rounded-lg hover:outline-2 hover:outline-[#260065]/20 hover:text-[#531DACFF] hover:transition-all hover:transition-100"
           href={`/product/show/${product.id}`}>

            {isNew && <span className="absolute top-0 right-0 px-1 rounded-lg bg-[#260065] text-[#F5F5F5]">New</span>}

            <div
                className="flex items-center justify-center rounded-lg bg-[#F5F5F5] min-h-44 max-h-48 md:max-2xl:min-h-52 px-4 py-2 md:px-8 md:py-4">
                <img className="min-w-16 min-h-24 md:max-2xl:min-h-44 max-h-36 md:max-2xl:max-h-48 object-scale-down"
                     src={product.images[0]} alt={product.name}/>
            </div>
            <div className="flex flex-col h-full justify-between text-xs md:text-sm lg:text-base">
                <p className="font-normal">{product.name}</p>
                <p className="text-sm md:text-base lg:text-lg font-bold">${product.price}</p>
            </div>
        </a>
    )
}

export default ProductCard;