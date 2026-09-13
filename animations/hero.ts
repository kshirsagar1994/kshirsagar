import gsap from "gsap";

export const animateHeroText = (
  titleRef: React.RefObject<HTMLHeadingElement | null>,
  subtitleRef: React.RefObject<HTMLDivElement | null>,
  ctaRef: React.RefObject<HTMLDivElement | null>
) => {
  if (!titleRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", force3D: true } });

    // Keep opacity visible from start so Largest Contentful Paint (LCP) is recorded instantly (< 0.8s)
    if (titleRef.current?.children) {
      tl.fromTo(
        titleRef.current.children,
        { y: 20 },
        { y: 0, duration: 0.7, stagger: 0.08 }
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0.7 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      );
    }
  }, titleRef.current?.parentElement || undefined);

  return () => ctx.revert();
};
