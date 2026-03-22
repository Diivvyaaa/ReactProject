import PageTitle from "./PageTitle";

function PageHeading(props) {
  return (
    <div className="animate-fade-up w-full max-w-[900px] px-10 pt-20 pb-10 flex flex-col items-center text-center max-sm:px-6 max-sm:pt-12 max-sm:pb-8">
      {/* Decorative accent line */}
      <span className="animate-expand-line block h-[3px] bg-[#c9502a] rounded-sm mb-6" style={{ width: 48 }} />

      <PageTitle title="Explore Online-Stickers!" />

      <p className="mt-4 text-base font-light text-[#888880] tracking-[0.01em] leading-[1.7] max-w-[520px]">
        {props.children}
      </p>
    </div>
  );
}

export default PageHeading;
