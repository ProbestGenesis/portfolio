import javascript from "@/app/assets/javascript.png"
import typescript from "@/app/assets/typescript.png"
import auth from "@/app/assets/auth.webp"
import zod from "@/app/assets/zod.svg"
import nextjs from "@/app/assets/nextjs.png"
import prisma from "@/app/assets/prisma.svg"
import tailwindcss from "@/app/assets/tailwindcss.png"
import { BentoGrid, BentoGridItem } from "../ui/bento-grid"

const skilsData = [
    {
        title: 'Javascript && Typescript',
        icon1: javascript,
        icon2: typescript,
        description: "Expertise avancée en développement web moderne avec JavaScript et TypeScript."
    },


    {
        title: 'Nextjs',
        icon1: nextjs,
        description: "Maîtrise du framework React le plus puissant pour concevoir des applications web dynamiques et ultra-performantes."

    },

    {
        title: 'Tailwindcss',
        icon1: tailwindcss,
        description: "Conception d'interfaces modernes et élégantes avec Tailwind CSS. Un design épuré, responsive et optimisé pour une expérience utilisateur immersive."
    },
    {
        title: 'Un stack complet',
        icon1: auth,
        icon2: zod,
        icon3: prisma,
        description: "Une solution complète et performante, combinant une authentification sécurisée, une validation avancée et une gestion optimisée des bases de données."
    }
]
function Skills() {
  return (
    <div className="flex items-center justify-center flex-col space-y-12 py-4 min-h-[70vh] ">
        <span className="flex items-center flex-col space-x-1 px-4">
            <h1 className="text-2xl">Compétences</h1>

            <p className="text-center text-muted-foreground text-sm">
            Besoin d’une expertise technique ? Je conçois des solutions web et mobiles optimisées pour une expérience utilisateur fluide et moderne.
            </p>
        </span>

        <BentoGrid className="sm:w-[80%] xl:w-[50%] max-sm:w-[100%] max-sm:px-2">
            {
                skilsData.map((item, i) => (
                    <BentoGridItem  className={ (i === 0  || i === 3 ) ? `col-span-2` : ``}  
                        key={i}
                        title={item.title}
                        description={item.description}
                        icon1={item.icon1}
                        icon2={item.icon2 ? item.icon2 : "" }
                        icon3={item.icon3 ? item.icon3 : ""}
                       
                        idx={i}
                    />
                ))
            }
        </BentoGrid>

        <span className="sm:w-[80%] px-4">
            <p className="text-left text-muted-foreground text-sm">En complément à une expertise approfondie en développement web, je conçois également des applications natives optimisées pour mobile et desktop. Maîtrisant C#, React Native, je crée des expériences performantes, intuitives et esthétiques, adaptées aux besoins variés des utilisateurs.</p>
        </span>
    </div>
  )
}
export default Skills