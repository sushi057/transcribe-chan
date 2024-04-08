import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

function FileSelectedMain() {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <main className="mx-auto mt-4 flex w-fit flex-col items-center rounded-xl bg-white px-10 text-[#0a0a0a]">
      <div className="flex flex-col items-center py-16">
        <BsFillCheckCircleFill className="mb-6 size-12 text-[#9225ff]" />
        <div className="text-center">
          <p className="mb-2 text-3xl font-extrabold">File Selected</p>
          <p className="text-sm text-gray-600">Recording.m4a</p>
        </div>
      </div>
      <div className="w-full">
        {/* <div>
          <p>Language</p>
          <p>Nepali</p>
        </div> */}
        <div className="mb-4 flex items-start gap-3">
          <input
            className="mt-0.5 size-6 cursor-pointer accent-[#9225ff]"
            type="checkbox"
            checked={checkbox}
            onChange={() => setCheckbox((prev) => !prev)}
          />
          <p>
            I consent to the terms of using this application.
            <span className="cursor-pointer underline underline-offset-1">
              Read more
            </span>
            .
          </p>
        </div>
        <button
          className={`mx-auto mb-8 w-full rounded-3xl ${checkbox ? "bg-[#9225ff]/90 hover:bg-[#9225ff]" : "cursor-default bg-[#9225ff]/30"} py-4 text-xl font-bold text-white`}
        >
          Transcribe
        </button>
      </div>
    </main>
  );
}

export default FileSelectedMain;
