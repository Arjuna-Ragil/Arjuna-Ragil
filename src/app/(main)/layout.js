import "../globals.css";
import { SwitchProvider } from "./hook/useSwitch";
import { WindowProvider } from "./hook/useWindow";

export const metadata = {
  title: "Juna Port",
  description: "Shipping my info, to you",
};

export default function MainLayout({ children }){
    return(
        <html lang="en">
            <body className="h-full w-full overflow-x-hidden">
                <SwitchProvider>
                    <WindowProvider>
                        {children}
                    </WindowProvider>
                </SwitchProvider>
            </body>
        </html>
    )
}