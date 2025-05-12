import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div>
        <SignUp />
      </div>
    </div>
  );
}
