import EventCheckList from "@/components/EventCheckList";

export default function Home() {
  return (
    <div className="text-gray-500">
      <div className="py-7 px-4 md:px-8 border-b">
        <h2 className="text-2xl text-gray-600 font-semibold">Event Checklist</h2>
      </div>

      <p className="py-8 text-xl px-3">
        Do you need some help planning your first virtual event? Wishing you had
        an easy-to-follow guide to make sure you don’t miss any of the important
        steps?
      </p>

      <EventCheckList />
    </div>
  );
}
