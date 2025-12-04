"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroShowcaseSplit from '@/components/sections/hero/HeroShowcaseSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFourteen from '@/components/sections/testimonial/TestimonialCardFourteen';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Award, Crown, Leaf, Phone, Shield, Sparkles, Star, Volume2, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="noise-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Luxora Mattress"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876182604-6gcdtl8h.jpg"
          logoAlt="Luxora Premium Mattress"
          button={{
            text: "Shop Now",
            href: "products"
          }}
          className="backdrop-blur-md bg-white/10"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplit
          title="Experience Luxury Sleep Like Never Before"
          description="Crafted with the finest materials and precision engineering, Luxora mattresses deliver the ultimate in comfort, support, and timeless elegance. Sleep on clouds, wake rejuvenated."
          tags={["Premium Quality", "100-Year Warranty", "Handcrafted", "Luxury Sleep", "All-Natural Materials", "Expert Certified"]}
          buttons={[
            { text: "Discover Collections", href: "products" },
            { text: "Schedule Consultation", href: "contact" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876183086-k0ra9n5w.jpg"
          showcaseImageAlt="Luxora Premium Mattress Showcase"
          titleClassName="text-5xl md:text-6xl font-extrabold tracking-tight"
          descriptionClassName="text-lg md:text-xl leading-relaxed"
          tagsContainerClassName="flex flex-col gap-2"
          tagClassName="text-sm font-medium opacity-80"
          buttonClassName="px-8 py-3 rounded-full font-semibold"
          showcaseWrapperClassName="rounded-2xl overflow-hidden shadow-2xl"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Heritage"
          description="For over a century, Luxora has been the standard-bearer of premium sleep excellence. Each mattress is hand-selected, individually crafted, and engineered to perfection by master artisans who understand that sleep is not a luxury—it is a necessity. We believe every person deserves to experience the profound comfort of a truly exceptional mattress."
          useInvertedBackground="noInvert"
          containerClassName="py-20"
          descriptionClassName="text-2xl md:text-4xl leading-relaxed font-light"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Why Choose Luxora"
          description="Discover the features that set us apart from the rest"
          tag="Premium Features"
          features={[
            {
              title: "Hand-Stitched Perfection",
              description: "Each mattress is individually hand-stitched by master craftspeople with decades of experience, ensuring uncompromising attention to detail.",
              icon: Sparkles
            },
            {
              title: "Premium Natural Materials",
              description: "We source only the finest organic cotton, pure latex, and natural wool from sustainable suppliers worldwide.",
              icon: Leaf
            },
            {
              title: "Lifetime Comfort Guarantee",
              description: "If you're not absolutely delighted with your sleep experience, we'll adjust or replace your mattress at no additional cost.",
              icon: Shield
            },
            {
              title: "Clinical Sleep Testing",
              description: "Every mattress undergoes rigorous sleep science testing and is certified by leading sleep research institutions.",
              icon: Award
            },
            {
              title: "Custom Support Zones",
              description: "Advanced engineering creates targeted support zones that adapt to your unique body contours throughout the night.",
              icon: Zap
            },
            {
              title: "Whisper Quiet Design",
              description: "Premium isolation layers ensure zero motion transfer, so you and your partner sleep undisturbed.",
              icon: Volume2
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          cardClassName="border border-accent/20 bg-gradient-to-br from-white to-purple-50/30"
          textBoxDescriptionClassName="text-base opacity-75"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Our Signature Collections"
          description="Expertly crafted mattresses for every preference and body type"
          tag="Premium Mattress Collection"
          products={[
            {
              id: "1",
              name: "Luxora Royal Heritage",
              price: "$4,999",
              variant: "Firm, Medium, Soft",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876187658-f4vwu07t.jpg",
              imageAlt: "Luxora Royal Heritage Mattress"
            },
            {
              id: "2",
              name: "Luxora Cloud Nine",
              price: "$3,899",
              variant: "Ultra-Plush, Memory Foam",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876188450-1kvon9tq.jpg",
              imageAlt: "Luxora Cloud Nine Mattress"
            },
            {
              id: "3",
              name: "Luxora Elite Support",
              price: "$5,499",
              variant: "Orthopedic, Hybrid",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876189015-5ncee1pl.jpg",
              imageAlt: "Luxora Elite Support Mattress"
            }
          ]}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          cardClassName="border border-accent/20 bg-gradient-to-br from-white to-purple-50/30 hover:shadow-xl transition-shadow"
          textBoxDescriptionClassName="text-base opacity-75"
          cardNameClassName="font-bold text-lg"
          cardPriceClassName="text-2xl font-extrabold text-primary-cta"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFourteen
          title="Loved by Sleep Enthusiasts"
          description="See what our valued customers are saying about their Luxora experience"
          tag="Customer Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarah.m",
              testimonial: "This mattress has completely transformed my sleep. I wake up refreshed and pain-free for the first time in years. Luxora is a true investment in quality of life.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876185302-idhk4xz6.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Anderson",
              handle: "@james.anderson",
              testimonial: "The craftsmanship is exceptional. Every detail speaks to the premium quality. Worth every penny. My whole family is sleeping better.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876185801-44uzrmpd.jpg",
              imageAlt: "James Anderson"
            },
            {
              id: "3",
              name: "Elizabeth Rogers",
              handle: "@elizabeth.r",
              testimonial: "Finally found a mattress that provides genuine support without sacrificing comfort. The hand-stitching detail is incredible. A masterpiece.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876186448-u8el7j1r.jpg",
              imageAlt: "Elizabeth Rogers"
            },
            {
              id: "4",
              name: "Michael Chen",
              handle: "@michael.chen",
              testimonial: "After trying countless brands, Luxora stands in a league of its own. The customer service is outstanding, and the product quality is unmatched.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876187128-t3g37cx6.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "5",
              name: "Jennifer Walsh",
              handle: "@jen.walsh",
              testimonial: "The best purchase I've made in years. I'm sleeping deeper, feeling more refreshed, and waking without any aches. This is luxury sleep redefined.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876185302-idhk4xz6.jpg",
              imageAlt: "Jennifer Walsh"
            },
            {
              id: "6",
              name: "Robert Thompson",
              handle: "@rob.thompson",
              testimonial: "Luxora delivers on every promise. Premium materials, expert craftsmanship, and genuine customer care. This is what true luxury feels like.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876185801-44uzrmpd.jpg",
              imageAlt: "Robert Thompson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          cardClassName="border border-accent/20 bg-gradient-to-br from-white to-purple-50/30"
          textBoxDescriptionClassName="text-base opacity-75"
          testimonialClassName="text-base italic font-light leading-relaxed"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofTwo
          title="Trusted by Luxury Brands & Experts"
          description="Luxora partners with the world's finest sleep specialists, interior designers, and wellness brands"
          tag="Premium Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876196195-sx48e4dd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876196838-pvicgs48.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876197616-2ud7tjub.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876198335-4ybwcs0f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876199116-cl3axzgy.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logoCardClassName="bg-gradient-to-br from-white to-purple-50/30 border border-accent/20"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Investment in Your Sleep"
          description="Choose the perfect plan for your lifestyle. All include lifetime support."
          tag="Premium Pricing"
          plans={[
            {
              id: "essential",
              badge: "Popular",
              badgeIcon: Star,
              price: "$2,999",
              subtitle: "Perfect starter luxury mattress",
              buttons: [
                { text: "Choose Plan", href: "contact" }
              ],
              features: [
                "All-natural premium materials",
                "10-year comfort guarantee",
                "Free white glove delivery",
                "Expert sleep consultation",
                "30-night sleep trial"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$4,999",
              subtitle: "Ultimate luxury sleep experience",
              buttons: [
                { text: "Choose Plan", href: "contact" }
              ],
              features: [
                "Hand-stitched premium craftsmanship",
                "Lifetime comfort guarantee",
                "Free installation & setup",
                "Priority concierge service",
                "60-night sleep trial",
                "Custom support zones"
              ]
            },
            {
              id: "elite",
              badge: "Luxury",
              badgeIcon: Sparkles,
              price: "$7,499",
              subtitle: "Bespoke mattress engineering",
              buttons: [
                { text: "Choose Plan", href: "contact" }
              ],
              features: [
                "Fully customized design",
                "Master artisan consultation",
                "Lifetime luxury warranty",
                "24/7 VIP support line",
                "90-night sleep trial",
                "Bi-annual professional adjustment",
                "Luxury storage included"
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          cardClassName="border border-accent/20 bg-gradient-to-br from-white to-purple-50/30"
          badgeClassName="bg-primary-cta text-white text-xs font-bold px-3 py-1 rounded-full"
          priceClassName="text-4xl font-extrabold text-primary-cta"
          featureItemClassName="text-sm font-medium opacity-75"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Premium Sleep Questions Answered"
          sideDescription="Everything you need to know about investing in luxury sleep"
          faqs={[
            {
              id: "1",
              title: "What makes Luxora mattresses different from other premium brands?",
              content: "Luxora combines centuries of heritage with modern sleep science. Every mattress is hand-stitched by master craftspeople, uses only natural premium materials, and undergoes rigorous clinical testing. Our lifetime comfort guarantee and expert consultation ensure you get the perfect mattress for your unique needs."
            },
            {
              id: "2",
              title: "How long does a Luxora mattress last?",
              content: "With proper care, a Luxora mattress will provide superior comfort for 15-20+ years. Our construction quality and premium materials are built to endure. We offer a lifetime warranty and complimentary adjustments throughout the mattress's lifespan."
            },
            {
              id: "3",
              title: "Can I trial a Luxora mattress before purchasing?",
              content: "Yes! All Luxora mattresses come with a sleep trial period (30-90 nights depending on your plan). We want you to be absolutely certain of your purchase. If you're not completely satisfied, we provide hassle-free returns."
            },
            {
              id: "4",
              title: "What materials are used in Luxora mattresses?",
              content: "We use 100% natural materials including organic cotton, pure natural latex, sustainable wool, and premium coil systems. All materials are sourced from ethical suppliers and are hypoallergenic and eco-friendly."
            },
            {
              id: "5",
              title: "Do you offer customization options?",
              content: "Absolutely. Our Elite plan includes full customization through a personal consultation with our master artisans. We can adjust firmness, support zones, materials, and design to your exact specifications."
            },
            {
              id: "6",
              title: "What is your delivery and setup process?",
              content: "We offer white-glove delivery service with professional installation. Our team will deliver, set up, and adjust your mattress. Delivery is free nationwide, and we coordinate a time that works perfectly for you."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          sideTitleClassName="text-3xl md:text-4xl font-extrabold"
          sideDescriptionClassName="text-lg opacity-75 font-light"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Begin Your Luxury Sleep Journey"
          ctaDescription="Connect with our sleep experts for a personalized mattress consultation and discover your perfect match."
          ctaButton={{
            text: "Schedule Consultation",
            href: "contact"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "How do I get started?",
              content: "Simply schedule a free consultation with one of our sleep experts. We'll ask about your sleep preferences, body type, and lifestyle to recommend the perfect Luxora mattress."
            },
            {
              id: "2",
              title: "Is there a minimum purchase requirement?",
              content: "No. We believe everyone deserves quality sleep. We offer flexible plans starting at $2,999, and all include our comprehensive sleep trial and lifetime support."
            },
            {
              id: "3",
              title: "Do you offer financing options?",
              content: "Yes. We work with premium financing partners to make luxury sleep accessible. Flexible payment plans are available for all mattress collections."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          ctaTitleClassName="text-2xl font-bold"
          ctaDescriptionClassName="text-base opacity-75"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764876195670-4gz4vjhw.jpg"
          imageAlt="Luxora Premium Bedroom"
          logoText="Luxora"
          logoWidth={140}
          logoHeight={50}
          copyrightText="© 2025 Luxora Mattress. Crafted for extraordinary sleep."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Products",
              items: [
                { label: "Mattresses", href: "products" },
                { label: "Accessories", href: "#" },
                { label: "Collections", href: "products" },
                { label: "Custom Orders", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Warranty", href: "#" },
                { label: "Sleep Guide", href: "#" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
          containerClassName="bg-gradient-to-b from-purple-50/50 to-white"
          mediaWrapperClassName="mask-fade-top-long"
          logoTextClassName="font-extrabold text-lg tracking-tight"
        />
      </div>
    </ThemeProvider>
  );
}