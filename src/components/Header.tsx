import logo from '../assets/paper-like-3.png';

//Component to display cart icon
const SvgIconCart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8"
         width="25" height="25" viewBox="0 0 24 24">
        <path fill="none" stroke="#260065" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"/>
    </svg>
)

// Component to display the user icon
const SvgIconUser = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8" width="25"
         height="25" viewBox="0 0 24 24">
        <path fill="none" stroke="#260065" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
    </svg>
);

// Component to display the moon icon
const SvgIconMoon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8" width="25"
         height="25" viewBox="0 0 24 24">
        <path fill="none" stroke="#260065" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75A9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25A9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
    </svg>
);

// Component to display the header of the application with the logo and the user icons
const Header = () => (
    <header className="self-start flex-none w-full">
        <div className="flex justify-between lg:justify-end">
            <a className="lg:hidden w-24 sm:w-32 md:w-36 h-auto pt-2" href="/">
                <img className="max-w-full h-auto mx-auto mt-2 mb-4" src={logo} alt="Paper Like logo"/>
            </a>
            <section className="flex gap-2 pr-4 pt-4 w-1/4 md:w-1/3 justify-end">
                {/* Cart icon */}
                <a href="#"><i><SvgIconCart /></i></a>

                {/* User icon */}
                <a href="#"><i><SvgIconUser /></i></a>

                {/* Moon icon */}
                <a href="#"><i><SvgIconMoon /></i></a>
            </section>
        </div>
    </header>
);

export default Header;