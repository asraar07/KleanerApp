import featureData from '../../data/featuredData'
import React from 'react' // Removed useState import
import Icon from '../ui/Icon'


// Accepts onButtonClick prop for consistent handling with Home.jsx
const FeaturesSection = ({ onButtonClick }) => { 
    // Removed: const [message, setMessage] = useState(null);
  return (
    
    <div>
      <section className="py-20 px-4 bg-gray-100 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featureData.map((feature) => (
                            <div
                                // Using feature.id for key
                                key={feature.id} 
                                className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100"
                            >
                                {/* Icon Container (Matching the blue square in the image) */}
                                <div className="p-4 bg-blue-700 rounded-lg text-white mb-6 shadow-xl w-16 h-16 flex items-center justify-center">
                                    <Icon name={feature.icon} className="h-8 w-8" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* CTA Link */}
                                <a
                                    href={feature.linkUrl}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Using the prop from the parent
                                        onButtonClick(feature.linkText); 
                                    }}
                                    className="text-blue-500 font-semibold hover:text-blue-700 transition duration-150 relative inline-block group"
                                >
                                    {feature.linkText}
                                    <span className="block h-0.5 bg-blue-500 absolute bottom-0 left-0 w-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
    </div>
  )
}

export default FeaturesSection