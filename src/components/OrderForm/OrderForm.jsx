import React from "react";
import "./OrderForm.css"

const OrderFrom = () => {
    
    
    return (
<div className="form-container">
    <h2>Check Out</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>

    )
}

export default OrderFrom;