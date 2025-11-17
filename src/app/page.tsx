"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Building, HelpCircle, MessageSquare, Rocket, Sparkles, Twitter, Linkedin, Github, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SaasFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Business with Smart SaaS Solutions"
          description="Streamline operations, boost productivity, and accelerate growth with our comprehensive business platform designed for modern enterprises"
          tag="SaaS Platform"
          tagIcon={Rocket}
          buttons={[
            {
              text: "Start Free Trial",
              href: "contact"
            },
            {
              text: "Watch Demo",
              href: "https://demo.saasflow.com"
            }
          ]}
          imageSrc="https://pixabay.com/get/g72fdf4c16149cc16c216162710e922510a7d149a2ff21e78edd289e2f826a40e54025b43bcf3f890ae34309cded09e179b92eb9fa00fbde2b4ebc1af4a4c6725_1280.jpg"
          imageAlt="SaasFlow dashboard interface"
          frameStyle="browser"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardSix
          title="Everything You Need to Scale Your Business"
          description="From analytics to automation, discover how our platform transforms the way you work"
          tag="Features"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Advanced Analytics",
              description: "Get deep insights into your business performance with real-time analytics, custom dashboards, and automated reporting that helps you make data-driven decisions",
              imageSrc: "https://pixabay.com/get/gaf1e7aca22dbcd42f6ab2a1fa466df10c927580ac83664b8dedd45d4ee3facc53586d525ac0f425f0e9abab278c8d65ab5b738e6019caff556bf5e4de772ef6a_1280.jpg",
              imageAlt: "Advanced analytics dashboard"
            },
            {
              id: 2,
              title: "Workflow Automation",
              description: "Automate repetitive tasks and streamline your processes with powerful workflow builders, smart triggers, and seamless integrations across your tech stack",
              imageSrc: "https://pixabay.com/get/g43576ed05df3f9dfdf6421cdef099f05e5514cf4243ae543916d453727de096e2997e77c782472deb6f83b3f2d48faac0d29365a5598fc7ed3a8904a9c638229_1280.jpg",
              imageAlt: "Workflow automation interface"
            },
            {
              id: 3,
              title: "Team Collaboration",
              description: "Enhance teamwork with shared workspaces, real-time collaboration tools, project management features, and communication channels that keep everyone aligned",
              imageSrc: "https://pixabay.com/get/gfcd7f1964f4ab13e405515ac29372b23d24c1026f65e4321993ddc5718695435edd040527ee53933cc351d253d0852d120b3b8cc6b5f1bff7d2a73973b3f333b_1280.jpg",
              imageAlt: "Team collaboration workspace"
            },
            {
              id: 4,
              title: "Enterprise Security",
              description: "Protect your data with bank-grade security, multi-factor authentication, role-based access controls, and compliance with industry standards like SOC 2 and GDPR",
              imageSrc: "https://pixabay.com/get/g5cfd7f80abdeaa501bbfccb518f40b9b5501b394e283e58d79061a9197fd72862dab8b453650b6529fc8a2568ca6e03ef3f859a99c403ed6c6d1b3d58de45cf5_1280.jpg",
              imageAlt: "Enterprise security features"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Trusted by Industry Leaders"
          description="See what our customers have to say about their experience with SaasFlow"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_ceo",
              testimonial: "SaasFlow has transformed how we operate. The automation features alone have saved us 30+ hours per week, and the analytics give us insights we never had before.",
              imageSrc: "https://pixabay.com/get/gd4d97f87a06b9fe444b182d2a10277c2ecb681be8e067651b2f1ccf8c125f26de089cc612ea2b6cd0b2fa63dac9287d4d6587e35002284b19d7b654a7c3afb00_1280.jpg",
              imageAlt: "Sarah Johnson CEO portrait"
            },
            {
              id: "2",
              name: "Mike Chen",
              handle: "@mike_tech",
              testimonial: "Implementation was seamless and the ROI was immediate. Our team productivity increased by 40% in the first quarter after switching to SaasFlow.",
              imageSrc: "https://pixabay.com/get/ge86685b0961092c497e42962dc10834b96428b095d8629c5ac021bc3a89c4a85c6cb85df7fa059cef3c256c5bb78cb870c585c27d2bd0122f110391b66ca0053_1280.jpg",
              imageAlt: "Mike Chen CTO portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_ops",
              testimonial: "The customer support is exceptional. Whenever we need help, the team is responsive and knowledgeable. It feels like having an extended team.",
              imageSrc: "https://pixabay.com/get/g97dbd8a58c6b05a9aad252a7acd977c26c07bd7190f252b49cc66710a16f0238f88057186bdf31fff969944adef1b4cd5bc927594843fd96e94986d755b9ef5c_1280.jpg",
              imageAlt: "Emma Rodriguez manager portrait"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidk_director",
              testimonial: "Security was our top concern when evaluating platforms. SaasFlow exceeded our expectations with enterprise-grade protection and compliance features.",
              imageSrc: "https://pixabay.com/get/g0eeaf93238804cd369e87f460cc1cbb2cc5d6c8361468855c16242fe738583204b13971ec2d11b4b19cf9104033238e65c934aaeb8898452638e2c137d626aaf_1280.jpg",
              imageAlt: "David Kim director portrait"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by 10,000+ Companies Worldwide"
          description="Join industry leaders who rely on SaasFlow to power their operations"
          tag="Partners"
          tagIcon={Building}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g1a0ad7820db759a45d564cf8886f6a9612935f9e521f400692823ca30e478a84d4fb947884bb79c23f9a0c4bf4ea83310a9b8717597211d8e04f4ab9c9f70d89_1280.jpg",
            "https://pixabay.com/get/gd0a33c80e155d6f05207bfd2b59c8909dad89a1d8d6542bc78d2b2ab52ad1cd0484af47da5305bed92553d9f5ecb2c22e73f89ba584412c151fe7cabbb95d982_1280.jpg",
            "https://pixabay.com/get/gc49ffb8c0bdf652d4f7cf039ccbed94bfe0c223c93acd7e2f8c158d71f9deec9226135ad11ff1040dfda09fb59596be13eb36e983e70ae160aaf2b188d334bce_1280.jpg",
            "https://pixabay.com/get/gc459bea81fa73379af87c5a22ab2bf0440a000ca41d304925f104e885dac78b9025850fda04c44339e239ce2909bd6cc4306155d35d1c11c7d176da5bbb4b264_1280.jpg",
            "https://pixabay.com/get/g06186096c3e033847d13dabc9b3f0e91d99a4056d77f7144c413941ca6068e58353137d18328e7c73092387ac8345778eaa250ccbd853042ab20e62224beac39_1280.jpg",
            "https://pixabay.com/get/gedde34e55e47ca9cc611d331c851f72847976eecb64f1dc37306468480734f1fa6c40a2ee8ca03bd05a744924b12d10137ecf3defe9e6bfccc03508ac03a673f_1280.jpg",
            "https://pixabay.com/get/g027a5398e7cf86568730be8c3ad65133cc6c2e8e8911f797792959b1e7f58f5934d9e6a1e224da44d7e871ad68e0723c569e0b4c5b3c56d58ba5685ba179958b_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about SaasFlow and our services"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is SaasFlow and how does it work?",
              content: "SaasFlow is a comprehensive business platform that streamlines operations through automation, analytics, and collaboration tools. It integrates with your existing systems to provide a unified workspace for your team."
            },
            {
              id: "2",
              title: "How long does implementation take?",
              content: "Most businesses are up and running within 24-48 hours. Our onboarding team provides guided setup, data migration assistance, and training to ensure a smooth transition."
            },
            {
              id: "3",
              title: "Is my data secure with SaasFlow?",
              content: "Absolutely. We use bank-grade encryption, maintain SOC 2 compliance, and follow GDPR standards. Your data is backed up multiple times daily and stored in secure, geographically distributed data centers."
            },
            {
              id: "4",
              title: "Can I integrate with my existing tools?",
              content: "Yes, SaasFlow integrates with 500+ popular business tools including Slack, Salesforce, HubSpot, Google Workspace, Microsoft 365, and many more through our API and native integrations."
            },
            {
              id: "5",
              title: "What support options are available?",
              content: "We offer 24/7 chat support, email support, phone support for enterprise customers, comprehensive documentation, video tutorials, and personalized onboarding sessions."
            },
            {
              id: "6",
              title: "Can I try SaasFlow before committing?",
              content: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo with our team to see how SaasFlow fits your specific needs."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Business?"
          description="Join thousands of companies using SaasFlow to streamline operations and accelerate growth. Start your free trial today."
          tagIcon={Rocket}
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required for trial."
          imageSrc="https://pixabay.com/get/g536990ed2011d44555a6891e684bca005ae0aaac69123e3a3947d2f0112fc2e01eca7d3b4c263460b98b7756bef99e4f0bc510011027cca2c8d1e9ba5b4aba14_1280.jpg"
          imageAlt="Professional business team collaboration"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SaasFlow"
          copyrightText="© 2025 SaasFlow, Inc. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Security",
                  href: "security"
                },
                {
                  label: "Enterprise",
                  href: "enterprise"
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
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Blog",
                  href: "blog"
                },
                {
                  label: "Press",
                  href: "press"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Documentation",
                  href: "docs"
                },
                {
                  label: "API Reference",
                  href: "api"
                },
                {
                  label: "Help Center",
                  href: "help"
                },
                {
                  label: "Community",
                  href: "community"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Cookie Policy",
                  href: "cookies"
                },
                {
                  label: "GDPR",
                  href: "gdpr"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/saasflow",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/saasflow",
              ariaLabel: "Connect on LinkedIn"
            },
            {
              icon: Github,
              href: "https://github.com/saasflow",
              ariaLabel: "View our GitHub"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/saasflow",
              ariaLabel: "Watch on YouTube"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}