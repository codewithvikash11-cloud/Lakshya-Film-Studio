import React from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import FeaturedGallery from '../components/FeaturedGallery';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import FounderSection from '../components/FounderSection';
import BehindLensSection from '../components/BehindLensSection';

// New Components
import TrustLine from '../components/TrustLine';
import WhyChooseUs from '../components/WhyChooseUs';
import HowWeWork from '../components/HowWeWork';
import MobileStickyCTA from '../components/MobileStickyCTA';

const Home = () => {
    return (
        <div className="page-home">
            <Hero />

            {/* 1. Trust Line - Immediate Credibility */}
            <TrustLine />

            <HomeAbout />

            {/* 2. Why Choose Us - Value Proposition */}
            <WhyChooseUs />

            <FounderSection />

            {/* 3. How We Work - Process Transparency */}
            <HowWeWork />

            <CTASection
                title="Your Wedding Deserves a Cinematic Story"
                buttonText="Book Now"
                link="/contact"
                variant="primary"
            />

            <FeaturedGallery />

            <StatsSection />

            <BehindLensSection />

            <Testimonials />

            <CTASection
                title="Limited Dates Available for 2026 Wedding Season"
                buttonText="Check Availability"
                link="/contact"
                variant="outline"
                backgroundImage="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&w=1950&q=80"
            />

            {/* 4. Mobile Sticky CTA - Conversion Booster */}
            <MobileStickyCTA />
        </div>
    );
};

export default Home;
