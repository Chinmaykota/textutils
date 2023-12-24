import React, {useState}from 'react';


export default function TextForm(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value)
    } 
    const handleUpClick=(event)=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }  
     const handleDwClick=(event)=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }
    
    const handleClearClick=(event)=>{
        let newText=('');
        setText(newText);
        props.showAlert("Text was Cleared","success");
    }    
    const handleRemoveSpaceClick=(event)=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed","success");
    }
    const handleCopyClick=(event)=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard","success");
    }


    const [text, setText]=useState('Enter text here');
    return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="myBox" class="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
     <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert To Uppercase</button>
     <button className="btn btn-primary me-2" onClick={handleDwClick}>Convert To Lowercase</button>
     <button className="btn btn-primary me-2" onClick={handleClearClick}>Clear</button>
     <button className="btn btn-primary me-2" onClick={handleCopyClick}>Copy Text</button>
     <button className="btn btn-primary me-2" onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textBox to Preview'}</p>
    </div>
    </>
    )
}


