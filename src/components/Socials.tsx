import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaGithub />, path: "" },
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
