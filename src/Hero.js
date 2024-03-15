import React from 'react'
import heroimg from './images/tech company.gif';
import heroVideo from './images/herovideo.mp4'
const Hero = () => {
    return (
        <div>
            <video className="absolute inset-0 w-full  h-full -z-20 object-cover" autoPlay loop muted>
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 w-full  h-full -z-10 object-cover bg-black opacity-50">
            </div>

            <div class="flex justify-center herovideo">
                <section class="text-gray-200 body-font w-5/6 ">
                    <div class="container mx-auto flex z-10 px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow backdrop-blur-[2px] md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Empowering Technological
                                <br class="hidden lg:inline-block" />Innovation in MBCET
                            </h1>
                            <p class="mb-8 leading-relaxed">Driving innovation and fostering a passion for technology, our community embraces creativity and excellence. Together, we explore the frontiers of technology, shaping a brighter future for generations to come.</p>
                            <div class="flex justify-center">
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Us</button>
                            </div>
                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
                            <img class="object-cover object-center w-2/3 rounded" alt="hero" src={heroimg} />
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Hero