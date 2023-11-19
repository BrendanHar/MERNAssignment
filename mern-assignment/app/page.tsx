"use client"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar"
export default function Page() {
  return <div> 
    <CountButton name={"+1"} mult={1} />
    <CountButton name={"+2"} mult={2}/>
    <hr />
    <a href="https://github.com/BrendanHar/MERNAssignment">my github repo</a>
    <hr />
    <SearchBar />
    </div>
}
