import { Ghost } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

//tiny component
const NavLink=({href,children}:{href:string,children:React.ReactNode})=>{
    return <Link 
    href={href}
    className="transition-colors duration-200 text-gray-600 hover:text-purple-500">
        {children}
    </Link>
}

export default function Header() {
  return (
    <nav className="container flex justify-between items-center px-8 py-4 mx-auto">
        <div className="flex lg:flex-1">
        
        <NavLink href='/'>
            <span className="flex items-center gap-2 shrink-0">
                <Ghost className="hover:rotate-12 transform transition duration-100 ease-in-out"/>
                <span className="font-extrabold text-lg">
                    Vlogify
                </span>
            </span>
        </NavLink>
        </div>
        <div className="flex lg:justify-center gap-2 lg:gap-12 lg:items-center">
            <NavLink href='#/pricing'>
            Pricing
            </NavLink>
            <SignedIn>
            <NavLink href='#/post'>
            Your Posts
            </NavLink>
            </SignedIn>
        </div>
        <div className="flex lg:justify-end lg:flex-1">
            <SignedIn>
            <div className="flex gap-2 items-center">
                <NavLink href="/dashboard">
                    Upload a video
                </NavLink>
                {/* profile */}
            <UserButton />
          </div>
          </SignedIn>
          <SignedOut>
            <SignInButton>
                <NavLink href="/sign-in">
                    Sign In
                </NavLink>
            </SignInButton>
            </SignedOut>
            </div>
        
    </nav>
  )
}