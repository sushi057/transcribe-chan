import { useState } from "react";
import { MdLyrics } from "react-icons/md";
import AddFileMain from "./assets/components/AddFileMain";
import FileSelectedMain from "./assets/components/FileSelectedMain";

function App() {
  const [fileUploaded, setFileUploaded] = useState(false);

  return (
    <div className="font-[Space Grotesk] flex min-h-screen flex-col justify-between bg-[url('https://goodtape.io/images/background-illustrations/alex-william-1_1280x1280.jpg.webp')] bg-cover bg-fixed px-8 py-4 text-white">
      <nav>
        <header className="flex flex-row items-center justify-between font-bold">
          <div className="flex cursor-pointer items-center gap-2">
            <MdLyrics className="mt-1 md:size-10 lg:size-12" />
            {/* <span className="text-4xl">transcribeनेपाल</span> */}
          </div>
          <button className="rounded-full bg-white px-6 py-1 font-semibold text-[#0a0a0a]">
            Log in
          </button>
        </header>
        <div className="mt-4 flex flex-col items-start">
          <h1 className="w-4/5 font-semibold tracking-wide md:text-2xl lg:text-4xl">
            Experience the seamless transition from audio to text designed
            specifically for नेपाली audio.
          </h1>
          <button className="mt-4 rounded-full bg-white px-6 py-1 font-semibold text-[#0a0a0a]">
            Tell me more
          </button>
        </div>
      </nav>
      {fileUploaded ? (
        <FileSelectedMain />
      ) : (
        <AddFileMain setFileUploaded={setFileUploaded} />
      )}
      <footer className="mt-12 flex flex-row justify-between font-normal">
        <button>Pricing</button>
        <button>Security</button>
        <button>About</button>
        <button>Terms of service</button>
        <button>Privacy Policy</button>
        <button>Cookies</button>
      </footer>
    </div>
  );
}

export default App;
