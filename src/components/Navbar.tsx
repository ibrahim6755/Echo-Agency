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
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toggle } from "./Toggle";

function Navbar() {
  return (
    <div className=" mx-auto  py-6 sticky top-0 dark:bg-black bg-white">
      <header className="container hidden md:flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold main-color">
            Nimra Nisar
          </Link>
        </div>
        <div className="links">
          <ul className="flex justify-between items-center">
            {/* <li className="list-none mx-2 px-2 text-sm cursor-pointer main-color">
              Home
            </li> */}

            {/* <li className="list-none mx-2 px-2 text-sm cursor-pointer main-color">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none flex items-center justify-center px-2">
                  Dropdown
                  <ChevronDown className="text-sm main-color py-0 my-0" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-100 shadow-lg">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-sm text-gray-700 cursor-pointer shadow-md">
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-sm text-gray-700 cursor-pointer shadow-md">
                    Team
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li> */}

            <li className="list-none mx-2 px-2 text-sm cursor-pointer main-color font-bold">
              <Link href="#about">About</Link>
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer main-color font-bold">
            <Link href="#services">Services</Link>
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer main-color font-bold">
            <Link href="#projects">Projects</Link>
            </li>
            <li className="list-none my-4  text-sm cursor-pointer main-color font-bold">
              <Toggle />
            </li>
            <li className="list-none mx-2 px-2 text-sm cursor-pointer main-color font-bold">
              <Button
                variant="ghost"
                className=" font-bold rounded-full border border-transparent main-color-bg sec-color1 hover:border-gray-200 transition duration-300"
              >
                Contact Me
              </Button>
            </li>
          </ul>
        </div>
      </header>

      <header>
        <nav className="flex justify-between items-center md:hidden">
          <Link href="/">
            {/* <Image
              src="/images/echo-logo.jpg"
              alt="company-logo"
              height={80}
              width={80}
            /> */}
            <h1 className="text-2xl font-bold main-color">Nimra Nisar</h1>
          </Link>
          <div className="div flex">
            <li className="list-none mx-2 text-sm cursor-pointer main-color">
              <Toggle />
            </li>
            <Sheet>
              <SheetTrigger className="main-color">
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    {/* <Image
                      src="/images/echo-logo.jpg"
                      alt="company-logo"
                      height={80}
                      width={80}
                    /> */}
                    <h1 className="text-start text-2xl font-bold main-color">Nimra Nisar</h1>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="links mt-10 ">
                      <ul className="flex flex-col items-start">
                        <SheetClose asChild>
                          <Button type="submit">
                            <li className="list-none my-4 text-sm cursor-pointer main-color">
                             <Link href="/">Home</Link>
                            </li>
                          </Button>
                        </SheetClose>

                        {/* <li className="list-none my-4 text-sm cursor-pointer main-color">
                          <DropdownMenu>
                            <DropdownMenuTrigger className="ms-4 outline-none flex items-center justify-center">
                              Dropdown
                              <ChevronDown className="text-sm main-color py-0 my-0" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mx-48">
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="main-color">
                                <SheetClose asChild>
                                  <Button type="submit">
                                    <li className="list-none my-4 text-sm cursor-pointer main-color">
                                      Profile
                                    </li>
                                  </Button>
                                </SheetClose>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="main-color">
                                <SheetClose asChild>
                                  <Button type="submit">
                                    <li className="list-none my-4 text-sm cursor-pointer main-color">
                                      Billing
                                    </li>
                                  </Button>
                                </SheetClose>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="main-color">
                                <SheetClose asChild>
                                  <Button type="submit">
                                    <li className="list-none my-4 text-sm cursor-pointer main-color">
                                      Team
                                    </li>
                                  </Button>
                                </SheetClose>
                              </DropdownMenuItem>
                              <SheetClose asChild>
                                <Button type="submit">
                                  <li className="list-none my-4 text-sm cursor-pointer main-color">
                                    Subscription
                                  </li>
                                </Button>
                              </SheetClose>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </li> */}

                        <SheetClose asChild>
                          <Button type="submit">
                            <li className="list-none my-4 text-sm cursor-pointer main-color">
                              <Link href="#about">About</Link>
                            </li>
                          </Button>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button type="submit">
                            <li className="list-none my-4 text-sm cursor-pointer main-color">
                            <Link href="#services">Services</Link>
                            </li>
                          </Button>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button type="submit" >
                            <li className="list-none my-4 text-sm cursor-pointer main-color">
                            <Link href="#projects">Projects</Link>
                            </li>
                          </Button>
                        </SheetClose>
                        <li className="list-none my-4 text-sm cursor-pointer main-color">
                          <Button
                            variant="ghost"
                            className="rounded-full border border-transparent main-color-bg sec-color1 hover:border-gray-200 transition duration-300"
                          >
                            <SheetClose asChild>
                              <Button className="p-0">Contact Me</Button>
                            </SheetClose>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
