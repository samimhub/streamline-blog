import BgGradient from "@/components/common/bg-gradient";
import Banner from "@/components/home/banner";
import HowItsWorks from "@/components/home/HowItsWorks";
import { Dot } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient (#e5e7eb_1px),(transparent_1px)]
  [background-size:16px_16px]">
    <BgGradient/>
      <Banner/>
      <HowItsWorks/>
      <div className="flex justify-center items-center">
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
      </div>
      {/*
      <Divider/>
      <Pricing/>
      <Divider/>
      <Footer/> */}
    </main>
  );
}
