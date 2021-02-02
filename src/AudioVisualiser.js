import Cube from './Cube';
import Rectangle from './Rectangle';

export default function AudioVisualiser({ audioData, is3D, toggleMic, isMicActive, setIsMicActive }) {
  return (
    <>
      {is3D
        ? <Cube />
        : <Rectangle
          onRectClick={toggleMic}
          isMicActive={isMicActive}
          setIsMicActive={setIsMicActive}
        />
      }
    </>
  )
}
// export default function AudioVisualiser({ audioData }) {
//   return <p>{100 - 100 * audioData[144] / 255}</p>
// }
