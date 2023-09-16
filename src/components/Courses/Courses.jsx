/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";




const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);


    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data));

    }, [])

    const handleSelectCourse = (course) =>{
        setSelectedCourses([...selectedCourses, course]);
    }


    console.log(selectedCourses);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex mb-10">
                <div className="flex flex-wrap gap-5">
                    {
                        allCourses.map(course => (
                            <div key={course.id} className="card w-80 bg-base-100 shadow-xl">
                                <figure className="px-6 pt-6">
                                    <img src={course.image} className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">{course.course_name}</h2>
                                    <p>{course.course_details}</p>
                                    <div className="flex space-x-20 mt-3">
                                        <p className="font-bold">Price:{course.price}</p>
                                        <p className="font-bold">Credit:{course.credit}</p>
                                    </div>
                                    <div className="card w-80 pt-4">
                                        <button onClick={()=>handleSelectCourse(course)} className="btn btn-primary px-16 mx-6">Select</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="w-1/2">
                 <Cart selectedCourses={selectedCourses}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;

