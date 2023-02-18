import React from 'react'

function WhiteTiles({ tileId, audioPath, note }) {

  window.addEventListener("keypress", (e) => {

    if (tileId == e.key.toLowerCase()) {
      const sound = new Audio(audioPath);
      sound.play();
    }
  })

  window.addEventListener("keydown", (e) => {
    const tile = document.getElementById(tileId);

    if (tileId == e.key.toLowerCase()) {
      tile.classList.add("inset-shadow");
    }
  })

  window.addEventListener("keyup", (e) => {

    const tile = document.getElementById(tileId);
    if (tileId == e.key.toLowerCase()) {
      tile.classList.remove("inset-shadow");
    }
    
  })

  return (
    <div id={tileId} className='w-14 border-2 border-gray-700 bg-white h-full relative key no-shadow'>
      <span className='absolute bottom-8 left-4 text-black text-xs note'>{note}</span>
    </div>
  )
}

export default WhiteTiles