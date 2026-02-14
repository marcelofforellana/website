import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Code, Database, FileText, Terminal } from 'lucide-react';

const SkillBadge = ({ name, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 px-4 py-3 rounded-xl"
        >
            <div className="text-primary">
                <Terminal size={18} />
            </div>
            <span className="text-white font-medium">{name}</span>
        </motion.div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-display font-bold text-white mb-2">Skills</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="mb-12">
                    <h3 className="text-xl text-white mb-6 font-semibold flex items-center gap-2">
                        <Code className="text-primary" /> Lenguajes & Tecnologías
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {profile.skills.map((skill, index) => (
                            <SkillBadge key={index} name={skill} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
