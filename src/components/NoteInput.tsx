import { useState } from "react";
import mqtt from "mqtt";

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
    <div className="flex gap-2">
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-md"
        placeholder="New Note..."
      />
      <button
        onClick={handleAdd}
        className="bg-orange-800 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default NoteInput;
