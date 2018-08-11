import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp"

class SendToMailChimp extends React.Component  {

  constructor() {
    super();
    this.state = {
      email: ''
    };
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._postEmailToMailchimp = this._postEmailToMailchimp.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== 'success') {
          this.setState({
            status: `error`,
            msg: result.msg
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: 'success',
            msg: result.msg
          });
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: 'error',
          msg: err
        });
      });
  };

  _handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      {
        status: 'sending',
        msg: null
      },
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname
      })
    );
  };

  render() {

    const { confirmMessage } = this.props

console.log(this.state.email)

    return (
      <div>

        {this.state.status === 'success' ? (
          <div>{confirmMessage}</div>
        ) : (<div>
            <form method="post"
                  id="email-capture"
                  noValidate>

              <input className="input is-large"
                     type="email"
                     placeholder="Indirizzo email"
                     onChange={this._handleEmailChange}/>
              <span className="icon is-left">@</span>
              <button type="button"
                      onChange={this._handleFormSubmit}
                      className="button is-primary is-medium">Iscriviti
              </button>
              {this.state.status === 'error' && (
                <div
                  dangerouslySetInnerHTML={{ __html: this.state.msg }}
                />
              )}

            </form>

          </div>
        )}

      </div>
    );
  }
}

SendToMailChimp.defaultProps = {
  confirmMessage: `Grazie! Riceverai a breve un'email di conferma.`
}

export default SendToMailChimp;