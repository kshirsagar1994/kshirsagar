import gsap from "gsap";

export const animateHeroText = (
  titleRef: React.RefObject<HTMLHeadingElement | null>,
  subtitleRef: React.RefObject<HTMLParagraphElement | null>,
  ctaRef: React.RefObject<HTMLDivElement | null>
) => {
  if (!titleRef.current || !subtitleRef.current || !ctaRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Separate the words or lines (assuming we have spans or just text)
    // For simplicity, we fade and slide up the whole lines
    tl.fromTo(
      titleRef.current!.children,
      { y: 100, opacity: 0, rotationX: 20 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );
  }, titleRef.current?.parentElement || document.body); // use parent element as scope or fallback to body

  return () => ctx.revert();
};
