import "../globals.css";
import { ProfileProvider } from "./hook/useProfile";
import { WindowProvider } from "./hook/useWindow";

export const metadata = {
  title: "Juna Port",
  description: "Shipping my info, to you",
};

export default function MainLayout({ children }){
    return(
        <html lang="en">
            <body className="h-full w-full overflow-x-hidden bg-black">
                <WindowProvider>
                    <ProfileProvider>
                        {children}
                    </ProfileProvider>
                </WindowProvider>
            </body>
        </html>
    )
}