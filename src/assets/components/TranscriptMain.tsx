import { BiClipboard, BiDownload, BiLock } from "react-icons/bi";
import { SetStateAction } from "react";
function TranscriptMain({sentences}: {sentences: React.Dispatch<SetStateAction<any[]>>}) {
  return (
    <main className="mx-auto mt-4 flex w-full flex-col items-center gap-28 rounded-xl bg-white px-10 py-6 text-[#0a0a0a]">
      <section className="flex w-full flex-row items-center justify-between font-semibold text-[#606161]/80">
        <div className="flex items-center gap-4">
          <button className="rounded-xl bg-[#606161]/40 px-4 text-black">
            Read
          </button>
          <button className="flex items-center">
            <BiLock />
            Edit
          </button>
        </div>
        <div className="flex flex-row items-center">
          <BiLock />
          Speakers
        </div>
      </section>
      <section className="self-start pl-24">
        <div>
          <div>
            <h1 className="text-4xl font-bold">SoundFile.wav</h1>
            <p className="text-[#606161]">Nepali Audio Transcribed</p>
          </div>
          <div className="mt-4 flex items-center gap-8 text-[#606161]/60">
            <div className="flex flex-row items-center gap-2">
              <BiClipboard />
              Copy
            </div>
            <div className="flex flex-row items-center gap-2">
              <BiDownload /> Download
            </div>
          </div>
          <div className="mt-12">
            <p>
              {sentences}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TranscriptMain;
