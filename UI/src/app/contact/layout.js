import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Contact | Arjuna Ragil",
    description: "Get in touch with Arjuna Ragil",
};

export default function ContactLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen w-full bg-slate-950 text-slate-50 overflow-x-hidden selection:bg-purple-500/30`}>
                {children}
            </body>
        </html>
    );
}
