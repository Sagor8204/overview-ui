import Button from "./Button";
import EventFormatPlan from "./EventFormatPlan";

export default function EventCheckList() {
  return (
    <div className="bg-gray-50 pb-7">
      <div className="py-7 px-4 md:px-8 border-b border-t flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-600">Event Checklist</h2>

        <Button text="Add Another Project" effect />
      </div>

      <EventFormatPlan />
      <EventFormatPlan />
    </div>
  );
}
