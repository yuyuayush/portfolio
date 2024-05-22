
import Hero from "@/components/Hero";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Approch from "@/components/Approch";

export default function Home() {
  return (
   <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="w-full max-w-7xl">
    <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProject/>
        <Client/>
        <Experience/>
        <Approch/>
    </div>

   </main>
  );
}
