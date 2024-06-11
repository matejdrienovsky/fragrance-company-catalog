import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Component for navigation bar
const Navbar = () => {
    // Get setFilter function and filter value from context to use in this component
    const { setFilter , filter} = useContext(ProductContext);

    // Define the props for the Button component
    type ButtonProps = {
        title: string;
    }

    // Button component which creates an individual button for each category
    const Button = ({title} : ButtonProps) => (
        <button className={`tab-btn text-nowrap font-semibold ${filter === title.toUpperCase() ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => {
                    const formattedTitle = title.toUpperCase();
                    setFilter(formattedTitle); // Set filter value in global state when a button is clicked
                }}> {title}
        </button>
    );

    //Array of strings to be used as button titles
    const buttonTitles = ["ALL PRODUCTS", "FLORAL", "FRUITY", "MUSK"];

    return (
        <section className="flex flex-row justify-between px-4 border-b-2 border-[#260065] pt-2 pb-1">
            <div className="flex flex-row gap-x-8 overflow-x-auto no-scrollbar text-xs md:text-sm lg:text-base">
                {/* Map through the buttonTitles array and render a Button component for each title */}
                {buttonTitles.map(title => <Button title={title} key={title} />)}
            </div>
        </section>
    );
};

export default Navbar;