import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import addimg from '../assets/images/add.png';
import delimg from '../assets/images/bin (2).png';
import  './content.css'


function Content() {
    const [cards,setCards] = useState([])
    const [title,setTitle] = useState('')
    const [text,SetText] = useState('')
   
const addCard=()=>{
    if(title.trim()===''){
        alert("Title field is empty")
    }else if(text.trim()===''){
        alert("Text field is empty")

    }else{
        
        setCards([...cards,{
            
            id:Date.now(),
            title: title.trim(),
            text: text.trim()
        }])
    }
    
}



const deleteCard = (id) => {
  setCards(cards.filter(card => card.id !== id));
};


  return (

    <>

   
    <Card className='CardStyling' >

         {/* Input Card */}
        <Card className='m-3 inputcard'>
            <Card.Header>

                <input
                        type="text"
                        className="fw-bold h5"
                        style={{
                            border: 'none',
                            borderBottom: 'none',
                            outline: 'none',
                            background: 'none',
                            width: '100%',
                        }}
                        placeholder="Title"
                        onChange={(e)=>setTitle(e.target.value)}
                />

            </Card.Header>



            <Card.Title>
                <textarea
                        placeholder="Enter text"
                        style={{
                            border: 'none',
                            outline: 'none',
                            background: 'none',
                            borderBottom: 'none',
                            width: '100%',
                        }}
                        onChange={(e)=>SetText(e.target.value)}
                />

                
            </Card.Title>



            <Card.Footer><img src={addimg}  alt="addimg" onClick={addCard} /></Card.Footer>
        </Card>


         {/* Storing Card Generation */}
             
      <Card.Body  className='row'> 

       {cards.map((card) => (
            <Col key={card.id} className='col-md-4 col-lg-3 col-12'>
                <Card  className="TextCard mb-3">
                    
                    <Card.Header>
                        <input
                        type="text"
                        className="fw-bold h5"
                        style={{
                            border: 'none',
                            borderBottom: 'none',
                            outline: 'none',
                            background: 'none',
                            width: '100%',
                            
                        }}
                        placeholder="Title"
                        value={card.title}
                        readOnly
                        />
                    </Card.Header>

                    <Card.Text>
                        <textarea
                        placeholder="Enter text"
                        style={{
                            border: 'none',
                            outline: 'none',
                            background: 'none',
                            borderBottom: 'none',
                            width: '100%',
                        }}
                        readOnly
                        value={card.text}

                        />
                    </Card.Text>

                    <Card.Footer className="text-muted"><img src={delimg} className='bin' alt="binimg" onClick={()=>deleteCard(card.id)} /></Card.Footer>
                </Card>
            </Col>
               
      ))}
      


        
      </Card.Body>
       
    
    </Card>
    </>

  );
}
export default Content