/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectedCourses, remainingHour, courseName, totalCreditHour, totalPrice }) => {
    // console.log(selectedCourses);
    return (
        <div>
            <div className="pb-2  border-b-2">
                <h3 className="">Credit Hour Remaining {remainingHour}</h3>
            </div>

            <div className="pb-2 border-b-2">
                <h3 className=" ">Course Name {courseName}</h3>
            </div>
           


            {
                selectedCourses.map((course) => (

                    <li>{course.course_name}</li>

                )
                )}


            <div className="pt-2 mt-20 border-t-2">
                <h3>Total Credit Hour : {totalCreditHour}</h3>
            </div>
            <div>
                <h3>Total Price: {totalPrice}</h3>
            </div>

        </div>
    );
};

export default Cart;