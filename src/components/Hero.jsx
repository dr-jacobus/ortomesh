import { useState } from "react";
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] relative">

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* Tag box-with gradient border */}
        <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
            <i className='bx bx-diamond'></i> 
            INTRODUCING
          </div>
        </div>

        {/* Main Heading */}
        <h1
  className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider my-8 text-white'
  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
>
  DIGITAL TWIN
  <br />
  DASHBOARD
</h1>

        {/* Description */}
        <p
  className="text-base sm:text-lg tracking-wider text-white max-w-[25rem] lg:max-w-[30rem]"
  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
>
          The most powerful way to present and communicate medical images. Deliver clarity, enhance patient experience, and drive growth for your practice.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            Documentation <i className='bx bx-link-external'></i>
          </a>

          {/* Substitui <a> por <button> que abre o viewer */}
          {!showViewer && (
            <button
              onClick={() => setShowViewer(true)}
              className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            >
              Get Started <i className='bx bx-link-external'></i>
            </button>
          )}
        </div>
      </div>

      {/* 3D DigitalTwin Viewer ou Spline */}
      {showViewer ? (
        <div
          className="fixed top-0 left-0 w-full h-full z-50"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="3000"
        >
          <iframe
            title="Digital Twin Project - Open dentistry society"
            src="https://sketchfab.com/models/34ddb3f978484a7189dbd36835d29d92/embed"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
          ></iframe>

          <button
            onClick={() => setShowViewer(false)}
            className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      ) : (
        <Spline
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="3000"
          className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
          scene="https://prod.spline.design/VN6aofXQVydMSHYa/scene.splinecode"
        />
      )}

    </main>
  );
};

export default Hero;