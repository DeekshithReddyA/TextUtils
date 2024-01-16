import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    // console.log("Uppercase was clicked");
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }

  const handleClearClick = ()=>{
    let newText = ""
    setText(newText);
  }

  const handleOnChange =(event) =>{
    // console.log("On change");
    setText(event.target.value);
  }

  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success");
  }
  const [text, setText] =useState('');
  // text ="new text"; // Wrong way to change the state 
  // setText("new text"); //Correct way to change the state


  return (
    <>
    <div className="container my-3">
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1"  rows="3"></textarea>
        </div>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
       <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <p>Words-{text.split(" ").filter((element)=>{return element.length!==0}).length} , Characters-{text.length} </p>
      <p>{0.1* text.split(" ").filter((element)=>{return element.length!==0}).length} seconds to read the above text</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:'Enter something in the text box above to preview here'}</p>
    </div>
    </>
  );
}
