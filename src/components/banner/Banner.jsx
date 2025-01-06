const Banner = () => {
    return (
        <div className="  mx-3 lg:mx-16 mt-10 rounded-3xl group bg-[url('https://i.ibb.co/SxFcnxy/development-with-abstract-background.jpg')] 
                        bg-cover bg-center text-white transition-all duration-500 ease-in-out hover:scale-105">
            <div className="relative  h-[50vh] md:h-[60vh] lg:h-[70vh]">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-3xl">
                    <div className="container mx-auto px-4 md:px-8 text-center ">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center p-5">
                        Discover an exceptional cooking <br />
                        class tailored for you!
                        </h1>
                        <p className="text-lg md:text-xl mb-6 text-center p-5">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                            problems to become an exceptionally well world-class Programmer.
                        </p>
                        <button
                            className=" text-2xl  bg-white text-green-500 font-semibold py-2 px-6 
                                       rounded-full hover:bg-green-700 hover:text-white 
                                       transition duration-300"
                        >
                            Explore Now 
                        </button>
                        <button
                            className=" ml-5 text-2xl  text-white font-semibold py-2 px-6 
                                       rounded-full bg-gray-700  hover:bg-sky-700 transition duration-300"
                        >
                         Our Feedback
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
