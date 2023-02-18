import React, { useEffect } from 'react'
import DrumPad from './DrumPad'
import { Link} from 'react-router-dom'


function DrumSet() {

  return (
    <div className='studio drum-set flex items-center justify-center relative'>
  <Link to={"/"}  onClick={()=>{setTimeout(()=>{window.location.reload()},300)}}><button className='absolute left-4 top-4 text-2xl'>&lt; Back</button></Link>
      {/* Hihat*/}
      <DrumPad
        tileId={"l"}
        audioPath={"/sounds/drums/hi-hat.wav"}
        imagePath={"/images/drums/hihat.png"}
        letter={"L"}
        w={"184px"}
        h={"562px"}
        letx={"240px"}
        lety={"10px"}
        padx={"912px"}
        pady={"104px"}
      />
      {/* Snare*/}
      <DrumPad
        tileId={"m"}
        audioPath={"/sounds/drums/snare.wav"}
        imagePath={"/images/drums/snare.png"}
        letter={"M"}
        w={"215px"}
        h={"362px"}
        letx={"90px"}
        lety={"-60px"}
        padx={"780px"}
        pady={"342px"}
      />

      {/* Cymbals */}
      <DrumPad
        tileId={"y"}
        audioPath={"/sounds/drums/cymbals.wav"}
        imagePath={"/images/drums/cymbals.png"}
        letter={"Y"}
        w={"215px"}
        h={"298px"}
        letx={"240px"}
        lety={"10px"}
        padx={"478px"}
        pady={"62px"}
      />
      {/* Kick Drum */}
      <DrumPad
        tileId={"v"}
        audioPath={"/sounds/drums/kick.wav"}
        imagePath={"/images/drums/kick.png"}
        letter={"V"}
        w={"449px"}
        h={"354px"}
        letx={"-30px"}
        lety={"100px"}
        padx={"352px"}
        pady={"346px"}
      />
      {/* High-Tom Drum */}
      <DrumPad
        tileId={"f"}
        audioPath={"/sounds/drums/high-tom.wav"}
        imagePath={"/images/drums/high-tom.png"}
        letter={"F"}
        w={"212px"}
        h={"146px"}
        letx={"-50px"}
        lety={"50px"}
        padx={"364px"}
        pady={"201px"}
      />
      {/* Mid-Tom Drum */}
      <DrumPad
        tileId={"j"}
        audioPath={"/sounds/drums/mid-tom.wav"}
        imagePath={"/images/drums/mid-tom.png"}
        letter={"J"}
        w={"215px"}
        h={"180px"}
        letx={"230px"}
        lety={"48px"}
        padx={"588px"}
        pady={"154px"}
      />
    </div>
  )
}

export default DrumSet