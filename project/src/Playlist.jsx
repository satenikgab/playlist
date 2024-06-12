import { Song } from "./Song.jsx"
export const Playlist = ({items,onSwap,onDelete}) =>{
    return <div> 
        <h3 className="song">
        Playlist {items.length}
       
    </h3>
    {
     items.map(elm => <Song key = {elm.id}{...elm} isPlaylist = {true} onSwap={onSwap} onDelete={onDelete}/>)
    }

</div>
}