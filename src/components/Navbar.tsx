"use client";

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
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <div className="container mx-auto px-auto py-8">
      <header className="hidden md:flex justify-between items-center">
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
                  <ChevronDown className="text-sm custom_blue py-0 my-0" />
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

      <header>
        <nav className="flex justify-between md:hidden">
          <Link href="/">
            <Image
              src="/images/echo-logo.jpg"
              alt="company-logo"
              height={80}
              width={80}
            />
          </Link>
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  {" "}
                  <Image
                    src="/images/echo-logo.jpg"
                    alt="company-logo"
                    height={80}
                    width={80}
                  />
                </SheetTitle>
                <SheetDescription>
                  <div className="links mt-10">
                    <ul className="flex flex-col items-start">
                      <li className="list-none my-4  text-sm cursor-pointer custom_grey">
                        Home
                      </li>
                      <li className="list-none my-4  text-sm cursor-pointer custom_grey">
                        <DropdownMenu>
                          <DropdownMenuTrigger className="outline-none flex items-center justify-center ">
                            Dropdown
                            <ChevronDown className="text-sm custom_grey py-0 my-0" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="mx-48">
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="custom_grey">
                              Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="custom_grey">
                              Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem className="custom_grey">
                              Team
                            </DropdownMenuItem>
                            <DropdownMenuItem className="custom_grey">
                              Subscription
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </li>
                      <li className="list-none my-4  text-sm cursor-pointer custom_grey">
                        About
                      </li>
                      <li className="list-none my-4  text-sm cursor-pointer custom_grey">
                        Services
                      </li>
                      <li className="list-none my-4  text-sm cursor-pointer custom_grey">
                        FAQ
                      </li>
                      <li className="list-none my-4 text-sm cursor-pointer custom_grey">
                        <Button
                          variant="ghost"
                          className="custom_bg_blue custom_yellow rounded-full border border-transparent hover:border-gray-200 transition duration-300"
                        >
                          Contact Us
                        </Button>
                      </li>
                    </ul>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
