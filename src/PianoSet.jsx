import React from 'react'
import BlackTiles from './BlackTiles'
import WhiteTiles from './WhiteTiles'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function PianoSet() {

    return (
        <div className='flex items-center justify-center'>
            <Link to={"/"} onClick={()=>{setTimeout(()=>{window.location.reload()},300)}}><button className='absolute left-4 top-4 text-2xl'>&lt; Back</button></Link>
            <Footer/>
            <div className='flex relative bg-gray-900 mt-28 px-8 pt-4 rounded-md shadow-lg shadow-black' style={{ height: "400px" }}>
                <div className='flex relative'>
                    <WhiteTiles tileId={"a"} audioPath={"/sounds/piano/Octave-3/3C.ogg"} note={'A'} />
                    <BlackTiles tileId={"q"} audioPath={"/sounds/piano/Octave-3/3Cs.ogg"} x={"40px"} note={'Q'} />
                    <WhiteTiles tileId={"s"} audioPath={"/sounds/piano/Octave-3/3D.ogg"} note={'S'} />
                    <BlackTiles tileId={"w"} audioPath={"/sounds/piano/Octave-3/3Ds.ogg"} x={"96px"} note={'W'} />
                    <WhiteTiles tileId={"d"} audioPath={"/sounds/piano/Octave-3/3E.ogg"} note={'D'} />
                    <WhiteTiles tileId={"f"} audioPath={"/sounds/piano/Octave-3/3F.ogg"} note={'F'} />
                    <BlackTiles tileId={"e"} audioPath={"/sounds/piano/Octave-3/3Fs.ogg"} x={"208px"} note={'E'} />
                    <WhiteTiles tileId={"j"} audioPath={"/sounds/piano/Octave-3/3G.ogg"} note={'J'} />
                    <BlackTiles tileId={"r"} audioPath={"/sounds/piano/Octave-3/3Gs.ogg"} x={"264px"} note={'R'} />
                    <WhiteTiles tileId={"k"} audioPath={"/sounds/piano/Octave-3/3A.ogg"} note={'K'} />
                    <BlackTiles tileId={"t"} audioPath={"/sounds/piano/Octave-3/3As.ogg"} x={"320px"} note={'T'} />
                    <WhiteTiles tileId={"l"} audioPath={"/sounds/piano/Octave-3/3B.ogg"} note={'L'} />
                </div>
                <div className='flex relative'>
                    <WhiteTiles tileId={"z"} audioPath={"/sounds/piano/Octave-4/4C.ogg"} note={'Z'} />
                    <BlackTiles tileId={"y"} audioPath={"/sounds/piano/Octave-4/4Cs.ogg"} x={"40px"} note={'Y'} />
                    <WhiteTiles tileId={"x"} audioPath={"/sounds/piano/Octave-4/4D.ogg"} note={'X'} />
                    <BlackTiles tileId={"u"} audioPath={"/sounds/piano/Octave-4/4Ds.ogg"} x={"96px"} note={'U'} />
                    <WhiteTiles tileId={"c"} audioPath={"/sounds/piano/Octave-4/4E.ogg"} note={'C'} />
                    <WhiteTiles tileId={"v"} audioPath={"/sounds/piano/Octave-4/4F.ogg"} note={'V'} />
                    <BlackTiles tileId={"i"} audioPath={"/sounds/piano/Octave-4/4Fs.ogg"} x={"208px"} note={'I'} />
                    <WhiteTiles tileId={"b"} audioPath={"/sounds/piano/Octave-4/4G.ogg"} note={'B'} />
                    <BlackTiles tileId={"o"} audioPath={"/sounds/piano/Octave-4/4Gs.ogg"} x={"264px"} note={'O'} />
                    <WhiteTiles tileId={"n"} audioPath={"/sounds/piano/Octave-4/4A.ogg"} note={'N'} />
                    <BlackTiles tileId={"p"} audioPath={"/sounds/piano/Octave-4/4As.ogg"} x={"320px"} note={'P'} />
                    <WhiteTiles tileId={"m"} audioPath={"/sounds/piano/Octave-4/4B.ogg"} note={'M'} />
                </div>
            </div>
        </div>
    )
}

export default PianoSet