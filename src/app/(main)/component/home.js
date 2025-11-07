export default function Home(){
    const tagline = `"Scene, Camera, Renderer: The holy trinity of our new dimension"`

    return(
        <div className="min-h-screen h-full w-full grid grid-rows-2 p-5" id="content">
            <div className="h-full w-full flex items-center justify-center flex-col gap-3 text-white">
                <h1 className="text-3xl font-bold text-center">{tagline}</h1>
                <p className="text-xl text-center">Changing Plain Website, To Interactive and Responsive 3D Space</p>
            </div>
        </div>
    )
}