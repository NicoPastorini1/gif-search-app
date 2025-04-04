interface NavLinksProps {
  onCategoryChange: (category: string) => void;
}

const links = [
  { name: "Home", href: "/Home", category: "" },
  { name: "Trending", href: "/trending", category: "trending" },
  { name: "Favorites", href: "/favorites", category: "favorites" },
];

const NavLinks = ({ onCategoryChange }: NavLinksProps) => {
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            onClick={(e) => {
              e.preventDefault(); 
              onCategoryChange(link.category);
            }}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
