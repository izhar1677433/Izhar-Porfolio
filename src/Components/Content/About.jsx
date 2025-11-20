import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/profile.jpg";
import Resume from "../../assets/Resume.pdf";

function About() {
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [1000]);

  return (
    <div
      id="About"
      className="bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        alt=""
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-white uppercase"
        >
          About Me
        </h1>
        <p data-aos="fade-left ">
          Hi, I’m IZHAR ul Haq — a Full Stack Developer with a strong passion
          for building modern, scalable, and user-friendly web applications. I
          graduated with a BS in Computer Science from the University of Swabi,
          where I developed a solid foundation in programming, problem-solving,
          and software engineering. <br />
          I specialize in Full-Stack Web Development, working with both frontend
          and backend technologies to build fast, clean, and scalable web
          applications. My experience spans across: React.js / Next.js Node.js /
          Express.js MongoDB / SQL Tailwind CSS / UI design REST APIs &
          Authentication
          <br />I also have strong experience with GSAP (GreenSock Animation
          Platform) to build smooth, creative, and high-performance animations
          that bring websites to life. From scroll-triggered effects to
          micro-animations, I use GSAP to create modern and engaging user
          experiences.
          <br />
          Along with full-stack development, I also work on WordPress, Shopify,
          and other e-commerce platforms, helping clients build online stores,
          customize themes, integrate plugins, and optimize their websites for
          speed and performance. I enjoy creating smooth user experiences, clean
          UIs, and efficient backend systems. My goal is to build digital
          products that are both visually appealing and highly functional.
        </p>
        <div className="flex mt-8 gap-2 space-x-2 items-center justify-center">
          <a href={Resume} target="_blank">
            <div className="nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden">
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
