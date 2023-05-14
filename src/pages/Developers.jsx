import React from "react";

export default function Developers() {
    return (
        <>
            <section className="flex flex-col space-y-6 my-12">
                <p className="flex justify-center items-center text-4xl lg:text-5xl">Developers</p>
                <div className="flex flex-wrap justify-center items-center space-x-8">
                    <div className="Card  Profile-Card">
                        <img className="" src="src/assets/gaze.jpg" alt="" />
                        <p className="">Gaze Estimation and Hand Gesture recognition using Camera Vision for navigating and menu selection</p>
                    </div>
                    <div className="Card  Profile-Card">
                        <img className="" src="src/assets/formal.jpg" alt="" />
                        <p className="">Formal capturing method of photos good for 1X1 and 2X2 photos</p>
                    </div>
                    <div className="Card  Profile-Card">
                        <img className="" src="src/assets/beauty.jpg" alt="" />
                        <p className="">Beauty capturing method of photos good for taking selfie and groupie photos.</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center space-x-8">
                    <div className="Card  Profile-Card">
                        <img className="" src="src/assets/gaze.jpg" alt="" />
                        <p className="">Gaze Estimation and Hand Gesture recognition using Camera Vision for navigating and menu selection</p>
                    </div>
                    <div className="Card Profile-Card">
                        <img className="" src="src/assets/formal.jpg" alt="" />
                        <p className="">Formal capturing method of photos good for 1X1 and 2X2 photos</p>
                    </div>
                    <div className="Card Profile-Card">
                        <img className="" src="src/assets/beauty.jpg" alt="" />
                        <p className="">Beauty capturing method of photos good for taking selfie and groupie photos.</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center space-x-8">
                    <div className="Card  Profile-Card">
                        <img className="" src="src/assets/gaze.jpg" alt="" />
                        <p className="">Gaze Estimation and Hand Gesture recognition using Camera Vision for navigating and menu selection</p>
                    </div>
                </div>

            </section>
        </>
    )
}