import React from "react";

export default function Navigation() {

    const scrolltoId = () => {
        var access = document.getElementById("download");
        access.scrollIntoView({ behavior: 'smooth' }, true);
    }

    return (
        <>
            <nav className="Navbar z-10 flex flex-row justify-between items-center p-6 w-full h-24 bg-[#001D3D]">
                <div className="flex flex-row items-center">
                    <img className="QuickSnap-Logo w-auto h-16 mr-4" src="src/assets/Logo.png" alt="Logo" />
                    <p className="text-4xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span></p>
                </div>
                <div className="flex space-x-2">
                    <a className="Nav-Button" onClick={scrolltoId}>Download</a>
                    {/* <a className="Nav-Button" href="/Developers">Developers</a> */}
                </div>
            </nav>
        </>
    )
}