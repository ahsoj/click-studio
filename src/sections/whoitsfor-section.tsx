import { Card, CardContent } from "@/components/ui/card";

const svg_graph_icon = (
  <svg
    width="94"
    height="94"
    viewBox="0 0 94 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 38">
      <circle
        id="Ellipse 1"
        cx="47.5"
        cy="47.5"
        r="46.5"
        fill="url(#paint0_linear_13051_2160)"
      />
      <g id="Vector 9" filter="url(#filter0_f_13051_2160)">
        <path
          d="M7.19922 48.1202C9.71858 32.5286 25.1497 3.21629 66.7192 10.7003C42.1554 2.28089 11.923 6.95818 7.19922 48.1202Z"
          fill="white"
        />
      </g>
      <path
        id="Vector 10"
        d="M48.2263 38.6348H58.4297L53.328 50.8738L36.7474 43.1439L22.08 70.1985L31.008 76.64L38.6606 50.8738L55.8789 56.6712L62.256 40.5673L66.72 47.653V27.04L48.2263 38.6348Z"
        fill="url(#paint1_linear_13051_2160)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_13051_2160"
        x="0.379219"
        y="0.380195"
        width="73.16"
        height="54.56"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="3.41"
          result="effect1_foregroundBlur_13051_2160"
        />
      </filter>
      <linearGradient
        id="paint0_linear_13051_2160"
        x1="43.16"
        y1="38.82"
        x2="64.86"
        y2="85.32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0367FC" />
        <stop offset="1" stopColor="#D2F801" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_13051_2160"
        x1="52.6903"
        y1="44.4322"
        x2="28.1833"
        y2="71.8865"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#D2F801" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default function WhoItsForSection() {
  const audiences = [
    {
      title: "For Startups",
      description:
        "Get your business online quickly with a professional website that grows with you. Perfect for new ventures looking to establish credibility and attract customers.",
      features: [
        "MVP-ready websites",
        "Scalable architecture",
        "Cost-effective solutions",
        "Fast time-to-market",
      ],
    },
    {
      title: "For Design Teams",
      description:
        "Bring your creative visions to life with pixel-perfect implementation and seamless user experiences that exceed client expectations.",
      features: [
        "Pixel-perfect development",
        "Design system implementation",
        "Responsive design",
        "Cross-browser compatibility",
      ],
    },
    {
      title: "For Marketing Teams",
      description:
        "Boost your conversion rates with optimized landing pages and websites designed to turn visitors into leads and customers.",
      features: [
        "Conversion optimization",
        "A/B testing ready",
        "Analytics integration",
        "Performance tracking",
      ],
    },
  ];

  return (
    <section className="snap-child py-20 bg-gray-900/50 min-h-screen h-full w-full flex flex-col my-auto justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center md:text-start mb-16 flex flex-col md:flex-row items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-6 md:flex-3/4">
            <span className="text-brand-white">Who </span>
            <span className="text-gradient">It&#39;s For?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you&#39;re just starting out or scaling up, we have the
            right solution for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="bg-[url(/678892d67628c8a8e25ccada_Hero-BG.webp)] bg-brand-dark bg-cover border-gray-700 hover:border-brand-blue transition-colors duration-300 group"
            >
              <CardContent className="p-8">
                <div className="group-hover:w-36 w-15 group-hover:bg-gradient-to-l transition-all duration-150 group-hover:from-brand-blue rounded-r-full group-hover:to-0 flex items-center justify-end mb-6">
                  <div className="w-15 flex items-center group-hover:rotate-10 h-15">
                    {svg_graph_icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-lime mb-4 group-hover:text-brand-blue transition-colors duration-150">
                  {audience.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {audience.description}
                </p>
                <ul className="space-y-2">
                  {audience.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-400"
                    >
                      <div className="w-2 h-2 bg-brand-lime rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
