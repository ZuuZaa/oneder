import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const navLinks = [
    {
      name: "home",
      path: "#home",
      items: [],
    },
    {
      name: "about us",
      path: "#about",
      items: [
        {
          name: "team",
          path: "#team",
          items: [],
        },
        {
          name: "pricing",
          path: "#pricing",
          items: [],
        },
        {
          name: "FAQ",
          path: "#faq",
          items: [],
        },
        {
          name: "more Links",
          path: "#",
          items: [
            {
              name: "link 1",
              path: "/",
            },
            {
              name: "link 2",
              path: "/",
            },
            {
              name: "link 3",
              path: "/",
            },
          ],
        },
      ],
    },
    {
      name: "portfolio",
      path: "#portfolio",
      items: [],
    },
    {
      name: "services",
      path: "#services",
      items: [],
    },
    {
      name: "testimonals",
      path: "#testimonals",
      items: [],
    },
    {
        name: "blog",
        path: "#blog",
        items: [],
      },
      {
        name: "contact",
        path: "#contact",
        items: [],
      },
  ];

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="navbar__logo">oneder</Link>
      </div>
      <ul className="navbar__link-list">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="navbar__link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
