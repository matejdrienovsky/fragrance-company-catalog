// Product interface defines the structure of a product object
export interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    prices: number[];
    images: string[];
    sizes: string[];
    reviews: Review[];
}

// Review interface defines the structure of a review object
export interface Review {
    reviewer: string;
    comment: string;
    rating: number;
}

// ProductProps type represents the properties passed into a Product component
export type ProductProps = {
    product: {
        id: number;
        name: string;
        category: string;
        description: string;
        prices: number[];
        images: string[];
        sizes: string[];
        reviews: Review[];
    }
    isNew?: boolean;
}