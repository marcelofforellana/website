import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-display font-bold text-white mb-2">Educación</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid gap-6">
                    {profile.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card hover:bg-card/80 transition-colors p-6 rounded-2xl border border-white/5 flex items-start gap-4"
                        >
                            <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                                <div className="text-primary/80 font-medium mb-2">{edu.school}</div>
                                <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                    {edu.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
