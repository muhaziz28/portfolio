import Link from "next/link";
import Nav from "./Nav";
import { FiDownload } from "react-icons/fi";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Haikal <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button>Hire Me</Button>
          </Link> */}
          <Link
            className="uppercase flex items-center gap-2 border border-accent p-3 rounded-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
            href="https://drive.google.com/uc?export=download&id=1O1RqmussMwRUWNVJgSnG3hkTWT-Hs0JB"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Link>
        </div>

        {/* <div className="xl:hidden">
          <MobileNav />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
