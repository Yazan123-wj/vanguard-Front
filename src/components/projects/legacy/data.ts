export type GalleryProject = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  /** Card thumbnail + first detail image */
  image: string;
  /** Extra images shown on the project detail page (optional) */
  images?: string[];
  /** Left column — larger lead copy in the detail overlay. */
  description?: string;
  /** Right column — smaller overview copy in the detail overlay. */
  overview?: string;
  /** External “Visit live site” URL (from the admin). */
  externalUrl?: string;
  theme?: { bg: string; text: string; border: string };
};

export const projects: GalleryProject[] = [
  {
    id: "netflix-experience",
    title: "NETFLIX",
    subtitle: "STANGER THINGS EXPERIENCE",
    tags: ["EXPERIENCE", "GAME", "PHYSICAL"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "google-cloud",
    title: "Google",
    subtitle: "GOOGLE CLOUD BIGQUERY",
    tags: ["COMMUNICATION", "SOCIAL", "CAMPAIGN"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    ],
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "zendesk-15",
    title: "zendesk",
    subtitle: "15 YEARS CAMPAIGN",
    tags: ["EXPERIENCE", "WEBSITE", "CAMPAIGN"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "diageo-artistry",
    title: "DIAGEO",
    subtitle: "A BLEND OF ARTISTRY",
    tags: ["EXPERIENCE", "3D", "AI"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "doja-cat",
    title: "DOJA CAT",
    subtitle: "JUICY FRUIT CAMPAIGN",
    tags: ["PRODUCT", "WEBSITE", "PLATFORM"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "nike-run",
    title: "NIKE",
    subtitle: "AIR MAX FUTURE BEAT",
    tags: ["EXPERIENCE", "PHYSICAL", "3D"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "spotify-wrapped",
    title: "Spotify",
    subtitle: "WRAPPED INTERACTIVE",
    tags: ["WEBSITE", "SOCIAL", "EXPERIENCE"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "apple-vision",
    title: "Apple",
    subtitle: "VISION PRO SHOWCASE",
    tags: ["EXPERIENCE", "3D", "PRODUCT"],
    year: "2026",
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "judas-priest",
    title: "JUDAS PRIEST",
    subtitle: "SHIELD OF INDUSTRIAL MUSIC",
    tags: ["EXPERIENCE", "WEBSITE", "SOCIAL"],
    year: "2018",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "google-voice",
    title: "Google",
    subtitle: "VOICE ASSISTANT IMMERSION",
    tags: ["EXPERIENCE", "AI", "VOICE"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "netflix-games",
    title: "NETFLIX",
    subtitle: "ARCADE RETRO PARLOR",
    tags: ["EXPERIENCE", "3D", "CONTENT"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "diageo-whisky",
    title: "DIAGEO",
    subtitle: "SINGLE MALT JOURNEY",
    tags: ["PRODUCT", "WEBSITE", "MOTION"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  // Row 2 / extra elements to ensure density
  {
    id: "audi-rse",
    title: "AUDI",
    subtitle: "DRIVING EMOTION AR",
    tags: ["3D", "EXPERIENCE", "GAME"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "sony-playstation",
    title: "SONY",
    subtitle: "PLAYSTATION 30TH ANNIVERSARY",
    tags: ["WEBSITE", "CAMPAIGN", "SOCIAL"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "balenciaga-cyber",
    title: "BALENCIAGA",
    subtitle: "CYBERPUNK METAVERSE RETAIL",
    tags: ["EXPERIENCE", "PHYSICAL", "AI"],
    year: "2026",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "redbull-stratos",
    title: "RED BULL",
    subtitle: "STRATOS INTERACTIVE MUSEUM",
    tags: ["EXPERIENCE", "MOTION", "WEBSITE"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "lego-build",
    title: "LEGO",
    subtitle: "CREATIVE BRICK BUILDER 3D",
    tags: ["PRODUCT", "WEBSITE", "3D"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "spotify-dj",
    title: "Spotify",
    subtitle: "AI DJ IMMERSIVE LAUNCH",
    tags: ["AI", "CAMPAIGN", "EXPERIENCE"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "prada-mode",
    title: "PRADA",
    subtitle: "PRADA MODE ARCHIVE",
    tags: ["EXPERIENCE", "PHYSICAL", "EVENT"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "tesla-optimus",
    title: "TESLA",
    subtitle: "OPTIMUS INTERFACE SUITE",
    tags: ["PRODUCT", "AI", "WEBSITE"],
    year: "2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "gucci-vault",
    title: "GUCCI",
    subtitle: "GUCCI VAULT METAVERSE",
    tags: ["EXPERIENCE", "3D", "WEBSITE"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "louis-vuitton-voyage",
    title: "LOUIS VUITTON",
    subtitle: "TRAVEL TRUNK EXPLORER",
    tags: ["EXPERIENCE", "MOTION", "PRODUCT"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "ikea-place",
    title: "IKEA",
    subtitle: "PLACE AR SPATIAL RETAIL",
    tags: ["PRODUCT", "WEBSITE", "3D"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "space-x-starship",
    title: "SPACEX",
    subtitle: "STARSHIP FLIGHT SIMULATOR",
    tags: ["EXPERIENCE", "3D", "PLATFORM"],
    year: "2026",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "hermes-dreams",
    title: "HERMÈS",
    subtitle: "KINETIC SCARF WINDOW",
    tags: ["EXPERIENCE", "PHYSICAL", "MOTION"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "ibm-quantum",
    title: "IBM",
    subtitle: "IBM QUANTUM COMPOSER",
    tags: ["PLATFORM", "WEBSITE", "AI"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "samsung-flip",
    title: "SAMSUNG",
    subtitle: "GALAXY FLEX EXPERIENCE",
    tags: ["PRODUCT", "WEBSITE", "MOTION"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "porsche-taycan",
    title: "PORSCHE",
    subtitle: "TAYCAN ELECTRIC PULSE",
    tags: ["EXPERIENCE", "3D", "CAMPAIGN"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "netflix-onepiece",
    title: "NETFLIX",
    subtitle: "ONE PIECE AR CRUISE",
    tags: ["WEBSITE", "SOCIAL", "3D"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "rtfkt-nike",
    title: "RTFKT",
    subtitle: "CLONEX CRYPTOKICKS",
    tags: ["3D", "PRODUCT", "AI"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "dior-ball",
    title: "DIOR",
    subtitle: "CHRISTIAN DIOR BALLROOM",
    tags: ["EXPERIENCE", "PHYSICAL", "EVENT"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  },
  {
    id: "netflix-wednesday",
    title: "NETFLIX",
    subtitle: "WEDNESDAY SHADOW RUN",
    tags: ["GAME", "WEBSITE", "CONTENT"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
    theme: { bg: "#0d0d0d", text: "#FB4616", border: "rgba(255, 255, 255, 0.15)" }
  }
];
