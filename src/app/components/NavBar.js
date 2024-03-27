// src/app/components/Navbar.js
"use client";
import Link from "next/link";

export default function Navbar({ onRunTest }) {
  return (
    <nav >
      <ul >
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <button onClick={onRunTest} >
            Test Runner
          </button>
        </li>
      </ul>
    </nav>
  );
}