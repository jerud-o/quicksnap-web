import React from "react";
import { Icon } from '@iconify/react';

export default function Home() {

    const scrolltoId = () => {
        var access = document.getElementById("download");
        access.scrollIntoView({ behavior: 'smooth' }, true);
    }

    return (
        <>
            {/* Navigation */}
            <nav className="Navbar z-10 flex flex-row justify-between items-center p-6 w-full h-24 bg-[#001D3D]">
                <div className="flex flex-row items-center">
                    <img className="QuickSnap-Logo w-auto h-16 mr-4" src="src/assets/Logo.png" alt="Logo" />
                    <p className="text-4xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span></p>
                </div>
                <div className="flex">
                    <a className="Nav-Button" onClick={scrolltoId}>Download</a>
                </div>
            </nav>
            {/* End Navigation */}

            {/* Content */}
            <div className="Content space-y-24 overflow-hidden">
                <section className="relative flex flex-row justify-center items-center w-full h-[100vh] ">
                    <div className="absolute w-[900px] z-10 left-16">
                        <div className="text-left text-6xl text-[#001D3D] font-bold ">
                            <p>Capture a picture perfect moments with</p>
                            <p><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span>.</p>
                        </div>
                        <p className="my-6 w-[600px] text-[#001D3D]">Streamlining the process of taking formal and beautify photos in photo booths for students and applicants.</p>
                    </div>
                    <img className="absolute right-[-20px] w-auto h-[800px]" src="src/assets/img1.png" />
                </section>

                <section className="flex flex-col space-y-8">
                    <div className="flex flex-col justify-center items-center text-[#001D3D] space-y-2">
                        <p className=" text-5xl font-bold">QuickSnap Personal</p>
                        <p className="text-lg font-semibold">QuickSnap Personal is goods for your own use.</p>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center items-center space-x-6 text-center font-semibold">
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
                </section>



                <section className="flex flex-col space-y-8">
                    <div className="flex flex-col justify-center items-center text-[#001D3D] space-y-2">
                        <p className=" text-5xl font-bold">QuickSnap Business</p>
                        <p className="text-lg font-semibold">QuickSnap Business is goods for your business.</p>
                    </div>
                    <div className="Card Custom-Card">
                        <img className="m-4 w-24 h-24" src="src/assets/Logo.png" alt="" />
                        <p>Formal capturing method of photos good for 1×1 and 2×2 photos</p>
                    </div>
                    <div className="Card Custom-Card">
                        <img className="m-4 w-24 h-24" src="src/assets/Logo.png" alt="" />
                        <p>Beauty capturing method of photos good for taking selfie and groupie photos.</p>
                    <div className="flex flex-wrap flex-row justify-center items-center space-x-6 text-center font-semibold">
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

                </section>

                <section id="download" className="flex flex-col justify-center items-center p-6 space-y-6 bg-[#003566] w-full h-96 text-center text-white">
                    <p className="text-3xl font-bold italic">"QuickSnap, Capturing the best moments in your life."</p>
                    <p className="w-[900px]">QuickSnap is a computer vision-based application that leverages advanced techniques such as gaze estimation, palm tracking, and smile capture to create a seamless and efficient photo-capturing experience. By utilizing these cutting-edge technologies, QuickSnap eliminates the need for users to navigate through complicated menus and settings, making the photo-taking process quick and effortless.</p>
                    <p className="text-2xl font-bold">Download QuickSnap: </p>
                    <div className="flex space-x-4">
                        <a className="Download" href="src/download/QuickSnap-Personal.txt" download="QuickSnap_Personal_v1.0">Personal</a>
                        <a className="Download" href="src/download/QuickSnap-Business.txt" download="QuickSnap_Business_v1.0">Business</a>
                    </div>
                </section>
            </div>
            {/* End Content */}

            {/* Footer */}
            <footer className="flex justify-center items-center space-x-16 p-6 w-full h-auto bg-[#001D3D] ">
                <div className="flex flex-row items-center">
                    <img className="mr-4 w-auto h-16" src="src/assets/Logo.png" alt="" />
                    <img className="w-auto h-12" src="src/assets/Banner.png" alt="" />
                </div>
                <p className="text-gray-300 text-lg font-semibold">© 2023 QuickSnap. All Rights Reserved.</p>
                <div className="text-gray-300">
                    <p className="text-sm  font-semibold">Developed by:</p>
                    <p className="text-2xl font-bold">BSCS4B - Bonadults</p>
                </div>
            </footer>
            {/* End Footer */}
        </>
    )
}