"use client";

import React, { useState } from "react";

function App() {
    const [bird1] = useState(
        new Audio(
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
        )
    );

    const [bird2] = useState(
        new Audio(
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
        )
    );

    function toggle1() {
        if (bird1.paused) {
            bird1.play();
        } else {
            bird1.pause();
        }
    };

    function toggle2() {
        if (bird2.paused) {
            bird2.play();
        } else {
            bird2.pause();
        }
    };

    return (
        <div>
            <button
                onClick={toggle1}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            >
                Caspian Tern 1
            </button>
            <button
                onClick={toggle2}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
            >
                Caspian Tern 2
            </button>
        </div>
    );
}

export default App;