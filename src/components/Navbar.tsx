import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <div className="container mx-auto px-auto py-8">
      <header className="flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/echo-logo.jpg"
              alt="company-logo"
              height={80}
              width={80}
            />
          </Link>
        </div>
        <div className="links">
          <ul className="flex justify-between items-center">
            <li className="list-none mx-2 px-2 text-sm cursor-pointer custom_blue">
              Home
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer custom_blue">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none flex items-center justify-center px-2">
                  Dropdown
                  <ChevronDown className="text-sm custom_blue py-0 my-0"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer custom_blue">
              About
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer custom_blue">
              Services
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer custom_blue">
              FAQ
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer custom_blue">
              <Button
                variant="ghost"
                className="custom_bg_blue custom_yellow rounded-full border border-transparent hover:border-gray-200 transition duration-300"
              >
                Contact Us
              </Button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
