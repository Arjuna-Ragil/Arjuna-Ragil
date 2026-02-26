"use client";

import { Rocket, Lock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post("http://localhost:8080/api/v1/open/login", {
                username,
                password
            });

            if (response.data.token) {
                // Store the JWT token in cookies matching the backend AuthMiddleware's expectation
                document.cookie = `authorization=${response.data.token}; path=/; max-age=172800; samesite=Lax`;
                // Redirect to admin panel
                router.push("/admin");
            }
        } catch (err) {
            console.error("Login failed:", err);
            setError(err.response?.data?.error || err.response?.data?.message || "Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full max-w-md">
            <div className="flex flex-col items-center mb-8">
                <div className="size-16 rounded-full bg-[#a855f7] flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-4">
                    <Rocket size={32} className="text-white" />
                </div>
                <h1 className="text-3xl font-black text-slate-100 tracking-tight text-center">Mission Control</h1>
                <p className="text-[#c084fc]/80 text-sm mt-2 text-center">Enter your credentials to access the fleet command.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-[#0f0a19]/80 backdrop-blur-xl border border-[#c084fc]/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full">
                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Username</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c084fc]/50">
                                <User size={18} />
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="username"
                                className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-3 pl-12 pr-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Password</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c084fc]/50">
                                <Lock size={18} />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-3 pl-12 pr-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            "Initiate Launch"
                        )}
                    </button>

                    <div className="mt-4 text-center">
                        <Link href="/" className="text-xs text-[#c084fc]/60 hover:text-[#c084fc] transition-colors">
                            &larr; Return to Base (Home)
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
