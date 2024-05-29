import Foto from "@/components/Foto";
import Social from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I`m <br />{" "}
              <span className="text-accent">Muhammad Haikal Aziz</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m software developer since 2019, especially in web and
              mobile development. Currently, I&apos;m working as a full-time
              software developer at Consultan Company that focus web
              development. <br /> I&apos;m also a freelance developer that focus
              on web development and mobile development.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Link
                className="uppercase flex items-center gap-2 border border-accent p-3 rounded-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
                href="https://drive.google.com/uc?export=download&id=1O1RqmussMwRUWNVJgSnG3hkTWT-Hs0JB"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Link> */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Foto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
