import React from 'react'

function BlackTiles({ tileId, audioPath, note, x }) {

  window.addEventListener("keypress", (e) => {
    if (tileId == e.key.toLowerCase()) {
      const sound = new Audio(audioPath);
      sound.play();
    }
  })

  window.addEventListener("keydown", (e) => {
    const tile = document.querySelector(`.${tileId}`);
    if (tileId == e.key.toLowerCase()) {
      tile.classList.remove("black-shine");
    }
  })

  window.addEventListener("keyup", (e) => {
    const tile = document.querySelector(`.${tileId}`);
    if (tileId == e.key.toLowerCase()) {
      tile.classList.add("black-shine");
    }
  })


  return (
    <div className={`w-8 h-3/5 absolute text-black bg-black z-50 key black-key black-shine ${tileId}`} style={{ left: x }}>
      <span className='absolute bottom-8 left-2 text-xs note text-center black-note'>{note}</span>
    </div>
  )
}

export default BlackTiles