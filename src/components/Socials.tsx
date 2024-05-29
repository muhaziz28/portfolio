import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/muhaziz28" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/muhammad-haikal-aziz-72ab64195/",
  },
];

interface SocialProps {
  containerStyle: string;
  iconStyle: string;
}

const Social = ({ containerStyle, iconStyle }: SocialProps) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyle}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
