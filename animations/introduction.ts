import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animateIntroduction = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  headingRef: React.RefObject<HTMLHeadingElement | null>,
  paragraphRef: React.RefObject<HTMLParagraphElement | null>,
  wordsRef: React.RefObject<HTMLDivElement | null>
) => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !headingRef.current || !paragraphRef.current || !wordsRef.current) return;

    const ctx = gsap.context(() => {
      // Fade up the heading
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Fade up the paragraph
      gsap.fromTo(
        paragraphRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
          },
        }
      );

      // Progressive word reveal
      const words = wordsRef.current!.children;
      gsap.fromTo(
        words,
        { opacity: 0.2, color: "#a0a0a0" },
        {
          opacity: 1,
          color: "#ffffff",
          stagger: 0.5,
          scrollTrigger: {
            trigger: wordsRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }
};
