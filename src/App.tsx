import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdLyrics } from "react-icons/md";

function App() {
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
          <h1 className="w-10/12 font-semibold md:text-2xl lg:text-3xl">
            Experience the seamless transition from audio to text designed
            specifically for नेपाली audio.
          </h1>
          <button className="mt-2 rounded-full bg-white px-6 py-1 font-semibold text-[#0a0a0a]">
            Tell me more
          </button>
        </div>
      </nav>
      <main className="mt-4 grid w-full place-content-center">
        <div className="flex size-96 flex-col items-center justify-center rounded-xl bg-white text-[#0a0a0a]">
          <button className=" rounded-full p-0.5 text-[#9225ff] focus:ring-2 focus:ring-[#9225ff] active:border-[#9225ff]">
            <BsFillPlusCircleFill className="size-12" />
          </button>
          <div className="mt-4 text-center">
            <h1 className="text-2xl font-extrabold">Upload audio file</h1>
            <p className="mt-1 text-lg">and transcribe instantly</p>
          </div>
        </div>
        <p className="mt-4 text-center font-semibold">
          Made by <span className="font-extrabold">ziggs & sushi</span> in Patan
          , Nepal
        </p>
      </main>
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
