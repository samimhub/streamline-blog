"use client"
import { ArrowRight, CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";

// TypeScript Interface for Order Response
interface OrderResponse {
    id: string;
    amount: number;
  }
  
  // Function to load the Razorpay script dynamically
  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  

export default function Pricing() {
    const PlansMap=[
        {
            id:'Basic',
            name:'Basic',
            description:'Get Started with Vlogify!',
            price:10,
            item:["3 Blog post","3 Transcription"],
            paymentLink:'https://rzp.io/rzp/j3EEoCae',
        },
        {
            id:'Pro',
            name:'Pro',
            description:'All Blog Post,lets go!',
            price:30,
            item:["Unlimited Blog post","Unlimited Transcription"],
            paymentLink:'https://rzp.io/rzp/q6GOXFXr',
        }
    ]
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="flex items-center justify-center w-full pb-6">
        <h2 className="font-bold text-xl uppercase mb-8 text-purple-600">
          PRICING
        </h2>
      </div>
      <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {
            PlansMap.map(({name,price,description,item,paymentLink,id},index)=>(
                <div key={index} className="relative w-full max-w-lg">
            <div className={cn("relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 rounded-2xl border-[1px] border-gray-500/20",id=='Pro' && 'border-violet-500 gap-5 border-2')}>
                <div className="flex justify-between items-center gap-4">
                    <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                    <p className="text-base mt-2">{description}</p>
                </div>
          
            <div className="flex gap-2">
                <p className="text-5xl tracking-tighter font-extralight">
                    ${price}
                </p>
                <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs font-semibold">
                        USD
                    </p>
                    <p className="text-xs">/month</p>
                </div>
            </div>
            <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                {
                    item.map((items,index)=>(
                        <li 
                        key={index}
                        className="flex items-center gap-2">
                            <CheckIcon size={17}></CheckIcon>
                            <span>{items}</span>
                        </li>
                    ))
                }
            </ul>
            <div>
                <Button  
                variant={'link'}
                className={cn("border-2 rounded-2xl flex gap-2 bg-black text-gray-200",id=='Pro' && 'border-amber-300 px-4')}>
                    <Link
                    href={paymentLink}
                    className="flex gap-1 items-center">
                        PAY NOW
                        <ArrowRight size={18}/>
                    </Link>
                </Button>
            </div>
            </div>
        </div>       
            ))
        }
      </div>
      </section>
  )
}