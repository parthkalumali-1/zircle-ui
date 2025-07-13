"use client";
import Sidebar from "@/components/Sidebar";
import ChannelHeader from "@/components/ChannelHeader";
import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";
import UserPanel from "@/components/UserPanel";

export default function ZircleMain() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </div>
      <UserPanel />
    </div>
  );
}
