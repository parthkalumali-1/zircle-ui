"use client";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function UserPanel() {
  return (
    <div className="w-64 bg-neutral-800 p-4 hidden lg:flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">Online Friends</h3>
        {["Alice", "Bob", "Charlie", "Dana"].map((name, i) => (
          <div key={i} className="flex items-center gap-2 py-1">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">P</div>
        <div>
          <p className="font-semibold">Parth 😎</p>
          <p className="text-xs text-neutral-400">#1234</p>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Settings size={20} />
        </Button>
      </div>
    </div>
  );
}
