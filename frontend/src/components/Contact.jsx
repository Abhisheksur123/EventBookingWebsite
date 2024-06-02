import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where, Any City, 4521</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: 7602287499</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>abhisheksur99@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/search?q=balichak+google+map&rlz=1C1VDKB_enIN973IN973&oq=balichak+google+map&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgYIAhAjGCcyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogQyCggGEAAYgAQYogTSAQkxMTY1OGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
