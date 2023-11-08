import axios from "axios";
import { useState } from "react";

const Index = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
    const changeMail = (e) => {
      setEmail(e.target.value);
    }
  
    const changePass = (e) => {
      setPassword(e.target.value);
    }
    
    const http = axios.create({
      baseURL: 'http://localhost:8000',
      withCredentials: true,
    });

    const log = async ()  => {
      await http.get('/sanctum/csrf-cookie').then((res) => {
        http.post('/api/login', {email, password}).then((res) => {
          console.log(res);
        })
      })
    }


  return (
    <div>
      
      Email<input type="text" onChange={changeMail} value={email}/>
      <br />
      Pass<input type="text" onChange={changePass} value={password}/>

      <button onClick={log}>login</button>
    </div>
  );
}

export default Index;