// import aboutMainImage from "../Assets/Images/aboutMainImage.png";
// import CarouselSlide from "../Components/CarouselSlide";
// import { celebrities } from "../Constants/CelebrityData";
// import HomeLayout from "../Layouts/HomeLayout";

// function AboutUs() {
//   return (
//     <HomeLayout>
//       <div className="pl-20 pt-20 flex flex-col text-white">
//         <div className="flex items-center gap-5 mx-10">
//           <section className="w-1/2 space-y-10">
//             <h1 className="text-5xl text-yellow-500 font-semibold">
//               Affordable and quality education
//             </h1>
//             <p className="text-xl text-gray-200">
//               Our goal is to provide the afoordable and quality education to the
//               world. We are providing the platform for the aspiring teachers and
//               students to share their skills, creativity and knowledge to each
//               other to empower and contribute in the growth and wellness of
//               mankind.
//             </p>
//           </section>

//           <div className="w-1/2">
//             <img
//               id="test1"
//               style={{
//                 filter: "drop-shadow(0px 10px 10px rgb(0,0,0));",
//               }}
//               alt="about main image"
//               className="drop-shadow-2xl"
//               src={aboutMainImage}
//             />
//           </div>
//         </div>

//         <div className="carousel w-1/2 m-auto my-16">
//           {celebrities &&
//             celebrities.map((celebrity) => (
//               <CarouselSlide
//                 {...celebrity}
//                 key={celebrity.slideNumber}
//                 totalSlides={celebrities.length}
//               />
//             ))}
//         </div>
//       </div>
//     </HomeLayout>
//   );
// }

// export default AboutUs;

import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="px-5 sm:px-10 lg:px-20 pt-10 sm:pt-16 lg:pt-20 flex flex-col text-white">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mx-5 sm:mx-10">
          <section className="lg:w-1/2 space-y-5 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the world. We offer a platform for aspiring teachers and students to share their skills, creativity, and knowledge, empowering and contributing to the growth and wellness of mankind.
            </p>
          </section>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));",
              }}
              alt="about main image"
              className="w-full h-auto drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel w-full sm:w-3/4 lg:w-1/2 m-auto my-10 sm:my-12 lg:my-16">
          {celebrities &&
            celebrities.map((celebrity) => (
              <CarouselSlide
                {...celebrity}
                key={celebrity.slideNumber}
                totalSlides={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;

