import React from 'react'
import Head from 'next/head'
import CarouselItems from './components/CarouselItems'
import Navbar from './components/Navbar'
import RecomProduct from './components/RecomProduct'
import Card from './components/Card'
import Category from './components/Category'
import Footer from './components/Footer'

export default function product () {
        return (
                <React.Fragment>
                <Head>
                        <meta name="description" content="product,vegetables,fruit" />
                        <title>ALA Product</title>
                        <link rel="icon" href="/assets/logo.png" />
                </Head>
                <Navbar />
                <div className="carouselProduct">
                        <CarouselItems />
                </div>
                <h1 className="font-bold mt-14 text-xl RecommendationTitle">Recommendation Product </h1>
                <p className="RecommendationDescription">This is a recommendation all product on this market.
                </p>
                <div className="recommendation">
                        <RecomProduct />
                        <RecomProduct />
                        <RecomProduct />
                        <RecomProduct />
                </div>
                <h1 className="font-bold mt-14 text-xl RecommendationTitle">Category Product </h1>
                <p className="RecommendationDescription">This is category all product on this market.</p>
                <div className="categoryProducts">
                        <Category />
                        <Category />
                </div>
                <h1 className="font-bold mt-14 text-xl RecommendationTitle">Product List </h1>
                <p className="RecommendationDescription">This is all product on this market.</p>
                <div className="card text-3xlmax-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <Card />
                        <Card />
                </div>
                <h1 className="font-bold mt-14 text-xl RecommendationTitle">Category Product </h1>
                <p className="RecommendationDescription">This is category all product on this market.</p>
                <div className="categoryProducts">
                        <Category />
                        <Category />
                </div>
                <h1 className="font-bold mt-14 text-xl RecommendationTitle">Recommendation Product </h1>
                <p className="RecommendationDescription">This is a recommendation all product on this market.</p>
                <div className="recommendation">
                        <RecomProduct />
                        <RecomProduct />
                        <RecomProduct />
                        <RecomProduct />
                </div>
                <div className="product w-2/3 mt-14 mx-auto text-red-800">
                        <h1 className="text-center font-bold text-4xl pt-10"> Product Page </h1>
                        <p className="pt-4 text-center text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ab ullam vel laborum tempore deserunt quas eveniet officiis necessitatibus, veniam, a blanditiis quis corrupti! Expedita molestias corporis quisquam excepturi.
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, impedit assumenda sapiente dolor necessitatibus asperiores ipsa quos natus sed accusantium, facilis officia. Maiores blanditiis magni aperiam, voluptates qui iusto nostrum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora ad, adipisci ab sequi incidunt perspiciatis aliquid eaque.</p>
                        <p className="text-center pt-28 text-4xl font-semibold"> Under Maintenance </p>
                        
                </div>
                <Footer />
                </React.Fragment>

                
        )
}