import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";


export default function Banner() {
  return (
    <section className="lg:max-w-6xl mx-auto flex flex-col justify-center items-center z-0 py-28 pt-32 transition-all animate-in">
        <h1 className="py-6 text-center">
            Turn yours word into{" "}
            <span className="underline underline-offset-8 decoration-dashed decoration-purple-300">captivating</span>{" "}blogs post
        </h1>
        <h2 className="text-center px-4 lg:px-0 lg:max-w-4xl">
            Convert your video or voice to Blog Post in a second using AI!
        </h2>
        <Button 
        variant={"link"}
        className="mt-6 text-xl rounded-full px-12 py-8 lg:mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold shadow-lg hover:no-underline">
            <Link href='/#pricing'>
            <span className="relative">
                Get Vlogify{" "}
                <ArrowRight className="absolute -bottom-1 left-0 h-0.5 w-full bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"/>
                </span>
            </Link>
        </Button>
    </section>
  )
}