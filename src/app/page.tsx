"use client";

import { ClickOutside } from "@/components/ui/click-outside";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CardWithForm } from "./card";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClickOutside
        handleClickOutside={() => {
          console.log("outside clicked");
          setOpen(false);
        }}
      >
        <div className="relative">
          <Input placeholder="Select Value" onFocus={() => setOpen(true)} />
          {open && <CardWithForm />}
        </div>
      </ClickOutside>
    </main>
  );
}
