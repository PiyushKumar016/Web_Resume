import { Link } from "react-router-dom";

// import { Link } from "react-router-dom"
const Header = () => {
    return (
        // <>
        <div className="text-white w-full flex flex-wrap justify-center md:justify-between items-center rounded-t-[40px] p-4 sm:p-5 gap-y-4 gap-x-8">

            {/* Left Side: Logo and Name */}
            <div className="flex items-center gap-x-3">
                <div className="h-12 w-12 rounded-full bg-purple-600 cursor-pointer flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-md">
                    P
                </div>
                <div className="flex items-baseline cursor-pointer">
                    <div className="font-bold text-xl text-gray-200">Piyush</div>
                    <div className="ml-1.5 text-lg text-gray-300">Kumar</div>
                </div>
            </div>

            {/* Right Side: Navigation Links */}
            <nav className="flex items-center gap-x-6 text-lg text-gray-300">
                <Link to="/" className="hover:text-white transition-colors duration-200">Resume</Link>
                <Link to="/Projects" className="hover:text-white transition-colors duration-200">Projects</Link>
            </nav>

        </div>
        // </>
    )
}
export default Header;