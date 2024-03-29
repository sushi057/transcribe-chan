import { BsFillPlusCircleFill } from "react-icons/bs";

function AddFileMain() {
  return (
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
        Made by <span className="font-extrabold">ziggs & sushi</span> in Patan ,
        Nepal
      </p>
    </main>
  );
}

export default AddFileMain;
