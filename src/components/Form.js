import React, {useState} from 'react'

export default function Form() {
    const upperCase = ()=>{
        //console.log("Button has been pressed")
        let newText = text.toUpperCase();
        setText(newText)
        
        
    }

    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }
    
    const [text, setText] = useState('');
    
    return (
        
        <div className = "container">
            
                <h3 className='my-3'>Enter your Text</h3>
                <textarea className="form-control" id="floatingTextarea" value={text} onChange={handleOnChange}></textarea>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={upperCase}>UpperCase</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={lowerCase}>LowerCase</button>
                
                <h3 className='my-3'>Preview of the Text:</h3>    
                <h6>{text}</h6>
        
        </div>
    )
}
