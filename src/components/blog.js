export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col col-span-12 p-6 divide-y lg:p-10 divide-gray-300">
          {blogs.map((v, i) => (
            <div
              key={i}
              className="pt-6 pb-4 space-y-2 hover:bg-gray-200 cursor-pointer p-4 rounded"
            >
              <span className="text-sm font-bold text-gray-500">{v.date}</span>
              <h1 className="text-3xl font-bold">{v.title}</h1>
              <p>{v.article.slice(0, 500) + "..."}</p>
              <div
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-purple-600"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const blogs = [
  {
    date: "Feb 2024",
    title:
      "The Essential Pillar: Why Building and Sustaining a Strong Brand is Crucial in Business",
    article:
      "In the bustling world of commerce, where competitors are as numerous as the stars in the sky, one element stands tall as the beacon guiding businesses through the tumultuous waters of consumer preferences and market dynamics: branding. A strong brand isn't just a logo or a catchy slogan; it's the soul of a business, the essence that resonates with customers, and the foundation upon which long-term success is built. Let's delve into why creating and maintaining a robust brand is not just important but indispensable in today's business landscape. In a marketplace teeming with options, a strong brand serves as a beacon for consumers seeking familiarity and trust. It provides a clear identity that sets a business apart from its competitors. Whether it's through a distinct visual identity, a unique tone of voice, or a compelling brand story, establishing a brand identity helps businesses carve out a niche and stand out amidst the noise. Think about iconic brands like Apple or Nike – their branding is so ingrained in our collective consciousness that their mere mention evokes a cascade of emotions and associations. Trust is the currency of commerce, and a strong brand is the guarantor of that trust. When consumers encounter a brand they recognize and trust, they're more likely to choose it over unfamiliar alternatives, even if they come at a lower price point. Consistency in branding – from messaging to customer experience – breeds familiarity and reliability, fostering trust and loyalty among consumers. Moreover, a strong brand cultivates an emotional connection with its audience, transcending mere transactions to create lasting relationships. Customers become brand advocates, spreading the word and bolstering the brand's reputation through word-of-mouth. A well-established brand isn't just a commodity; it's a symbol of quality, reliability, and prestige. As such, businesses with strong brands can command premium pricing for their products or services. Consumers are often willing to pay a premium for brands they perceive as superior or aspirational, whether it's for the quality they associate with the brand or the status it confers upon them. Take luxury brands like Rolex or Chanel, for example – their strong branding allows them to charge prices far beyond the cost of production, and yet consumers gladly pay, eager to be associated with the prestige and exclusivity these brands represent. In times of crisis or market fluctuations, a strong brand serves as a shield, buffering businesses from the impact of external challenges. Companies with strong brand equity are better equipped to weather storms, as consumers are more likely to stick with brands they trust, even during uncertain times. Moreover, a strong brand provides a platform for innovation and diversification, allowing businesses to extend their offerings into new markets or product categories with relative ease. This flexibility and resilience are invaluable assets in today's fast-paced and unpredictable business environment.",
  },
  {
    date: "Feb 2024",
    title: "The Second Blog - Lorem the Ipsum Here",
    article:
      "In the bustling world of commerce, where competitors are as numerous as the stars in the sky, one element stands tall as the beacon guiding businesses through the tumultuous waters of consumer preferences and market dynamics: branding. A strong brand isn't just a logo or a catchy slogan; it's the soul of a business, the essence that resonates with customers, and the foundation upon which long-term success is built. Let's delve into why creating and maintaining a robust brand is not just important but indispensable in today's business landscape. In a marketplace teeming with options, a strong brand serves as a beacon for consumers seeking familiarity and trust. It provides a clear identity that sets a business apart from its competitors. Whether it's through a distinct visual identity, a unique tone of voice, or a compelling brand story, establishing a brand identity helps businesses carve out a niche and stand out amidst the noise. Think about iconic brands like Apple or Nike – their branding is so ingrained in our collective consciousness that their mere mention evokes a cascade of emotions and associations. Trust is the currency of commerce, and a strong brand is the guarantor of that trust. When consumers encounter a brand they recognize and trust, they're more likely to choose it over unfamiliar alternatives, even if they come at a lower price point. Consistency in branding – from messaging to customer experience – breeds familiarity and reliability, fostering trust and loyalty among consumers. Moreover, a strong brand cultivates an emotional connection with its audience, transcending mere transactions to create lasting relationships. Customers become brand advocates, spreading the word and bolstering the brand's reputation through word-of-mouth. A well-established brand isn't just a commodity; it's a symbol of quality, reliability, and prestige. As such, businesses with strong brands can command premium pricing for their products or services. Consumers are often willing to pay a premium for brands they perceive as superior or aspirational, whether it's for the quality they associate with the brand or the status it confers upon them. Take luxury brands like Rolex or Chanel, for example – their strong branding allows them to charge prices far beyond the cost of production, and yet consumers gladly pay, eager to be associated with the prestige and exclusivity these brands represent. In times of crisis or market fluctuations, a strong brand serves as a shield, buffering businesses from the impact of external challenges. Companies with strong brand equity are better equipped to weather storms, as consumers are more likely to stick with brands they trust, even during uncertain times. Moreover, a strong brand provides a platform for innovation and diversification, allowing businesses to extend their offerings into new markets or product categories with relative ease. This flexibility and resilience are invaluable assets in today's fast-paced and unpredictable business environment.",
  },
  {
    date: "Feb 2024",
    title: "The third Blog - Here is the third issue tackled",
    article:
      "In the bustling world of commerce, where competitors are as numerous as the stars in the sky, one element stands tall as the beacon guiding businesses through the tumultuous waters of consumer preferences and market dynamics: branding. A strong brand isn't just a logo or a catchy slogan; it's the soul of a business, the essence that resonates with customers, and the foundation upon which long-term success is built. Let's delve into why creating and maintaining a robust brand is not just important but indispensable in today's business landscape. In a marketplace teeming with options, a strong brand serves as a beacon for consumers seeking familiarity and trust. It provides a clear identity that sets a business apart from its competitors. Whether it's through a distinct visual identity, a unique tone of voice, or a compelling brand story, establishing a brand identity helps businesses carve out a niche and stand out amidst the noise. Think about iconic brands like Apple or Nike – their branding is so ingrained in our collective consciousness that their mere mention evokes a cascade of emotions and associations. Trust is the currency of commerce, and a strong brand is the guarantor of that trust. When consumers encounter a brand they recognize and trust, they're more likely to choose it over unfamiliar alternatives, even if they come at a lower price point. Consistency in branding – from messaging to customer experience – breeds familiarity and reliability, fostering trust and loyalty among consumers. Moreover, a strong brand cultivates an emotional connection with its audience, transcending mere transactions to create lasting relationships. Customers become brand advocates, spreading the word and bolstering the brand's reputation through word-of-mouth. A well-established brand isn't just a commodity; it's a symbol of quality, reliability, and prestige. As such, businesses with strong brands can command premium pricing for their products or services. Consumers are often willing to pay a premium for brands they perceive as superior or aspirational, whether it's for the quality they associate with the brand or the status it confers upon them. Take luxury brands like Rolex or Chanel, for example – their strong branding allows them to charge prices far beyond the cost of production, and yet consumers gladly pay, eager to be associated with the prestige and exclusivity these brands represent. In times of crisis or market fluctuations, a strong brand serves as a shield, buffering businesses from the impact of external challenges. Companies with strong brand equity are better equipped to weather storms, as consumers are more likely to stick with brands they trust, even during uncertain times. Moreover, a strong brand provides a platform for innovation and diversification, allowing businesses to extend their offerings into new markets or product categories with relative ease. This flexibility and resilience are invaluable assets in today's fast-paced and unpredictable business environment.",
  },
];
