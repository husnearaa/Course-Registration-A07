/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import swal from 'sweetalert';





const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const[totalHours, setTotalHours] = useState(0);


    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data));

    }, [])
//  console.log(allCourses);

    const handleSelectCourse = (course) => {
        const isExist = selectedCourses.find((item) => item.id == course.id);
        // console.log(isExist);

        let count = course.credit;

        if (isExist) {
            // alert('Course already selected');
            swal("Sorry","Course Already taken", "warning");
        } else {
            selectedCourses.forEach((item) => {
                count += item.credit;
            });
        
            const totalRemaining = 20 - count;
        
            if (count > 20) {
                // alert("Sorry, you've exceeded the maximum credit limit (20)");
                swal("Sorry", "you've exceeded the maximum credit limit (20)", "warning");
            } else {
                setTotalHours(count);
                setRemaining(totalRemaining);
                setSelectedCourses([...selectedCourses, course]);
            }
        }
    };

    


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-4xl mb-10 text-center pt-8">Course Registration</h1>
            <div className="flex justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3 gap-x-48 gap-y-6">
                    {
                        allCourses.map(course => (
                            <div key={course.id}  className=" w-72 bg-base-100 p-4 rounded-xl">
                                <img src={course.image} className="rounded-xl mb-4 h-36" />
                                <div className="items-center text-center">
                                    <h2 className=" text-xl font-bold">{course.course_name}</h2>
                                    <p>{course.course_details}</p>
                                    <div className="flex space-x-14 mt-3">
                                        <p className="font-bold">Price:{course.price}</p>
                                        <p className="font-bold">Credit:{course.credit}hr</p>
                                    </div>
                                    <div className=" w-72 pt-4">
                                        <button onClick={() => handleSelectCourse(course)} className="mt-4 rounded-lg p-2 font-semibold text-lg bg-indigo-500 px-24 text-white mx-auto mr-6">Select</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="">
                    <Cart selectedCourses={selectedCourses} remaining={remaining} totalHours={totalHours} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;







