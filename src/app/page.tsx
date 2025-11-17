"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, CheckCircle, Crown, DollarSign, Lock, Plug, Quote, Rocket, Shield, Sparkles, Star, TrendingUp, Users, Workflow, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/gf8ef6f56aa7d13011d3c9e416bd9594d71254a31e96bea161e1ae36d6cf46ea0c29b5ee907fa07623918eef53a9a7a23d6145e1f8c739d2ebe761210cddca53b_1280.jpg"
          logoAlt="SaaS Platform Logo"
          brandName="SaasPro"
          button={{
            text: "Get Started",
            href: "pricing"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Transform Your Business with Intelligent SaaS Solutions"
          description="Streamline operations, boost productivity, and scale your business with our comprehensive platform designed for modern enterprises"
          tag="Next-Gen Platform"
          tagIcon={Rocket}
          buttons={[
            {
              text: "Start Free Trial",
              href: "pricing"
            },
            {
              text: "Watch Demo",
              href: "about"
            }
          ]}
          imageSrc="https://pixabay.com/get/g588f1a70d3c9822be21da2042db02f0dd417e946747fedba80253e982f49178dfe7c86f0a47bfd80a3f34420d94bfa1ba0e72dd35dd818fdf639478ed302fdfa_1280.jpg"
          imageAlt="SaaS platform dashboard interface"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="We empower businesses to achieve more with intelligent automation, seamless integrations, and data-driven insights that transform how you work and grow."
          features={[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Experience blazing fast performance with our optimized infrastructure that scales with your business needs."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level security protocols protect your data with advanced encryption and compliance standards."
            },
            {
              icon: Users,
              title: "Team Collaboration",
              description: "Seamless collaboration tools that keep your team connected and productive across all projects."
            },
            {
              icon: TrendingUp,
              title: "Smart Analytics",
              description: "Powerful insights and reporting tools that help you make data-driven decisions for growth."
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Powerful Features"
          description="Everything you need to run your business efficiently and effectively"
          tag="Features"
          tagIcon={Star}
          features={[
            {
              title: "Advanced Analytics",
              icon: BarChart3
            },
            {
              title: "Workflow Automation",
              icon: Workflow
            },
            {
              title: "API Integration",
              icon: Plug
            },
            {
              title: "Data Security",
              icon: Lock
            },
            {
              title: "Team Collaboration",
              icon: Users
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Plan"
          description="Flexible pricing options that grow with your business needs"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Perfect for Teams",
              badgeIcon: Users,
              price: "$29/month",
              subtitle: "Everything you need to get started",
              features: [
                "Up to 10 team members",
                "50GB storage",
                "Basic analytics",
                "Email support",
                "Standard integrations"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$79/month",
              subtitle: "Advanced features for growing businesses",
              features: [
                "Up to 50 team members",
                "500GB storage",
                "Advanced analytics",
                "Priority support",
                "Premium integrations",
                "Custom workflows"
              ]
            },
            {
              id: "enterprise",
              badge: "Full Power",
              badgeIcon: Crown,
              price: "$199/month",
              subtitle: "Complete solution for large organizations",
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Enterprise analytics",
                "24/7 dedicated support",
                "All integrations",
                "Custom development"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Trusted by Thousands"
          description="See the impact our platform makes for businesses worldwide"
          tag="Growth"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Active Users",
              description: "Professionals trust our platform daily",
              icon: Users
            },
            {
              id: "2",
              value: "99.9%",
              title: "Uptime",
              description: "Reliable service you can count on",
              icon: CheckCircle
            },
            {
              id: "3",
              value: "150+",
              title: "Integrations",
              description: "Connect with your favorite tools",
              icon: Plug
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="blur-reveal"
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from businesses that trust our platform"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechFlow Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g119b45b5af9b6296c41590738fae9e1352807f473c3cbde27afc3ad27249caa2d26449c6dce99a0205a6e71392d6d3698f1f303188817eb7c1079e23065e566e_1280.jpg",
              imageAlt: "Sarah Johnson CEO portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "DataStream",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gc32fa3ea6723628ce3bb69be975b0efa6533e74a60c58f9595f17b712354081d957a46a8d073616341cfbdbd16ec74edd07ea40e366906c6adb336607218d730_1280.jpg",
              imageAlt: "Michael Chen CTO headshot"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "GrowthLab",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g310bb00345632c5ae7bdb453e2916b60f6744e1ea95c120ed119e427be76c40e8095c4425d9073f4106ec0078c2ce3d094393ac2fbffbc1517262df596f21af2_1280.jpg",
              imageAlt: "Emily Rodriguez marketing director"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "InnovateX",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g85672b11042043aa830753e7cc79c8828934fe57b3cd777762f1cc051196576d5769ffa958f301970a9ff1cd9ee13f46b3fe44a20078c3f198b75e660014e19c_1280.jpg",
              imageAlt: "David Kim product manager"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="opacity"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our platform"
          faqs={[
            {
              id: "1",
              title: "How quickly can I get started?",
              content: "You can get started immediately with our free trial. Simply sign up and you'll have access to all features for 14 days."
            },
            {
              id: "2",
              title: "What integrations are available?",
              content: "We offer 150+ integrations with popular tools including Slack, Salesforce, Google Workspace, Microsoft 365, and many more."
            },
            {
              id: "3",
              title: "Is my data secure?",
              content: "Yes, we use bank-level encryption and comply with SOC 2, GDPR, and other security standards to keep your data safe."
            },
            {
              id: "4",
              title: "Can I change plans anytime?",
              content: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing."
            },
            {
              id: "5",
              title: "Do you offer custom solutions?",
              content: "Yes, our Enterprise plan includes custom development and dedicated support to meet your specific business needs."
            }
          ]}
          textPosition="left"
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Business?"
          description="Join thousands of companies already using our platform to streamline operations and drive growth. Start your free trial today."
          tagIcon={Rocket}
          imageSrc="https://pixabay.com/get/ge1fcb9a989284fec064e573a944c0e9ecb7aea206e201ae9440f83ac81df7558306c38a87817accc4d1bf9c4aabb6ae066da4804ec6e0541ecd6e9a6f5bbd429_1280.jpg"
          imageAlt="Customer support team"
          mediaPosition="right"
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By starting your trial, you agree to our Terms of Service and Privacy Policy."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://pixabay.com/get/gf8ef6f56aa7d13011d3c9e416bd9594d71254a31e96bea161e1ae36d6cf46ea0c29b5ee907fa07623918eef53a9a7a23d6145e1f8c739d2ebe761210cddca53b_1280.jpg"
          logoText="SaasPro"
          copyrightText="© 2025 | SaasPro"
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "feature"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Integrations",
                  href: "about"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Support",
                  href: "faq"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Documentation",
                  href: "https://docs.example.com"
                },
                {
                  label: "API Reference",
                  href: "https://api.example.com"
                },
                {
                  label: "Status",
                  href: "https://status.example.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}