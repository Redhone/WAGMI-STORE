export default function VariantSelector({ label, options, selected, setSelected }) {
  return (
    <div className="mt-4">
      <p className="font-medium">{label}</p>
      <div className="flex gap-2 mt-2">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-lg border ${
              selected === opt ? "bg-white text-black" : ""
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
