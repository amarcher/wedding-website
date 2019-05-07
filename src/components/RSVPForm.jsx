import React, { Component } from 'react';
import classNames from 'classnames';
import { submitRsvp } from '../actions';
import Frame from '../photos/Frame.png';

import './RSVPForm.scss';

const STATUS = {
  FAILED: 'error',
  UNSUBMITTED: 'unsubmitted',
  SUBMITTING: 'submitting',
  SUBMITTED: 'submitted',
};

const EMAIL_REGEXP = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);

class RSVPForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendingWedding: 1,
      isCardOpen: false,
      email: '',
      guestCount: 0,
      name: '',
      status: STATUS.UNSUBMITTED,
    };

    this.onChange = this.onChange.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSent = this.onSent.bind(this);
    this.onRetry = this.onRetry.bind(this);
    this.toggleCardOpen = this.toggleCardOpen.bind(this);
  }

  componentWillUnmount() {
    if (this.timeout) window.clearTimeout(this.timeout);
  }

  onChange(e) {
    const { value, id: fieldName } = e.target;

    this.setState(prevState => ({
      [fieldName]: (typeof prevState[fieldName] === 'number') ? parseInt(value, 10) : value,
    }));
  }

  onSuccess() {
    this.setState(() => ({
      status: STATUS.SUBMITTING,
    }));

    this.timeout = setTimeout(this.onSent, 3500);
  }

  onSent() {
    if (this.timeout) this.timeout = undefined;

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

    if (!this.isValid()) return;

    const { status, isCardOpen, ...fields } = this.state;

    submitRsvp(fields).then(this.onSuccess).catch(this.onFailure);
  }

  toggleCardOpen() {
    this.setState(({ isCardOpen }) => ({
      isCardOpen: !isCardOpen,
    }));
  }

  isValid() {
    const { email, name } = this.state;

    return EMAIL_REGEXP.test(email) && name.length;
  }


  renderEnvelope() {
    const {
      attendingWedding,
      email,
      guestCount,
      isCardOpen,
      name,
      status,
    } = this.state;

    const envelopeClassName = classNames('rsvp-form__envelope', {
      sending: status === STATUS.SUBMITTING,
      'card-in': !isCardOpen,
      'card-out': isCardOpen && status !== STATUS.SUBMITTED,
    });

    return (
      <div className="rsvp-form">
        <div className={envelopeClassName}>
          <button className="rsvp-form__front" type="button" onClick={this.toggleCardOpen}>
            <p className="rsvp-form__stamp">Click to RSVP</p>
          </button>

          <div className="rsvp-form__card" style={{ backgroundImage: `url(${Frame})` }}>
            <h2 className="rsvp-form__card-title">RSVP</h2>
            <h3 className="rsvp-form__card-subtitle">Kindly Respond by August 31, 2019</h3>

            <form className="rsvp-form__form" onSubmit={this.onSubmit}>
              <input id="name" name="name" type="text" placeholder="Your Name" value={name} onChange={this.onChange} />
              <input id="email" name="email" type="email" placeholder="Your Email" value={email} onChange={this.onChange} />
              <div className="rsvp-form__attending_guests">
                {/* eslint-disable-next-line */}
                <label>
                  <input type="radio" value={1} id="attendingWedding" name="attendingWedding" onChange={this.onChange} checked={!!attendingWedding} />
                  Will Attend
                </label>
                <div className="rsvp-form__guest-count-container">
                  <select value={guestCount} id="guestCount" className="rsvp-form__guest-count" name="guestCount" onChange={this.onChange}>
                    <option value={0}>1</option>
                    <option value={1}>2</option>
                    <option value={2}>3</option>
                    <option value={3}>4</option>
                    <option value={4}>5</option>
                    <option value={5}>6</option>
                    <option value={6}>7</option>
                  </select>
                  No. Attending
                </div>
              </div>
              {/* eslint-disable-next-line */}
              <label>
                <input type="radio" value={0} id="attendingWedding" name="attendingWedding" onChange={this.onChange} checked={!attendingWedding} />
                Regretfully Cannot Attend
              </label>
              <button className="submit" type="submit" disabled={!this.isValid()}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
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
        <h1>{attendingWedding ? `${name}, we can’t wait to see you!` : `${name}, we are sorry we’ll miss you`}</h1>
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
      case STATUS.SUBMITTING:
      default:
        return this.renderEnvelope();
    }
  }
}

export default RSVPForm;
