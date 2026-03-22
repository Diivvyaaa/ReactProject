function PageTitle({ title }) {
  return (
    <h1 className="relative inline-block font-brand text-[clamp(2.2rem,6vw,4rem)] font-bold tracking-tight text-[#1a1a1a] leading-[1.15] after:content-[''] after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[10px] after:bg-[rgba(201,80,42,0.08)] after:rounded after:z-[-1] after:animate-underline">
      {title}
    </h1>
  );
}

export default PageTitle;
