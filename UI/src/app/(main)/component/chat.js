"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import axios from "axios";

export default function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false); // Controls full-screen mode
    const [messages, setMessages] = useState([
        { role: "ai", content: "Hi there! I am Juna's AI assistant. Ask me anything about his projects, tech stack, or experience!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await axios.post(`/api/v1/chat`, {
                question: userMessage
            });

            if (response.data && response.data.status === "success") {
                setMessages((prev) => [...prev, { role: "ai", content: response.data.data }]);
            } else {
                setMessages((prev) => [...prev, { role: "ai", content: "Sorry, I received an invalid response format." }]);
            }
        } catch (error) {
            console.error("Chat API Error:", error);
            setMessages((prev) => [...prev, { role: "ai", content: "Oops! My connection to the AI engine was lost. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`fixed z-[60] flex flex-col items-end transition-all text-left duration-300 ${isExpanded ? "inset-4 sm:inset-8" : "bottom-6 right-6"}`}>
            {/* Chat Window */}
            <div
                className={`transition-all duration-300 ease-in-out origin-bottom-right flex flex-col ${isOpen ? "scale-100 opacity-100 mb-4" : "scale-0 opacity-0 h-0 w-0 overflow-hidden"} ${isExpanded ? "w-full h-full" : "w-[350px] sm:w-[400px] h-[500px] max-h-[70vh]"}`}
            >
                <div className="glass-card w-full h-full flex flex-col bg-[#0f0a19]/90 border border-[#c084fc]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-[#1e1b4b] bg-white/5 isolate shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#a855f7] blur-md opacity-40 rounded-full"></div>
                                <div className="size-8 rounded-full bg-[#1e1b4b] border border-[#a855f7]/50 flex items-center justify-center relative z-10">
                                    <Bot size={18} className="text-[#c084fc]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-100">Juna AI</h3>
                                <p className="text-[10px] text-[#a855f7] font-semibold uppercase tracking-wider flex items-center gap-1">
                                    <span className="size-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:block"
                                title={isExpanded ? "Minimize" : "Expand"}
                            >
                                {isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setTimeout(() => setIsExpanded(false), 300); // Reset expand on close
                                }}
                                className="p-1.5 text-slate-400 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#a855f7]/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#a855f7]/40">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} group`}>
                                <div className={`flex max-w-[85%] gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>

                                    <div className="shrink-0 mt-auto hidden sm:block">
                                        {msg.role === "ai" ? (
                                            <div className="size-6 rounded-full bg-[#1e1b4b] border border-[#a855f7]/30 flex items-center justify-center">
                                                <Bot size={12} className="text-[#c084fc]" />
                                            </div>
                                        ) : (
                                            <div className="size-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                                <User size={12} className="text-slate-300" />
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === "user"
                                            ? "bg-[#a855f7]/20 border border-[#a855f7]/30 text-slate-100 rounded-br-sm"
                                            : "bg-white/5 border border-white/10 text-slate-300 rounded-bl-sm"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="flex max-w-[80%] gap-2">
                                    <div className="shrink-0 mt-auto hidden sm:block">
                                        <div className="size-6 rounded-full bg-[#1e1b4b] border border-[#a855f7]/30 flex items-center justify-center">
                                            <Bot size={12} className="text-[#c084fc]" />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-bl-sm flex items-center gap-1.5">
                                        <div className="size-1.5 rounded-full bg-[#c084fc]/50 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="size-1.5 rounded-full bg-[#c084fc]/50 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="size-1.5 rounded-full bg-[#c084fc]/50 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-[#1e1b4b]/50 bg-black/20">
                        <form onSubmit={handleSend} className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask Juna AI..."
                                disabled={isLoading}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-1.5 p-2 rounded-full bg-[#a855f7] text-white hover:bg-[#c084fc] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all disabled:opacity-50 disabled:hover:bg-[#a855f7] disabled:hover:shadow-none"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Floating Toggle Button */}
            {!isExpanded && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative group flex items-center justify-center size-14 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 z-50 ${isOpen
                        ? "bg-white/10 border border-white/20 text-slate-300 hover:bg-white/20"
                        : "bg-[#a855f7] border border-[#c084fc] text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                        }`}
                >
                    {/* Glow behind button when closed */}
                    {!isOpen && (
                        <div className="absolute inset-0 bg-[#c084fc] rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                    )}

                    <div className="relative z-10 transition-transform duration-300">
                        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                    </div>
                </button>
            )}
        </div>
    );
}
