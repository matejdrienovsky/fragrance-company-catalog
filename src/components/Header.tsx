import logo from '../assets/scent-sphere.png';
import {SvgIconUser, SvgIconMoon, SvgIconCart} from "./icons/Icons.tsx";

// Component to display the header of the application with the logo and the user icons
const Header = () => (
    <header className="self-start flex-none w-full">
        <div className="flex justify-between lg:justify-end">
            <a className="lg:hidden w-24 sm:w-32 md:w-36 h-auto" href="/">
                <img className="max-w-full h-auto mx-auto" src={logo} alt="Paper Like logo"/>
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