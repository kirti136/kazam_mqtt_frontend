import { useState } from "react";
import mqtt from "mqtt";
import { BsPlusCircleFill } from "react-icons/bs";

const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

interface Props {
  onAdded: () => void;
}

const NoteInput = ({ onAdded }: Props) => {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    if (!note.trim()) return;
    client.publish("/add/kirti", note);
    setNote("");
    setTimeout(onAdded, 1000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-md"
        placeholder="New Note..."
      />
      <button
        onClick={handleAdd}
        className="flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-700 text-white px-4 py-2 rounded-md"
      >
        <BsPlusCircleFill className="text-lg" />
        <span className="font-bold text-md">Add</span>
      </button>
    </div>
  );
};

export default NoteInput;
