'use client'

import { useSwitch } from "../hook/useSwitch";
import Content from "./content";
import Intro from "./intro";

export default function Container(){
    const { showContent } = useSwitch()

    return(
        <>
            {showContent ? 
                <Content/>
            :
                <Intro/>
            }
            
        </>
    )
}