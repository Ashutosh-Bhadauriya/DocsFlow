"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import * as React from "react";

export const MainNav = () => {
  return (
    <div>
      <span className="font-bold">
        <Link href="/">{siteConfig.name}</Link>
      </span>
    </div>
  );
};
