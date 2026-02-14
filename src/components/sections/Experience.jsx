import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Briefcase } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-display font-bold text-white mb-2">Experiencia</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {profile.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l border-white/10"
                        >
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                                    {job.period}
                                </span>
                            </div>

                            <div className="text-lg text-primary/80 mb-4 font-medium">{job.company}</div>

                            <p className="text-muted-foreground leading-relaxed">
                                {job.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
