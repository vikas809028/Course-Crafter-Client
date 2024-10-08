// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

// import HomeLayout from "../../Layouts/HomeLayout";

// function CourseDescription() {

//     const { state } = useLocation();
//     const navigate = useNavigate();

//     const { role, data } = useSelector((state) => state.auth);

//     return (
//         <HomeLayout>
//             <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
//                 <div className="grid grid-cols-2 gap-10 py-10 relative">
//                     <div className="space-y-5">
//                         <img 
//                             className="w-full h-64"
//                             alt="thumbnail"
//                             src={state?.thumbnail?.secure_url}
//                         />

//                         <div className="space-y-4">
//                             <div className="flex flex-col items-center justify-between text-xl">

//                                 <p className="font-semibold">
//                                     <span className="text-yellow-500 font-bold">
//                                         Total lectures : {" "}
//                                     </span>
//                                     {state?.numberOfLectures}
//                                 </p>

//                                 <p className="font-semibold">
//                                     <span className="text-yellow-500 font-bold">
//                                         Instructor : {" "}
//                                     </span>
//                                     {state?.createdBy}
//                                 </p>

//                             </div>

//                             { role === "ADMIN" || data?.subscription?.status === "active" ? (
//                                 <button onClick={() => navigate("/course/displaylectures", {state: {...state}})} className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
//                                     Watch lectures
//                                 </button>
//                                 ) : (
//                                     <button onClick={() => navigate("/checkout")} className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
//                                         Subscribe
//                                     </button>
//                                 )

//                             }
//                         </div>
                       

//                     </div>

//                     <div className="space-y-2 text-xl">
//                         <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
//                             {state?.title}
//                         </h1>

//                         <p className="text-yellow-500">Course description: </p>
//                         <p>{state?.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </HomeLayout>
//     );
// }

// export default CourseDescription;
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";

function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-8 sm:pt-10 lg:pt-12 px-5 sm:px-10 lg:px-20 flex flex-col items-center justify-center text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 py-8 sm:py-10 relative w-full">

                    {/* Image and Details Section */}
                    <div className="space-y-5 bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                className="w-full h-48 sm:h-64 lg:h-72 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
                                alt="thumbnail"
                                src={state?.thumbnail?.secure_url}
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row items-center sm:justify-between text-lg sm:text-xl space-y-2 sm:space-y-0">
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">Total lectures: </span>
                                    {state?.numberOfLectures}
                                </p>
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">Instructor: </span>
                                    {state?.createdBy}
                                </p>
                            </div>

                            {/* Conditional Button for Admin or Subscribed User */}
                            {role === "ADMIN" || data?.subscription?.status === "active" ? (
                                <button
                                    onClick={() => navigate("/course/displaylectures", { state: { ...state } })}
                                    className="bg-yellow-600 text-lg sm:text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transform hover:scale-105 transition-all ease-in-out duration-300 shadow-lg"
                                >
                                    Watch Lectures
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="bg-yellow-600 text-lg sm:text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transform hover:scale-105 transition-all ease-in-out duration-300 shadow-lg"
                                >
                                    Subscribe
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Course Description Section */}
                    <div className="space-y-4 text-lg sm:text-xl bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700">
                        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-5 text-center lg:text-left">
                            {state?.title}
                        </h1>
                        <p className="text-yellow-500">Course description:</p>
                        <p>{state?.description}</p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;

