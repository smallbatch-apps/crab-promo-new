export default function Section({ children, sectionRef, side = "left" }) {
  return (
    <section
      ref={sectionRef}
      className="h-screen snap-start flex lg:items-center p-6 md:p-12 relative z-20"
    >
      {side === "right" && <div className="hidden md:block w-2/5" />}
      <div className="w-full lg:w-3/5">{children}</div>
      {side === "left" && <div className="hidden md:block w-2/5" />}
    </section>
  );
}
