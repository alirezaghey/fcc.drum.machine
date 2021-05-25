export default function Key({ name, audio, code, setDisplay }) {
  const handleClick = () => {
    const audioEl = document.getElementById(name);
    audioEl.currentTime = 0;
    audioEl.play();
    setDisplay(name);
  };
  document.addEventListener("keydown", (e) => {
    if (e.code === code) handleClick();
  });
  return (
    <div
      className="drum-pad w-1/4 px-2 py-1 text-center shadow-xl  m-1 rounded-md bg-green-200 hover:bg-green-400 active:bg-green-800 active:text-white cursor-pointer transition"
      id={"pad-" + name}
      onClick={handleClick}
    >
      <audio className="clip" id={name} src={audio} />
      {name}
    </div>
  );
}
