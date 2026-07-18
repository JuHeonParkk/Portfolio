import { useEffect, useState } from "react";

interface NavItem {
  id: number;
  title: string;
  path: string;
}

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

export default function Navbar() {
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
      return;
    }

    const section = document.getElementById(path);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarOffset = 180;

      setIsScrolled(scrollY > 50);

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.path);

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (scrollY + navbarOffset >= sectionTop) {
          currentSection = item.path;
        }
      });

      const isPageBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isPageBottom) {
        currentSection = navItems[navItems.length - 1].path;
      }

      setIsSelected(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="페이지 내비게이션"
      className={`fixed left-1/2 top-8 z-[150] -translate-x-1/2 rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/70 opacity-90 shadow-lg backdrop-blur-md"
          : "bg-secondary"
      }`}
    >
      <ul className="flex items-center justify-between gap-8 rounded-2xl bg-secondary px-6 py-4 md:gap-12 md:px-14 md:py-5">
        {navItems.map((item) => {
          const isActive = isSelected === item.path;

          return (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                onClick={(event) => handleNavClick(event, item.path)}
                aria-current={isActive ? "page" : undefined}
                className="flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-primary" : "bg-gray-400"
                  }`}
                />

                <span
                  className={`text-sm font-semibold transition-colors duration-200 md:text-base ${
                    isActive ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {item.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
