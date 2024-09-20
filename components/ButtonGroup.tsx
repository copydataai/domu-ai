import { Play } from "lucide-react";

export const ButtonGroup = () => {
  return (
    <div className="flex justify-center gap-4 items-center mt-8 p-2 rounded-2xl bg-[#FFFFFF95]">
      <button className="bg-muted text-muted-foreground p-4 rounded-full">
        <Play color="#000000" fill="2" size={32} />
      </button>
      <button className="bg-muted text-muted-foreground p-4 rounded-full">
        <Play color="#000000" fill="2" size={32} />
      </button>
      <button className="bg-muted text-muted-foreground p-4 rounded-full">
        <Play color="#000000" fill="2" size={32} />
      </button>
    </div>
  );
};
