import React from 'react'

function XylophoneTile({ tileId, color, h, letter, audioPath }) {

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
        const tile = document.getElementById(tileId);

        if (tileId == e.key.toLowerCase()) {
            tile.classList.add("resize")
        }
    })

    window.addEventListener("keyup", (e) => {
        const tile = document.getElementById(tileId);

        if (tileId == e.key.toLowerCase()) {
            tile.classList.remove("resize")
        }
    })


    return (
        <button id={`${tileId}`} onClick={handleClick} className={`w-14 ${color} ${h} 
        flex flex-col items-center justify-evenly upsize ml-px rounded-md`}>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <span className='text-center'>{letter}</span>
            <div className='w-4 h-4 bg-white rounded-full'></div>
        </button>
    )
}

export default XylophoneTile