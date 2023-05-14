import React from "react";

export default function Footbar() {
    return (
        <>
            <footer className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-16 p-6 w-full h-auto bg-[#001D3D] ">
                <div className="flex flex-row items-center">
                    <img className="mr-4 w-auto h-16" src="src/assets/Logo.png" alt="" />
                    <img className="w-auto h-12" src="src/assets/Banner.png" alt="" />
                </div>
                <p className="text-gray-300 text-lg lg:text-center font-semibold">© 2023 QuickSnap. All Rights Reserved.</p>
                <div className="text-gray-300">
                    <p className="text-sm  font-semibold">Developed by:</p>
                    <p className="text-2xl font-bold">BSCS4B - Bonadults</p>
                </div>
            </footer>
        </>
    )
}