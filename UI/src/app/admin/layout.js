import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Mission Control - Admin",
    description: "Space Portfolio Admin Panel",
};

export default function AdminLayout({ children }) {
    return (
        <html lang="en" className={`${inter.className} dark`}>
            <body className="bg-[#05050a] text-slate-100 min-h-screen font-sans selection:bg-[#a855f7] selection:text-white overflow-x-hidden">
                <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1e1b4b]/20 via-[#05050a] to-[#05050a]">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
