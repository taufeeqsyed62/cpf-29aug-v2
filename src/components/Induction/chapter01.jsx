import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const Chapter01 = () => {
    const isMobile = useMediaQuery({ maxWidth: 350 });
    return (
        <div className="relative">
            {/* Right side content */}
            <div className="absolute top-0 right-0 mt-8 mr-8 flex">
                <Link to="/chapter01/quiz" className="mr-4">
                    <div className="mb-2">Take Quiz</div>
                </Link>
                <Link to="/rewatch">
                    <div>Rewatch Chapter</div>
                </Link>
            </div>

            {/* Main content */}
            <div className="mt-8 mx-auto md:ml-16 md:max-w-2xl">
                <h1 className="text-2xl font-serif font-medium text-slate-500 mb-9">Chapter 01:</h1>
                <h1 className="text-3xl font-serif font-medium">Title Goes Here</h1>
            </div>
            <div className={`mt-8 flex justify-center items-center w-5/6 mx-auto md:mx-32 md:w-1/3 ${isMobile ? "h-44 w-52" : "h-96"} bg-slate-300`}>
                <div className="text-gray-600 mr-5">
                    <FontAwesomeIcon icon={faVideo} className={`h-20 w-20 ${isMobile ? "h-10 w-10" : ""}`} />
                </div>
            </div>

            <div className="text-left mt-8 mx-auto md:ml-16 mb-5 md:max-w-2xl">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptate perspiciatis, accusamus atque minus vitae. Saepe obcaecati fuga dolorem amet enim porro, expedita eum fugiat eveniet velit veritatis,
                    corporis similique maiores repellat magnam quas! Quibusdam ratione inventore aut? Voluptates, voluptatem. Modi, sequi atque.
                    Reprehenderit libero velit ipsa eius fugit aliquid mollitia nemo alias laborum quaerat, saepe laboriosam dolorum magnam aut sapiente numquam asperiores
                    reiciendis doloribus temporibus veniam dolore! Ipsum placeat culpa quia nihil, fugit architecto sit facilis accusantium veritatis possimus? Ipsum excepturi adipisci tenetur omnis aliquid minima hic animi debitis porro amet totam, ipsa architecto quia sequi ut quidem eaque.</p>
            </div>
        </div>
    )
}

export default Chapter01;
