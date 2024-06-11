// ProductContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types/types.ts';

export const ProductContext = createContext<{
    products: Product[];
    error: string | null;
    filter: string;
    setFilter: (filter: string) => void;
}>({ products: [], error: null, filter: 'ALL PRODUCTS', setFilter: () => {} });

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState('ALL PRODUCTS');
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products.json');
                if (filter !== 'ALL PRODUCTS') {
                    const filteredProducts = response.data.products.filter((product: Product) =>
                        product.category.toUpperCase() === filter
                    );
                    setProducts(filteredProducts);
                } else {
                    setProducts(response.data.products);
                }
            } catch (error) {
                setError('Failed to fetch products');
            }
        };

        fetchProducts();
    }, [filter]);

    return (
        <ProductContext.Provider value={{ products, error, filter, setFilter }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;