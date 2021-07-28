import React from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import pagesNotFound from './404'

export default function about () {
        const About = (props) => {
                return (
                  <div>
                    <p className="text-3xl text-gray-800 font-bold text-left leading-tight pt-2">
                      {props.title}
                    </p>
                    <div className="text-gray-500 pt-4 pr-10 text-justify">
                      {props.description}
                    </div>
                    <div className="text-gray-500 pt-10 pr-10 text-justify">
                      {props.description2}
                    </div>
                  </div>
                )
              }
        return (
                <React.Fragment>
                <Head>
                        <meta httpEquiv="X-UA-Compatible" content="IE-Edge,chrome" />
                        <meta name="description" content="ala,marketplace,aboutAla" />
                        <title>ALA-About</title>
                        <link rel="icon" href="/assets/logo.png" />
                </Head>
                <Navbar />
                <div className="about text-3xlmax-w-7xl mx-auto mt-40 px-2 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                <div class="rounded-full h-40 w-40 flex items-center justify-center bg-black">
                <div className="w-2/4 ">       
                <img src="/assets/logo.png" />
                </div>
                </div>
                </div>
                <p className="text-center font-semibold text-2xl mt-6">ALA Company</p>
                <div className="w-2/3 mt-3 mx-auto">
                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo
 non enim praesent elementum facilisis leo.</p>
                </div>
                <div class="pointFeature grid grid-flow-col grid-cols-2 grid-rows-2 gap-20">
        {/* About 1 */}
                <About
              title="Our Vision"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
              lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo
               non enim praesent elementum facilisis leo."
               description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
              lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo
               non enim praesent elementum facilisis leo." 
        />    
         {/* About 2 */}
        <About
              title="Company AddressOur Mission"
              description="California Street , Block MS 20 Redmond California
              New York City of United States 75983." 
              description2="Email Address : ourCompany@official.com Call Center      : 824763785465845555"
        />

        {/* About  3 */}
        <About
              title="Our Mission"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
              lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo
               non enim praesent elementum facilisis leo."
               description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
              lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo
               non enim praesent elementum facilisis leo." 
        />

        {/* About 4 */}
        <About
              title="Frequently Asked Questions"
              description="For buy product you must register account or login to your 
              account first, after that you will press add to cart button to
              put your selected product in to cart or basket. and aftter that
              you will continue to to checkout / payment process." 
        />
                </div>

                <div className="about w-2/3 mt-14 mx-auto text-blue-900">
                        <h1 className="text-center font-bold text-4xl pt-10"> About Page </h1>
                        <p className="pt-4 text-center text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ab ullam vel laborum tempore deserunt quas eveniet officiis necessitatibus, veniam, a blanditiis quis corrupti! Expedita molestias corporis quisquam excepturi.
                        </p>
                        <p className="text-center pt-28 text-4xl font-semibold"> Under Maintenance </p>
                </div>
                
                
                </div>
                
                <pagesNotFound />
                <Footer />
                </React.Fragment>
        )
}