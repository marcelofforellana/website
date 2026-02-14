import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Heart, Cat, Music, Gamepad2, Brain } from 'lucide-react';

export default function Interests() {
    return (
        <section id="interests" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-display font-bold text-white mb-2">Intereses</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="prose prose-invert max-w-none"
                >
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {profile.interests}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-white/5">
                            <Music className="text-primary mb-3" size={32} />
                            <span className="text-white font-medium">Música</span>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-white/5">
                            <Gamepad2 className="text-primary mb-3" size={32} />
                            <span className="text-white font-medium">Videojuegos</span>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-white/5">
                            <Brain className="text-primary mb-3" size={32} />
                            <span className="text-white font-medium">Deep Learning</span>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-white/5">
                            <Cat className="text-primary mb-3" size={32} />
                            <span className="text-white font-medium">Mascotas</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
