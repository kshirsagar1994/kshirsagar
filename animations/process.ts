import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initProcessAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector('.process-container');
  if (!container) return;

  const ctx = gsap.context(() => {
    const steps = gsap.utils.toArray('.process-step') as HTMLDivElement[];
    if (steps.length === 0) return;
    
    const duration = steps.length - 1; // 3 units for 4 steps

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${duration * 100}%`, 
        pin: true,
        anticipatePin: 1,
        scrub: 1,
      }
    });

    const line = document.querySelector('.process-line');
    if (line) {
      // Animate the vertical line height from 0 to 100% over the entire timeline
      tl.to(line, {
        scaleY: 1,
        ease: "none",
        duration: duration
      }, 0);
    }

    steps.forEach((step, index) => {
      // Step entering (except the first one, which is already visible)
      if (index > 0) {
        tl.fromTo(step, 
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "none" },
          index - 1
        );
      }

      // Step exiting (except the last one)
      if (index < steps.length - 1) {
        tl.to(step, 
          { opacity: 0, duration: 1, ease: "none" },
          index
        );
      }
    });
  }, container);

  return () => ctx.revert();
};
