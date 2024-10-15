import Image from "next/image";

export default function ResourceCard({ data }) {
  return (
    <div className="mx-auto sm:mx-0">
      <Image
        src={data.imageUrl}
        width={400}
        height={400}
        alt="resource-image"
        className="rounded-md"
      />
      <h2 className="mt-2 text-lg">{data.title}</h2>
    </div>
  );
}
