import Button from "@/components/photos/Button";
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
        <Button text="Upload" icon={MdOutlineFileUpload} />
      </div>

      <PhotoList />
    </div>
  );
}
