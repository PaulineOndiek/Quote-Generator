import {getStorage, ref, uploadString} from "firebase/storage"
import { db } from "../firebase"
import {addDoc, collection} from "firebase/firestore"
import { Storage } from "@mui/icons-material"
import styled from "styled-components"
import { useState } from "react"
import { flexbox } from "@mui/system"
const AddQuoteContainer=styled.div`
display:flex;
align-items:center;
height:100%;
background:#80B5FF;

`
const Container=styled.div`
margin:0 auto;
width:80%;`
const Forms=styled.div`
display:flex;
flex-direction:column;
`
const TextArea=styled.textarea`
outline:none;
border:1px solid #B4CDE6;`
const Input=styled.input`
outline:none;
border:1px solid #B4CDE6;
padding:1.5em;
border-radius:5px;
`
const Button=styled.button`
width:30%;
border-radius:5px;
border:1px solid #B4CDE6;
margin-top:2em;
padding:1em 2em;
margin-left:30em;
`
const Para=styled.p``

const Label=styled.label``
// const ButtonContainer=styled.div``


const AddQuote=()=>{
    const[message, setMessage]=useState("")
    const [color, setColor]=useState("")
    const [errors, setErrors]=useState({
        quoteError:"",
        authorError:"",
        postedbyError:""
    })
    
    const[AddQuote, setAddQuote]=useState({
        quote:"",
        author:"",
        date:new Date(),
        like:0,
        dislike:0,
        postedby:"",
        edit:"",
        delete:""
    })

    const handleAddQuote= async()=>{
        try{
            if (AddQuote.quote===""){
                setErrors({...errors, quoteError:"Please add a quote"})
            }
             if (AddQuote.author===""){
                setErrors({...errors,authorError:"Please add an author"})
            }
          if (AddQuote.postedby===""){
                setErrors({...errors, postedbyError:"Please add who posted the quote"})
            }
            else{
        await addDoc(collection(db, "quotes"), AddQuote)
            setMessage("Quote Successfully Added:")
            setColor("#38E54D")}
            setAddQuote({
         quote:"",

         author:"",
         date:"",
         like:"",
         dislike:"", 
         postedby:"",
         delete:"",
         edit:""
            })

            console.log(AddQuote)
        }
        
        catch(error){
        console.log("error adding quote:", error)
        }
    }

    // console.log(handleAddQuote())

    return(
        <AddQuoteContainer>
            <Container>
            <Forms>

                <p style={{color:color}}>{message}</p>
                <Para>{errors.quoteError}</Para>
                <Label>Quote:</Label>
                <TextArea placeholder="Quote" rows="10" cols="20" onChange={(event)=>setAddQuote({...AddQuote,quote:event.target.value})}></TextArea>
                <Para>{errors.authorError}</Para>
                <Label>Author:</Label>
                <Input type="text" placeholder="Author" onChange={(event)=>setAddQuote({...AddQuote,author:event.target.value})}/>
                <Label>Date:</Label>
                <Input type="text" placeholder="Date" onChange={(event)=>setAddQuote({...AddQuote,date:event.target.value})}/>
                <Label></Label>
               
                
                
                <Para>{errors.postedbyError} {color}</Para>
                <Label>Posted By:</Label>
                <Input type="text" placeholder="Posted By:" onChange={(event)=>setAddQuote({...AddQuote,postedby:event.target.value})}/>
            
                
                
                <Button onClick={handleAddQuote}>Add Quote</Button>
                

            </Forms>
            </Container>
        </AddQuoteContainer>
    )
}

export default AddQuote


