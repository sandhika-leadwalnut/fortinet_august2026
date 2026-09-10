// components/KeyHighlights.tsx

import SectionHeader from "./SectionHeader";
import { DocumentIcon } from "./icons";
import { CHART_COLORS } from "../constants/constants";

const KeyHighlights = () => {
  /* ==========================================================
      SERP DATA
  ========================================================== */

  const priorityPages = [
    {
      keyword: "network monitoring system",
      link: "https://www.fortinet.com/resources/cyberglossary/network-monitoring",
      position: 8,
      image: "/network-monitoring.jpeg",
      insight:"The 'Network Monitoring System' keyword has moved onto Page 1, with consistent backlink acquisition helping the page climb out of its earlier volatile positions. "
    },
    {
      keyword: "cyber attack",
      link: "https://www.fortinet.com/resources/cyberglossary/what-is-cyber-attack ",
      position: 7,
      image: "/cyber-attack.jpeg",
      insight:" The 'Cyber Attack' keyword has improved from 9 to 7, moving further up Page 1 and demonstrating continued ranking gains following backlink acquisition. "
    },

    {
      keyword: "what is firewall",
      link: "www.fortinet.com/resources/cyberglossary/firewall ",
      position: 1,
      image: "/firewall.jpeg",
      insight:"The 'What is Firewall' keyword has climbed to the #1 position, consolidating its Page 1 presence after sustained backlink acquisition throughout the campaign. "
    },
   
  ];

  const topCategories = [
    {
      keyword: "role of ai in cyber security",
      link: "https://www.fortinet.com/resources/cyberglossary/artificial-intelligence-in-cybersecurity ",
      position: 3,
      image: "/ai-in-cybersecurity.jpeg",
      insight:"The 'Role of AI in Cyber Security' keyword has maintained a strong Top 3 ranking, strengthening Fortinet's search visibility and authority within the AI cybersecurity category."
    },
     {
      keyword: "What is AI Security",
      link: " https://www.fortinet.com/resources/cyberglossary/ai-security",
      position: 9,
      image: "/ai-security.jpeg",
      insight:"The 'What is AI Security' keyword has settled into a strong Top 10 position at 9, reflecting solid visibility gains in the AI-security category following consistent backlink acquisition."
    },
    {
      keyword: "quantum safe encryption",
      link: "https://www.fortinet.com/blog/industry-trends/quantum-safe-encryption-safeguarding-data-for-the-quantum-era ",
      position: 1,
      image: "/quantum-safe.jpeg",
      insight:"The 'Quantum Safe Encryption' keyword experienced a sharp ranking drop mid-campaign, falling out of the Top 100 before recovering decisively back to the #1 position by August — reflecting the impact of sustained backlink acquisition in restoring and strengthening the page's visibility. "
    },
    
   
  ];

  /* ==========================================================
      LLM DATA
  ========================================================== */

  const llmHighlights = [
    {
      title: "Brand Visibility% Performance",
      image: "/brand-visibility.jpeg",
      insight:
        "Fortinet's overall brand visibility stands in position one among the competitors, indicating consistent improvement in AI/LLM search presence.",
    },
    {
      title: "Category Brand Visibility Performance",
      image: "/Category-brand-visibility.jpeg",
      insight:
        "Fortinet leads in 5 out of 10 primary categories, achieving a 50% category leadership rate, demonstrating strong authority across the majority of key cybersecurity topics.",
    },
    {
      title: "Category Matrix - Market Positioning",
      image: "/category-matrix .jpeg",
      insight:["Fortinet's LLM Marketing positioning" ,
"- Citation Leaders - Quantum Security & Zero Trust. ",
"- Visibility Leaders - Network Security & SD-Wan",
"- Strongholds - AI in Cybersecurity, SASE & NGFW"
      ]
    },
    {
      title: "Top citation domains landscape",
      image: "/top-citation-domains.jpeg",
      insight:
        "Fortinet ranks #1 in the citation domains with a share of 8.71%, outperforming Palo Alto Networks (3.84%) and maintaining a strong lead over all major competitors.",
    }
  ];

  const guestPosts = [
    {
      image: "/7 Best Enterprise Cloud Security .jpeg",
      title: "7 Best Enterprise Cloud Security Solutions For Growing Businesses",
      link: "https://elementalnest.com/7-best-enterprise-cloud-security-solutions-for-growing-businesses/",
    },
    {
      image: "/Top 10 SIEM Software Solutions .jpeg",
      title: " Top 10 SIEM Software Solutions Enterprises Should Consider in 2026 (Listicle) – Humans of Globe",
      link: "https://humansofglobe.com/top-10-siem-software-solutions-enterprises-should-consider-in-2026-listicle/",
    },
    {
      image: "/7 Best cybersecurity.jpeg",
      title: "7 Cybersecurity Brands Explaining AI in Cybersecurity",
      link: "https://grammerway.com/7-cybersecurity-brands-explaining-ai-in-cybersecurity/",
    },
  ];

  return (
    <div
      className="bg-white rounded-lg shadow-md border-t-4 p-6 hover:shadow-lg transition-all duration-300"
      style={{ borderTopColor: CHART_COLORS.primary }}
    >
      <SectionHeader
        icon={<DocumentIcon />}
        title="Key Highlights"
      />

      {/* ==========================================================
            SERP KEY HIGHLIGHTS
      ========================================================== */}

      <section className="mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          SERP Key Highlights
        </h2>

        {/* Priority Pages */}

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Priority Category Pages
          </h3>

          <p className="text-gray-700 leading-7 mb-10">
          Network Monitoring System, Cyber Attack, and Unified SASE — moved into Page 1 positions following backlink-driven ranking improvements. 
          </p>

          <div className="space-y-14">
            {priorityPages.map((item, index) => (
              <div key={index}>
                 <div className="space-y-3 text-gray-700">
                <p>
          <span className="font-semibold">{index + 1}. Keyword:</span>{" "}
          {item.keyword}
        </p>

                  <p className="break-all">
                    <span className="font-semibold">Link:</span>{" "}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {item.link}
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold">Position:</span>{" "}
                    {item.position}
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5">
                <p className="text-gray-700 leading-7">
                  <span className="font-semibold">Insight:</span>{" "}
                  {item.insight}
                </p>
              </div>

                </div>
                <br></br>
                <img
                 
                  alt={item.keyword}
                  src={item.image}
                  className="w-[85%] mx-auto rounded-xl border border-gray-300 shadow-sm mb-6"
                />

               
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Top Categories
          </h3>

          <p className="text-gray-700 leading-7 mb-10">
 Quantum & AI Cybersecurity Cyberglossary pages rank in the Top 3 positions from Page 1 post-backlink efforts.
          </p>

          <div className="space-y-14">
            {topCategories.map((item, index) => (
              <div key={index}>
                <div className="space-y-3 text-gray-700">
                  <p>
          <span className="font-semibold">{index + 1}. Keyword:</span>{" "}
          {item.keyword}
        </p>

                  <p className="break-all">
                    <span className="font-semibold">Link:</span>{" "}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {item.link}
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold">Position:</span>{" "}
                    {item.position}
                  </p>
                     <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5">
                <p className="text-gray-700 leading-7">
                  <span className="font-semibold">Insight:</span>{" "}
                  {item.insight}
                </p>
              </div>
                </div>
                <img
                  src={item.image}
                  alt={item.keyword}
                  className="w-[85%] mx-auto rounded-xl border border-gray-300 shadow-sm mb-6"
                />

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}

      <div className="border-t border-gray-300 mb-20"></div>

      {/* ==========================================================
            LLM KEY HIGHLIGHTS
      ========================================================== */}

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          LLM Key Highlights
        </h2>

        {/* LLM Charts */}

        <div className="space-y-16 mb-20">
          {llmHighlights.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>

              <img
                src={item.image}
                alt={item.title}
                className="w-[85%] mx-auto rounded-xl border border-gray-300 shadow-sm mb-8"
              />

                         <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5">
                {Array.isArray(item.insight) ? (
                  <div className="text-gray-700 leading-7 space-y-1">
                    <p>
                      <span className="font-semibold">Insight:</span>{" "}
                      {item.insight[0]}
                    </p>
                    {item.insight.slice(1).map((line, i) => (
                      <p key={i} className="ml-4">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-7">
                    <span className="font-semibold">Insight:</span>{" "}
                    {item.insight}
                  </p>
                )}
              </div>
            </div>
            
          ))}
        </div>

        {/* Guest Posts */}

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Listicle Type of Guest Posts - Third-Party Guest Posts to improve Brand Mentions
          </h3>

          <p className="text-gray-700 leading-7 mb-10">
            Publishing listicle-style ("Best" / "Top") commercial intent
            content delivers a dual benefit by earning authoritative
            backlinks while increasing LLM visibility through brand
            mentions.
          </p>

          <div className="space-y-14">
            {guestPosts.map((post, index) => (
              <div key={index}>
                 <div className="space-y-3">
                  <p>
          <span className="font-semibold">{index + 1}. {post.title}</span>{" "}
        
        </p>
                  {/* <p className="font-semibold">{post.title}</p> */}

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    {post.link}
                  </a>
                </div>
                <br></br>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[55%] mx-auto rounded-xl border border-gray-300 shadow-sm mb-6"
                />

               
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5 mt-10">
            <p className="text-gray-700 leading-7">
              <span className="font-semibold">Insight:</span> Publishing listicle-style ("Best"/"Top") 
              commercial intent content to achieve a dual benefit: earning high-quality backlinks while increasing LLM visibility with brand mentions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyHighlights;