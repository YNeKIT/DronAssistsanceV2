import React, { useEffect, useState, useRef } from "react";
import "../Components/Numbers.css";
import { useTranslation } from "react-i18next";

export default function Numbers() {
  const [startCounting, setStartCounting] = useState(false);
  const { t, i18n } = useTranslation();
  const numbersContainerRef = useRef(null);

  const [count, setCount] = useState([0, 0, 0]);
  const endValues = [125200, 400456, 1000];
  const duration = 4;

  useEffect(() => {
    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (numbersContainerRef.current) {
      observer.observe(numbersContainerRef.current);
    }

    return () => {
      if (numbersContainerRef.current) {
        observer.unobserve(numbersContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrame;
    let startTime;
    let elapsedTime = 0;

    const animateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      const currentCount = endValues.map((endValue) =>
        Math.round(endValue * progress)
      );
      setCount(currentCount);

      if (elapsedTime < duration * 1000) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    if (startCounting) {
      animationFrame = requestAnimationFrame(animateCount);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [startCounting]);

  return (
    <div ref={numbersContainerRef} className="numberscontainer">
      <ul className="listnumb">
        <li>
          <h1 className="numbstyle">{count[0]}</h1>
          <p className="parstyle">{t("numbers_zbor")}</p>
        </li>
        <li>
          <h1 className="numbstyle">{count[1]}</h1>
          <p className="parstyle">{t("numbers_hectari")}</p>
        </li>
        <li>
          <h1 className="numbstyle">{count[2]}</h1>
          <p className="parstyle">{t("numbers_sales")}</p>
        </li>
      </ul>
    </div>
  );
}
