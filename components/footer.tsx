import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Help & Support",
    links: [
      { name: "Blog", href: "#" },
      { name: "Resources", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "User Guides", href: "#" },
    ],
  },
  {
    title: "Employers",
    links: [
      { name: "Products", href: "#" },
      { name: "Post a Job", href: "#" },
      { name: "Employer Login", href: "#" },
      { name: "Pricing Plans", href: "#" },
      { name: "Success Stories", href: "#" },
    ],
  },
  {
    title: "Job Seekers",
    links: [
      { name: "Search Jobs", href: "#" },
      { name: "Browse Jobs", href: "#" },
      { name: "Salary Tools", href: "#" },
      { name: "Career Advice", href: "#" },
      { name: "Company Profile", href: "#" },
    ],
  },
  {
    title: "Helpful Resources",
    links: [
      { name: "Work with us", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Center", href: "#" },
      { name: "Security Center", href: "#" },
      { name: "Accessibility Center", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-foreground text-secondary text-sm py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="space-y-6">
          <Image src="/logo.png" alt="Company logo" width={100} height={50} />
          <p className="text-xs">
            Your career companion. Access the latest job listings, create a
            standout profile, and land your dream job.
          </p>
        </div>
        {footerLinks.map((column, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-white text-sm font-bold">{column.title}</h2>
            {column.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="text-xs hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
