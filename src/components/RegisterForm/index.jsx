import { useState } from "react"

export const RegisterForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault();
        console.log({name, email, password})

       setName("")
       setEmail("")
       setPassword("")
       
    }

    return(
        <form onSubmit={submit}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>

            <label htmlFor="e-mail">E-mail</label>
            <input type="email" id="e-mail" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>

            <button type="submit">Enviar</button>
        </form>
    )
}