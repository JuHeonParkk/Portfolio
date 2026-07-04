import { useEffect, useState } from "react";

interface NavItem {
  id: number;
  title: string;
  path: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      id: 1,
      title: "Home",
      path: "home",
    },
    {
      id: 2,
      title: "About",
      path: "about",
    },

    {
      id: 3,
      title: "Skills",
      path: "skills",
    },
    {
      id: 4,
      title: "Project",
      path: "project",
    },
  ] as const;

  const [isSelected, setIsSelected] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSelected(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-300  rounded-2xl ${
        isScrolled
          ? "opacity-90 bg-secondary/70 backdrop-blur-md shadow-lg"
          : "bg-secondary"
      }`}
    >
      <ul className="px-6 py-4  flex items-center justify-between gap-8 md:px-14 md:py-5 md:gap-12 bg-secondary rounded-2xl">
        {navItems.map((item) => (
          <li>
            <a
              key={item.id}
              href={`#${item.path}`}
              className="flex items-center justify-center gap-2 transition-all duration-200 ease-out hover:-translate-y-0.5"
              onClick={() => setIsSelected(item.path)}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isSelected === item.path ? "bg-primary" : "bg-gray-400"
                }`}
              />
              <span
                className={`text-sm md:text-base font-semibold transition-colors duration-200 ${
                  isSelected === item.path ? "text-primary" : "text-gray-400"
                }`}
              >
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
