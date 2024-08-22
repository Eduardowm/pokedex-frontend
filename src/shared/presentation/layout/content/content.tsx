import { type PropsWithChildren } from "react";

function Content({ children }: PropsWithChildren) {
  return (
    <main className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center bg-white text-black">
      {children}
    </main>
  );
}
export default Content
