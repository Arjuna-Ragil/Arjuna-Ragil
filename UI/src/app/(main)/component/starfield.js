"use client";

import { useEffect, useState } from "react";

export default function Starfield() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starCount = 150;
        const generatedStars = [];

        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 5;
            const isBrandColored = Math.random() > 0.8;

            generatedStars.push({
                id: i,
                x,
                y,
                size,
                duration,
                delay,
                isBrandColored,
            });
        }
        setStars(generatedStars);
    }, []);

    return (
        <div className="fixed inset-0 star-field overflow-hidden" id="starfield">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
                        ...(star.isBrandColored && {
                            backgroundColor: "#ab8aff",
                            boxShadow: "0 0 4px #ab8aff",
                        }),
                    }}
                />
            ))}
        </div>
    );
}
