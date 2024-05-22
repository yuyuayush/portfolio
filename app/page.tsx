
import Hero from "@/components/Hero";
import { navItems } from "@/data";

import Image from "next/image";
import components from "@/components";

const { Grid, RecentProject, Client, Experience, Approch, Footer,FloatingNav } = components;


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
        <Footer/>
    </div>

   </main>
  );
}
