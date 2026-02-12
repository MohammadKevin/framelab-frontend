"use client";
import { motion } from "framer-motion";

const steps = [
    { title: "Open Camera", desc: "Allow camera access from your browser" },
    { title: "Choose Style", desc: "Select filter & frame you love" },
    { title: "Download", desc: "Capture & save instantly" },
];

export default function Steps() {
    return (
        <section className="py-24 bg-gray-50">
            <h2 className="text-center text-4xl font-bold text-gray-800 mb-16">
                How It Works
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-md text-center"
                    >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                            {i + 1}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
