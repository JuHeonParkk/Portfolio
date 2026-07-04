import { useState } from "react";

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
      path: "#home",
    },
    {
      id: 2,
      title: "About",
      path: "#about",
    },
    {
      id: 3,
      title: "Project",
      path: "#project",
    },
    {
      id: 4,
      title: "Contact",
      path: "#contact",
    },
  ] as const;

  const [isSelected, setIsSelected] = useState("#home");

  return (
    <div className="fixed top-1/2 right-14 -translate-y-1/2">
      <ul className="w-full h-full flex flex-col items-end justify-between gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.path}
              className="flex items-center justify-center gap-2 transition-all duration-200 ease-out hover:-translate-x-1"
              onClick={() => setIsSelected(item.path)}
            >
              <div
                className={`w-2 h-2 bg-primary rounded-full transition-all duration-200 ${
                  isSelected === item.path
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }}`}
              />
              <span
                className={`text-base font-semibold transition-colors duration-200 ${
                  isSelected === item.path ? "text-primary" : "text-gray"
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
