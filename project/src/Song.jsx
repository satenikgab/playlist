
export const Song = ({id,title,artist,duration=6,isPlaylist,onSwap,onDelete,onMove}) => {
  
    return <div className="song">
        <p className="p">{title} by {artist} {duration } mins</p>
      
        {
         isPlaylist && <button className="button" onClick={() =>onSwap(id)}> Move down</button>
         }
          <button className="button" onClick={()=>onDelete(id)}>Delete</button>
       
        {
             !isPlaylist && <button className="button" onClick={() => onMove(id)}>Move</button>
}
    </div>
}