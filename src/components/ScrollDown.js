import { GrDown } from "react-icons/gr";

export default function ScrollDown({ targetSection }) {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetSection.slice(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={handleScroll}
      className="text-white bg-white text-xl border border-white rounded-full p-2 hover:bg-white hover:text-black hover:scale-105 hover:border-black transition-transform z-50"
    >
      <GrDown />
    </button>
  );
}
