"use client";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogposts, setBlog] = useState("");
  const [selectPost, setSelect] = useState("");
  const [UIstate, setUIstate] = useState("loading");

  async function initBlog() {
    try {
      // fetchOptions
      const fetchOptions = { method: "GET" };
      //fetch call
      const response = await fetch("/api/blog", fetchOptions);
      //if status!==200 throw error
      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch blog-posts. Status: ${response.status}`
        );
      }
      //parse json
      const json_ = await response.json();
      // console.log(json_);
      if (json_.success) {
        setBlog(json_.success);
      } else {
        console.error(
          "FAILED: could not fetch data\n > " +
            JSON.stringify(json_.error ?? "....")
        );
        setBlog("failed");
      }
      setUIstate("OK");
    } catch (err) {
      setBlog("failed");
      console.error("ERROR: caught error\n > " + err);
    }
  }

  useEffect(() => {
    initBlog();
  }, []);

  if (UIstate === "loading") {
    return (
      <div role="status" className="flex min-h-96 justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin fill-purple-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (blogposts === "failed") {
    return (
      <div className="text-red-700 font-bold my-6 text-center">
        Failed to acquire blog-posts, check internet or try again later
      </div>
    );
  } else
    return !selectPost ? (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col col-span-12 p-6 divide-y lg:p-10 divide-gray-300">
            {blogposts.map((v, i) => (
              <div
                key={i}
                className="pt-6 pb-4 space-y-2 hover:bg-purple-200 cursor-pointer p-4 rounded"
                onClick={() => setSelect(v)}
              >
                <span className="text-sm font-bold text-gray-500">
                  {v.date}
                </span>
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
    ) : (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-12">
        <button
          onClick={() => setSelect("")}
          className="flex flex-row mb-4 flex-nowrap text-sm items-center bg-gray-800 w-fit text-white px-4 py-2 rounded-full"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-2 stroke-current fill-none me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          View all blogposts
        </button>
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900 mb-6 md:mb-12">
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-4xl font-bold md:tracking-tight md:text-5xl">
              {selectPost.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">by Admin • {selectPost.date}</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                less than 5min read
              </p>
            </div>
          </div>
          <div className="dark:text-gray-800">
            <article>
              {selectPost.article.split("\n").map((v, i) => (
                <p key={i} className="mb-4">
                  {v}
                </p>
              ))}
            </article>
          </div>
        </article>
        {/* 
      <div className="space-y-2 border-t border-gray-400 pt-4">
        <h4 className="text-lg font-semibold">Other posts</h4>
        <ul className="ml-4 space-y-1 list-disc">
          {blogs
            .filter((v) => v.title !== blogpost.title)
            .map((v, i) => (
              <li key={i}>
                <button
                  onClick={() => setBlogpost(v)}
                  className="hover:underline"
                >
                  {v.title}
                </button>
              </li>
            ))}
        </ul>
      </div> */}
      </div>
    );
}

/**
 * Sample plogposts data
 */

// const blogs = [
//   {
//     date: "Feb 2024",
//     title:
//       "Experiential Marketing: Elevating Your Brand with Memorable Experiences",
//     article:
//       "Welcome to INTRAKO, where we redefine the art of marketing through immersive experiences that captivate, engage, and inspire. As a leading marketing agency, experiential marketing is not just a service we offer—it's sets us apart from the competition.\nExperiential marketing goes beyond traditional advertising to create meaningful connections between brands and consumers. It's about engaging all five senses, evoking emotions, and leaving a lasting impression that resonates long after the experience is over. At INTRAKO, we specialize in crafting memorable experiences that not only drive brand awareness but also foster loyalty and advocacy among your target audience.\nSo, what exactly is experiential marketing, and why is it so powerful? Simply put, it's about creating opportunities for consumers to interact with your brand in real-life settings, whether it's through events, activations, or immersive installations. By providing consumers with hands-on experiences, you're able to forge deeper connections and build trust and credibility for your brand.\nAt INTRAKO, we believe in the power of experiential marketing to drive meaningful results for our clients. Whether you're launching a new product, hosting a brand activation, or planning a corporate event, we work tirelessly to create custom experiences that align with your brand identity and objectives. From concept development and planning to execution and measurement, we're with you every step of the way to ensure your experiential marketing initiatives are a resounding success.\nBut experiential marketing isn't just about creating flashy events or eye-catching installations—it's about delivering authentic, memorable experiences that resonate with your audience on a personal level. That's why we take the time to understand your target market, their needs, and their preferences, so we can tailor our approach to create experiences that truly resonate.\nAt INTRAKO, we're passionate about pushing the boundaries of creativity and innovation to deliver experiential marketing campaigns that leave a lasting impact. Whether you're looking to launch a groundbreaking new product, connect with consumers on a deeper level, or differentiate your brand in a crowded marketplace, experiential marketing is the key to unlocking your brand's full potential.\nReady to take your brand to the next level with experiential marketing? Contact us today to learn more about how INTRAKO can help you create unforgettable experiences that drive tangible results for your business. Let's turn your brand into an experience that consumers will never forget.",
//   },
//   {
//     date: "Mar 2024",
//     title: "Social Media Mastery: Elevating Your Brand's Online Presence",
//     article:
//       "At INTRAKO, we believe in the power of social media to connect brands with their audience in meaningful ways. Our customized marketing solutions are designed to enhance your brand's online presence and drive tangible business outcomes through strategic social media management.\nWith our expertise in crafting innovative marketing strategies and leveraging market insights, we help you cultivate a strong online community that resonates with your target audience. Through data-driven insights and creative content curation, we enhance brand reputation and drive engagement across various social media platforms.\nWhether you're looking to increase brand awareness, drive website traffic, or boost sales, our social media experts are here to help you achieve your goals. From developing comprehensive social media strategies to managing day-to-day operations, we'll work tirelessly to ensure your brand stands out in today's competitive landscape.\nExperience the power of social media mastery with INTRAKO. Contact us today to learn more about how we can elevate your brand's online presence and drive meaningful results through strategic social media management.",
//   },
//   {
//     date: "Apr 2024",
//     title: "Maximizing ROI with SEO: A Tailored Approach for Your Brand",
//     article:
//       "At INTRAKO, we combine industry expertise with cutting-edge strategies to propel your brand to new heights. Our commitment to excellence and innovation drives everything we do, including our approach to search engine optimization (SEO).\nAs marketing experts, we understand that one size does not fit all when it comes to SEO. That's why we tailor our strategies to fit your unique goals and objectives. Our team of experts conducts meticulous research, leveraging market insights and advanced methodologies to craft personalized SEO strategies that drive measurable results and sustainable growth for your business.\nWith a focus on collaboration and client-centricity, we work closely with you every step of the way to ensure our SEO efforts align with your vision and exceed your expectations. From keyword research and on-page optimization to link building and content strategy, we optimize every aspect of your online presence to maximize ROI and drive lasting impact.\nExperience the difference of a customized approach to SEO with INTRAKO. Contact us today to learn more about how we can help elevate your brand's visibility and drive organic traffic to your website.",
//   },
//   {
//     date: "Apr 2024",
//     title: "Crafting Compelling Messages: The Art of Effective Email Marketing",
//     article:
//       "At INTRAKO, we understand the importance of crafting compelling messages that resonate with your audience. Our customized marketing solutions are designed to help you drive lasting impact and organizational success through effective email marketing campaigns.\nWith our expertise in strategy development and creative execution, we help you craft personalized email campaigns that capture the attention of your subscribers and drive meaningful engagement. From crafting compelling subject lines to segmenting your audience and A/B testing different campaign elements, we optimize every aspect of your email marketing strategy to maximize ROI and deliver measurable results.\nAt the core of our services is a commitment to innovation and client-centricity. We believe in delivering high-quality products that exceed your expectations, while also fostering transparency and collaboration throughout the process. With our relentless pursuit of new ideas and creativity, we'll help you stand out in today's crowded inbox and drive unparalleled success for your business.\nExperience the art of effective email marketing with INTRAKO. Contact us today to learn more about how we can help you craft compelling messages and drive meaningful results through strategic email campaigns.",
//   },
// ];
