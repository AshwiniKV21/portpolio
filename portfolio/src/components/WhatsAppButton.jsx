import Icon from "./Icon";
import { CONTACT } from "../data/data";

export default function WhatsAppButton() {
  const whatsappUrl =
    `https://wa.me/${CONTACT.whatsapp}` +
    `?text=${encodeURIComponent(
      "Hi Ashwini, I visited your portfolio and would like to connect with you."
    )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with me on WhatsApp"
      title="Chat with me on WhatsApp"
    >
      <Icon type="whatsapp" size={30} />
    </a>
  );
}