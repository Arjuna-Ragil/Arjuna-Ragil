import "../globals.css";

export const metadata = {
  title: "Juna Space Port",
  description: "Shipping my info, to you",
};

export default function MainLayout({ children }){
    return(
        <html lang="en">
            <body className="h-full w-full overflow-x-hidden bg-black">
                {children}
            </body>
        </html>
    )
}