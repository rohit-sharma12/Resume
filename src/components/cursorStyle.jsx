// @ts-nocheck

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMouse } from './use-mouse';

const GradientCursor = () => {
    const [mouseState, ref] = useMouse();
    const [hue, setHue] = useState(0);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (mouseState.x !== null && mouseState.y !== null) {
            const newHue = mouseState.x % 360;
            setHue(newHue);

            const newParticles = Array.from({ length: 3 }, () => ({
                id: Date.now() + Math.random(),
                x: mouseState.x + (Math.random() - 0.5) * 30,
                y: mouseState.y + (Math.random() - 0.5) * 20,
                size: Math.random() * 3 + 2,
                intensity: Math.random() * 0.5 + 0.5,
            }));

            setParticles((prev) => [...prev, ...newParticles].slice(-30)); // Keep last 30 particles
        }
    }, [mouseState.x, mouseState.y]);

    return (
        <div className="relative w-full h-full" ref={ref}>
            {mouseState.x !== null && mouseState.y !== null && (
                <>

                    <motion.div
                        className="fixed pointer-events-none z-50"
                        style={{
                            left: mouseState.x,
                            top: mouseState.y,
                            x: '-50%',
                            y: '-50%',
                            width: '40px',
                            height: '40px',
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            className="w-full h-full rounded-full mix-blend-screen"
                            style={{
                                background: `radial-gradient(
                                    circle at center,
                                    hsl(${hue}, 100%, 70%),
                                    hsl(${(hue + 60) % 360}, 100%, 60%)
                                )`,
                                boxShadow: `0 0 20px hsl(${hue}, 100%, 50%, 0.5)`,
                            }}
                        />
                    </motion.div>

                    <AnimatePresence>
                        {particles.map((particle, index) => (
                            <motion.div
                                key={particle.id}
                                className="fixed pointer-events-none mix-blend-screen"
                                style={{
                                    left: particle.x,
                                    top: particle.y,
                                    x: '-50%',
                                    y: '-50%',
                                }}
                                initial={{ opacity: particle.intensity, scale: 0 }}
                                animate={{ opacity: 0, scale: particle.size }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <div
                                    className="rounded-full"
                                    style={{
                                        width: `${particle.size * 4}px`,
                                        height: `${particle.size * 4}px`,
                                        background: `radial-gradient(
                                            circle at center,
                                            hsl(${(hue + index * 10) % 360}, 100%, ${70 + particle.intensity * 30}%),
                                            transparent
                                        )`,
                                        filter: 'blur(2px)',
                                        boxShadow: `0 0 ${particle.size * 2}px hsl(${(hue + index * 10) % 360}, 100%, 50%, ${particle.intensity})`,
                                    }}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
};

export default GradientCursor;
