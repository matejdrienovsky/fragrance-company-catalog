import ScrollableContent from "./ScrollableContent.tsx";
import Navbar from "./Navbar.tsx";
import ProductsCatalog from "./ProductsCatalog.tsx";
import ProductProvider from '../contexts/ProductContext.tsx';


const MainContentLayout = () => {
    return (
        <ProductProvider>
            <Navbar/>
            <ScrollableContent>
                <ProductsCatalog/>
            </ScrollableContent>
        </ProductProvider>
    );
};

export default MainContentLayout;