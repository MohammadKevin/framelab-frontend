"use client";
import { motion } from "framer-motion";

export default function Preview() {
    return (
        <section className="relative py-32 flex justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[520px] h-[520px] bg-purple-400/30 blur-[160px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white/85 backdrop-blur-xl rounded-[32px] shadow-2xl p-6 w-[420px]"
            >
                <div className="h-64 rounded-2xl overflow-hidden">
                    <img
                        src="/face1.jpg"
                        alt="preview"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="mt-4 flex gap-2">
                    {["Natural", "Warm", "Cool", "Mono"].map((f) => (
                        <div
                            key={f}
                            className="flex-1 h-8 rounded-full
                         bg-pink-200/70 text-pink-700
                         text-xs font-semibold
                         flex items-center justify-center"
                        >
                            {f}
                        </div>
                    ))}
                </div>

                <button
                    className="mt-5 w-full bg-pink-500 text-white py-3 rounded-full
                     font-semibold shadow-xl hover:bg-pink-600 transition"
                >
                    Capture Photo
                </button>
            </motion.div>
        </section>
    );
}
