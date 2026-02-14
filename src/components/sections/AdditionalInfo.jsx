import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Trophy, Globe, FileText, Users } from 'lucide-react';

export default function AdditionalInfo() {
    return (
        <section id="additional" className="py-20 bg-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-display font-bold text-white mb-2">Información Adicional</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6">
                            <h3 className="text-xl text-white font-semibold mb-3 flex items-center gap-2">
                                <Globe className="text-primary" size={20} /> Detalles
                            </h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><span className="text-white font-medium">Nacionalidad:</span> {profile.additional.nationality}</li>
                                <li><span className="text-white font-medium">Idiomas:</span> {profile.additional.languages}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl text-white font-semibold mb-3 flex items-center gap-2">
                                <Trophy className="text-primary" size={20} /> Logros
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {profile.additional.achievements}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl text-white font-semibold mb-3 flex items-center gap-2">
                            <FileText className="text-primary" size={20} /> Papers
                        </h3>
                        <ul className="space-y-4">
                            {profile.additional.papers.map((paper, index) => (
                                <li key={index} className="bg-card p-4 rounded-xl border border-white/5 text-muted-foreground text-sm">
                                    "{paper}"
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* References */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 pt-16 border-t border-white/10"
                >
                    <h3 className="text-xl text-white font-semibold mb-6 flex items-center gap-2">
                        <Users className="text-primary" size={20} /> Referencias
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {profile.references.map((ref, index) => (
                            <div key={index} className="text-center p-4">
                                <p className="text-muted-foreground font-medium">{ref}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
