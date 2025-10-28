import "../globals.css";

export const metadata = {
  title: "Juna Port",
  description: "Shipping my info, to you",
};

export default function MainLayout({ children }){
    return(
        <html lang="en">
            <body className="min-h-screen min-w-screen">
                {children}
            </body>
        </html>
    )
}