import {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function login() {
    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
       e.preventDefault()
       axios.post('http://localhost:3001/login',{name, password})
       .then(result => console.log(result))
       navigate('/Home')
    }


    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your Name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input
                    type="Password"
                    placeholder="Enter your Password"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    submit
                </button>

                </form>
  
            </div>
            

        </div>
    )
}

export default login