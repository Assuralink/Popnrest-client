import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import "./style.scss";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";

import { addToCart } from "../../../../actions/cartActions";
import AuthModal from "./AuthModal/index";
import AddToCartConfirmationModal from "./AddToCartConfirmationModal/index";

import { BookingService } from "../../../../services/bookings/index";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "12:00",
      duration: "30",
      showModal: false,
      showConfirmationModal: true,
      error: null,
      proceedToCartConfirmation: false,
    };
  }

  handleAddToCart = () => {
    if (this.props.uid === null) {
      this.setState({ showModal: true });
    } else {
      BookingService.addBooking(this.state).then((res) => {
        if (res.data.statut) {
          this.setState({
            error: null,
            showConfirmationModal: true,
          });
          this.props.addToCart({
            date: res.data.fromDate,
            duration: res.data.duration,
          });
        } else {
          this.setState({
            error: res.data.error,
            success: false,
          });
        }
      });
    }
  };

  handleDayChange = (date) => {
    this.setState({
      date: formatDate(new Date(date)),
    });
  };

  render() {
    return this.state.proceedToCartConfirmation === false ? (
      <div className="BookingForm greyBackground">
        <h3>
          Make a <b>booking</b>
        </h3>
        <div class="bloc Form">
          <div>
            {this.state.error !== null && (
              <div className="bloc errorMessage">
                <i class="bi bi-exclamation-diamond-fill"></i>
                <span class="_content">{this.state.error}</span>
              </div>
            )}
            {this.state.success === true && (
              <div className="bloc successMessage">
                <i class="bi bi-exclamation-diamond-fill"></i>
                <span class="_content">
                  Your booking have been added to cart
                </span>
              </div>
            )}
          </div>
          <div class="chooseDateForm halfSize">
            <label>Choose Date</label>
            <DayPickerInput
              onDayChange={(date) => this.handleDayChange(date)}
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={`${formatDate(new Date())}`}
            />
          </div>
          <div class="_form halfSize">
            <label>Choose Time</label>
            <input
              type="text"
              onChange={(elem) => this.setState({ time: elem.target.value })}
              value="12:00"
            />
          </div>
          <div class="_form fullSize">
            <label>Duration</label>
            <select
              onChange={(elem) =>
                this.setState({ duration: elem.target.value })
              }
            >
              <option value="30" selected>
                30 minutes
              </option>
              <option value="60">1 hour</option>
              <option value="90">1 hour 30min</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => {
            this.handleAddToCart();
          }}
          class="primary"
        >
          Book now
        </button>
        <AuthModal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        />
        <AddToCartConfirmationModal
          show={this.state.showConfirmationModal}
          onHide={() => this.setState({ showConfirmationModal: false })}
          proceedToNextStep={() =>
            this.setState({ proceedToCartConfirmation: true })
          }
        />
      </div>
    ) : (
      <Redirect to="/cart" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.loginReducer.uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (booking) => {
      dispatch(addToCart(booking));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
