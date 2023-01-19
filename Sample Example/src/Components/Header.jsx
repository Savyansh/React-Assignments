import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
        <li className="search">
          <input type="text" placeholder="Search.." />
          <button>
            <i class="fa fa-search"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}
