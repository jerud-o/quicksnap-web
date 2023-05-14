import React from "react";
import { Icon } from '@iconify/react';

export default function Home() {

    return (
        <>
            <div className="Content space-y-8 overflow-hidden">
                <section className="relative flex flex-row justify-center items-center w-full h-[100vh] ">
                    <div className="absolute w-[600px] lg:w-[550px] xl:w-[700px] 2xl:w-[700px] z-10 left-6 2xl:left-16">
                        <div className="text-left text-5xl 2xl:text-6xl text-[#001D3D] font-bold ">
                            <p>Capture a picture perfect moments with</p>
                            <p><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span>.</p>
                        </div>
                        <p className="my-6 w-[400px] text-[#001D3D]">Streamlining the process of taking formal and beautify photos in photo booths for students and applicants.</p>
                    </div>
                    <img className="hidden lg:block absolute top-[-70px] lg:right-[-250px] xl:right-[-120px] 2xl:right-[-20px] w-auto h-[800px]" src="src/assets/img1.png" />
                </section>

                <section className="flex flex-col space-y-8">
                    <div className="flex flex-col justify-center items-center text-[#001D3D] space-y-2">
                        <p className="text-5xl md:text-6xl font-bold">Features</p>
                        {/* <p className="text-lg md:text-xl font-semibold">QuickSnap Personal is goods for your own use.</p> */}
                    </div>
                    <div className="flex flex-wrap flex-row justify-center items-center space-y-8 lg:space-y-0 xl:space-x-6  text-center font-semibold group">
                        <div className="Card Custom-Card">
                            <img className="Card-Img" src="src/assets/gaze.jpg" alt="" />
                            <p className="Card-P">Gaze Estimation and Hand Gesture recognition using Camera Vision for navigating and menu selection</p>
                        </div>
                        <div className="Card Custom-Card">
                            <img className="Card-Img" src="src/assets/formal.jpg" alt="" />
                            <p className="Card-P">Formal capturing method of photos good for 1X1 and 2X2 photos</p>
                        </div>
                        <div className="Card Custom-Card">
                            <img className="Card-Img" src="src/assets/beauty.jpg" alt="" />
                            <p className="Card-P">Beauty capturing method of photos good for taking selfie and groupie photos.</p>
                        </div>
                    </div>
                </section>

                {/* <section className="flex flex-col space-y-8">
                    <div className="flex flex-col justify-center items-center text-[#001D3D] space-y-2">
                        <p className=" text-5xl font-bold">QuickSnap Business</p>
                        <p className="text-lg font-semibold">QuickSnap Business is goods for your business.</p>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center items-center space-y-8 lg:space-y-0 xl:space-x-6 text-center font-semibold">
                        <div className="Card Custom-Card">
                            <img className="m-4 w-24 h-24" src="src/assets/Logo.png" alt="" />
                            <p>Gaze Estimation and Hand Gesture recognition using Camera Vision for navigating and menu selection</p>
                        </div>
                        <div className="Card Custom-Card">
                            <img className="m-4 w-24 h-24" src="src/assets/Logo.png" alt="" />
                            <p>Formal capturing method of photos good for 1X1 and 2X2 photos</p>
                        </div>
                        <div className="Card Custom-Card">
                            <img className="m-4 w-24 h-24" src="src/assets/Logo.png" alt="" />
                            <p>Beauty capturing method of photos good for taking selfie and groupie photos.</p>
                        </div>
                    </div>
                </section> */}

                <section id="download" className="flex flex-col justify-center items-center p-6 space-y-6 bg-[#003566] w-full h-auto text-center text-white">
                    <p className="text-3xl font-bold italic">"QuickSnap, Capturing the best moments in your life."</p>
                    <p className="lg:w-[900px]">QuickSnap is a computer vision-based application that leverages advanced techniques such as gaze estimation, palm tracking, and smile capture to create a seamless and efficient photo-capturing experience. By utilizing these cutting-edge technologies, QuickSnap eliminates the need for users to navigate through complicated menus and settings, making the photo-taking process quick and effortless.</p>
                    <p className="text-2xl font-bold">Download QuickSnap: </p>
                    <div className="flex space-x-4">
                        <a className="Download" href="src/download/QuickSnap-Personal.txt" download="QuickSnap_Personal_v1.0">Personal<img className="h-6 ml-2" src="src/assets/dl.png"/></a>
                        <a className="Download" href="src/download/QuickSnap-Business.txt" download="QuickSnap_Business_v1.0">Business<img className="h-6 ml-2" src="src/assets/dl.png"/></a>
                    </div>
                </section>
            </div>
        </>
    )
}