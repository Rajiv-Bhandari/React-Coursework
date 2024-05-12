import React from "react";
import "./header.css";

export default function Header() {
  // Sample travel blog post data
  const mainBlogPost = {
    title: "Exploring the Streets of Kyoto",
    content:
      "Kyoto, Japan, is a city steeped in history and tradition. In this blog post, we'll take you on a journey through the narrow streets of Kyoto's traditional neighborhoods, known as machiya, where you'll discover ancient temples, charming tea houses, and hidden gardens.",
  };

  const sidebarPosts = [
    {
      title: "Hiking the Inca Trail to Machu Picchu",
      content:
        "The Inca Trail is one of the most famous trekking routes in the world, leading to the ancient Incan citadel of Machu Picchu. Join us as we recount our adventure hiking through breathtaking mountain landscapes, passing Incan ruins, and finally arriving at the majestic Machu Picchu.",
    },
    {
      title: "Safari Adventures in the Serengeti",
      content:
        "Embark on a safari adventure in the vast plains of the Serengeti National Park, Tanzania. Witness the awe-inspiring sight of thousands of wildebeest and zebras migrating across the savannah, encounter majestic lions and elephants, and experience the magic of the African wilderness.",
    },
    {
      title: "Island Hopping in Greece",
      content:
        "Greece is renowned for its picturesque islands with crystal-clear waters and charming villages. Join us as we hop from island to island, exploring ancient ruins, relaxing on stunning beaches, and indulging in delicious Greek cuisine.",
    },
  ];

  return (
    <>
      <header>
        <h1>Bislerium Blog</h1>
      </header>
      <img
        src="https://www.tripsavvy.com/thmb/ev0007c95KFudpJxlJjcbthkWbM=/2121x1414/filters:fill(auto,1)/GettyImages-530105220-5c337bae46e0fb00012fcdfb.jpg"
        className="header-image"
        alt="Travel"
      />
      <div className="container">
        <div className="main-blog">
          <div className="blog-post">
            <h2>{mainBlogPost.title}</h2>
            <p>{mainBlogPost.content}</p>
          </div>
        </div>

        <div className="sidebar">
          {sidebarPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
