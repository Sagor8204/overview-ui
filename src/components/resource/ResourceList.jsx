import { resourceDatas } from "@/common/data";
import ResourceCard from "./ResourceCard";

export default function ResourceList() {
  return (
    <div className="px-5 lg:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {resourceDatas.map((data, index) => (
          <ResourceCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
