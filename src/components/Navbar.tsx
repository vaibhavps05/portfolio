"use client";
import React, { useState } from "react";
import {Menu, MenuItem,} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div className={cn("fixed top-10 inset-x-0 max-w-sm mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <a href="/">
            <MenuItem  setActive={setActive} active={active} item="Home"></MenuItem>
          </a>
          <a href="/projects">
            <MenuItem  setActive={setActive} active={active} item="Projects"></MenuItem>
          </a>
          <a href="/experience">
            <MenuItem  setActive={setActive} active={active} item="Experience"></MenuItem>
          </a>
        </Menu>
      </div>
    ); 
  }

export default Navbar