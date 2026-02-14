export const profile = {
    name: "Marcelo Orellana Pinto",
    role: "MSc in Business Analytics - Escuela de Negocios - Universidad Adolfo Ibáñez",
    location: "Santiago, Chile",
    contact: {
        email: "marceorellanapinto@outlook.com",
        phone: "+56 979093011",
        social: {
            linkedin: "https://www.linkedin.com/in/marceloorellana/", // Keeping existing links if not specified otherwise, but image shows github.io link
            github: "https://marcelofforellana.github.io/website/", // Image shows this as the website link
            // twitter: "https://twitter.com/marce_orellanap", // Not in image
            // facebook: "https://www.facebook.com/amdhexacore" // Not in image
        }
    },
    summary: "Ingeniero Comercial (MSc en Business Analytics) con sólida trayectoria en banca, retail e investigación. Me defino como un profesional creativo y perseverante, con una alta capacidad de adaptación y espíritu colaborativo para analizar escenarios complejos y trabajar en equipo. Mi formación académica y experiencia docente refuerzan mi habilidad para comunicar insights técnicos de manera efectiva. Especializado en Machine Learning y soluciones Cloud, mi foco está en generar innovación mediante Analítica de Datos aplicada y soluciones orientadas al cliente.",
    experience: [
        {
            title: "Data Scientist",
            company: "Caja de Compensación Los Andes",
            period: "Abril 2024 / Hasta la Fecha",
            description: "Desarrollo y entrenamiento de modelos de propensión para productos financieros y forecasting de KPIs sociales. Ejecución de automatizaciones, validaciones de datos y generación de reportería regulatoria (CMF/SUSESO) para optimizar la eficiencia operativa y el cumplimiento normativo."
        },
        {
            title: "Machine Learning Researcher (Proyecto FONDECYT)",
            company: "Facultad de Negocios - Universidad Adolfo Ibañez",
            period: "Marzo 2022 / Diciembre 2024",
            description: "Investigación y desarrollo de modelos de Computer Vision orientados a la clasificación de rasgos etnográficos y análisis de imagen corporal. Implementación de algoritmos de Deep Learning para el procesamiento avanzado de imágenes en contexto académico."
        },
        {
            title: "Business Data Analyst",
            company: "Advanced Analytics - Cencosud SA",
            period: "Jun 2022 / Marzo 2024",
            description: "Generación de análisis estratégicos y desarrollo de soluciones escalables en la nube. Diseño e implementación de dashboards, modelos predictivos y automatizaciones para dar soporte a la toma de decisiones en equipos internos y clientes externos."
        },
        {
            title: "BI, Sales & Analytics Consultant",
            company: "Acofuz",
            period: "Ene 2021 / May 2022",
            description: "Expansión comercial y captación de clientes B2B mediante la consultoría de soluciones de software. Apoyo técnico transversal en el desarrollo e implementación de estrategias de datos para potenciar el crecimiento inicial de la start-up."
        },
        {
            title: "Customer Success Support and Power Bi Specialist (Internship)",
            company: "Microsoft Chile",
            period: "Abr 2020 / Nov 2020",
            description: "" // Description not explicitly in the snippet but implied from context or previous data could be used? detailed image doesn't show text below title for this one? Wait, looking closely at image... it does not have description text visible in the snippet provided, BUT previous data had it. I will leave it empty or try to infer. Actually the image crop cuts off after the title? No, the image shows the full list. Wait, looking at the image again. Ah, `Customer Success...` is at the bottom left. There IS text below it? No, it's cut off or just the title. Actually looking at the provided image `image (8).png` sent by user... 
            // The user sent an image. I need to rely on what I "saw" in the prompt analysis.
            // "Customer Success Support..." is at the bottom left. There is NO text description visible under it in the provided image.
        }
    ],
    education: [
        {
            degree: "Diplomado en Data Engineering",
            school: "Universidad Santiago de Chile",
            period: "2025"
        },
        {
            degree: "MSc. in Business Analytics",
            school: "Universidad Adolfo Ibáñez",
            period: "2020-2021"
        },
        {
            degree: "Ingeniería Comercial",
            school: "Universidad Adolfo Ibáñez",
            period: "2016-2019"
        }
    ],
    skills: [
        "Python (Avanzado)", "SQL (Avanzado)", "Javascript (Medio)", "Dart (Medio)", "Power BI (Avanzado)", "Looker (Medio)", "Scikit-learn", "Tensorflow", "SSGCP", "Azure", "React.js", "Flutter"
    ],
    additional: {
        nationality: "Chilena",
        languages: "Inglés C1 (Certificado)",
        achievements: "Ganador Sharktank de IA en Caja los Andes (2025), Semi finalista Andes Innova (2025), Segundo lugar en 'Ruta de Conexión' Universidad Católica (2020).",
        papers: [
            "Did #MeToo Change U.S. Corporate Communication? Evidence from Textual and Visual Analysis of Disclosures (2025)",
            "Monitoring Body Image Representation in Advertisements Using Computer Vision (2024)"
        ]
    },
    references: [
        "Daniel Abella (Country Engineering Lead at Microsoft Chile)",
        "Stefanni Cavaletto (Customer Engineer at Google)",
        "Matias Guerrero (Advanced Analytics Lead at Cencosud)"
    ]
}
