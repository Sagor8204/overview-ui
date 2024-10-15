import Button from "./Button";

export default function EventItem({ data }) {
  return (
    <li className="px-3 md:px-6 flex items-start gap-3 justify-between py-5 border-b">
      <div className="flex gap-5 items-center">
        <input type="checkbox" className="w-4 h-4" />
        <p className="text-md lg:text-lg">{data.title}</p>
      </div>

      <div className="mt-2">
        <Button text="Action" />
      </div>
    </li>
  );
}
