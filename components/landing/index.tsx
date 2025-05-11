"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col relative pt-[110px] min-h-[100vh]">
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60 max-sm:-top-5 max-sm:left-80 max-sm:hidden" 
            fill="white"
        />
          <div className="flex items-center justify-center space-y-6 flex-col">
            <h1 className="text-2xl">Developpeur fullstack</h1>

            <div className="flex items-center space-x-6">
                  <Link href="https://www.linkedin.com/in/oyetounde-ange-dimon-32b13731a" className="rounded-full border active:bg-accent hover:bg-accent p-2 transition-colors">
                    <Linkedin strokeWidth={2.5} size={28} />
                  </Link>

                  <span className="rounded-full border active:bg-accent hover:bg-accent p-2 transition-colors">
                    <Youtube strokeWidth={2.5} size={28} />
                  </span>

                  <span className="rounded-full border active:bg-accent hover:bg-accent p-2 transition-colors">
                    <Facebook strokeWidth={2.5} size={28} />
                  </span>

                  <span className="rounded-full border active:bg-accent hover:bg-accent p-2 transition-colors">
                    <Twitter strokeWidth={2.5} size={28} />
                  </span>
            </div>
          </div>
 
    <div className="relative flex sm:h-[50vh] max-sm:mt-20 w-full justify-center items-center">
            <div className="xl:w-[40%] sm:w-[70%] max-sm:px-3 flex flex-col   space-y-2">
                  <div className="flex space-x-4 items-center">
                    <Avatar>
                      <AvatarImage />
                      <AvatarFallback>Dev</AvatarFallback>
                    </Avatar>

                    <h1 className="font-extrabold text-2xl">
                        Dimon Oyétounde Ange
                      </h1>
                  </div> 
                    

                 <div className="ms-6">  
                   <p> 
                    Passionné par la création de solutions numériques innovantes, j'accompagne les entreprises et particuliers dans le  développement d'applications<strong className="border p-1 bg-gradient-to-b from-white/10 to-transparent  cursor-pointer bg-clip-border mx-0.5"> web </strong>et <strong className="border p-1 bg-gradient-to-b from-white/10 to-transparent  cursor-pointer bg-clip-border mx-0.5"> mobiles </strong> adaptées à leurs besoins. Mon expertise en développement fullstack me permet de concevoir des outils performants et ergonomiques, optimisant l'expérience utilisateur et la productivité.
                   </p>
                 </div>
                </div>
      </div>
    </div>
  );
}

export default LandingPage
