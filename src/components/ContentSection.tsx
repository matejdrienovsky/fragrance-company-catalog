import Header from "./Header";
import MainContentLayout from "./MainContentLayout.tsx";

import React from "react";

// Define the ContentSection component which is used to display the main content of the app
const ContentSection: React.FC = () => {
    return (
        <section className="row-span-10 col-span-6 flex flex-col h-screen">

            {/* Include the Header component */}
            <Header/>
            <MainContentLayout/>

        </section>
    );
};

export default ContentSection;