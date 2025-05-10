import { useEffect, useState } from "react";
import axios from "axios";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
// import mqtt from "mqtt";

// const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

function App() {
  const [notes, setNotes] = useState<string[]>([]);

  const baseURL = "https://kazam-mqtt-backend.onrender.com";
  // const baseURL = "http://localhost:5000";

  const fetchNotes = async () => {
    const res = await axios.get(`${baseURL}/api/fetchAllTasks`);
    setNotes(res.data.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // const handleClearCache = () => {
  //   client.publish("/delete", "clearCache");
  // };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 border rounded-lg shadow-md bg-white space-y-4">
      <div className="flex items-center gap-2 text-xl font-bold">
        <span>🗒️</span>
        <h1>Note App</h1>
        {/* <span>
          <button onClick={handleClearCache}>Clear Cache</button>
        </span> */}
      </div>
      <NoteInput onAdded={fetchNotes} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
