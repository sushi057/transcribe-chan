import { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

function FileSelectedMain() {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <main>
      <div>
        <BiCheckCircle />
        <div>
          <p>File Selected</p>
          <p>Recording.m4a</p> {/* Name of file */}
        </div>
      </div>
      <div>
        <div>
          <p>Language</p>
          <p>Nepali</p>
        </div>
        <div>
          <input
            type="checkbox"
            checked={checkbox}
            onChange={() => setCheckbox((prev) => !prev)}
          />
          <p>
            I consent to the terms of using this application.
            <span>Read more</span>.
          </p>
        </div>
        <button>Transcribe</button>
      </div>
    </main>
  );
}

export default FileSelectedMain;
