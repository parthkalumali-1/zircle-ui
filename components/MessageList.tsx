"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-neutral-900">
      {[...Array(15)].map((_, idx) => (
        <Card key={idx} className="bg-neutral-800 border-none max-w-xl">
          <CardContent className="p-4">
            <p>
              <span className="font-semibold text-blue-400">User{idx}:</span>
              {" "}This is a sample message inside Zircle 🚀
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
