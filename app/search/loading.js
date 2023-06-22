import ProgressBar from "@badrap/bar-of-progress";
import Image from "next/image";
export default function Loading() {
  const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: " z-100",
  });

  return (
    <div className="  h-screen w-screen flex  flex-row items-center justify-center ">
      <div className="    ">
        <Image
          src="/loading_crescor_dribbble.gif"
          width={250}
          height={250}
          alt="loading"
        />
      </div>
    </div>
  );
}
