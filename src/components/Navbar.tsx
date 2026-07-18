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
  ];

  const [isSelected, setIsSelected] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    event.preventDefault();

    if (path === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById(path);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsSelected(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 50);

      if (scrollY <= 50) {
        setIsSelected("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setIsSelected(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-8 z-[150] -translate-x-1/2 rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/70 opacity-90 shadow-lg backdrop-blur-md"
          : "bg-secondary"
      }`}
    >
      <ul className="flex items-center justify-between gap-8 rounded-2xl bg-secondary px-6 py-4 md:gap-12 md:px-14 md:py-5">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.path}`}
              onClick={(event) => handleNavClick(event, item.path)}
              className="flex items-center justify-center gap-2 transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  isSelected === item.path ? "bg-primary" : "bg-gray-400"
                }`}
              />

              <span
                className={`text-sm font-semibold transition-colors duration-200 md:text-base ${
                  isSelected === item.path ? "text-primary" : "text-gray-400"
                }`}
              >
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
