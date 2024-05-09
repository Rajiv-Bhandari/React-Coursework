import React from 'react';
import './about.css';
import Footer from "../footer/footer";

export default function About() {
  return (
    <>
    <div className="container">
      <div className="about-content">
        <h2>Welcome to Our Social Platform</h2>
        <p>At our social platform, we strive to create a vibrant community where users can connect, share ideas, and engage with each other through blogs, discussions, and more.</p>
        <h3>Our Mission</h3>
        <ul>
          <li>Provide a platform for users to express themselves through blogging</li>
          <li>Facilitate meaningful discussions and interactions</li>
          <li>Promote collaboration and knowledge sharing</li>
        </ul>
        <h3>Key Features</h3>
        <ul>
          <li>Blog Creation: Easily create and share your thoughts, ideas, and experiences with our intuitive blogging tools.</li>
          <li>Community Engagement: Engage with a diverse community of like-minded individuals through comments, likes, and shares.</li>
          <li>Upvote and Downvote: Express your opinion on content by voting it up or down, helping to surface the most relevant and valuable posts.</li>
          <li>Commenting and Replies: Join the conversation by commenting on posts and replying to comments, fostering discussion and interaction.</li>
          <li>User Profiles: Customize your profile, showcase your interests, and connect with other users with similar passions.</li>
        </ul>
        <h3>Advantages</h3>
        <ul>
          <li>Access to Diverse Content: Explore a wide range of topics and perspectives shared by our diverse user base.</li>
          <li>Community Support: Receive feedback, support, and encouragement from fellow users to grow and improve.</li>
          <li>Networking Opportunities: Connect with professionals, enthusiasts, and experts in your field to expand your network.</li>
          <li>Stay Informed: Stay up-to-date with the latest trends, news, and discussions happening within your community and beyond.</li>
        </ul>
      </div>
      <div class="roam-circle">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
    
    </div>
    <footer />

    </div>
    <Footer/>
    </>
  );
}
