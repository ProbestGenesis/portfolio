"use client"

import { useState } from "react"
import { data } from "@/data/project"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import Image from "next/image"
import Link from "next/link"
import { LinkIcon } from "lucide-react"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { motion } from "motion/react"
import { Button } from "../ui/button"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function ProjectPage() {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="flex items-center justify-center flex-col space-y-12  py-4 min-h-[70vh]">
        <span className="flex items-center flex-col space-x-1 ">
            <h1 className="text-2xl">Mes Projets</h1>

            <p className="text-center text-muted-foreground text-sm">
            Chaque projet que je réalise est pensé pour répondre aux besoins spécifiques de mes clients et offrir une solution adaptée à leurs attentes.
            </p>
        </span>

        <TooltipProvider>
          <motion.div 
            initial={{opacity:0}}  
            whileInView={{opacity: 1, scale: 1.1}}  
            className=" flex flex-wrap items-center justify-center gap-6 w-[90%] px-4"
          >
            {
              data.map(item => (
                <Card key={item.id} className="hover:scale-105 transition-all min-h-[200px] flex flex-col"> 
                  <CardHeader className="flex items-center gap-2">
                    <div className="relative w-[50px] h-[50px] rounded-full">  
                      <Image src={item.icon} alt={`${item.name} logo`} fill objectFit="contain" className="rounded-full" /> 
                    </div>
                    <h1 className="font-bold text-xl"> {item.name} </h1>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">{item.description}</p>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <div className="flex justify-between items-center w-full">
                       <div>
                        {item.link?.length === 0  ?   
                            <Tooltip>
                              <TooltipTrigger>
                                <Button variant="link" className="flex gap-2 items-center" >Lien <LinkIcon size={18}/> </Button>
                              </TooltipTrigger>

                              <TooltipContent>
                                Aucun lien actuellement disponible
                              </TooltipContent>
                            </Tooltip>
                          :

                          <Link href={item.link} className="flex gap-3 items-center" >Lien <LinkIcon size={18}/>  </Link>
                        }
                        </div> 

                      <div>
                        <p className="text-sm">{ `Commencé le ${item.started}` } </p>
                      </div>
                    </div> 
                  </CardFooter>
                </Card>
              ))
            } 
          </motion.div>
        </TooltipProvider>

    </div>
  )
}

export default ProjectPage