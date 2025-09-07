import { Button } from "@context-vs-zustand/shared-ui/components/button";

export default function Page() {
  return (
    <div className="font-sans flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
