import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, StarsCanvas } from './components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Plx from 'react-plx'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Parallax className="relative bg-black" pages={5}>
          {/* Parallax Image */}
          <ParallaxLayer className="bg-center"
                         offset={0} 
                         speed={0.5}
                         style={{
                          backgroundImage: "url('/src/assets/backgroundimg_crop.png')",
                          backgroundSize: 'cover',
                          width: "100%",
                          height: "30%",
                          marginTop: "2vw"
                         }}
          ></ParallaxLayer>

          <ParallaxLayer className="z-50" offset={0} speed={0}>
              <Navbar />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0}>            
              <Hero />
          </ParallaxLayer>
            
          <ParallaxLayer offset={1} 
                         speed={3}
                         factor={1}
                         style={{
                          backgroundImage: "url('/src/assets/2ndbg.jpg')",
                          backgroundSize: 'cover',
                          width: "100%",
                          height:"40%",
                          marginTop: 0
                         }}
          ></ParallaxLayer>

          {/* About Component */}
          <ParallaxLayer offset={1} speed={1}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} 
                         speed={1}
                         factor={3}
                         style={{
                          backgroundImage: "url('/src/assets/experiencebg.jpg')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: "100%",
                          height:"40%",
                          marginTop: 0
                         }}
          ></ParallaxLayer>

          <ParallaxLayer offset={2} speed={1}>
            <Experience />
          </ParallaxLayer>
          
          <ParallaxLayer offset={3} speed={2}>
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </BrowserRouter>
  );
};

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative bg-black">
//         <div className="bg-cover bg-no-repeat bg-center relative z-20">
//           <Navbar />
//           <Hero />
//         </div>

//         {/* Parallax Image */}
//         <Plx className="my-10"
//           parallaxData={[
//             {
//               start: 0,
//               end: 700,
//               easing: "ease-in",
//               properties: [
//                 {
//                   startValue: 1,
//                   endValue: 4,
//                   property: "scale",
//                 },
//               ],
//             },
//           ]}
//           style={{
//             position: "fixed",
//             left: "26%",
//             top: "15%",
//             width: "50%",
//             zIndex: 1, 
//           }}
//         >
//           <img
//             style={{ width: "100%", marginTop: "3.5vw"}}
//             src="/src/assets/backgroundimg_crop.png"
//             alt="foreground"
//           />
//         </Plx>

//         {/* Content after Parallax Transition */}
//         <div className="relative z-1">
//           <About />
//           <Experience />
//           <div className="relative z-0">
//             <Contact />
//             <StarsCanvas />
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

export default App;
