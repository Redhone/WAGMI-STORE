import {
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  Palette
} from "lucide-react";

export default function Socials() {
  const socials = [
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com"
    },
    {
      name: "TikTok",
      icon: Music2,
      link: "https://tiktok.com"
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      link: "https://wa.me/000000000"
    },
    {
      name: "Behance",
      icon: Palette,
      link: "https://behance.net"
    }
  ];

  return (
    <section
      id="socials"
      className="py-20 px-6 bg-gray-950 text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        Follow Us
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex flex-col items-center justify-center
                w-24 h-24
                rounded-xl border
                transition-all duration-300
                hover:scale-110
                hover:bg-white
                hover:text-black
              "
            >
              <Icon
                size={28}
                className="mb-2 transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="text-sm font-medium">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
