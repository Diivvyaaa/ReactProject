import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="animate-slide-down sticky top-0 z-50 w-full flex items-center justify-between px-10 h-[68px] bg-[rgba(250,247,242,0.85)] backdrop-blur-[18px] border-b border-black/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.07)] max-sm:px-5 max-sm:flex-wrap max-sm:h-auto max-sm:py-3 max-sm:gap-3">

      {/* Brand */}
      <a href="/" className="flex items-center gap-2.5 no-underline text-[#1a1a1a] group">
        <FontAwesomeIcon
          icon={faTags}
          className="text-[1.3rem] text-[#c9502a] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-rotate-12 group-hover:scale-110 group-hover:text-[#a83d1e]"
        />
        <span className="font-brand text-2xl font-semibold tracking-tight text-[#1a1a1a] transition-colors duration-[220ms] group-hover:text-[#c9502a]">
          Online-Stickers
        </span>
      </a>

      {/* Nav */}
      <nav>
        <ul className="flex items-center gap-1.5 list-none max-sm:gap-0.5">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Login", href: "/login" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative inline-flex items-center px-3.5 py-2 font-body text-[0.88rem] font-normal text-[#888880] no-underline rounded-lg tracking-[0.02em] transition-colors duration-[220ms] hover:text-[#1a1a1a] hover:bg-black/[0.04] after:content-[''] after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-[1.5px] after:bg-[#c9502a] after:rounded-sm after:scale-x-0 after:origin-left after:transition-transform after:duration-[220ms] hover:after:scale-x-100 max-sm:text-[0.8rem] max-sm:px-2.5 max-sm:py-1.5"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Cart button */}
          <li>
            <a
              href="/cart"
              className="inline-flex items-center px-3 py-2 text-[1.1rem] bg-[#c9502a] text-white rounded-[10px] shadow-[0_3px_12px_rgba(201,80,42,0.30)] transition-all duration-[220ms] hover:bg-[#a83d1e] hover:-translate-y-px hover:shadow-[0_5px_18px_rgba(201,80,42,0.38)]"
            >
              <FontAwesomeIcon icon={faShoppingBasket} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
