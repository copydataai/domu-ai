import Player from "@/components/Player";

const sampleAgents = [
  {
    id: 1,
    track: "/media/LANDING.wav",
  },
  {
    id: 2,
    track: "/media/NYC.mp3",
  },
  {
    id: 3,
    track: "/media/TEXAS.mp3",
  },
];

export default function SampleGroup() {
  return (
    <div className="flex justify-center gap-4 items-center mt-2 p-1 bg-opacity-20 backdrop-blur-lg backdrop-filter rounded-full bg-gray-300">
      {sampleAgents.map((agent) => (
        <Player key={agent.id} track={agent.track} />
      ))}
    </div>
  );
}
