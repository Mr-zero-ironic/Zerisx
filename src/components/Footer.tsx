import { Github, Linkedin, Youtube ,Instagram,PhoneCallIcon} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
    {icon: Instagram , href: "#" , label: "Instagram"},
    {icon: PhoneCallIcon , href: "tel:+923233341296" , label: "Whatsapp"}
  ];

  return (
    <footer  className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 <span className="gradient-text font-semibold">Zerise.dev</span>. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
