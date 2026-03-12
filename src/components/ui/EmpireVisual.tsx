import { motion } from 'framer-motion';

export const EmpireVisual = () => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
            {/* Background glow */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,245,90,0.05)_0%,transparent_70%)]"
                aria-hidden="true"
            />

            <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                {/* Central Logo/Node */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="w-[80px] h-[80px] bg-theme-accent text-black font-syne font-black text-[28px] flex items-center justify-center shadow-[0_0_40px_rgba(200,245,90,0.3)]">
                        SA
                    </div>
                </motion.div>

                {/* Orbiting Rings */}
                {[140, 220, 300, 380].map((size, i) => (
                    <motion.div
                        key={size}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-theme-accent/10 rounded-full pointer-events-none"
                        style={{ width: size, height: size }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: i % 2 === 0 ? 360 : -360
                        }}
                        transition={{
                            opacity: { duration: 1, delay: i * 0.2 },
                            scale: { duration: 1, delay: i * 0.2 },
                            rotate: {
                                duration: 20 + i * 5,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        {/* Orbital Node */}
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-theme-accent rounded-full shadow-[0_0_10px_#c8f55a]"
                            style={{ opacity: 0.5 + Math.random() * 0.5 }}
                        />
                    </motion.div>
                ))}

                {/* Floating Particles/Nodes */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-theme-accent/40 rounded-full"
                        initial={{
                            x: Math.random() * 400,
                            y: Math.random() * 400,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * 400],
                            opacity: [0, 0.6, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Ghost Grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-theme-accent" />
                    ))}
                </div>
            </div>
        </div>
    );
};
