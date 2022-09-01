import React, {useState, useEffect} from 'react'
import {nanoid} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import {postDataThunk} from "../redux/taskSlice"

function Task() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postDataThunk({id : nanoid(), title : title, text : text}))
        console.log(`id:  ${nanoid()}, title : ${title} and text : ${text}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder = "Task Title"
            />
            <br></br>
            <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder = "Text"
            />
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Task