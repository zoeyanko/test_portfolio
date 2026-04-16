const projects = [
  {
    slug: "sustainabele-design-publishing",
    title: "Sustainable Design Publishing",
    year: 2025,
    type: "commercial", // commercial | personal
    discipline: "design", // design | art
    categories: ["brand-identity", "editorial-print"],
    client: "Studio Example",
    metaTopRight: "Print",
    tagBottomLeft: "Commercial",
    tagBottomRight: "Graphic Design",
    description:
      "Sustainable Design Publishing is a visual identity and digital presence created for a contemporary creative practice. The project focused on balancing atmospheric softness with clear structure across print and web touchpoints.",
    thumbnail: "/images/project-1/image1.jpg",
    media: [
      { type: "image", src: "/images/project-1/gd1.jpg", alt: "Soft Echo image 1" },
      { type: "image", src: "/images/project-1/gd2.jpg", alt: "Soft Echo image 2" },
      { type: "gif", src: "/images/soft-echo/process.gif", alt: "Video test" },
      { type: "video", src: "https://www.youtube.com/embed/YOUR_VIDEO_ID" }
    ]
  },
  {
    slug: "night-bloom",
    title: "Night Bloom",
    year: 2024,
    type: "personal",
    discipline: "art",
    categories: ["new-media-interactive", "illustration"],
    client: "Self-initiated",
    metaTopRight: "Installation / Interactive",
    tagBottomLeft: "Personal",
    tagBottomRight: "New Media & Interactive",
    description:
      "Night Bloom is a speculative visual experiment combining illustration, moving image, and interactive logic into a layered installation language.",
    thumbnail: "public/images/placeholder-image.jpg",
    media: [
      { type: "image", src: "/images/night-bloom/01.jpg", alt: "Night Bloom image 1" },
      { type: "image", src: "/images/night-bloom/02.jpg", alt: "Night Bloom image 2" }
    ]
  },
  {
    slug: "play-state",
    title: "Play State",
    year: 2023,
    type: "personal",
    discipline: "design",
    categories: ["new-media-interactive", "campaigns-art-direction"],
    client: "Independent project",
    metaTopRight: "Game / Visual system",
    tagBottomLeft: "Personal",
    tagBottomRight: "Interactive",
    description:
      "Play State explores playful interaction and motion-led visual storytelling through a game-inspired visual environment.",
    thumbnail: "public/images/placeholder-image.jpg",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/YOUR_VIDEO_ID" },
      { type: "image", src: "/images/play-state/01.jpg", alt: "Play State screenshot" }
    ]
  }
];

export default projects;