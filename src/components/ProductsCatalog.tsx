import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../contexts/ProductContext.tsx';
import { Product } from '../types/types';


const ProductCatalog = () => {
    const { products, error } = useContext(ProductContext);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid max-[350px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-start justify-items-center gap-8 px-4 sm:px-16 py-8">
            {products.map((product: Product, index: number) => (
                <ProductCard key={product.id} product={product} isNew={index < 3} />
            ))}
        </div>
    );
};

export default ProductCatalog;