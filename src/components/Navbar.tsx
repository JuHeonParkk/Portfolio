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

  return (
    <div>
      <ul className="flex items-center justify-between gap-[58px]">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.path}>
              <div />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
