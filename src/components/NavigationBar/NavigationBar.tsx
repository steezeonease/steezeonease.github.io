import { Link } from "react-router-dom";
import { SocialBar } from "../SocialBar/socialbar";

interface INavLink {
  toUrl: string;
  text: string;
}

export const NavigationBar: React.FC = () => {
  const navLinks: INavLink[] = [
    {
      toUrl: "/work",
      text: "Work",
    },
    {
      toUrl: "/about",
      text: "About",
    },
    {
      toUrl: "/resume",
      text: "Resume",
    },
  ];

  return (
    <div className="flex justify-between my-20 mx-20">
      <div className="flex flex-col">
        <Link className="mb-4" to="/">
          <div className="relative font-header text-3xl">
            <img
              className="absolute bottom-[calc(100%-15px)] left-0"
              src={require("./images/monstera.svg").default}
              alt=""
            />
            Hannah Yi
          </div>
        </Link>
        <SocialBar />
      </div>
      <nav className="flex space-x-16 self-start">
        {navLinks.map((navLink, idx) => {
          return (
            <Link
              key={idx}
              className="text-lg hover:text-shadow focus-visible:outline-1 focus-visible:outline-black focus-visible:outline focus-visible:outline-offset-8"
              to={navLink.toUrl}
            >
              {navLink.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
