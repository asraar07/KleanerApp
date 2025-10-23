import React from 'react';
import Services from '../components/home/ServicesSection'
import PageHeader from '../components/common/pageHeroSection';


// --- Service Data ---


// --- Main Services Component ---
const Service = () => {
    return (
        <section className="w-full bg-gray-50 ">
          <PageHeader
        subtitle="Professional Cleaning"
        title=" Our Services"
       
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
      />
            <Services/>
        </section>
    );
};

export default Service;