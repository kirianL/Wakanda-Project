import React, { useState, useEffect } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

interface NavItem {
  readonly href: string;
  readonly label: string;
}

interface SiteNavbarProps {
  navItems?: readonly NavItem[];
  brandLogoSrc?: string;
  reserveHref?: string;
}

const defaultNav: NavItem[] = [
  { href: '#proyecto', label: 'El proyecto' },
  { href: '#valores', label: 'Valores' },
  { href: '#clases', label: 'Clases' },
  { href: '#familias', label: 'Familias' },
];

export const SiteNavbar: React.FC<SiteNavbarProps> = ({
  navItems = defaultNav,
  brandLogoSrc = '/brand/logo-inline-earth.png',
  reserveHref = '#inscripcion',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const itemsRef = React.useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Detect active section
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i] as HTMLElement | null;
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveHash(navItems[i].href);
          return;
        }
      }
      if (window.scrollY < 120) {
        setActiveHash('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Target index for sliding pastilla: hovered takes priority, otherwise active section
  const activeIndex = navItems.findIndex((item) => item.href === activeHash);
  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  useEffect(() => {
    if (currentIndex >= 0 && itemsRef.current[currentIndex]) {
      const el = itemsRef.current[currentIndex];
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [currentIndex, activeHash]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);



  return (
    <>
      <header
        className={`site-nav-header ${isScrolled ? 'is-scrolled' : ''} ${mobileOpen ? 'is-drawer-open' : ''}`}
      >
        <div className="site-nav-pill">
          {/* Brand Logo (Clean, without generic dot) */}
          <a
            href="#inicio"
            className="site-nav-brand"
            aria-label="Wakanda Project, ir al inicio"
          >
            <img
              src={brandLogoSrc}
              alt="Wakanda Project"
              className="site-nav-brand-img"
              width={200}
              height={55}
            />
          </a>

          {/* Unified Desktop Navigation Dock with Modern Sliding Pastilla Indicator */}
          <nav
            className="site-nav-dock"
            aria-label="Navegación principal"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Pastilla deslizante animada */}
            <span
              className="site-nav-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
              aria-hidden="true"
            />

            {navItems.map((item, index) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`site-nav-dock-item ${isActive ? 'is-active' : ''}`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Minimalist Animated Hamburger Toggle */}
          <div className="site-nav-actions">
            <a href={reserveHref} className="site-nav-cta">
              <span>Reservar</span>
              <ArrowRight size={14} weight="bold" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`site-nav-burger ${mobileOpen ? 'is-open' : ''}`}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              <span className="burger-line burger-line--1" aria-hidden="true" />
              <span className="burger-line burger-line--2" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer — Minimalist Editorial Canvas */}
      <div
        className={`site-nav-drawer ${mobileOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
      >
        <div className="site-nav-drawer-inner">
          {/* Main Navigation Links (Pure Editorial Typography) */}
          <nav className="site-nav-drawer-nav" aria-label="Menú móvil">
            {navItems.map((item, idx) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`site-nav-drawer-link ${isActive ? 'is-active' : ''}`}
                  tabIndex={mobileOpen ? 0 : -1}
                  style={{ '--stagger-i': idx } as React.CSSProperties}
                >
                  <span className="site-nav-drawer-link-text">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Drawer Footer — Single Clear CTA & Meta */}
          <div className="site-nav-drawer-footer">
            <a
              href={reserveHref}
              onClick={() => setMobileOpen(false)}
              className="site-nav-drawer-cta"
              tabIndex={mobileOpen ? 0 : -1}
            >
              <span>Reserva una clase gratis</span>
              <ArrowRight size={16} weight="bold" />
            </a>

            <div className="site-nav-drawer-meta">
              <span>Limón, Costa Rica</span>
              <span aria-hidden="true">·</span>
              <a
                href="https://instagram.com/wakandaproject"
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav-drawer-ig"
                tabIndex={mobileOpen ? 0 : -1}
              >
                @wakandaproject
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteNavbar;
