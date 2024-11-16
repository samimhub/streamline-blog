import BgGradient from "@/components/common/bg-gradient";
import Banner from "@/components/home/banner";
import HowItsWorks from "@/components/home/HowItsWorks";
import Pricing from "@/components/home/pricing";
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
      <Pricing/>
      <div className="flex justify-center items-center">
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
      </div>
      <footer className="bg-gray-200/20 flex items-center h-20 py-24 px-12 relative overflow-hidden flex-col gap-2">
        <a className="font-semibold underline" href="https://www.instagram.com/samim__zephyr/">Build By Samim</a>
        <p className="text-lg">All right reserved {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
