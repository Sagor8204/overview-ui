import ResourceList from "@/components/resource/ResourceList";

export default function Resource() {
  return (
    <div className="bg-slate-100 px4 sm:px-10 py-8">
      <div className="py-7 px-6 bg-white rounded-md mb-4">
        <h3 className="text-lg">Recordings</h3>
      </div>

      <ResourceList />
    </div>
  );
}
