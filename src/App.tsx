import { useEffect, useState } from "react";
import axios from "axios";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState<string[]>([]);

  const fetchNotes = async () => {
    const res = await axios.get("https://kazam-mqtt-backend.onrender.com/api/fetchAllTasks");
    setNotes(res.data.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="max-w-md p-6 mx-auto mt-10 border rounded-lg shadow-md bg-white space-y-4">
      <div className="flex items-center gap-2 text-xl font-bold">
        <span>🗒️</span>
        <h1>Note App</h1>
      </div>
      <NoteInput onAdded={fetchNotes} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
