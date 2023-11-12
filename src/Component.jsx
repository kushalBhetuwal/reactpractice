import { useState } from "react";

export default function Component() {
  const [name, setName] = useState("");
  const[name1,setName1] = useState("");
  const[email,setEmail] = useState("");

  function handleClick(e){
  e.preventDefault();
   setName("");
   setName1("");
   setEmail("")
  }

  return (
    <div>
      <label htmlFor="firstname">FirstName:</label>
      <input type="text" name="firstname" value={name} onChange={(e)=>setName(e.target.value)} required />
      <br />
      <label htmlFor="lastname">LastName:</label>
      <input type="text" name="lastname" value={name1} onChange={(e)=>setName1(e.target.value)} required />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required /><br/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
