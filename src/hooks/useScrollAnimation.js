import { useEffect, useState } from "react";

export default function useScrollAnimation(elementId, threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    const element = document.getElementById(elementId);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [elementId, threshold]);

  return isVisible;
}
