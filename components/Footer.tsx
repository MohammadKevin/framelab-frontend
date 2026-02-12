"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[160px] rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-4 gap-12"
            >
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-extrabold text-white mb-4">
                        FrameLab
                    </h2>
                    <p className="text-gray-400 max-w-md leading-relaxed">
                        The next generation online photo booth.
                        Capture moments beautifully with modern filters, frames,
                        and instant downloads — straight from your browser.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Product</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a className="hover:text-white transition" href="#">Features</a></li>
                        <li><a className="hover:text-white transition" href="#">How it works</a></li>
                        <li><a className="hover:text-white transition" href="#">Pricing</a></li>
                        <li><a className="hover:text-white transition" href="#">Demo</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a className="hover:text-white transition" href="#">About</a></li>
                        <li><a className="hover:text-white transition" href="#">Contact</a></li>
                        <li><a className="hover:text-white transition" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-white transition" href="#">Terms</a></li>
                    </ul>
                </div>
            </motion.div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <span>© {new Date().getFullYear()} FrameLab. All rights reserved.</span>
                    <span>
                        Built with ❤️ by <a className="hover:text-white transition" href="#">Danendra | Kevin</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
