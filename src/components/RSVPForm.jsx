import React, { Component } from 'react';
import classNames from 'classnames';
import { submitRsvp } from '../actions';

import './RSVPForm.scss';

const STATUS = {
  FAILED: 'error',
  UNSUBMITTED: 'unsubmitted',
  SUBMITTED: 'submitted',
};

class RSVPForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendingWedding: true,
      attendingWelcome: false,
      isCardOpen: false,
      email: '',
      guestCount: 1,
      name: '',
      status: STATUS.UNSUBMITTED,
    };

    this.onChange = this.onChange.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRetry = this.onRetry.bind(this);
    this.toggleCardOpen = this.toggleCardOpen.bind(this);
    this.toggleCardOpen = this.toggleCardOpen.bind(this);
  }

  onChange(e) {
    const { value, id: fieldName } = e.target;

    this.setState(() => ({
      [fieldName]: value,
    }));
  }

  onSuccess() {
    this.setState(() => ({
      status: STATUS.SUBMITTED,
    }));
  }

  onFailure() {
    this.setState(() => ({
      status: STATUS.FAILED,
    }));
  }

  onRetry() {
    this.setState(() => ({
      status: STATUS.UNSUBMITTED,
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    const { status, ...fields } = this.state;

    this.toggleCardOpen();

    submitRsvp(fields).then(this.onSuccess).catch(this.onFailure);
  }

  toggleCardOpen() {
    this.setState(({ isCardOpen }) => ({
      isCardOpen: !isCardOpen,
    }));
  }


  renderEnvelope() {
    const {
      attendingWedding,
      attendingWelcome,
      email,
      guestCount,
      isCardOpen,
      name,
      status,
    } = this.state;

    const envelopeClassName = classNames('library-card', 'envelope', {
      'card-in': !isCardOpen || status === STATUS.SUBMITTED,
      'card-out': isCardOpen && status !== STATUS.SUBMITTED,
    });

    let stampText;
    if (status !== STATUS.SUBMITTED) {
      stampText = 'Click to RSVP';
    } else {
      stampText = 'Thanks for RSVP-ing!';
    }

    return (
      <div className="rsvp-form">
        <div className={envelopeClassName}>
          <button className="front" type="button" onClick={this.toggleCardOpen}>
            <p className="stamp">{stampText}</p>
          </button>

          <div className="card">
            <h2 className="author">RSVP</h2>

            <table>
              <tr className="top-row">
                <th className="due-date" />
                <th className="issued-to">Your Response</th>
              </tr>
              <tr>
                <td className="due-date form-label">
                  <time>Name</time>
                </td>
                <td className="issued-to" />
              </tr>
              <tr>
                <td className="due-date form-label">
                  <time>Email</time>
                </td>
                <td className="issued-to">
                  <br />
                </td>
              </tr>
              <tr>
                <td className="due-date form-label">
                  <time>Wedding</time>
                </td>
                <td className="issued-to">
                  <br />
                </td>
              </tr>
              <tr>
                <td className="due-date form-label">
                  <time>Welcome</time>
                </td>
                <td className="issued-to">
                  <br />
                </td>
              </tr>
              <tr>
                <td className="due-date form-label">
                  <time>Guests</time>
                </td>
                <td className="issued-to">
                  <br />
                </td>
              </tr>
            </table>
            <form className="rsvp-form__form" onSubmit={this.onSubmit}>
              <input id="name" name="name" type="text" placeholder=" Enter Your Name" value={name} onChange={this.onChange} />
              <input id="email" name="email" type="email" placeholder=" Enter Your Email Address" value={email} onChange={this.onChange} />
              <div className="attending-container">
                <select id="attendingWedding" className="attending" name="attendingWedding" onChange={this.onChange}>
                  <option value selected={attendingWedding}>Attending</option>
                  <option value={false} selected={!attendingWedding}>Not Attending</option>
                </select>
              </div>
              <div className="attending-container">
                <select id="attendingWelcome" className="attending" name="attendingWelcome" onChange={this.onChange}>
                  <option value selected={attendingWelcome}>Attending</option>
                  <option value={false} selected={!attendingWelcome}>Not Attending</option>
                </select>
              </div>
              <input id="guestCount" className="plusone" name="guestCount" type="number" placeholder="1" value={guestCount} onChange={this.onChange} />
              <button className="submit" type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderForm() {
    const {
      email,
      guestCount,
      name,
      attendingWedding,
      attendingWelcome,
    } = this.state;

    return (
      <form className="rsvp-form" onSubmit={this.onSubmit}>
        <input type="email" id="email" placeholder="Email" value={email} onChange={this.onChange} />
        <input type="text" id="name" placeholder="Name" value={name} onChange={this.onChange} />
        <label htmlFor={guestCount}>
          Guests:&nbsp;
          <input type="number" id="guestCount" value={guestCount} onChange={this.onChange} />
        </label>
        <label htmlFor={guestCount}>
          Attending Wedding:&nbsp;
          <input type="checkbox" id="attendingWedding" checked={attendingWedding} onChange={this.onChange} />
        </label>
        <label htmlFor={guestCount}>
          Attending Welcome:&nbsp;
          <input type="checkbox" id="attendingWelcome" checked={attendingWelcome} onChange={this.onChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderFailure() {
    return (
      <div className="rsvp-form__failure">
        <button type="button" onClick={this.onRetry}>
          Try again
        </button>
      </div>
    );
  }

  renderSuccess() {
    const { name: fullName, attendingWedding } = this.state;

    const name = fullName.split(' ')[0];

    return (
      <div className="rsvp-form__success">
        <h1>{attendingWedding ? `${name}, we cant wait to see you!` : `${name}, we are sorry we’ll miss you`}</h1>
      </div>
    );
  }

  render() {
    const { status } = this.state;

    switch (status) {
      case STATUS.FAILED:
        return this.renderFailure();
      case STATUS.SUBMITTED:
        return this.renderSuccess();
      case STATUS.UNSUBMITTED:
      default:
        return this.renderEnvelope();
    }
  }
}

export default RSVPForm;
