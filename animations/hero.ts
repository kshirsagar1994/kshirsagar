import gsap from "gsap";

export const animateHeroText = (
  titleRef: React.RefObject<HTMLHeadingElement | null>,
  subtitleRef: React.RefObject<HTMLDivElement | null>,
  ctaRef: React.RefObject<HTMLDivElement | null>
) => {
  if (!titleRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", force3D: true } });

    // Use pure composited transform & opacity
    if (titleRef.current?.children) {
      tl.fromTo(
        titleRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );
    }
  }, titleRef.current?.parentElement || undefined);

  return () => ctx.revert();
};
