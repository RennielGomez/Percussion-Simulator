import React from 'react'

function DrumPad({tileId, audioPath, imagePath, letter, padx, pady, letx, lety, w, h }) {

  function handleClick() {
    const sound = new Audio(audioPath);
    sound.play();
  }
  window.addEventListener("keypress", (e) => {

    if (tileId == e.key.toLowerCase()) {
      const sound = new Audio(audioPath);
      sound.play();
    }
  })

  window.addEventListener("keydown", (e) => {
    const drum = document.getElementById(tileId);

    if (tileId == e.key.toLowerCase()) {
      drum.classList.add('resize');
    }
  })
  window.addEventListener("keyup", (e) => {
    const drum = document.getElementById(tileId);
    if (tileId == e.key.toLowerCase()) {
      drum.classList.remove('resize');
    }
  })

  return (
    <div className='img-fluid absolute' style={{ left: padx, top: pady }} >
      <img id={tileId} className='upsize' src={imagePath} style={{ width: w, height: h }} />
      <button onClick={handleClick}>
        <span className='border-2 border-white rounded-md p-2.5 z-50' style={{ position: "absolute", left: letx, top: lety }}>{letter}</span>
      </button>
    </div>
  )
}

export default DrumPad