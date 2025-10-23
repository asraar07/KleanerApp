import React from 'react';
import newsData from '../../data/newsData';

// Mock data for the news articles


const NewsHeroSection = ({ onButtonClick }) => {
    return (
        <section>
            {/* 1. Hero Banner Section */}
            <div 
                className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center overflow-hidden bg-gray-900"
                style={{
                    backgroundImage: "url('https://placehold.co/1920x600/1f2937/ffffff?text=Cleaning+Professional')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // Optional: adds a nice parallax effect
                }}
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black opacity-30"></div>
                
                <div className="relative z-10 p-4 max-w-3xl">
                    <p className="text-yellow-400 font-semibold text-sm tracking-widest uppercase mb-3">
                        More Than Professional
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                        Looking for a Cleaning Company
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-white font-light mb-8">
                        We're in business since 1978
                    </h2>
                    
                    <button
                        onClick={() => onButtonClick("Send Message")}
                        className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        Send a Message
                    </button>
                </div>
            </div>

            {/* 2. Latest News Section */}
            <div className="py-16 md:py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    
                    <p className="text-gray-500 font-semibold text-sm tracking-widest uppercase mb-1">
                        Insights & Stories
                    </p>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
                        Latest News
                    </h2>
                    
                    {/* News Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {newsData.map((article) => (
                            <div key={article.id} className="group flex flex-col rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                                {/* Image and Date Overlay */}
                                <div className="relative h-48 w-full">
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 p-2 bg-blue-600 text-white text-xs font-semibold rounded-tr-lg">
                                        {article.category}
                                    </div>
                                    <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs font-semibold rounded-bl-lg">
                                        {article.date}
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-5 flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 leading-snug mb-3 group-hover:text-blue-600 transition duration-300">
                                        {article.title}
                                    </h3>
                                    <a 
                                        href={article.link} 
                                        className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition duration-300 flex items-center"
                                    >
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsHeroSection;
