import { Card } from "@repo/ui/card";

export default function Page() {
  return (
    <div className="flex justify-center items-center p-4 w-full h-screen">
      <Card href={"/"} title={"TurboRepo with Tailwindcss NextUI"}>
        <div>No TypeScript :)</div>
      </Card>
    </div>
  );
}
