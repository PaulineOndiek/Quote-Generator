import styled from "styled-components" 
import { useEffect, useState } from "react";
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"

const QuoteContainer=styled.div`
background:aquamarine;
`
const Container=styled.div`
margin:0 auto;
width:80%;`
const QuoteBackground=styled.div`
text-align:center;
background:linear-gradient(rgba(0,0,0,.5) ,rgba(0, 0, 0,.5)), url("https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?cs=srgb&dl=pexels-pixabay-38537.jpg&fm=jpg");
background-size:cover;
background-position:center center;
background-repeat:no-repeat;
height:100vh;
width:40vw;


`
const QuotePara=styled.p`
color:white;
text-align:center;
font-size:2rem;`
const Para=styled.p`
color:white;
`
const QuoteIcons=styled.div``
// const QuotePara=styled.div``
const Button=styled.button`
border:none;
background:transparent;
color:white;
font
// padding:1em 2em;
// border-radius:5px;

`
const ThumbsIcon=styled.div`
display:flex;
gap:2em;
color:white;
`
const ButtonQuote=styled.button`
padding:1em 2em;
box-shadow:0 0 2em grey;
border-radius:5px;
border:none;
color:red;`



const Quotes=()=>{
    const [ThumbUp, setThumbUp]=useState(0)
    const [ThumbDown, setThumbDown]=useState(0)
    const [data,setData]=useState([])
    const[like, setLike]=useState({
        likes:false,
        dislike:false
    })
    
    useEffect(()=>{
        const fetchData = async ()=>{

            const querySnapshot = await getDocs(collection(db, "quotes"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setData(prev=>([...prev, doc.data()]));
    });
        }

        fetchData()

    },[])

    const handleClick = () => {
      
        }
     


        
    return(
        <QuoteContainer>
            <Container>
                <QuoteBackground>
            <QuotePara>Quote Generator</QuotePara>
            <QuoteIcons>
                {/* <FormatQuoteIcon/> */}
                
                {
                    data.map(item=>{
                        return(
                            <div>
                                <Para>"</Para>
                                <QuotePara>{item.quote}</QuotePara>
                                 <Para>"</Para>    

                                <QuotePara>{item.author}</QuotePara>
                                <QuotePara>{item.postedby}</QuotePara>

            <ThumbsIcon>
            <Button onClick={(e)=>setLike(prev=>!prev)}><ThumbUpIcon/>{like.likes? 1:""} </Button>

            <Button onClick={(e)=>setLike(prev=>!prev)}> <ThumbDownIcon/> {like.dislike?1 :""}</Button>
            
        </ThumbsIcon>

        <ButtonQuote onClick={()=>handleClick()} id="new-quote">
        New quote
        </ButtonQuote>


                            </div>
                        
                           
                        )
                    })
                }
                
                {/* <FormatQuoteIcon/> */}
            </QuoteIcons>


        </QuoteBackground>
        </Container>
        </QuoteContainer>
    )
}
export default Quotes