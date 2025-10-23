import React from 'react';
import features from '../../data/aboutData';
const AboutSection = ({ onButtonClick }) => {
    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Top Content (Title, Text, Image) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Text and Signature */}
                    <div>
                        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
                            Our Advantages
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
                            About our Company
                        </h2>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Founded 30 years ago, The Kleaner has built up a level of expertise to deliver the services and result for your cleaning requirements.
                        </p>
                        
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our business began to fill a void in the region for industrial cleaning services. We are a small company that treats every client like family. We'll always put customers first and go the extra mile.
                        </p>

                        {/* Signature - Stylized Text Placeholder */}
                        <p className="text-2xl font-signature text-gray-800 mt-6" style={{ fontFamily: 'cursive' }}>
                            Alexander Hanso
                        </p>
                    </div>

                    {/* Right Column: Before/After Image Mockup */}
                    <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-2xl">
                        {/* Placeholder for the main image (Before) */}
                        <img
                            src="https://placehold.co/800x600/1e3a8a/ffffff?text=Professional+Cleaning"
                            alt="Before cleaning service"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* The "After" section cover for the slide effect */}
                        <div 
                            className="absolute inset-0 bg-blue-500 transition-all duration-700 ease-in-out"
                            // Mocking the 'After' section slide effect. 
                            // In a real app, this would be a controlled slider, 
                            // but here we simply show the final state after a slight delay/interaction.
                            style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)', background: 'url(https://placehold.co/800x600/059669/ffffff?text=Sparkling+Clean) no-repeat center / cover' }}
                        >
                             {/* Line Divider */}
                            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-lg -translate-x-1/2">
                                {/* Center Circle */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-blue-600 ring-2 ring-blue-300"></div>
                            </div>
                        </div>

                        {/* Before/After Labels */}
                        <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs rounded-full opacity-70">Before</span>
                        <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs rounded-full opacity-70">After</span>
                    </div>
                </div>

                {/* Bottom Content (Feature Cards Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="flex items-start p-6 rounded-xl border border-gray-200 shadow-md transition-all hover:shadow-xl hover:border-blue-300"
                        >
                            <div className="p-3 mr-4 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    {feature.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;