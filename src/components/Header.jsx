import { Menu, MessageCircle, X } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { buildWhatsAppUrl, ctaLabels, navItems } from '../data/siteData.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <img className="brand-mark-img" src="/assets/mt-technology-mark.svg" alt="" aria-hidden="true" />
          <span className="brand-word">Technology</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="button header-cta" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            {ctaLabels.quote}
          </a>
        </nav>
      </div>
    </header>
  );
}
