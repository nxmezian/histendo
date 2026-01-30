import './style.css'
import { useEffect } from "react";
import MainNav from "./MainNav";
import HistendoLogo from "./assets/images/histendo.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const texts = gsap.utils.toArray(".svg-draw-text text");

    texts.forEach((text) => {
      gsap.set(text, { fill: "transparent" }); 

      gsap.timeline({
        scrollTrigger: {
          trigger: text.closest(".screen"),
          start: "top 65%",
        },
      })
        .to(text, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          text,
          {
            fill: "#ff2b2b", 
            duration: 0.8,
            ease: "power1.out",
          },
          "-=0.4"
        );
    });
  }, []);

  return (
    <>
      <MainNav />


      <img src={HistendoLogo} id="histendo-logo" alt="Histendo Logo" />
        
      <div className="fullscreen-section home-1 screen">
        <button 
        className="scroll-button up" 
        onClick={() => 
          window.scrollBy({
          top: -window.innerHeight,
          behavior: "smooth"})}>↑
          </button>
        <svg className="svg-draw-text">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            The history of Nintendo
          </text>
        </svg>
        <button 
        className="scroll-button down"
        onClick={() => window.scrollBy({
          top: +window.innerHeight,
          behavior: "smooth"})}>↓
          </button>
      </div>

      <div className="fullscreen-section home-2 screen">
        <svg className="svg-draw-text">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            through timelines
          </text>
        </svg>
      </div>

      <div className="fullscreen-section home-3 screen">
        <svg className="svg-draw-text">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            amazing artwork
          </text>
        </svg>
      </div>

      <div className="fullscreen-section home-4 screen">
        <svg className="svg-draw-text">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            and unforgettable music
          </text>
        </svg>
      </div>
    </>
  );
}
