import { Routes, Route } from 'react-router-dom';
import ScrollableContent from "./ScrollableContent.tsx";
import Navbar from "./Navbar.tsx";
import ProductsCatalog from "./ProductsCatalog.tsx";
import ProductProvider from '../contexts/ProductContext.tsx';
import ProductDetail from "./product_details/ProductDetail.tsx";


const MainContentLayout = () => {
    return (
        <ProductProvider>
            <Navbar/>
            <Routes>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={
                    <ScrollableContent>
                        <ProductsCatalog />
                    </ScrollableContent>} />
            </Routes>
        </ProductProvider>
    );
};

export default MainContentLayout;