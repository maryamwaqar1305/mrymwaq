import projGraphic from "../assets/projects/graphic.png";
import projFinancehub from "../assets/projects/financehub.png";
import projAtmos from "../assets/projects/atmoss.png";
import projLumiere from "../assets/projects/lumie.png";


export const profile = {
  navname: "Maryam Waqar",
  name: "Me",
  firstName: "Maryam",
  role: "Fullstack Developer & Designer",
  heroSub:
    "I'm a developer and designer who builds and shapes digital experiences — writing the code and crafting the design behind them.",
  email: "maryam.waqar198@gmail.com",
  github: "https://github.com/maryamwaqar1305",
  linkedin: "https://www.linkedin.com/in/maryam-waqar-508a6024a/",
  x: "https://x.com/maryamdevs",
  resume: "/resume.me.pdf",
};
 
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
 
export const projects = [
  {
    slug: "graphic-designer-portfolio",
    cover: projGraphic,
    id: "01",
    title: "Graphic Designer Portfolio",
    year: "2026",
    role: "Frontend Development & Design",
    tagline: "A bold, editorial portfolio for showcasing graphic design work.",
    description:
      "A hand-built portfolio site with expressive typography, smooth scrolling, and a gallery that lets the work speak.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maryamwaqar1305/graphic-design-portfolio",
    demo: "https://maryamwaqar.netlify.app/",
    hue: "#EDEDED",
    accent: "#111111",
    overview:
      "A portfolio built from scratch in plain HTML, CSS, and JavaScript to showcase graphic design work- posters, social posts, and brand explorations, in a way that feels like flipping through a printed lookbook.",
    challenge:
      "Most design portfolios rely on heavy page builders and pre-made templates, making it difficult for the designer's personality to come through. The objective was to create a handcrafted portfolio that feels distinctive, loads quickly, and lets the work take center stage without unnecessary distractions.",
    approach: [
      {
        title: "Designed with Content First",
        text: "Built the layout using semantic HTML and modular CSS, focusing on clear typography, generous spacing, and an editorial-inspired reading experience.",
      },
      {
        title: "Crafted a Responsive Showcase",
        text: "Created a flexible project gallery that seamlessly adapts across mobile, tablet, and desktop while maintaining visual balance and hierarchy.",
      },
      {
        title: "Added Meaningful Interactions",
        text: "Developed lightweight hover animations, scroll reveals, and subtle transitions with vanilla JavaScript to make the experience feel interactive without sacrificing performance.",
      },
      {
        title: "Optimised for Performance",
        text: "Compressed assets, minimized JavaScript, and followed clean coding practices to ensure fast loading times and a smooth browsing experience.",
      },
    ],
    highlights: [
      "Fully hand-coded using HTML, CSS, and JavaScript.",
      "Editorial-inspired layout with strong typography and whitespace.",
      "Responsive design optimized for all screen sizes.",
      "Interactive hover effects and smooth scroll animations.",
      "Lightweight architecture with no external frameworks.",
      "Fast-loading pages through image and code optimization.",
      "Clean, accessible, and maintainable codebase.",
    ],
    outcome:
      "The final portfolio delivers a fast, responsive, and visually engaging experience that reflects the designer's personality while keeping the focus on the work itself. The handcrafted interface, thoughtful interactions, and performance-first approach make it stand apart from generic template-based portfolios.",
    learned:
      "This project reinforced that great design goes beyond aesthetics. I learned how thoughtful typography, spacing, and motion can guide a user's attention without overwhelming them. Building the site from scratch also strengthened my understanding of responsive layouts, performance optimization, and creating engaging interactions using only HTML, CSS, and JavaScript. Most importantly, it showed me that simplicity, when executed well, often creates the strongest user experience.",
    metrics: [
      { value: "100%", label: "Hand-coded, no builder" },
      { value: "3", label: "Core technologies" },
      { value: "Fast", label: "Lightweight & optimised" },
    ],
  },
  {
    slug: "financehub",
    cover: projFinancehub,
    id: "02",
    title: "FinanceHub",
    year: "2025",
    role: "Full-stack Development",
    tagline: "A clean dashboard that makes personal finance easy to read.",
    description:
      "A finance dashboard that turns transactions, budgets, and trends into clear, glanceable insights.",
    stack: ["React", "Chart.js", "CSS", "Mongodb", "Node.js", "Express.js" ],
    github: "https://github.com/maryamwaqar1305/FinanceHUB",
    demo: "https://finance-hub-ecru.vercel.app/#",
    hue: "#E6E6E6",
    accent: "#111111",
    overview:
      "FinanceHub is a personal-finance dashboard that gathers spending, budgets, and trends into one calm, readable view- designed so you understand your money at a glance instead of digging through statements.",
    challenge:
      "Managing personal finances often means navigating cluttered dashboards, confusing spreadsheets, and financial jargon that can discourage users from engaging with their own data. While many finance applications offer extensive analytics, they rarely explain what the numbers actually mean or help users make informed financial decisions. The goal of this project was to design an intelligent personal finance dashboard that combines data visualization with AI-powered insights. Beyond tracking income and expenses, the platform enables users to securely manage their accounts, import transaction history through CSV files, monitor live financial trends with real-time graphs, and receive personalized AI recommendations based on their spending habits. The challenge was creating a feature-rich experience that remains clean, intuitive, and approachable for everyday users.",
    approach: [
      {
        title: "Prioritized Information That Matters",
        text: "The dashboard was structured around the metrics users check most often, including account balances, monthly income, expenses, savings, investment performance, and budget utilization. Through a carefully designed visual hierarchy using typography, spacing, and modular cards, users can immediately understand their financial position without searching through multiple screens.",
      },
      {
        title: "Designed Live Data Visualizations",
        text: "Instead of static charts, the dashboard features live, interactive graphs that update as financial data changes. Users can monitor spending trends, savings growth, income streams, investment performance, and monthly cash flow through responsive charts that support filtering by custom date ranges and spending categories. Every visualization was designed to communicate meaningful insights rather than simply displaying raw numbers.",
      },
      {
        title: "Integrated AI-Powered Financial Insights",
        text: "To move beyond traditional expense tracking, AI-powered insights were incorporated throughout the dashboard. The system analyzes transaction patterns and spending behavior to generate personalized recommendations, detect unusual expenses, forecast upcoming monthly spending, identify opportunities to save money, and highlight recurring subscriptions that users may want to cancel. These intelligent insights transform financial data into practical guidance, helping users make more informed financial decisions.",
      },
      {
        title: "Built Practical Financial Tools",
        text: "Secure authentication allows every user to create an account and safely access their personal financial information. CSV import enables quick uploading of bank statements and transaction history, eliminating manual data entry, while PDF export generates professional financial reports that can be downloaded, shared, or archived for future reference.",
      },
      {
        title: "Responsive, Accessible, and Performance-Focused",
        text: "The interface was designed using a responsive layout that adapts seamlessly across desktop, tablet, and mobile devices. Lightweight animations, smooth transitions, accessible typography, and optimized assets ensure the dashboard remains fast, intuitive, and enjoyable to use regardless of screen size.",
      },
    ],
    highlights: [
      "Secure user authentication with login and personalized dashboards.",
      "AI-powered financial insights based on spending behavior and transaction history.",
      "Live interactive graphs with real-time financial updates.",
      "Smart expense categorization using AI.",
      "Personalized budgeting recommendations and monthly spending forecasts.",
      "Detection of unusual transactions and recurring subscription payments.",
      "CSV import for uploading bank statements and transaction history.",
      "PDF export for downloading professional financial reports.",
      "Interactive dashboards for income, expenses, savings, investments, and cash flow.",
      "Advanced filtering by category, account, and custom date ranges.",
      "Responsive design optimized for desktop, tablet, and mobile devices.",
      "Clean information hierarchy for quick financial decision-making.",
      "Smooth animations and micro-interactions for an engaging user experience.",
      "Performance-optimized interface with reusable UI components and scalable architecture.",
    ],
    outcome:
      "The final product goes beyond being a traditional finance dashboard by combining intelligent analytics with an intuitive user experience. Users can securely access their accounts, import financial data within seconds, visualize their financial health through live interactive graphs, and receive AI-generated insights that explain spending patterns and suggest practical ways to improve financial habits. Rather than overwhelming users with numbers, the platform transforms complex financial information into clear, actionable recommendations. By combining responsive design, real-time data visualization, secure account management, AI-assisted decision-making, and practical reporting tools, the dashboard provides a modern and engaging financial management experience that helps users better understand and control their finances.",
    learned:
      "This project strengthened my understanding of designing data-intensive products where usability and intelligence work together. I learned how effective information architecture and real-time visualization can simplify complex financial data, while AI-generated insights can turn raw numbers into meaningful recommendations. Designing features such as secure authentication, CSV imports, PDF reporting, live analytics, and intelligent budgeting also reinforced the importance of balancing powerful functionality with a clean, accessible, and user-friendly interface. Most importantly, it demonstrated that the best financial products don't just display data, they help users understand it and take confident action.",
    metrics: [
      { value: "1 view", label: "All finances at a glance" },
      { value: "Clear", label: "Charts that explain" },
      { value: "Responsive", label: "Phone to desktop" },
    ],
  },
  {
    slug: "atmos",
    cover: projAtmos,
    id: "03",
    title: "Atmos",
    year: "2024",
    role: "Frontend Development",
    tagline: "A minimal weather app powered by a live weather API.",
    description:
      "A clean weather experience with live conditions, forecasts, and a calm, focused interface.",
    stack: ["JavaScript", "Weather API", "CSS"],
    github: "https://github.com",
    demo: "https://atmos-forcast.netlify.app/",
    hue: "#EAEAEA",
    accent: "#111111",
    overview:
      "Atmos is a minimal weather app that pulls live data from a weather API and presents current conditions and forecasts in a calm, uncluttered interface- the weather, and nothing you don't need.",
    challenge:
      "Most weather applications overwhelm users with advertisements, unnecessary widgets, and cluttered interfaces, making it difficult to quickly find the information that actually matters. While they provide plenty of weather data, they often fail to present it in a way that's easy to understand or genuinely useful in everyday life. The goal of Atmos was to create a clean, modern weather experience that delivers accurate real-time weather information through an intuitive interface. Beyond displaying current conditions, the application provides hourly and multi-day forecasts, essential weather metrics, and AI-powered activity suggestions based on the current weather — all while maintaining a fast, distraction-free experience.",
    approach: [
      {
        title: "Integrated Real-Time Weather Data",
        text: "Connected the application to a live weather API to fetch current weather conditions, hourly forecasts, five-day predictions, temperature, wind speed, humidity, precipitation, sunrise, sunset, and other essential weather information. The dashboard updates dynamically to ensure users always receive the latest forecast.",
      },
      {
        title: "Designed for Clarity and Readability",
        text: "The interface was built around a simple visual hierarchy that highlights the most important information first. Current temperature, weather conditions, and upcoming forecasts remain the primary focus, while supporting details like wind speed, humidity, precipitation, sunrise, sunset, and feels-like temperature are organized into clean information cards for quick scanning.",
      },
      {
        title: "Added AI-Powered Activity Suggestions",
        text: "Instead of only displaying weather forecasts, Atmos helps users decide how to make the most of their day. Based on live weather conditions, the application generates intelligent activity recommendations such as going for a morning walk, cycling, enjoying outdoor activities, carrying an umbrella before rain, or planning indoor activities during unfavorable weather. These suggestions make the weather forecast more practical and actionable.",
      },
      {
        title: "Optimized for Speed and Responsiveness",
        text: "The application was designed to perform smoothly across desktop, tablet, and mobile devices. Lightweight animations, responsive layouts, efficient API requests, and graceful loading and error states ensure a fast and reliable experience regardless of the user's device.",
      },
    ],
    highlights: [
      "Live weather updates powered by a real-time weather API.",
      "Current weather, hourly forecasts, and 5-day weather predictions.",
      "Automatic GPS location detection with manual city search.",
      "Interactive weather maps for temperature, precipitation, and cloud coverage.",
      "AI-powered activity suggestions based on current weather conditions.",
      "Real-time weather metrics including temperature, humidity, wind speed, precipitation, feels-like temperature, sunrise, and sunset.",
      "Dynamic weather animations and condition-based icons.",
      "Responsive design optimized for desktop, tablet, and mobile devices.",
      "Fast API integration with optimized loading and smooth transitions.",
      "Minimal, distraction-free interface focused on essential weather information.",
    ],
    outcome:
      "Atmos delivers a clean and intuitive weather experience that prioritizes clarity, speed, and usability. Users can instantly check current weather conditions, monitor hourly and five-day forecasts, view essential weather details, and receive AI-powered activity suggestions that help them plan their day with confidence. By combining real-time weather data, responsive design, and intelligent recommendations, Atmos transforms weather forecasting into a more practical and engaging experience. Rather than simply displaying numbers, the application helps users understand the weather and make better decisions based on current conditions.",
    learned:
      "Building Atmos deepened my understanding of working with live external data and designing around it. I learned how to integrate a real-time weather API, handle loading and error states gracefully, and turn raw forecast data into a clear, scannable interface. Layering AI-powered activity suggestions on top taught me how intelligent features can make everyday tools genuinely more useful, while keeping performance and simplicity at the core of the experience.",
    metrics: [
      { value: "Live", label: "Real-time weather data" },
      { value: "API", label: "External data integration" },
      { value: "Minimal", label: "Focused interface" },
    ],
  },
  {
    slug: "lumiere",
    cover: projLumiere,
    id: "04",
    title: "Lumière",
    year: "2025",
    role: "Full-stack Design & Development",
    tagline: "A full-stack luxury skincare e-commerce store.",
    description:
      "A complete skincare storefront- editorial product pages, cart, and checkout- built end to end.",
    stack: ["React", "Next.js", "Framer Motion", "Supabase"],
    github: "https://github.com/maryamwaqar1305/Lumiere",
    demo: "https://lumiere-omega-rose.vercel.app/",
    hue: "#E2E2E2",
    accent: "#111111",
    overview:
      "Lumière is a full-stack e-commerce store for luxury skincare products. The goal was to make a shop that reads like a magazine — where the product is given room to breathe and every interaction feels intentional rather than transactional — backed by a real commerce flow.",
    challenge:
      "Many e-commerce websites focus solely on showcasing products while overlooking the overall shopping experience. Cluttered interfaces, lengthy checkout processes, and disconnected user journeys often make online shopping feel frustrating rather than enjoyable. Modern shoppers expect secure authentication, personalized accounts, responsive performance, and a seamless purchasing experience that feels as intuitive as shopping in a physical store. The goal of Lumière was to build a full-stack e-commerce platform that combines elegant design with powerful backend functionality. From secure authentication and real-time product management to shopping cart persistence and a complete purchase flow, every feature was designed to create a premium and realistic online shopping experience.",
    approach: [
      {
        title: "Designed a Premium Shopping Experience",
        text: "The interface was crafted with a clean visual hierarchy, refined typography, and generous spacing to create an elegant shopping environment. Every screen- from the homepage to the checkout — was designed to keep the focus on the products while making navigation effortless.",
      },
      {
        title: "Built an End-to-End Shopping Journey",
        text: "Users can browse collections, search products, explore detailed product pages, add items to their cart, save products to their wishlist, adjust quantities, and complete purchases through a smooth checkout flow. Every interaction was designed to replicate the experience of shopping on a modern commercial e-commerce platform.",
      },
      {
        title: "Integrated a Scalable Backend with Supabase",
        text: "The application uses Supabase as the backend service with PostgreSQL as the primary database to securely manage users, products, carts, wishlists, and order information. Real-time database synchronization ensures that shopping cart updates, user preferences, and product information remain consistent across sessions.",
      },
      {
        title: "Implemented Secure Authentication",
        text: "Authentication is powered by Google Sign-In alongside secure user account management, allowing users to quickly create accounts, log in, and access their personalized shopping experience without a lengthy registration process.",
      },
      {
        title: "Optimized for Performance and Responsiveness",
        text: "Built with reusable components, responsive layouts, and efficient data fetching, Lumière delivers fast loading times and a consistent shopping experience across desktop, tablet, and mobile devices.",
      },
    ],
    highlights: [
      "Full-stack e-commerce platform with frontend and backend integration.",
      "Supabase backend powered by PostgreSQL for scalable data management.",
      "Secure Google Authentication for quick and seamless account access.",
      "Dynamic product catalog with search and category filtering.",
      "Real-time shopping cart and wishlist synchronization.",
      "Detailed product pages with multiple images, pricing, and descriptions.",
      "Complete purchasing workflow from product discovery to checkout.",
      "Persistent user accounts with personalized shopping experiences.",
      "Responsive design optimized for desktop, tablet, and mobile devices.",
      "Reusable UI components with scalable architecture.",
      "Fast performance through optimized database queries and efficient state management.",
      "Smooth animations and micro-interactions for a premium shopping experience.",
    ],
    outcome:
      "Lumière delivers a complete full-stack e-commerce experience that closely mirrors the functionality of modern online retail platforms. Users can securely sign in using their Google account, browse products, save favorites, manage their shopping cart, and complete purchases through an intuitive and responsive interface. Powered by Supabase and PostgreSQL, the platform provides reliable data management, real-time synchronization, and secure authentication while maintaining fast performance across devices. By combining thoughtful UI design with robust backend architecture, Lumière demonstrates how a modern e-commerce application can deliver a realistic, scalable, and engaging online shopping experience.",
    learned:
      "Developing Lumière strengthened my understanding of building production-style full-stack applications that combine elegant frontend design with scalable backend systems. I gained practical experience integrating Supabase, PostgreSQL, Google Authentication, real-time database operations, user session management, and complete e-commerce workflows. Most importantly, this project reinforced that exceptional shopping experiences are created by combining intuitive design, secure authentication, reliable data management, and seamless interactions into one cohesive platform.",
    metrics: [
      { value: "72", label: "Products across 8 categories" },
      { value: "Full-stack", label: "Frontend + backend" },
      { value: "3-step", label: "Ribbon-reveal checkout" },
    ],
  },
];
 
export const experience = [
  {
    role: "Digital Marketing Intern",
    company: "Omnie Solutions Pvt. Ltd., Noida · On-site Internship",
    period: "",
    bullets: [
      "Assisted in planning and executing digital marketing campaigns across multiple platforms.",
      "Designed engaging social media posts, promotional creatives, and marketing assets for various brands.",
      "Managed content scheduling and collaborated with the marketing team to improve online engagement.",
      "Conducted market and competitor research to support campaign strategies and content planning.",
      "Worked with cross-functional teams to deliver client projects while meeting deadlines and maintaining brand consistency.",
    ],
  },
  {
    role: "Graphic Design Intern (Thumbnail Designer)",
    company: "AI Automation Agency · Remote Internship",
    period: "",
    bullets: [
      "Designed high-converting YouTube thumbnails, social media creatives, banners, and promotional graphics for multiple brands.",
      "Created visually engaging designs focused on improving audience engagement and click-through rates.",
      "Collaborated with content creators and the marketing team to maintain consistent branding across campaigns.",
      "Used Canva, Adobe Photoshop, and Figma to produce professional marketing and branding materials.",
      "Delivered creative assets within deadlines while maintaining high design quality.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "FODUU · Remote Internship",
    period: "",
    bullets: [
      "Developed responsive and interactive web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      "Built reusable frontend components from UI/UX designs while ensuring clean, maintainable, and scalable code.",
      "Collaborated remotely with designers and developers to deliver modern, responsive user interfaces.",
      "Optimized websites for performance, accessibility, and cross-browser compatibility.",
      "Used Git and GitHub for version control, collaboration, and efficient project management.",
    ],
  },
];
 
export const skills = [
  { group: "Design", items: ["UI/UX", "Figma", "Canva", "Photoshop", "Davinci Resolve"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite", "TailwindCSS",] },
  { group: "Motion", items: ["GSAP", "Framer Motion", "Lenis"] },
  { group: "Backend", items: ["Node.js", "PostgreSQL", "Supabase", "Express.js", "MongoDB"] },
];
 
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
 
// Long-form "About" content for the /about page (blog style)
export const about = {
  intro:
    "Hi, I'm Maryam. I enjoy designing and building digital experiences that feel simple, thoughtful, and easy to use. I love the process of turning an idea into something real, from the first sketch to the final line of code. If you move your cursor around this page, you'll find a few moments from my life following along. They're little pieces of who I am outside of work, because I believe the best products are built by real people with stories beyond the screen.",
  sections: [
    {
      heading: "A little about me",
      body: [
        "I like making things people actually enjoy using. Some days that means designing a brand, other days it's building a website, and a lot of days it's spending way too long making sure some tiny detail feels exactly right.",
        "I fell for both design and frontend development somewhere along the way. Design lets me be creative; code lets me actually build the thing. Watching an idea go from something floating around in my head to something you can click on and play with never really gets old.",
        "Away from my laptop, I'm usually hunting down a good bowl of ramen, wandering around with my camera, or bugging my friends to let me take their photo because the light is just too good to waste. I love shooting nature, sunsets, small in-between moments, and people. There's something about catching who someone actually is in a single frame.",
        "I also love to travel, especially anywhere with mountains. Mountains are kind of my reset button. Nothing beats winding through them with \u201cBeige\u201d playing on repeat- the air, the quiet mornings, the long walks, the views that go on forever. I always come home feeling like myself again.",
        "And I'm fully the person who'll spend a whole night watching movies with too many snacks, laughing at nothing, finding new music, or planning trips I definitely shouldn't be booking yet.",
        "I think the best work comes from staying curious. Designing, building, shooting photos, going somewhere new, it's all just me making things and collecting a few good memories along the way.",
        "If you made it this far, thanks for stopping by. Hope you enjoy looking through my work as much as I enjoyed making it :3",
      ],
    },
  ],
facts: [
  { label: "Based in", value: "Remote, Delhi" },
  { label: "Focus", value: "Fullstack Development" },
  { label: "Tools", value: "React, Node.js, GitHub" },
],
};
export const posts = [
  {
    slug: "all-roads-lead-back-to-myself",
    id: "01",
    date: "August 2026",
    category: "Notes",
    title: "All roads lead back to myself.",
    excerpt:
      "There is a strange thing I have been noticing about life lately. Every time I think I am moving away from myself, I somehow end up right back here, sitting with my own thoughts again.",
    content: [
      `There is a strange thing I have been noticing about life lately. Every time I think I am moving away from myself, I somehow end up right back here, sitting with my own thoughts again, trying to understand what they are trying to tell me. I used to think growth meant distance. Distance from old habits, old fears, old versions of me that felt too small for the life I wanted. I kept believing that if I kept moving, kept chasing something bigger, I would eventually arrive at a place where everything inside me felt settled. A place where my mind felt clear, where my heart felt lighter, where living felt less like carrying invisible weight and more like breathing.`,

      `Life had other plans.`,

      `There have been seasons where everything around me felt louder than my own thoughts. Work piling up, expectations growing taller, people needing things from me, my own mind asking questions I did not have answers for. It is strange how chaos enters life without knocking. One week everything feels manageable and then suddenly even the smallest task feels heavier than it should. Replying to emails feels exhausting. Getting out of bed feels like negotiating with myself. Existing feels crowded. I think that is the hardest part about chaos. It fills every corner so quietly that by the time I notice it, it has already made itself at home.`,

      `For a long time, I treated chaos like something to defeat. Like if I organized my days better or worked harder or stayed busier, I could outrun it. I kept trying to fix the outside, thinking it would repair the inside. It never worked that way. The outside kept changing its shape. Life kept shifting. People changed, plans broke, feelings moved around like furniture in a dark room. I kept realizing the world would always remain unpredictable, and the only place that could hold any real steadiness was inside me.`,

      `That thought scared me at first because it meant I had nowhere else to escape. It meant I had to meet myself fully, with all the unfinished thoughts and unresolved feelings I kept placing in the background. There is something deeply uncomfortable about sitting with yourself when your mind feels crowded. Silence starts feeling louder than noise. Old memories return like unfinished conversations. Things I thought I had moved past begin sitting across from me again, asking to be felt properly this time.`,

       ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}