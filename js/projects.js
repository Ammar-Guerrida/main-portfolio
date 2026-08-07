const projects = [
  {
    title: "unnus",
    desc: "Healthcare Design Studio — brand identity, HIPAA-aware websites, landing pages, and collateral that build patient trust at first impression.",
    tags: ["Healthcare", "Design Studio", "Branding", "Web"],
    img: "./imgs/proj1.png",
    link: "https://unnus.com",
  },
  {
    title: "Clames Store",
    desc: "A modern bilingual (English/Arabic) React fashion e-commerce store for men, women and kids, with summer & winter seasonal collections, cart, and wishlist.",
    tags: ["React", "E-commerce", "Fashion", "Bilingual"],
    img: "./imgs/proj2.png",
    link: "https://clames-store.netlify.app/",
  },
  {
    title: "ElecStore",
    desc: "Modern electronics storefront for phones, laptops, headphones, and smart accessories.",
    tags: ["Electronics", "Tech", "Accessories", "Store"],
    img: "./imgs/proj3.png",
    link: "https://elecstore1.netlify.app/",
  },
  {
    title: "Rolex",
    desc: "Luxury watch storefront showcasing premium timepieces with featured collections and product details.",
    tags: ["Watches", "Luxury", "E-commerce", "Products"],
    img: "./imgs/proj4.png",
    link: "https://watch-shop-market.netlify.app/",
  },
  {
    title: "Tasty",
    desc: "A responsive restaurant website featuring a mouthwatering menu, daily services, and a warm dining experience.",
    tags: ["Restaurant", "Menu", "Food", "Responsive"],
    img: "./imgs/proj5.png",
    link: "https://tastyfood-restarent.netlify.app/",
  },
  {
    title: "NestFind",
    desc: "A modern real estate platform for listing apartments, villas, and properties with pricing and virtual tours.",
    tags: ["Real Estate", "Property", "Pricing", "Responsive"],
    img: "./imgs/proj6.png",
    link: "https://nestfind1.netlify.app/",
  },
  {
    title: "PawCare",
    desc: "Pet store and grooming salon offering products, services, and care packages with transparent pricing.",
    tags: ["Pets", "Grooming", "Store", "Pricing"],
    img: "./imgs/proj7.png",
    link: "https://pawcare-1.netlify.app/",
  },
];

(function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
      <div class="project-card reveal" onclick="window.location.href='${p.link}'">
        <div class="project-img">
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
          <a href="${p.link}" class="project-link">
            View Project <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `
    )
    .join("");
})();