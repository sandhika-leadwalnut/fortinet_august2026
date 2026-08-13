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
      keyword: "SD-Wan",
      link: "https://www.fortinet.com/resources/cyberglossary/sd-wan-explained",
      position: 2,
      image: "/sdwan.jpeg",
      insight:"The high-volume 'SD-Wan' keyword (6K MSV) has maintained stable rankings following recent backlink acquisition, indicating improved ranking consistency and authority."
    },
    {
      keyword: "Cyber Attack",
      link: "https://www.fortinet.com/resources/cyberglossary/what-is-cyber-attack",
      position: 9,
      image: "/cyber attack.jpeg",
      insight:"Backlink acquisition has helped stabilize the previously volatile 'Cyber Attack' keyword, improving ranking position."
    },
    {
      keyword: "Secops",
      link: "https://www.fortinet.com/resources/cyberglossary/what-is-secops",
      position: 5,
      image: "/secops.png",
      insight:"The high-volume 'Secops' keyword (2K MSV) has started ranking in Top 5. Backlink acquisition has helped stabilize the previously volatile keyword."
    },
    {
      keyword: "What is Cloud Security",
      link: "https://www.fortinet.com/resources/cyberglossary/what-is-cloud-security",
      position: 1,
      image: "/Cloud Security.jpeg",
      insight:"'What is Cloud Security' keyword (1.4K MSV), which had experienced significant ranking volatility, has now reached the #1 position following consistent efforts."
    },
  ];

  const topCategories = [
    {
      keyword: "AI Security",
      link: "https://www.fortinet.com/resources/cyberglossary/ai-security",
      position: 1,
      image: "/AI Security.jpeg",
      insight:"The previously volatile 'AI Security' keyword has now achieved stable #1 rankings, strengthening Fortinet's visibility in the AI Security category."
    },
    {
      keyword: "Post-Quantum Cryptography",
      link: "https://www.fortinet.com/resources/cyberglossary/post-quantum-cryptography",
      position: 1,
      image: "/post-quantum cryptography.jpeg",
      insight:"The highly competitive 'Post-Quantum Cryptography' keyword (Keyword Difficulty: 73) has improved from position #101 to Position 1, marking a significant gain in search visibility."
    },
    {
      keyword: "Quantum Safe Security",
      link: "https://www.fortinet.com/resources/cyberglossary/quantum-safe-security",
      position: 2,
      image: "/Quantum Security.jpeg",
      insight:"The 'Quantum Safe Security' keyword has consistently maintained a Top 3 ranking, with sustained backlink efforts helping the page to rank from 101."
    },
  ];

  /* ==========================================================
      LLM DATA
  ========================================================== */

  const llmHighlights = [
    {
      title: "Brand Visibility% Performance",
      image: "/Brand Visibility Performance .jpeg",
      insight:
        "Fortinet's overall brand visibility stands in position one among the competitors, indicating consistent improvement in AI/LLM search presence.",
    },
    {
      title: "Category Brand Visibility Performance",
      image: "/Category Brand Visibility Performance.jpeg",
      insight:
        "Fortinet leads in 5 out of 10 primary categories, achieving a 50% category leadership rate, demonstrating strong authority across the majority of key cybersecurity topics.",
    },
    {
      title: "Fortinet's Market Positioning Across Different Categories",
      image: "/category matrix-market positioning.jpeg",
      insight: [
        "Fortinet's LLM Market positioning — Citation Leaders: Quantum Security & Zero Trust",
        "Visibility Leaders: Network Security & Firewall",
        "Strongholds: AI in Cybersecurity, SASE & SD-Wan",
      ],
    },
    {
      title: "Top Citation Domains Landscape",
      image: "/Top citation domains landscape.jpeg",
      insight:
        "Fortinet ranks #1 in the citation domains with a share of 8.74%, outperforming Palo Alto Networks (3.49%) and maintaining a strong lead over all major competitors.",
    }
  ];

  const guestPosts = [
    {
      image: "/Best cloud security.jpeg",
      title: "Cloud Security Services",
      link: "https://droven.io/cloud-security-services/",
    },
    {
      image: "/5best sdwan.jpeg",
      title: "5best SD-WAN Products: Centralized Network Policy Management",
      link: "https://securitysenses.com/posts/5-best-sd-wan-products-centralized-network-policy-management",
    },
    {
      image: "/fortinet.jpeg",
      title: "7 Next-Generation SIEM Security Software Platforms for Enterprise Threat Detection",
      link: "https://newsroompanama.com/2026/08/04/7-next-generation-siem-security-software-platforms-for-enterprise-threat-detection/",
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
            SD-Wan, Cyber Attack, SecOps and Cloud Security rank in Page 1
            positions after an improvement of positions due to backlinks.
          </p>

          <div className="space-y-14">
            {priorityPages.map((item, index) => (
              <div key={index}>
                <div className="space-y-3 text-gray-700 mb-6">
                  <p>
                    <span className="font-semibold">Keyword:</span>{" "}
                    {item.keyword}
                  </p>

                  <p>
                    <span className="font-semibold">Position:</span>{" "}
                    {item.position}
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
                  className="w-[85%] mx-auto rounded-xl border border-gray-300 shadow-sm"
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
         Quantum & AI Cybersecurity Cyberglossary pages rank in Top 3 position from Page 1 post efforts of backlinks.
          </p>

          <div className="space-y-14">
            {topCategories.map((item, index) => (
              <div key={index}>
                <div className="space-y-3 text-gray-700 mb-6">
                  <p>
                    <span className="font-semibold">Keyword:</span>{" "}
                    {item.keyword}
                  </p>

                  <p>
                    <span className="font-semibold">Position:</span>{" "}
                    {item.position}
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
                  className="w-[85%] mx-auto rounded-xl border border-gray-300 shadow-sm"
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

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5 mb-6">
                {Array.isArray(item.insight) ? (
                  <div className="text-gray-700 leading-7 space-y-1">
                    <p>
                      <span className="font-semibold">Insight:</span>{" "}
                      {item.insight[0]}
                    </p>
                    {item.insight.slice(1).map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-7">
                    <span className="font-semibold">Insight:</span>{" "}
                    {item.insight}
                  </p>
                )}
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="w-[85%] mx-auto rounded-xl border border-gray-300 shadow-sm"
              />
            </div>
          ))}
        </div>

        {/* Guest Posts */}

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Listicle Type of Guest Posts - Third-Party Guest Posts for Brand Mentions
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
                <div className="bg-gray-100 border-l-4 border-gray-400 rounded-lg px-5 py-4 mb-6">
                  <p className="font-bold text-gray-900 text-lg leading-7">
                    {post.title}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline break-all text-sm mt-2 inline-block"
                  >
                    {post.link}
                  </a>
                </div>

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[45%] max-w-md mx-auto rounded-xl border border-gray-300 shadow-sm"
                />
              </div>
            ))}
          </div>

          {/* <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5 mt-10">
            <p className="text-gray-700 leading-7">
              <span className="font-semibold">Insight:</span> Publishing listicle-style ("Best"/"Top") 
              commercial intent content to achieve a dual benefit: earning high-quality backlinks while increasing LLM visibility with brand mentions.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default KeyHighlights;