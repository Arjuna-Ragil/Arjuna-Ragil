import "../globals.css";
import { ProjectDataProvider } from "../hooks/useProjectData";

export const metadata = {
  title: "Juna Drawer",
  description: "Shipping my info, to you",
};

export default function RootLayout({ children }) {
  const secretMessage = "Don't Break My Drawer >:("

  return (
    <html lang="en">
      <body className="min-h-screen min-w-screen">
        <div className="bg-sky1 fixed -z-50 h-screen w-screen top-2">
          <p className="w-full pt-10 text-center">{secretMessage}</p>
        </div>
        <ProjectDataProvider>
          {children}
        </ProjectDataProvider>
      </body>
    </html>
  );
}
