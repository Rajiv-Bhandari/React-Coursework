// Footer.js

import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
       <div className="container">
        <div className="row justify-content-between my-3">
        <div className="col-lg-6 my-2">
            <h3>Bislerium</h3>
            <p>At our social platform, we strive to create a vibrant community where users can connect, share ideas, and engage with each other through blogs, discussions, and more.</p>
        </div>
        <div className="col-lg-6 my-3">
          <div className="text-center">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><Link to="/" className="footerItem">
                Home
              </Link></li>
              <li><Link to="/blogs" className="footerItem">
                Blog
              </Link></li>
              <li><Link to="/contact" className="footerItem">
                Contact
              </Link></li>  
                        </ul>
          </div>

        </div>
        </div>

    </div>
      <p>&copy; 2024 Bislerium Blogs. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
