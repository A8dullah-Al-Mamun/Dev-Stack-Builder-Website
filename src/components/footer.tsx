
function Footer() {
    return (
        <footer className="bg-white text-gray-600 border-t border-gray-100 pt-12 pb-8 px-4 sm:px-8 lg:px-16">
           
           
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 pb-12">

                <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src="/logo-text.png" alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
                    </div>
                    <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>


                    <div className="flex items-center space-x-4 text-sm font-medium text-gray-700 pt-2">
                        <span className="cursor-pointer hover:text-pink-600 transition-colors">GitHub</span>
                        <span className="cursor-pointer hover:text-pink-600 transition-colors">Twitter</span>
                        <span className="cursor-pointer hover:text-pink-600 transition-colors">LinkedIn</span>
                    </div>
                </div>



                <div className="hidden md:grid col-span-3 grid-cols-3 gap-8">
                    <div className="flex flex-col space-y-3 items-start">
                        <h4 className="text-xs font-bold text-black uppercase tracking-wider">Product</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">Home</li>
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">Technologies</li>
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">Projects</li>
                        </ul>
                    </div>



                    <div className="flex flex-col space-y-3 items-start">
                        <h4 className="text-xs font-bold text-black uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">About</li>
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">Contact</li>
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">Careers</li>
                        </ul>
                    </div>




                    <div className="flex flex-col space-y-3 items-start">
                        <h4 className="text-xs font-bold text-black uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">Privacy Policy</li>
                            <li className="cursor-pointer hover:text-pink-600 transition-colors">Terms of Service</li>
                        </ul>
                    </div>
                </div>

            </div>




            <div className="max-w-7xl mx-auto border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 text-center sm:text-left gap-4">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <p>
                    Developed by <span className="font-semibold">Abdullah Al Mamun</span>
                </p>
                <div className="flex items-center space-x-6">
                    <span className="cursor-pointer hover:text-gray-600 transition-colors">Privacy</span>
                    <span className="cursor-pointer hover:text-gray-600 transition-colors">Terms</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;