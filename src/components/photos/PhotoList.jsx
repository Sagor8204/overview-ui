import { photosDatas } from "@/common/data";
import PhotoCard from "./PhotoCard";

export default function PhotoList() {
  return (
    <div className="bg-white rounded-md px-5 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {photosDatas.map((data, index) => (
          <PhotoCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
