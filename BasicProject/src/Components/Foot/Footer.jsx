import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="animate-fade-up group w-full py-5 px-10 bg-[#1a1008] border-t border-white/[0.07] flex items-center justify-center gap-2 font-body text-[0.88rem] font-light tracking-[0.04em] text-[#c8c2b8] max-sm:px-5 max-sm:text-[0.82rem]">
      Built with{" "}
      <FontAwesomeIcon
        icon={faHeart}
        className="text-[#c9502a] text-[0.85rem] animate-heartbeat group-hover:[animation-play-state:paused] group-hover:scale-130 transition-transform duration-[220ms] drop-shadow-[0_0_4px_rgba(201,80,42,0.5)]"
        aria-hidden="true"
      />{" "}
      by{" "}
      <span className="font-brand italic text-[#e8e0d4]">Divya</span>
    </footer>
  );
}

export default Footer;
