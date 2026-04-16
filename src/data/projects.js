const projects = [
  {
    slug: "sustainabele-design-publishing",
    title: "Roomies App Design",
    year: 2022,
    type: "personal", // commercial | personal
    discipline: "design", // design | art
    categories: ["digital-web-design"],
    client: "Aalto University",
    metaTopRight: "UX Case Study",
    tagBottomLeft: "Commercial",
    tagBottomRight: "Web Design",
    description:
      "Roomies is a mobile app concept designed to help finding local roommates in Helsinki. The design focuses on creating a user-friendly experience while addressing the challenges of finding compatible roommates in a new city. The app includes features such as personalized profiles, compatibility matching, and secure communication channels to facilitate the roommate search process.",
    thumbnail: "/images/roomies/roomies1.jpg",
    media: [
      { type: "image", src: "/images/roomies/roomies1.jpg", alt: "App Design" },
      { type: "gif", src: "/images/roomies/roomies2.gif", alt: "Roomies GIF" },
      { type: "image", src: "/images/roomies/roomies3.png", alt: "App Design" },
      { type: "image", src: "/images/roomies/roomies5.png", alt: "App Design" },
      { type: "image", src: "/images/roomies/roomies6.png", alt: "App Design" },
      { type: "image", src: "/images/roomies/roomies7.png", alt: "App Design" },
      { type: "image", src: "/images/roomies/roomies8.jpg", alt: "App Design" }

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
    thumbnail: "/images/image3.jpg",
    media: [
      { type: "image", src: "/images/image3.jpg", alt: "Night Bloom image 1" }
    
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
    thumbnail: "/images/vr.jpg",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/y4gfT66Ws4c?si=8fDSaY7K4DakRo0w" },
      { type: "image", src: "/images/vr.jpg", alt: "Play State screenshot" }
    ]
  }
];

export default projects;