"use client";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-40 text-center bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-extrabold mb-8"
            >
                Create Magic in Seconds
            </motion.h2>

            <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-pink-600 px-14 py-5 rounded-full
                   text-xl font-bold shadow-2xl"
            >
                Launch FrameLab
            </motion.button>
        </section>
    );
}
