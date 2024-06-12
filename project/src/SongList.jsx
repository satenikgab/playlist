import { Song } from "./Song.jsx"
export const SongList =({items,onDelete,onMove,onSwap})=>{
    return <div >
        <h3 className="song">Song List</h3>
        {
           items.map(elm => <Song key = {elm.id}{...elm}  onDelete = {onDelete} onMove={onMove} onSwap={onSwap} />)
          
        }
    </div>
}