import { Routes, Route } from 'react-router-dom';
import ScrollableContent from "./ScrollableContent.tsx";
import Navbar from "./Navbar.tsx";
import ProductsCatalog from "./ProductsCatalog.tsx";
import ProductProvider from '../contexts/ProductContext.tsx';
import ProductDetail from "./product_details/ProductDetail.tsx";


// Main content of the app
const MainContentLayout = () => {
    // Wrap Routes within the ProductProvider to give all components within access to product context
    return (
        <ProductProvider>
            {/* De fine the routes for the app */}
            <Routes>
                {/* If the path matches "/product/:id" then render the ProductDetail component */}
                <Route path="/product/:id" element={
                    <ProductDetail />
                } />

                {/* If any other path is accessed render the Navbar and ProductsCatalog */}
                <Route path="*" element={
                    <>
                        <Navbar/>
                        {/* ScrollableContent wraps ProductsCatalog to make products scrollable */}
                        <ScrollableContent>
                            <ProductsCatalog />
                        </ScrollableContent>
                    </>
                } />
            </Routes>
        </ProductProvider>
    );
};

export default MainContentLayout;