import EventItem from "./EventItem";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import IconButton from "./IconButton";

const datas = [
  {
    title:
      "Choose from live streams, pre-recorded videos, or a hybrid according to the event needs (this is important in deciding whichsoftware platform to use)",
  },
  {
    title:
      "Choose from live streams, pre-recorded videos, or a hybrid according to the event needs (this is important in deciding whichsoftware platform to use)",
  },
  {
    title:
      "Choose from live streams, pre-recorded videos, or a hybrid according to the event needs (this is important in deciding whichsoftware platform to use)",
  },
  {
    title:
      "Choose from live streams, pre-recorded videos, or a hybrid according to the event needs (this is important in deciding whichsoftware platform to use)",
  },
  {
    title:
      "Choose from live streams, pre-recorded videos, or a hybrid according to the event needs (this is important in deciding whichsoftware platform to use)",
  },
  {
    title:
      "Choose from live streams, pre-recorded videos, or a hybrid according to the event needs (this is important in deciding whichsoftware platform to use)",
  },
  {
    title:
      "Choose from live streams, pre-recorded videos, or a hybrid according to the event needs (this is important in deciding whichsoftware platform to use)",
  },
];

export default function EventFormatPlan() {
  return (
    <div className="px-4 md:px-7 pt-7 flex items-start">
      <div className="hidden md:block py-[18px] px-6 border text-[25px] bg-white">
        <BsArrowsFullscreen />
      </div>
      <div className="border w-full bg-white">
        <div className=" py-[14px] px-6 semibold border-b text-gray-600 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Event format planning</h2>

          <div className="flex gap-8 text-[26px]">
            <IconButton icon={RiCheckboxMultipleBlankLine} />
            <IconButton icon={FaRegEdit} />
            <IconButton icon={RiDeleteBinLine} style="text-red-500" />
          </div>
        </div>

        <div>
          <ul>
            {datas.map((data, index) => (
              <EventItem key={index} data={data} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
