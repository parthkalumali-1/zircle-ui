"use client";
import { Button } from "@/components/ui/button";
import { Mic, Headphones, Settings } from "lucide-react";

export default function ChannelHeader() {
  return (
    <div className="p-4 bg-neutral-800 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold"># general</h2>
      <div className="flex gap-3">
        <Button variant="ghost" size="icon"><Mic size={20} /></Button>
        <Button variant="ghost" size="icon"><Headphones size={20} /></Button>
        <Button variant="ghost" size="icon"><Settings size={20} /></Button>
      </div>
    </div>
  );
}
