"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      initial={{ width: 80 }}
      animate={{ width: open ? 250 : 80 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="bg-neutral-800 p-2 flex flex-col items-center shadow-2xl"
    >
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
        {open ? <ChevronLeft /> : <ChevronRight />}
      </Button>

      <div className="flex flex-col gap-3 mt-4 items-center w-full">
        {["🏠", "🎮", "💬", "🎨", "📚"].map((icon, i) => (
          <Button key={i} variant="ghost" size="icon" className="hover:bg-neutral-700 text-2xl">
            {icon}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
