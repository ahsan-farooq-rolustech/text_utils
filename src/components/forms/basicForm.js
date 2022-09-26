import React, { useState } from 'react'

const BasicForm = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    const submitForm = (event) =>
    {
        event.preventDefault();
        console.log(email);
        console.log(password);
        console.log(allEntry);
        console.log(email);
        console.log(password);
        console.log(allEntry);
        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }
    return (
        <>
            <form action="" onSubmit={ submitForm }>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoCapitalize='off' value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete='off' value={ password } onChange={ (p) => setPassword(p.target.value) } />
                </div>

                <button type="submit" >Login</button>
            </form>

            <div>
                {
                    allEntry.map((curElm) =>
                    {
                        return (
                            <div className='showDataStyles' >
                                <p>{ curElm.email }</p>
                                <p>{ curElm.password }</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BasicForm