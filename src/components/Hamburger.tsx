import {FC, useState} from 'react';

// NavLink component that returns an anchor tag with the given href and label
const NavLink: FC<{ href: string, label: string }> = ({ href, label }) => (
    <a className="leading-relaxed md:leading-10 font-bold text-xl md:text-2xl hover:text-[#531DACFF] focus:text-[#531DACFF]" href={ href }>
        { label }
    </a>
);

// HamburgerButton component that returns a button with an SVG icon that changes based on the navOpen prop
const HamburgerButton: FC<{ onClick: () => void, navOpen: boolean }> = ({ onClick, navOpen }) => (
    <button role="button" className="lg:hidden px-4 py-2 absolute bottom-2 left-0 bg-white" onClick={onClick}>
        {navOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#260065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#260065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8" width="25" height="25" viewBox="0 0 15 15">
                <path fill="#260065" fillRule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z" clipRule="evenodd"/>
            </svg>
        )}
    </button>
);

// Define the Hamburger component that returns a div with a nav element containing NavLink components
const Hamburger = () => {

    // Define the state to hold the navOpen state
    const [navOpen, setNavOpen] = useState(false);

    // Defining the routes for the app
    // Routes will be used to navigate to different pages in the future
    const routes = [
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' },
        { path: '/terms', label: 'Terms' },
        { path: '/shipping', label: 'Shipping' },
    ];

    // Return the Hamburger component with the nav element containing NavLink components
    return (
        <>
            { navOpen &&
                <div id="navbar-overlay" className="fixed top-0 left-0 z-10 flex flex-col justify-center w-screen h-screen bg-white transition-all duration-250 md:overflow-hidden">
                    <nav className="self-center flex flex-col items-center overlay-content">
                        { /* Mapping 'routes' array and rendering NavLink Component for each route. */ }
                        { routes.map(route => <NavLink key={route.path} href={route.path} label={route.label} />) }
                    </nav>

                    { /* Render HamburgerButton when navOpen is true which sets navOpen to false when clicked */ }
                    <HamburgerButton onClick={() => setNavOpen(false)} navOpen={navOpen} />

                </div>
            }

            { /* Render HamburgerButton which sets navOpen to true when clicked */ }
            <HamburgerButton onClick={() => setNavOpen(true)} navOpen={navOpen} />
        </>
    );
};

export default Hamburger;