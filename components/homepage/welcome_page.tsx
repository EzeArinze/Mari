import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

function Welcome() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo.svg"}
          alt="chat logo"
          height={42}
          width={42}
          className="object-contain object-center"
        />
        <span className="font-semibold text-2xl">Ari-Chat</span>
      </div>

      <div className="h-40  w-3/4 m-auto">
        <Input placeholder="search for something.." className="border-none" />
      </div>
    </div>
  );
}

export default Welcome;
