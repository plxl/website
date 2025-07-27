// import React from "react";
// import "./waves.css"; // your CSS goes here

export default function Waves() {
    return (
        <div className="wave-top-container">
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    {[
                        { y: 0, delay: '-2s', duration: '7s' },
                        { y: 3, delay: '-3s', duration: '10s' },
                        { y: 5, delay: '-4s', duration: '13s' },
                        { y: 25, delay: '-5s', duration: '20s' },
                    ].map((wave, i) => (
                        <use
                            key={i}
                            xlinkHref="#gentle-wave"
                            x="48"
                            y={wave.y}
                            fill="rgba(255,255,255,0.1)"
                            style={{
                                animationDelay: wave.delay,
                                animationDuration: wave.duration,
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}
