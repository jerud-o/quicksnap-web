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
            <nav className="Navbar flex flex-row justify-between items-center p-6 w-full h-24 bg-[#001D3D]">
                <div className="flex flex-row items-center">
                    <img className="QuickSnap-Logo w-auto h-16 mr-4" src="src/assets/Logo.png" alt="Logo" />
                    <img className="QuickSnap-Banner w-auto h-10" src="src/assets/Banner.png" />
                </div>
                <div className="flex">
                    <a className="Nav-Button" onClick={scrolltoId}>Download</a>
                </div>
            </nav>
            {/* End Navigation */}

            {/* Content */}
            <div className="Content space-y-16">
                <section className="top relative flex flex-}row justify-center items-center w-full h-[100vh] bg-[#003566]">
                    <div className="absolute w-[1000px] z-10 left-16">
                        <div className="text-left text-6xl text-white font-bold ">
                            <p>Capture a picture perfect moments with <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span>.</p>
                        </div>
                        <p className="my-6 w-[600px] text-white">Streamlining the process of taking formal and beautify photos in photo booths for students and applicants.</p>
                    </div>
                    <img className="absolute right-16 w-auto h-[800px]" src="src/assets/001.jpg" />
                </section>

                <p className="flex justify-center items-center text-5xl text-[#001D3D] font-bold">Features</p>

                <section className="flex flex-wrap flex-row justify-center items-center space-x-6 text-center font-semibold">
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
                </section>

                <section id="download" className="flex flex-col justify-center items-center p-6 space-y-6 bg-[#003566] w-full h-96 text-center text-white">
                    <p className="text-3xl font-bold italic">"QuickSnap, Capturing the best moments in your life."</p>
                    <p className="w-[900px]">QuickSnap is a computer vision-based application that leverages advanced techniques such as gaze estimation, palm tracking, and smile capture to create a seamless and efficient photo-capturing experience. By utilizing these cutting-edge technologies, QuickSnap eliminates the need for users to navigate through complicated menus and settings, making the photo-taking process quick and effortless.</p>
                    <p className="text-2xl font-bold">Download QuickSnap: </p>
                    <div className="flex space-x-4">
                        <button className="Download">Personal</button>
                        <button className="Download">Business</button>
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