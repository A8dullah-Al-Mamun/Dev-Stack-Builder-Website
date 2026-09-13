function Hero() {
    return (
        <section className="px-4 sm:px-8 lg:px-16 py-12 lg:py-5 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        Build Your Ideal <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition-opacity">
                            Explore Technologies
                        </button>
                        <button className="button-hover w-full sm:w-auto px-6 py-3 bg-white text-gray-800 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-centorer w-full max-w-md lg:max-w-none">
                    <img
                        src="/banner-stack.png"
                        alt="Development Stack Illustration"
                        className="w-full h-auto object-contain max-h-[600px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;