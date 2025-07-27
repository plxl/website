import React, { useRef, useEffect } from 'react';
import projects from '../data/projects.json';

function GlassCard({
    name,
    desc,
    url,
    style,
}: {
    name: string;
    desc: string;
    url: string;
    style?: React.CSSProperties;
}) {
    const cardRef = useRef<HTMLAnchorElement | null>(null);
    const lightRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const card = cardRef.current;
        const light = lightRef.current;
        if (!card || !light) return;

        let x = 0,
            y = 0;
        let update = false;

        const onMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
            update = true;
        };

        const animate = () => {
            if (update) {
                light.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
                update = false;
            }
            requestAnimationFrame(animate);
        };

        card.addEventListener('mousemove', onMouseMove);
        requestAnimationFrame(animate);

        // cleanup
        return () => {
            card.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <a
            ref={cardRef}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card clean-text"
            draggable="false"
            style={style}
        >
            <div ref={lightRef} className="glass-light"></div>
            <div className="glass-card-content">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </a>
    );
}

export default function ProjectGrid() {
    return (
        <div className="grid-container">
            <h2 style={{ gridColumn: '1 / -1' }}>My Projects</h2>

            {projects.map((p) => (
                <GlassCard key={p.url} {...p} />
            ))}

            <GlassCard
                key="https://github.com/plxl"
                name="More on GitHub"
                desc="Check out my latest projects"
                url="https://github.com/plxl"
                style={{
                    gridColumn: '1 / -1',
                    padding: '0px',
                    maxWidth: 'none',
                }}
            />
        </div>
    );
}
