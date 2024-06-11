import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.tsx';
import { Product } from '../types/types';
import ProductCard from './ProductCard';

// Define the ProductCatalog component
const ProductCatalog = () => {

    // Use the useContext hook to access the ProductContext
    const { products, error } = useContext(ProductContext);

    // If there was an error in fetching the products, display error message
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render a grid layout that holds the product cards
    // Each product card consists of a ProductCard component
    // The first 3 products get an isNew prop set as true
    return (
        <div className="grid max-[350px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-start justify-items-center gap-8 px-4 sm:px-16 py-8">
            {products.map((product: Product, index: number) => (
                <ProductCard key={product.id} product={product} isNew={index < 3} />
            ))}
        </div>
    );
};

export default ProductCatalog;