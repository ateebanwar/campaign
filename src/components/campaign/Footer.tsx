import { motion } from 'framer-motion';
import { Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { candidateInfo, footerContent } from '@/data/campaignData';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

const Footer = () => {
  return (
    <footer className="bg-section-dark pt-16 pb-8">
      <div className="container-campaign px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-4">
              {candidateInfo.name}
            </h3>
            <p className="text-secondary-foreground/70 mb-4 max-w-md">
              {footerContent.slogan}
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Candidate for {candidateInfo.position} <br />
              {candidateInfo.ward}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              {Object.entries(candidateInfo.socialLinks).map(([platform, url]) => {
                if (!url) return null;
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href={`https://wa.me/${candidateInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
              >
                WhatsApp Helpline
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>{footerContent.copyright}</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary" /> for Kalyan
            </p>
            <p className="text-xs">{footerContent.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;