import React,{useState} from 'react'

const TextForm = (props) =>
{
    const [text, setText] = useState('Enter text here')
    return (
        <div>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary'>Convert to UpperCase</button>
        </div>
    )
}

export default TextForm