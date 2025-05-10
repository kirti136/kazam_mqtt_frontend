import { useEffect, useState } from "react";
import axios from "axios";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import BookIcon from "./assets/book.svg";

function App() {
  const [notes, setNotes] = useState<string[]>([]);

  const baseURL = "https://kazam-mqtt-backend.onrender.com";

  const fetchNotes = async () => {
    const res = await axios.get(`${baseURL}/api/fetchAllTasks`);
    setNotes(res.data.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 flex justify-center items-start">
      <div className="w-full max-w-[759px] h-auto sm:h-[742px] border border-gray-300 rounded-[12px] shadow-md bg-white p-6 space-y-4">
        <div className="flex items-center text-2xl sm:text-[2rem] gap-2 font-bold">
          <img
            src={BookIcon}
            alt="Book Icon"
            className="w-[55.5px] h-[55.5px]"
          />
          <h1>Note App</h1>
        </div>

        <NoteInput onAdded={fetchNotes} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App;
