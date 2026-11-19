import Icon from "./Icon";
import { SOCIALS } from "../data/data";

export default function Socials() {
  return (
    <div className="socials">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.name === "Email" ? undefined : "_blank"}
          rel={social.name === "Email" ? undefined : "noopener noreferrer"}
          aria-label={social.name}
          title={social.name}
        >
          <Icon type={social.icon} size={20} />
        </a>
      ))}
    </div>
  );
}