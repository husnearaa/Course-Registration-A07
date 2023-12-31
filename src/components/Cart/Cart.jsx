/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectedCourses, remaining, totalHours}) => {
    // console.log(selectedCourses);
    return (
        <div>
            <div className="w-72 ml-48 h-min-[100px]">
                <div className="bg-white min-h-[300px] rounded-xl w-[300px] px-8">
                    <h1 className="border-b-2 font-bold text-[#2F80ED] py-4 text-base text-left">Credit Hour Remaining {remaining}hr</h1>
                    <h2 className="font-bold text-left py-4  border-b-2 text-xl">Course Name</h2>

                    
                       <ol>
                       {selectedCourses.map((course, index) => (
                         <li key={index}>
                           {index + 1}.{course.course_name}
                         </li>
                       ))}
                     </ol>

                       {/* <ul className="list-decimal">
                       {selectedCourses.map((course) => (
                         <li>
                           {course.course_name}
                         </li>
                       ))}
                     </ul>
                      */}
                    
                    <div className="min-h-[120px]"></div>
                    <br />
                    <h2 className="text-left  pl-1 font-semibold pt-4 border-t-2 pb-5">Total Credit Hour : {totalHours}</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;