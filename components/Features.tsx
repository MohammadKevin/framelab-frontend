"use client";
import { motion } from "framer-motion";

const features = [
    ["AI Filters", "Look stunning instantly"],
    ["No App Needed", "Works directly in browser"],
    ["Instant Download", "Save photos in one click"],
];

export default function Features() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
                {features.map(([title, desc], i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-3xl p-10 shadow-lg"
                    >
                        <h3 className="text-xl font-bold mb-3">{title}</h3>
                        <p className="text-gray-600">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
