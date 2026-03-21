import { images } from '../../constants';

export const navigationData = [
  { id: 'Tab 1', label: 'GTM' },
  { id: 'Tab 2', label: 'Affiliates' },
  { id: 'Tab 3', label: 'Growth Systems' },
  { id: 'Tab 5', label: 'Development' },
];

export const servicesData = {
  'Tab 1': {
    title: "Go-To-Market Strategy for Serious Web3 Projects",
    description: "Everything needed to launch, scale, and win in competitive crypto markets.",
    cta: "Book a Call",
    cards: [
      { id: 1, title: "Marketing", text: "Growth-focused marketing strategies designed to increase visibility, engagement, and conversions.", icon: images.database },
      { id: 2, title: "Consulting", text: "Strategic guidance to help you make smarter business and product decisions.", icon: images.people },
      { id: 3, title: "Development", text: "Clean, scalable, and performance-driven builds.", icon: images.partner },
      { id: 4, title: "Whitepaper & Pitch Deck Support", text: "Craft clear, investor-ready narratives that communicate value, vision, and execution.", icon: images.whitepaper },
      { id: 5, title: "Automation", text: "Save time, reduce manual work, and scale faster with smart systems.", icon: images.gift },
      { id: 6, title: "Launchpad & CEX/DEX Coordination", text: "Manage launch execution across platforms, listings, timing, and market entry strategy.", icon: images.launchpad },
    ]
  },
  'Tab 2': {
    title: "Affiliate & Influencer Networks",
    description: "Connect with the largest crypto distribution networks globally.",
    cta: "View Network",
    cards: [
      { id: 1, title: "KOL Management", text: "End-to-end management of top-tier influencers and thought leaders.", icon: images.people },
      { id: 2, title: "Affiliate Infrastructure", text: "Custom tracking and reward systems for on-chain referral growth.", icon: images.partner },
      { id: 3, title: "Campaign Tracking", text: "Real-time dashboard to monitor click-through rates and conversion metrics.", icon: images.database },
      { id: 4, title: "Reward Distribution", text: "Automated smart contract payouts for successful referrals and bounties.", icon: images.gift },
      { id: 5, title: "Network Expansion", text: "Strategic outreach to onboard niche-specific creators and ambassadors.", icon: images.launchpad },
      { id: 6, title: "Performance Analytics", text: "Deep dive reporting into audience engagement and ROI per influencer.", icon: images.whitepaper },
    ]
  },
  'Tab 3': {
    title: "Growth Systems & Automation",
    description: "Data-driven systems designed to acquire and retain Web3 users.",
    cta: "Audit My Growth",
    cards: [
      { id: 1, title: "CRM & Funnels", text: "Automated lead generation and conversion funnels for B2B/B2C.", icon: images.database },
      { id: 2, title: "Retention Loops", text: "Product-led growth mechanics that keep users coming back.", icon: images.gift },
      { id: 3, title: "A/B Testing Frameworks", text: "Continuous optimization of landing pages and onboarding flows.", icon: images.whitepaper },
      { id: 4, title: "Lead Scoring", text: "Algorithmic qualification to identify your most valuable community members.", icon: images.people },
      { id: 5, title: "Email & Social Automation", text: "Trigger-based messaging sequences that scale without manual effort.", icon: images.partner },
      { id: 6, title: "ROI Tracking", text: "Comprehensive attribution modeling across all marketing channels.", icon: images.launchpad },
    ]
  },
  'Tab 5': {
    title: "Full-Stack Web3 Development",
    description: "Bespoke engineering for dApps, smart contracts, and infrastructure.",
    cta: "Build with Us",
    cards: [
      { id: 1, title: "Smart Contract Audit", text: "Security-first development and auditing for EVM and SVM chains.", icon: images.whitepaper },
      { id: 2, title: "Custom Dashboards", text: "Real-time on-chain data visualization and analytics platforms.", icon: images.launchpad },
      { id: 3, title: "dApp Architecture", text: "Scalable frontend integrations for seamless user interactions.", icon: images.database },
      { id: 4, title: "Token Integration", text: "Secure implementation of ERC-20, ERC-721, and custom token standards.", icon: images.gift },
      { id: 5, title: "Web3 Authentication", text: "Frictionless wallet connect features and user onboarding solutions.", icon: images.people },
      { id: 6, title: "Backend Infrastructure", text: "Robust node management and decentralized storage solutions.", icon: images.partner },
    ]
  }
};