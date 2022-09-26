import React,{useState} from 'react'

const TextForm = (props) =>
{
    const [text, setText] = useState('Enter text here')

    const handleUpClick=()=>{
        console.log('To upper case button clicked')
        let newText=text.toUpperCase()
        setText(newText)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleLowClick=()=>
    {
        let newText=text.toLowerCase()
        setText(newText)
    }


    return (
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
        </div>

        <div className='container mr-3'>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm