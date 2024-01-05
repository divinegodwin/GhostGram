import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="footer flex flex-row gap-12 pl-16 pt-3  w-full h-[50px] bg-[#3f37c9] text-white">
        <div>
          <Link href="https://www.facebook.com/divine.godwin.54922?mibextid=LQQJ4d">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="main-grid-item-icon"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
        </div>

        <div>
        <Link href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fagbasimelodivine%3Figsh%3DNTc4MTIwNjQ2YQ%253D%253D%26fbclid%3DIwAR3ufvZUClghQYmA6tbt1kuKAddRdicpFDkxF-J_rYjNyyShm0Y-bi0TcDg&h=AT1Xe3HNJE_T2TE7jtFNW9Qc1odjCquJh5XUSE-OSt2AGfHTdx-kOLdVtdKx6Ki2vIixh4vA8dEG0e5uXFVV9DjqutsO3oLCx7PouymKaoN86JHjeWLyABxHj3gP5QQHBTXBug'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          </Link>
        </div>

        <div>
          <Link href='https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fdivinethedev%3Ffbclid%3DIwAR1HzxM0m2OdI7gWpeE1lIlFn-YkqHtWwENQoP1GVN_A63lYT6TlqEoBdwo&h=AT1Xe3HNJE_T2TE7jtFNW9Qc1odjCquJh5XUSE-OSt2AGfHTdx-kOLdVtdKx6Ki2vIixh4vA8dEG0e5uXFVV9DjqutsO3oLCx7PouymKaoN86JHjeWLyABxHj3gP5QQHBTXBug'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          </Link>
        </div>

        <div>
          
      <Link href='https://github.com/divinegodwin'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
