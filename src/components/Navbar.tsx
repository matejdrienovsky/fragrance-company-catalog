import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Navbar = () => {
    const { setFilter , filter} = useContext(ProductContext);

    type ButtonProps = {
        title: string;
    }

    const Button = ({title} : ButtonProps) => (
        <button className={`tab-btn text-nowrap font-semibold ${filter === title.toUpperCase() ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => {
                    const formattedTitle = title.toUpperCase();
                    setFilter(formattedTitle);
                }}> {title}
        </button>
    );

    const buttonTitles = ["ALL PRODUCTS", "FLORAL", "FRUITY", "MUSK"];

    return (
        <section className="flex flex-row justify-between px-4 border-b-2 border-[#260065] pt-2 pb-1">
            <div className="flex flex-row gap-x-8 overflow-x-auto no-scrollbar text-xs md:text-sm lg:text-base">
                {buttonTitles.map(title => <Button title={title} key={title} />)}
            </div>
        </section>
    );
};

export default Navbar;