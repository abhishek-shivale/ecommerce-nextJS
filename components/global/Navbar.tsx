"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { UserImage} from "@/lib/User";
import { signIn, signOut, useSession } from "next-auth/react"

export default function Component() {
    const {data:session} = useSession();

  return (
    <nav className="flex flex-row items-center h-16 px-5 border-b border-gray-200 dark:border-gray-850">
      <div className="flex items-center gap-4 lg:gap-8">
        <Link className="flex items-center gap-2 text-sm font-medium" href="/">
          <PackageIcon className="w-6 h-6" />
          <span>Package</span>
        </Link>
      </div>
      <div className="flex-1 min-w-0 justify-center flex items-center gap-4 lg:gap-8">
        <div className="relative w-full max-w-md lg:max-w-xs">
          <SearchIcon className="absolute left-3 h-4 w-4 top-2/4 transform -translate-y-2/4 text-gray-500 dark:text-gray-400" />
          <Input
            className="w-full pl-10 border-0 box-shadow-none appearance-none bg-white text-gray-900/60 dark:bg-gray-950/60 dark:text-gray-950/60"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <Button className="ml-auto mx-4" size="icon" variant="ghost">
        <ShoppingBagIcon className="w-6 h-6" />
        <span className="sr-only">View cart</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-full border border-gray-200 overflow-hidden object-fill w-12 h-12 dark:border-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800">
            <span className="sr-only">User Profile</span>
            <UserImage />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {
            session?.user?.email? (<>
            <Link href={"/user/settings"}>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
          <DropdownMenuItem>My Orders</DropdownMenuItem>
            </>) : (<>
            <DropdownMenuItem onClick={() => signIn()}>Signin</DropdownMenuItem>
            </>)
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

function PackageIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingBagIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

