import { useState } from "react";

function FeedbackForm() {
 const [name , setName] = useState("");
 const [message, setMessage] = useState("");
 const[ submitted, setSubmitted] = useState(false)

 const handleSumit = (e) =>{
     e.preventDefault();
     if (name.trim() && message.trim()) {
        setSubmitted(true)
     }else{
        alert("Please fill out all fields")
     }

 }


 return(

    <diV>
        <h2>User Feed back Form</h2>
        <form onSubmit={handleSumit}>
            <div>
                <lable>Name:</lable><br/>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}
                placeholder="Enter Your Name"/>
            </div>
            <div>
                <lable>Message :</lable><br/>
                <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)}
                placeholder="Enter Your Message"/>
            </div>
              <button type="submit">Submit</button>
        </form>

        {submitted && (
            <div style={{marginTop: "20px"}}>
                <h3>preview:</h3>
                <p><strong>Name: </strong>{name}</p>
                 <p><strong>Message: </strong>{message}</p>

            </div>
        )}

    </diV>
 )
    
}

export default FeedbackForm;