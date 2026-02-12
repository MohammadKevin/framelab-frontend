"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        if (identifier === "nendra" && password === "12345") {
            router.push("/user");
            return;
        }

        if (identifier === "admin" && password === "020309") {
            router.push("/admin");
            return;
        }

        setError("Invalid username or password");
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 -z-10" />
            <div className="absolute w-[600px] h-[600px] bg-purple-400/30 blur-[160px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md bg-white/85 backdrop-blur-xl rounded-[32px] shadow-2xl p-8"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Login to continue to FrameLab
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            required
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="nendra / admin"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-500 text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold shadow-xl hover:bg-pink-600 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-pink-500 font-semibold">
                        Sign Up
                    </Link>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-gray-700 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
