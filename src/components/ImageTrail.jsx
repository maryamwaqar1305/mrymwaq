import { useEffect, useRef } from "react";
import t1 from "../assets/trail/t1.jpg";
import t2 from "../assets/trail/t2.jpg";
import t3 from "../assets/trail/t3.jpg";
import t4 from "../assets/trail/t4.jpg";
import t5 from "../assets/trail/t5.jpg";
import t6 from "../assets/trail/t6.jpg";
import t7 from "../assets/trail/t7.jpg";
import t8 from "../assets/trail/t8.jpg";
import t9 from "../assets/trail/t9.jpg";
import t10 from "../assets/trail/t10.jpg";
import t11 from "../assets/trail/t11.jpg";
import t12 from "../assets/trail/t12.jpg";
import t13 from "../assets/trail/t13.jpg";
import t14 from "../assets/trail/t14.jpg";
import t15 from "../assets/trail/t15.jpg";
import t16 from "../assets/trail/t16.jpg";
import t17 from "../assets/trail/t17.jpg";
import t18 from "../assets/trail/t18.jpg";
import t19 from "../assets/trail/t19.jpg";
import t20 from "../assets/trail/t20.jpg";
import t21 from "../assets/trail/t21.jpg";
import t22 from "../assets/trail/t22.jpg";
import t23 from "../assets/trail/t23.jpg";
import t24 from "../assets/trail/t24.jpg";
import t25 from "../assets/trail/t25.jpg";
import t26 from "../assets/trail/t26.jpg";
import t27 from "../assets/trail/t27.jpg";
import t28 from "../assets/trail/t28.jpg";
import t29 from "../assets/trail/t29.jpg";
import t30 from "../assets/trail/t30.jpeg";
import "./ImageTrail.css";

const IMAGES = [
  t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15,
  t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30,
];

/*
 * Cursor image-trail. As the pointer moves inside `zoneRef`, small photos pop
 * in following the cursor and fade out — like a trail of Polaroids. Desktop /
 * fine-pointer only. It listens on the zone element, so once the zone scrolls
 * out of view the effect naturally stops.
 */
export default function ImageTrail({ zoneRef }) {
  const layerRef = useRef(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const layer = layerRef.current;
    if (!zone || !layer) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let last = { x: 0, y: 0, t: 0 };
    let imgIndex = 0;
    const MIN_DIST = 120; // more travel between photos = calmer, slower cadence

    const spawn = (x, y) => {
      const el = document.createElement("img");
      el.src = IMAGES[imgIndex % IMAGES.length];
      imgIndex++;
      el.className = "trail-img";
      // position relative to the layer; offset to the RIGHT of the cursor
      const rect = layer.getBoundingClientRect();
      el.style.left = `${x - rect.left}px`;
      el.style.top = `${y - rect.top}px`;
      const rot = (Math.random() * 12 - 6).toFixed(1);
      el.style.setProperty("--rot", `${rot}deg`);
      layer.appendChild(el);
      // force reflow then animate in
      requestAnimationFrame(() => el.classList.add("is-in"));
      // remove after a longer, calmer life
      setTimeout(() => {
        el.classList.remove("is-in");
        el.classList.add("is-out");
        setTimeout(() => el.remove(), 900);
      }, 850);
    };

    const onMove = (e) => {
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      const dist = Math.hypot(dx, dy);
      if (dist < MIN_DIST) return;
      last = { x: e.clientX, y: e.clientY, t: Date.now() };
      spawn(e.clientX, e.clientY);
    };

    zone.addEventListener("mousemove", onMove);
    return () => zone.removeEventListener("mousemove", onMove);
  }, [zoneRef]);

  return <div className="trail-layer" ref={layerRef} aria-hidden="true" />;
}
