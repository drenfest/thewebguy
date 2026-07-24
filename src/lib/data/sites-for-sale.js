export function siteForSaleUrl(slug) {
  return `/sites-for-sale/${slug}/`;
}

export const sitesForSale = [
  {
    slug: "hammernest-handyman",
    name: "HammerNest Handyman",
    shortName: "HammerNest",
    type: "Local-service website",
    category: "WordPress",
    status: "In Progress",
    statusSlug: "in-progress",
    isAvailable: true,
    askingPrice: "Early acquisition from $4,800",
    liveUrl: "https://hammernest.net/",
    liveLabel: "Visit Live Site",
    market: "Freeport, IL and nearby handyman market",
    availabilityNote: "Now live on hammernest.net, with public history just starting to compound while the asset is still available for acquisition.",
    cardSummary: "A live handyman brand with service hubs, local pages, estimate intake, CRM tracking, and a real public launch already in place.",
    heroSummary:
      "A complete local handyman website asset built to become a lead-generation system, not just a brochure. The sale includes the structure, content depth, CRM intake, tracking layer, and technical base that would normally take a buyer weeks to assemble from scratch.",
    screenshots: [
      {
        src: "/images/sites-for-sale/hammernest-home-live-fullpage.png",
        alt: "HammerNest live homepage screenshot on desktop",
        label: "Live homepage screenshot"
      },
      {
        src: "/images/sites-for-sale/hammernest-estimate-live-fullpage.png",
        alt: "HammerNest live request estimate page screenshot on desktop",
        label: "Live estimate page screenshot"
      }
    ],
    badges: ["Single-sale asset", "CRM included", "UTM tracking", "Local SEO structure"],
    quickStats: [
      ["Core pages", "12"],
      ["Service pages", "18"],
      ["Area pages", "12"],
      ["Problem pages", "10"],
      ["Custom blocks", "20"],
      ["Status", "In Progress"]
    ],
    lighthouse: {
      performance: 98,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      source: "Live desktop Lighthouse CLI run on hammernest.net on July 24, 2026."
    },
    searchConsole: {
      label: "Search Console",
      value: "Live, history still early",
      detail: "HammerNest is now live, but Search Console history is still too new to use as meaningful sales proof."
    },
    traffic: {
      label: "Traffic / leads",
      value: "Live, early-stage history",
      detail: "The CRM, tracking, and UTM capture are live, but the listing is not yet using early lead or traffic numbers as sales proof."
    },
    lastOptimizationDate: "July 24, 2026",
    proofBar: [
      ["Asking price", "Early acquisition from $4,800"],
      ["Current state", "In Progress"],
      ["Search visibility", "Live, early history"],
      ["Lead backend", "CRM + local tracking"],
      ["Lighthouse", "98 / 100 / 100 / 100"],
      ["Last optimization", "July 24, 2026"]
    ],
    buyerHook:
      "This is the kind of live asset a local operator, investor, or agency can acquire while the public history is still early and the underlying content depth and lead systems are already done.",
    sections: [
      {
        title: "What makes this saleable",
        items: [
          "Custom WordPress build for a real handyman-service positioning rather than a generic contractor shell.",
          "Service-hub architecture, individual service pages, problem-intent pages, and area pages already mapped and written.",
          "Estimate request flow with thank-you routing, local CRM capture, follow-up fields, and owner notification support.",
          "Tracking layer for UTMs, CTA clicks, phone/text taps, service-card clicks, gallery clicks, and form behavior.",
          "The live homepage and live estimate flow are already public on hammernest.net.",
          "Built to be sold once, then expanded, relocated, or refined after acquisition."
        ]
      },
      {
        title: "Public page architecture",
        items: [
          "Core pages: Home, About, Services, Request Estimate, Service Areas, Projects, Pricing / How Estimates Work, FAQ, Contact, Thank You, Privacy Policy, Terms of Service, and attribution.",
          "Parent service hubs: Handyman Services, Home Repair Services, Property Maintenance, and Small Home Improvement Projects.",
          "Individual services include drywall repair, door repair, deck repair, fence repair, shelving, TV mounting, fixture installs, punch-list work, appliance hookup help, and more.",
          "Problem-first pages cover repair-intent searches such as fixing a broken door, drywall damage, inspection repair lists, small jobs, and same-week repair help.",
          "Area pages already cover a 12-location local market footprint."
        ]
      },
      {
        title: "Backend and systems included",
        items: [
          "Admin-only CRM plugin with lead list, lead detail, notes, status updates, follow-up dates, estimated value fields, and CSV export.",
          "Lead capture includes name, email, phone, contact preference, service requested, urgency, message, photo upload support, source page, landing page, referrer, and UTM fields.",
          "Tracking plugin records local events and can forward into GA4 when configured.",
          "Optimizer plugin support is already part of the project stack.",
          "The seeded page system and reusable editor records make content updates practical after handoff."
        ]
      },
      {
        title: "What the buyer receives",
        items: [
          "Exclusive rights to the HammerNest site asset and its public-facing design system.",
          "The full page library and content structure already built into the project.",
          "The internal linking and local-service architecture already planned into the site.",
          "The estimate intake workflow, CRM backend, and tracking setup already connected into the build.",
          "Transfer help plus follow-up implementation scope for launch, edits, relocation, or expansion."
        ]
      },
      {
        title: "What happens after acquisition",
        items: [
          "Brand, phone, contact details, and target service areas can be updated after transfer.",
          "Additional services, locations, or photo proof can be added as scoped follow-up work.",
          "Search Console history, GA4 history, and live lead history are now starting to compound on the public domain.",
          "The buyer can keep The Web Guy on to monitor, improve, and expand the asset instead of rebuilding it."
        ]
      }
    ]
  },
  {
    slug: "modemind",
    name: "ModeMind",
    shortName: "ModeMind",
    type: "Private workflow app",
    category: "App",
    status: "Sold",
    statusSlug: "sold",
    isAvailable: false,
    askingPrice: "$5,500",
    liveUrl: "https://modemind.app/",
    liveLabel: "Visit Live App",
    market: "Private local-first productivity product",
    availabilityNote: "Archive example only. The original asset is sold and no longer available for acquisition.",
    cardSummary: "A sold archive example showing the level of product depth behind these listings: local-first storage, structured operating modes, timers, exports, and private continuity.",
    heroSummary:
      "ModeMind stays in the catalog as proof that the inventory is not limited to brochure sites. It was a private workflow product built around local-first storage, operational modes, timer logic, and continuity between sessions.",
    screenshots: [
      {
        src: "/images/sites-for-sale/modemind-live-fullpage.png",
        alt: "ModeMind live work mode screen screenshot",
        label: "Live work mode screenshot"
      }
    ],
    badges: ["Sold", "Local-first", "Private data", "Cloudflare-ready"],
    quickStats: [
      ["Operating modes", "12"],
      ["Session continuity", "Built in"],
      ["Attachment storage", "IndexedDB"],
      ["Export controls", "Included"],
      ["Status", "Sold"],
      ["Category", "App archive"]
    ],
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      source: "Live desktop Lighthouse CLI run on modemind.app on July 24, 2026."
    },
    searchConsole: {
      label: "Search Console",
      value: "Not applicable",
      detail: "This is a private product archive item rather than a public SEO asset."
    },
    traffic: {
      label: "Traffic / usage",
      value: "Private / not disclosed",
      detail: "The archive page shows product depth, not buyer-specific traffic or usage history."
    },
    lastOptimizationDate: "July 24, 2026",
    proofBar: [
      ["Status", "Sold"],
      ["Search visibility", "Not applicable"],
      ["Performance", "100"],
      ["Accessibility", "100"],
      ["Best practices", "100"],
      ["SEO", "100"]
    ],
    buyerHook:
      "ModeMind proves the catalog can include purposeful internal tools and products, not just service websites. It is here as a sold archive marker, not an active listing.",
    sections: [
      {
        title: "What the product included",
        items: [
          "Twelve predefined operating modes instead of one flat task backlog.",
          "Mode-specific focus and recovery timers.",
          "One active microtask per session plus a reset flow.",
          "Session notes, recurring blocks, and private reports.",
          "Local browser storage for records and IndexedDB for attachments.",
          "Export and deletion controls for ownership and privacy."
        ]
      },
      {
        title: "Why it stands out",
        items: [
          "The product model was about state, transitions, and workflow boundaries, not generic task management.",
          "Private data stayed local instead of requiring a hosted account architecture.",
          "The codebase supports a modern deployment path while preserving a local-first product stance.",
          "It shows the quality bar for custom internal tools and personal operating systems."
        ]
      },
      {
        title: "Archive status",
        items: [
          "ModeMind is sold and is not available as a resale asset.",
          "The page exists to demonstrate product depth and previous successful asset delivery.",
          "A similar tool would be a separate commissioned build, not a clone of the sold product."
        ]
      }
    ]
  }
];

export const siteForSaleMap = Object.fromEntries(sitesForSale.map((site) => [site.slug, site]));
