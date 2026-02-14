/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'], // Or similar for headings
            },
            colors: {
                primary: {
                    DEFAULT: '#3b82f6', // blue-500
                    foreground: '#ffffff',
                },
                background: '#0a0a0a', // very dark
                foreground: '#ededed',
                muted: {
                    DEFAULT: '#1f2937', // gray-800
                    foreground: '#9ca3af', // gray-400
                },
                card: {
                    DEFAULT: '#111827', // gray-900
                    foreground: '#ededed',
                },
                accent: {
                    DEFAULT: '#8b5cf6', // violet-500
                    foreground: '#ffffff',
                }
            },
        },
    },
    plugins: [],
}
