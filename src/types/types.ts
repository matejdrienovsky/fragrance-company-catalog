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

export interface Review {
    reviewer: string;
    comment: string;
    rating: number;
}

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