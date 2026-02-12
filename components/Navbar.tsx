"use client";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 inset-x-0 z-50 px-12 py-5 flex justify-between items-center bg-white/70 backdrop-blur-xl"
        >
            <h1 className="text-2xl font-extrabold tracking-tight text-pink-500">
                FrameLab
            </h1>

            <div className="hidden md:flex gap-10 text-sm text-gray-700">
                <a className="hover:text-pink-500 transition" href="#">Home</a>
                <a className="hover:text-pink-500 transition" href="#">How it works</a>
                <a className="hover:text-pink-500 transition" href="#">Pricing</a>
            </div>

            <div className="flex gap-3">
                <a href="/login">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2 rounded-full border border-pink-400 text-pink-500 font-medium"
                >
                    Login
                </motion.button></a>

                <a href="/signup">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2 rounded-full bg-pink-500 text-white font-medium shadow-md hover:bg-pink-600 transition"
                >
                    Sign Up
                </motion.button></a>
            </div>
        </motion.nav>
    );
}
