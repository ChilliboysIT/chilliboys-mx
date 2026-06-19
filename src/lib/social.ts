import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "./constants";

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/chilliboys.mx",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/chilliboys.mx",
    icon: Facebook,
    color: "hover:text-blue-500",
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    icon: MessageCircle,
    color: "hover:text-green-500",
  },
];
