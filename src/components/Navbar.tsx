import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { isRTL } from '@/i18n';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'ur', label: 'UR' },
  { code: 'hi', label: 'HI' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const rtl = isRTL(i18n.language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = isRTL(code) ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
    setLangOpen(false);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services/warehouse-storage', label: t('nav.services') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-enterprise' : 'bg-transparent'
      }`}
    >
      <div className="container-enterprise flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className='flex items-center'>
            <img src="/logo-icon.png" alt="Nejoum Shipping" className={`h-10 md:h-12 w-auto object-contain ${scrolled ? 'filter-none' : 'invert brightness-0'}`}  />
            <img src="/logo-name.png" alt="Nejoum Shipping" className={`h-10 md:h-12 w-auto object-contain ${scrolled ? 'filter-none' : 'invert brightness-0'}`} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => {
                if (link.to === "/") {
                  e.preventDefault();
                  window.location.href = "/";
                }
              }}
              className={`px-4 py-2 rounded-lg text-base font-semibold transition-colors ${
                location.pathname === link.to
                  ? 'text-primary gradient-primary text-white'
                  : scrolled
                  ? 'text-foreground hover:text-primary hover:bg-primary/5'
                  : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground/90 hover:bg-primary-foreground/10'
              }`}
            >
              <LanguageIcon sx={{ fontSize: 18 }} />
              {i18n.language.split('-')[0].toUpperCase()}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full mt-1 end-0 bg-card rounded-lg shadow-enterprise border border-border overflow-hidden min-w-[80px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLang(lang.code)}
                      className={`w-full px-4 py-2 text-sm text-start transition-colors hover:bg-primary/10 ${
                        i18n.language === lang.code ? 'text-primary font-semibold bg-primary/5' : 'text-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover-lift"
          >
            {t('nav.getQuote')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-border overflow-hidden"
          >
            <div className="container-enterprise py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-4 py-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      i18n.language === lang.code
                        ? 'gradient-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Link
                to="/contact"
                className="gradient-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center mx-4 mt-2"
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
