import React, {useState, useEffect} from 'react'
import {nanoid} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import {postDataThunk} from "../redux/taskSlice"
import styled from "styled-components"
import {addNote} from "../redux/taskSlice"

function Task() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postDataThunk({id : nanoid(), title : title, text : text}))
        dispatch(addNote({id : nanoid(), title : title, text : text}))
        console.log(`id:  ${nanoid()}, title : ${title} and text : ${text}`)
    }

    const titleStyle = {
        padding : "2%",
        fontSize : "1.2em",
        border : "1px solid white",
        margin : '2%',
        borderRadius : "10px",
        width : "90%"
    }
    const textStyle = {
        padding : "2%",
        fontSize : "1.2em",
        border : "1px solid white",
        margin : '2%',
        borderRadius : "10px",
        width : "90%",
        
    }
    const buttonStyle = {
        fontSize : "1.2em",
        borderRadius : "10px"

    }
    const Form = styled.form`
        border : 1px solid white;
        padding : 2%;
        width : 90%;
        margin : 0 auto;
        border-radius : 10px;
    `
    const formStyle = {
        border : "1px solid white",
        padding : "2%",
        width : "90%",
        margin : "0 auto",
        borderRadius : "10px"
    }
  return (
    <div>
        <form style={formStyle} onSubmit={handleSubmit}>
            <input
                style={titleStyle}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder = "Task Title"
            />
            <br></br>
            <input 
                style={textStyle}   
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder = "Text"
            />
            <br></br>
            <button style={buttonStyle} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Task