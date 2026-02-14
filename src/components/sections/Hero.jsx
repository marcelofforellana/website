import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Mail, Linkedin, Github, Twitter, Facebook, ExternalLink } from 'lucide-react';

const iconMap = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
    facebook: Facebook
}

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
                        Sobre mí
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                        {profile.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
                        {profile.role}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                        {profile.summary}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <Mail size={18} />
                            Contáctame
                        </a>
                        <div className="flex items-center gap-4 px-4">
                            {Object.entries(profile.contact.social).map(([platform, url]) => {
                                if (!url) return null;
                                const Icon = iconMap[platform] || ExternalLink;
                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-white transition-colors"
                                    >
                                        <Icon size={24} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                        <div>
                            <h3 className="text-sm font-medium text-white mb-1">Enfoque</h3>
                            <p className="text-sm text-muted-foreground">Data Analytics, Innovation</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-white mb-1">Experiencia</h3>
                            <p className="text-sm text-muted-foreground">Junio 2022 - Actual</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-muted/30 border border-white/5"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                        {/* Placeholder for if image is missing, or actual image */}
                        <img
                            src="/final_profile.jpg"
                            alt={profile.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML += '<span class="text-6xl">👤</span>'
                            }}
                        />
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                </motion.div>

            </div>
        </section>
    );
}
