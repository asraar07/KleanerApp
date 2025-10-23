import serviceData from '../../data/servicesData'
import Icon from '../ui/Icon'
import React from 'react'

// Renamed prop to onButtonClick for consistency
const ServicesSection = ({ onButtonClick }) => {
  return (
    <div>
        <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Optional: Title for the section */}
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Our Specialized Services
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceData.map((service) => (
                            <div
                                // Using service.id for key
                                key={service.id} 
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition duration-300 hover:shadow-2xl"
                            >
                                {/* Image Container */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                                
                                {/* Content Area */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[4rem]">
                                        {service.description}
                                    </p>
                                    
                                    {/* Link with Chevron */}
                                    <a
                                        href="#view-service"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Using the consistent prop name
                                            onButtonClick(`View Service: ${service.title}`); 
                                        }}
                                        className="inline-flex items-center text-blue-500 font-semibold text-sm group hover:text-blue-700 transition duration-150"
                                    >
                                        View Service
                                        <Icon name="ChevronRight" className="h-4 w-4 text-blue-500 group-hover:text-blue-700" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
         
    </div>
  )
}

export default ServicesSection