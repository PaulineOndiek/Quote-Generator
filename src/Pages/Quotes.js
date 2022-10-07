import styled from "styled-components";
import { useEffect, useState } from "react";
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const QuoteContainer = styled.div`
  // background: #B4CDE6;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;
const QuoteBackground = styled.div`
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 60vh;
  width: 80vw;
`;
const QuotePara = styled.p`
  color: white;
  text-align: center;
  font-size: 2rem;
`;
const Para = styled.p`
  color: white;
`;
const QuoteIcons = styled.div``;
// const QuotePara=styled.div``
const Button = styled.button`
border:none;
background:transparent;
color:white;
font
// padding:1em 2em;
// border-radius:5px;

`;
const ThumbsIcon = styled.div`
  display: flex;
  gap: 2em;
  color: white;
`;
const ButtonQuote = styled.button`
  padding: 1em 2em;
  box-shadow: 0 0 2em grey;
  border-radius: 5px;
  border: none;
  color: red;
`
const ButtonDelete=styled.button`
`
const ButtonIcon=styled.div`
display:flex;
justify-content:space-around;
color:grey;
`

const Quotes = () => {
  const [ThumbUp, setThumbUp] = useState(0);
  const [ThumbDown, setThumbDown] = useState(0);
  const [randomQuote, setRandomQuote]=useState("");
  const [data, setData] = useState([]);
  const [opinion, setOpinion] = useState({
    likes: false,
    dislike: false,
  });

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "quotes"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setData((prev) => [...prev, doc.data()]);
      });
    })();
  
   
    
  }, []);

  useEffect(()=>{
   newQuote()
             
  }, [data])

const newQuote=()=>{
  const randomNum= Math.floor(Math.random()*data.length)
  setRandomQuote(data[randomNum])
}


  const handleQuote=()=>{
    newQuote()
  }



  return (
    <QuoteContainer>
      <Container>
        <QuoteBackground>
          <QuotePara>Quote Generator</QuotePara>
          <QuoteIcons>
            {/* <FormatQuoteIcon/> */}

                <div>
                  <Para>"</Para>
                  <QuotePara>{randomQuote !== undefined && randomQuote.quote}</QuotePara>
                  <Para>"</Para>

                  <QuotePara> ~{randomQuote !== undefined && randomQuote.author}</QuotePara>
                  <QuotePara>{randomQuote !== undefined && randomQuote.postedby}</QuotePara>

                  <ThumbsIcon>
                    <Button
                      onClick={(e) =>
                        setOpinion((prev) => ({ ...prev, likes: !prev.likes }))
                      }
                    >
                      <ThumbUpIcon />
                      {opinion.likes ? 1 : ""}{" "}
                    </Button>

                    <Button
                      onClick={(e) =>
                        setOpinion((prev) => ({
                          ...prev,
                          dislike: !prev.dislike,
                        }))
                      }
                    >
                      {" "}
                      <ThumbDownIcon /> {opinion.dislike ? 1 : ""}
                    </Button>
                  </ThumbsIcon>
                  <ButtonIcon>                  

                  <ButtonQuote> <DeleteForeverIcon/></ButtonQuote>
                  <ButtonQuote id="new-quote" onClick= {handleQuote}>
                    New quote
                  </ButtonQuote>
                <ButtonQuote><EditIcon/></ButtonQuote>
                </ButtonIcon>

               
                </div>
              
            

            {/* <FormatQuoteIcon/> */}
          </QuoteIcons>
        </QuoteBackground>
      </Container>
    </QuoteContainer>
  );
};
export default Quotes;
