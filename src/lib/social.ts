import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "./constants";

export const socialLinks = [
  {
    name: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    icon: MessageCircle,
    color: "hover:text-green-500",
  },
];
