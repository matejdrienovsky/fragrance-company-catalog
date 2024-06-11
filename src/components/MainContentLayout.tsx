import ScrollableContent from "./ScrollableContent.tsx";
import Navbar from "./Navbar.tsx";
const MainContentLayout = () => {
    return (
        <>
            <Navbar/>
            <ScrollableContent>
                <h1></h1>
            </ScrollableContent>
        </>
    );
};

export default MainContentLayout;