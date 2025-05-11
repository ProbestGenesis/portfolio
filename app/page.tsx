
import Footer from "@/components/footer";
import LandingPage from "@/components/landing";
import ProjectPage from "@/components/project";

import Skills from "@/components/skils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col space-y-24">
      <div>
       <LandingPage />
      </div> 

      <div>
        <Skills />
      </div>

      <div>
        <ProjectPage />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}
