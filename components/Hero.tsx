"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 -z-10" />
            <div className="absolute w-[700px] h-[700px] bg-pink-400/40 blur-[160px] rounded-full -z-10" />

            <div className="max-w-4xl px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900"
                >
                    The Future of
                    <span className="text-pink-500"> Online Photo Booth</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-8 text-lg text-gray-700 max-w-2xl mx-auto"
                >
                    Capture stunning moments with AI-powered filters, frames,
                    and instant downloads — directly from your browser.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex justify-center gap-4"
                >
                    <a href="/login"><button className="bg-pink-500 text-white px-10 py-4 rounded-full text-lg
                                shadow-xl hover:bg-pink-600 transition">
                        Start Photo Booth
                    </button></a>
                </motion.div>
            </div>
        </section>
    );
}
