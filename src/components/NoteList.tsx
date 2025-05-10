interface Props {
  notes: string[];
}

const NoteList = ({ notes }: Props) => {
  return (
    <div className="max-h-100 overflow-y-auto">
      <h2 className="font-semibold mb-2">Notes</h2>
      <ul className="divide-y">
        {notes.map((note, idx) => (
          <li key={idx} className="py-2">{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
