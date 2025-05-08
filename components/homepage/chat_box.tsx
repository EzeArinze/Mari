import Image from "next/image";
import React from "react";
import TabSection from "./tab_section";

function ChatBox() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 w-full sm:w-auto">
        <Image
          src={"/logo.svg"}
          alt="chat logo"
          height={40}
          width={40}
          className="object-contain object-center w-10 h-10 sm:w-12 sm:h-12"
        />
        <span className="font-semibold text-2xl sm:text-3xl text-center sm:text-left">
          Mari
        </span>
      </div>

      <div className="p-2 w-full max-w-2xl m-auto border rounded-2xl mt-5">
        <TabSection />
      </div>
    </div>
  );
}

export default ChatBox;
