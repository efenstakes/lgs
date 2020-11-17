// import logo from './logo.svg';
import './App.scss';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
 
// function App1() {
//   return (
//     <AwesomeSlider animation="cubeAnimation">
//       <div data-src="/path/to/image-0.png" />
//       <div data-src="/path/to/image-1.png" />
//       <div data-src="/path/to/image-2.jpg" />
//     </AwesomeSlider>
//   )
// }

// export default App1;


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
const App2 = ()=> {
  return (
    <AwesomeSlider>
      <div>1</div>
      <div style={{ backgroundColor: 'yellow' }}>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  )
}
export default App2;


// import Flickity from 'react-flickity-component'
 
// const flickityOptions = {
//     initialIndex: 2
// }
 
// function App3() {
//   return (
//     <Flickity
//       className={'carousel'} // default ''
//       elementType={'div'} // default 'div'
//       options={flickityOptions} // takes flickity options {}
//       disableImagesLoaded={false} // default false
//       reloadOnUpdate // default false
//       static // default false
//     >
//       <img src="/images/placeholder.png"/>
//       <img src="/images/placeholder.png"/>
//       <img src="/images/placeholder.png"/>
//     </Flickity>
//   )
// }
// export default App3;


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
 
// class App4 extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });
// export default App4;


// import React from "react";
// import Slider from "react-slick";
 
// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
// export default App5;