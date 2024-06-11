/*
  This code implements state management using React's Context API.
  Specifically, it manages product data and related settings such as error handling and product filtering.
*/

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types/types.ts';

// Context for products will hold the state values and updater functions for products, error, and filter
export const ProductContext = createContext<{
    products: Product[];
    error: string | null;
    filter: string;
    setFilter: (filter: string) => void;
}>({ products: [], error: null, filter: 'ALL PRODUCTS', setFilter: () => {} });

// Provider component for Products aims to provide the Context values to its child components.
const ProductProvider = ({ children }: { children: React.ReactNode }) => {

    // Define state variables for products, error, and filter
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState('ALL PRODUCTS');

    // Set up a side effect with useEffect that runs when the component mounts
    // and each time the `filter` state variable changes
    useEffect(() => {
        // Define an async function to fetch Products
        const fetchProducts = async () => {
            try {
                // Get the products from the JSON file
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

        // Call the fetchProducts function
        fetchProducts();

    }, [filter]);

    return (
        <ProductContext.Provider value={{ products, error, filter, setFilter }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;