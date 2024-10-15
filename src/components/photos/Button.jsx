export default function Button({text,icon:Icon}) {
  return (
    <button className="flex gap-2 border border-primary-400 mx-auto text-primary-400 px-6 py-2 rounded-md">
      {text} <Icon className="text-xl" />
    </button>
  );
}
