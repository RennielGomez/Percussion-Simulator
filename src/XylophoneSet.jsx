import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import XylophoneTile from './XylophoneTile'

function XylophoneSet() {

  let location = useLocation();

  return (
    <div className='flex items-center justify-center w-screen h-screen relative'>
      <Link to={"/"}  onClick={()=>{setTimeout(()=>{window.location.reload()},300)}} ><button className='absolute left-4 top-4 text-2xl'>&lt; Back</button></Link>
      <XylophoneTile tileId={"q"} audioPath={"/sounds/xylophone/Mallet C4.wav"} letter={"Q"} color={"bg-indigo-400"} h={"h-40"} />
      <XylophoneTile tileId={"w"} audioPath={"/sounds/xylophone/Mallet Cs4.wav"} letter={"W"} color={"bg-blue-700"} h={"h-44"} />
      <XylophoneTile tileId={"e"} audioPath={"/sounds/xylophone/Mallet D4.wav"} letter={"E"} color={"bg-sky-600"} h={"h-48"} />
      <XylophoneTile tileId={"r"} audioPath={"/sounds/xylophone/Mallet Ds4.wav"} letter={"R"} color={"bg-green-600"} h={"h-52"} />
      <XylophoneTile tileId={"t"} audioPath={"/sounds/xylophone/Mallet E4.wav"} letter={"T"} color={"bg-yellow-500"} h={"h-56"} />
      <XylophoneTile tileId={"y"} audioPath={"/sounds/xylophone/Mallet F4.wav"} letter={"Y"} color={"bg-orange-600"} h={"h-60"} />
      <XylophoneTile tileId={"u"} audioPath={"/sounds/xylophone/Mallet Fs4.wav"} letter={"U"} color={"bg-red-600"} h={"h-64"} />
      <XylophoneTile tileId={"i"} audioPath={"/sounds/xylophone/Mallet G4.wav"} letter={"I"} color={"bg-rose-600"} h={"h-68"} />
      <XylophoneTile tileId={"o"} audioPath={"/sounds/xylophone/Mallet Gs4.wav"} letter={"O"} color={"bg-indigo-400"} h={"h-72"} />
      <XylophoneTile tileId={"p"} audioPath={"/sounds/xylophone/Mallet A4.wav"} letter={"P"} color={"bg-blue-700"} h={"h-76"} />
      <XylophoneTile tileId={"["} audioPath={"/sounds/xylophone/Mallet As4.wav"} letter={"["} color={"bg-sky-600"} h={"h-80"} />
      <XylophoneTile tileId={"]"} audioPath={"/sounds/xylophone/Mallet B4.wav"} letter={"]"} color={"bg-green-600"} h={"h-84"} />
    </div>
  )
}

export default XylophoneSet