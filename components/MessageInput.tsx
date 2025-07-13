"use client";
import { Button } from "@/components/ui/button";
import { Plus, Smile, Send } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="p-4 bg-neutral-800 flex items-center gap-3 shadow-inner">
      <Button variant="ghost" size="icon"><Plus /></Button>
      <input
        type="text"
        placeholder="Message #general"
        className="flex-1 bg-neutral-700 rounded-full px-4 py-2 outline-none text-white placeholder-neutral-400"
      />
      <Button variant="ghost" size="icon"><Smile /></Button>
      <Button variant="secondary" size="icon"><Send /></Button>
    </div>
  );
}
