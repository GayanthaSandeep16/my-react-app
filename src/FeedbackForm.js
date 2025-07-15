import { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() &&
      message.trim() &&
      email.trim() &&
      email.match(emailRegex)
    ) {
      setSubmitted(true);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div>
      <h2>User Feed back Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label>Message :</label>
          <br />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
          />
        </div>
        <div>
          <label>Email :</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>preview:</h3>
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            <strong>Message: </strong>
            {message}
          </p>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
