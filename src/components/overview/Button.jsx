export default function Button({text, effect}){
    return (
        <button className={`text-md md:text-lg py-[10px] rounded-md ${effect ? "bg-primary-400 text-white px-5 md:px-10" : "border px-5 py-2 bg-gray-50"}`}>{text}</button>
    )
}