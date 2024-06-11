import { Link } from 'react-router-dom';
import React from "react";

interface ProductData { // create a type for the product prop
    category: string;
    name: string;
}

interface BreadcrumbProps {
    product: ProductData;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ product }) => (


    <section className="text-xs flex w-full border-b-2 border-[#260065]/75 overflow-x-auto no-scrollbar">
        <ol className="flex items-center whitespace-nowrap pl-4 pb-1 pt-2" aria-label="Breadcrumb">
            <li className="inline-flex items-center">
                <Link className="flex items-center text-xs opacity-50 hover:opacity-75 text-breadcrumb" to="/products">All products</Link>
                <svg className="w-5 h-5 md:w-6 md:h-6 opacity-50" width="12" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 13L10 3" stroke="#260065" strokeLinecap="round" />
                </svg>
            </li>

            <li className="inline-flex items-center text-xs opacity-50">
                {product.name}
            </li>
        </ol>
    </section>
);

export default Breadcrumb;