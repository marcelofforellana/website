import React from 'react';
import { profile } from '@/data/profile';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a href={profile.contact.social.github} target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                    <Github size={20} />
                </a>
                <a href={profile.contact.social.linkedin} target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href={profile.contact.social.twitter} target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                    <Twitter size={20} />
                </a>
            </div>
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
        </footer>
    );
}
