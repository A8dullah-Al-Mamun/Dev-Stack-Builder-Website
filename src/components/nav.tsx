function Nav() {
    return (
        <nav className="sticky top-0 z-50 bg-white text-black shadow-md w-full">
            <div className="relative flex items-center justify-between px-4 sm:px-8 py-4">
                <div className="md:hidden flex items-center z-10">
                    <img src="/hamburger.png" alt="Hamburger Menu" className="h-6 w-6 object-contain" />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-0">
                    <img src="/logo-text.png" alt="Logo" className="h-8 sm:h-10 w-auto object-contain" />
                </div>

                <div className="hidden md:block">
                    <ul className="flex space-x-6 cursor-pointer font-medium">
                        <li className="text-pink-600">Home</li>
                        <li className="hover:text-pink-600 transition-colors">Technologies</li>
                        <li className="hover:text-pink-600 transition-colors">Projects</li>
                        <li className="hover:text-pink-600 transition-colors">About</li>
                        <li className="hover:text-pink-600 transition-colors">Contact</li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <ul className="flex items-center space-x-4 cursor-pointer font-medium cursor-pointer">
                        <li className="hover:text-pink-600 transition-colors">Sign in</li>
                        <li>
                            <button className="px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="md:hidden flex items-center space-x-2 text-sm font-medium z-10 cursoor-pointer">
                    <span className="hover:text-pink-600 cursor-pointer text-xs sm:text-sm">Sign in</span>
                    <button className="px-3 py-1.5 bg-pink-600 text-white text-xs rounded-full hover:bg-pink-700 transition-colors">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;