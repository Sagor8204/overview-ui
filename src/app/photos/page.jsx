import PhotoList from "@/components/photos/PhotoList";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Photos() {
  return (
    <div className="bg-slate-100 px-4 sm:px-10 py-8">
      <div className="py-7 px-6 bg-white rounded-md mb-4">
        <h3 className="text-lg">My Profile</h3>
      </div>

      <div className="bg-white py-5 text-center rounded-md mb-4">
        <h3 className="text-xl mb-2">
          43 photos have been shared by attendees
        </h3>
        <button className="flex gap-2 border border-primary-400 mx-auto text-primary-400 px-6 py-2 rounded-md">
          Upload <MdOutlineFileUpload className="text-xl" />
        </button>
      </div>

      <PhotoList />
    </div>
  );
}
