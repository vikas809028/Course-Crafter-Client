// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

// import HomeLayout from "../../Layouts/HomeLayout";
// import {
//   deleteCourseLecture,
//   getCourseLectures,
// } from "../../Redux/Slices/LectureSlice";

// function Displaylectures() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { state } = useLocation();
//   const { lectures } = useSelector((state) => state.lecture);
//   const { role } = useSelector((state) => state.auth);

//   const [currentVideo, setCurrentVideo] = useState(0);

//   async function onLectureDelete(courseId, lectureId) {
//     await dispatch(
//       deleteCourseLecture({ courseId: courseId, lectureId: lectureId })
//     );
//     await dispatch(getCourseLectures(courseId));
//   }

//   useEffect(() => {
//     dispatch(getCourseLectures(state._id));
//   }, []);

//   return (
//     <HomeLayout>
//       <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-wihte mx-[5%]">
//         <div className="text-center text-2xl font-semibold text-yellow-500">
//           Course Name: {state?.title}
//         </div>

//         {lectures && lectures.length > 0 ? (
//           <div className="flex justify-center gap-10 w-full">
//             {/* left section for playing videos and displaying course details to admin */}
//             <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
//               <video
//                 src={lectures && lectures[currentVideo]?.lecture?.secure_url}
//                 // src={movie}
//                 className="object-fill rounded-tl-lg rounded-tr-lg w-full"
//                 controls
//                 disablePictureInPicture
//                 controlsList="nodownload"
//               ></video>
//               <div>
//                 <h1>
//                   <span className="text-yellow-500"> Title: </span>
//                   {lectures && lectures[currentVideo]?.title}
//                 </h1>
//                 <p>
//                   <span className="text-yellow-500 line-clamp-4">
//                     Description:{" "}
//                   </span>
//                   {lectures && lectures[currentVideo]?.description}
//                 </p>
//               </div>
//             </div>

//             {/* right section for displaying list of lectres */}
//             <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
//               <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
//                 <p>Lectures list</p>
//                 {role === "ADMIN" && (
//                   <button
//                     onClick={() =>
//                       navigate("/course/addlecture", { state: { ...state } })
//                     }
//                     className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
//                   >
//                     Add new lecture
//                   </button>
//                 )}
//               </li>
//               {lectures &&
//                 lectures.map((lecture, idx) => {
//                   return (
//                     <li className="space-y-2" key={lecture._id}>
//                       <p
//                         className="cursor-pointer"
//                         onClick={() => setCurrentVideo(idx)}
//                       >
//                         <span> Lecture {idx + 1} : </span>
//                         {lecture?.title}
//                       </p>
//                       {role === "ADMIN" && (
//                         <button
//                           onClick={() =>
//                             onLectureDelete(state?._id, lecture?._id)
//                           }
//                           className="btn-accent px-2 py-1 rounded-md font-semibold text-sm"
//                         >
//                           Delete lecture
//                         </button>
//                       )}
//                     </li>
//                   );
//                 })}
//             </ul>
//           </div>
//         ) : (
//           role === "ADMIN" && (
//             <button
//               onClick={() =>
//                 navigate("/course/addlecture", { state: { ...state } })
//               }
//               className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
//             >
//               Add new lecture
//             </button>
//           )
//         )}
//       </div>
//     </HomeLayout>
//   );
// }

// export default Displaylectures;
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import {
  deleteCourseLecture,
  getCourseLectures,
} from "../../Redux/Slices/LectureSlice";

function Displaylectures() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);

  const [currentVideo, setCurrentVideo] = useState(0);

  async function onLectureDelete(courseId, lectureId) {
    await dispatch(deleteCourseLecture({ courseId: courseId, lectureId: lectureId }));
    await dispatch(getCourseLectures(courseId));
  }

  useEffect(() => {
    dispatch(getCourseLectures(state._id));
  }, []);

  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
        <div className="text-center text-2xl font-semibold text-yellow-500">
          Course Name: {state?.title}
        </div>

        {lectures && lectures.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-center gap-10 w-full">
            {/* Left section for playing videos and displaying course details to admin */}
            <div className="space-y-5 w-full lg:w-[28rem] p-2 rounded-lg shadow-lg border border-gray-700 bg-gray-800">
              <video
                src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                className="object-fill rounded-tl-lg rounded-tr-lg w-full shadow-md"
                controls
                disablePictureInPicture
                controlsList="nodownload"
              ></video>
              <div className="text-lg sm:text-xl p-4">
                <h1>
                  <span className="text-yellow-500">Title: </span>
                  {lectures && lectures[currentVideo]?.title}
                </h1>
                <p>
                  <span className="text-yellow-500">Description: </span>
                  {lectures && lectures[currentVideo]?.description}
                </p>
              </div>
            </div>

            {/* Right section for displaying the list of lectures */}
            <ul className="w-full lg:w-[28rem] p-2 rounded-lg shadow-lg border border-gray-700 bg-gray-800 space-y-4">
              <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                <p>Lectures list</p>
                {role === "ADMIN" && (
                  <button
                    onClick={() => navigate("/course/addlecture", { state: { ...state } })}
                    className="btn-primary px-2 py-1 rounded-md font-semibold text-sm hover:bg-yellow-500 transform hover:scale-105 transition-all ease-in-out duration-300 shadow-md"
                  >
                    Add new lecture
                  </button>
                )}
              </li>
              {lectures &&
                lectures.map((lecture, idx) => (
                  <li key={lecture._id} className="p-2 space-y-2">
                    <p
                      className="cursor-pointer hover:text-yellow-400 transform hover:scale-105 transition-all ease-in-out duration-300"
                      onClick={() => setCurrentVideo(idx)}
                    >
                      <span> Lecture {idx + 1}: </span>
                      {lecture?.title}
                    </p>
                    {role === "ADMIN" && (
                      <button
                        onClick={() => onLectureDelete(state?._id, lecture?._id)}
                        className="btn-accent px-2 py-1 rounded-md font-semibold text-sm hover:bg-red-500 transform hover:scale-105 transition-all ease-in-out duration-300 shadow-md"
                      >
                        Delete lecture
                      </button>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          role === "ADMIN" && (
            <button
              onClick={() => navigate("/course/addlecture", { state: { ...state } })}
              className="btn-primary px-2 py-1 rounded-md font-semibold text-sm hover:bg-yellow-500 transform hover:scale-105 transition-all ease-in-out duration-300 shadow-md"
            >
              Add new lecture
            </button>
          )
        )}
      </div>
    </HomeLayout>
  );
}

export default Displaylectures;
