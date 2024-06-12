import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Song } from './Song.jsx'
import { Album } from './Album'
import { SongList } from './SongList'
import { Playlist } from './Playlist'

function App() {
  const [playlist,setPlaylist] = useState([])
  const [songs,setSongs] = useState([
    {id:101,title:"Mr Crowley", artist:"Ozzy Ozbourne "},
    {id:102,title:"The Unforgiven", artist:"Metallica "},
    {id:103,title:"No Leaf Clover", artist:"Metallica "},
    {id:104,title:"Dreamer", artist:"Ozzy Ozbourne "},
    {id:105,title:"Master of puppets", artist:"Metallica "},
    {id:106,title:"Ode to the mets", artist:"The Strokes "},
    {id:107,title:"This I love ", artist:"Guns N' Roses "},
  ])
  const removeSongFromSonglist = id =>{
    setSongs(songs.filter(x => x.id != id))
 
  }
  const removeSongFromPlaylist = id => {
    setPlaylist((oldPlaylist) => {
      return oldPlaylist.filter(x => x.id != id)
    })
  }
  
  const moveSong = id =>{

    setPlaylist((oldPlaylist) =>{
      let song = songs.find(x => x.id == id)
      if(!oldPlaylist.includes(song)){
        return [...oldPlaylist,song ]
        
      } else return [...oldPlaylist]
  })
}


  
const swapSong = (id) => {
  setPlaylist((oldPlaylist) => {
    const index = oldPlaylist.findIndex(x => x.id === id)
    if (index === -1) {
      return oldPlaylist
    }
    const swapIndex = (index + 1) % oldPlaylist.length
    const newPlaylist = [...oldPlaylist]
    const temp = newPlaylist[index]
    newPlaylist[index] = newPlaylist[swapIndex]
    newPlaylist[swapIndex] = temp
    return newPlaylist
  })
}



  
  return (
    <>
    
    <SongList items={songs} onDelete={removeSongFromSonglist} onMove={moveSong} />
    <Playlist items={playlist} onSwap = {swapSong} onDelete ={removeSongFromPlaylist}/>
      
       
    </>
  )
}

export default App
