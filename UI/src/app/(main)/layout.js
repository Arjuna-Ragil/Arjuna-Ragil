import { Inter } from "next/font/google";
import "../globals.css";
import Starfield from "./component/starfield";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Juna Space Port",
    description: "Shipping my info, to you",
};

export default function MainLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <body className="font-sans selection:bg-brand selection:text-white min-h-screen w-full overflow-x-hidden">
                <Starfield />
                <div className="relative z-10 w-full h-full">
                    {children}
                </div>
            </body>
        </html>
    )
}