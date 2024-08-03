import "./Ticket.css";
import TicketDetailImg from "./ticket-details.jpg";

function Ticket() {
  return (
    <>
      <div className="container">
        <div className="ticket-details-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="left-image">
                  <img src={TicketDetailImg} alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="right-content">
                  <h4>Sunny Hill Festival</h4>
                  <span>240 Tickets still available</span>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o"></i> Thursday 18:00 to 22:00
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>Copacabana Beach, Rio
                      de Janeiro
                    </li>
                  </ul>
                  <div className="quantity-content">
                    <div className="left-content">
                      <h6>Standard Ticket</h6>
                      <p>$65 per ticket</p>
                    </div>
                    <div className="right-content">
                      <div className="quantity buttons_added">
                        <input type="button" value="-" className="minus" />
                        <input
                          type="number"
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          value="1"
                          title="Qty"
                          className="input-text qty text"
                          size="4"
                          pattern=""
                          inputMode=""
                        />
                        <input type="button" value="+" className="plus" />
                      </div>
                    </div>
                  </div>
                  <div className="total">
                    <h4>Total: $210.00</h4>
                    <div className="main-dark-button">
                      <a href="#">Purchase Tickets</a>
                    </div>
                  </div>
                  <div className="warn">
                    <p>*You Can Only Buy 10 Tickets For This Show</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticket;
