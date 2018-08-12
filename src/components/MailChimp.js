import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

class SendToMailChimp extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      status: ""
    };
  }

  isValidEmailAddress(e) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(e);
  }

  _handleEmailChange = e => {
      this.setState({
        email: e.target.value
      });
  };

  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== "success") {
          this.setState({
            status: `error`,
            msg: result.msg
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: "success",
            msg: result.msg
          });
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: "error",
          msg: err
        });
      });
  };

  _handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      {
        status: "sending",
        msg: null
      },
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname
      })
    );
  };

  render() {

    const { confirmMessage } = this.props;

    return (
      <div>

        {this.state.status === "success" ? (
          <div className="has-text-centered"><span className="has-text-success has-text-weight-bold">{confirmMessage}</span></div>
        ) : (<div>
            <form method="post"
                  id="email-capture"
                  noValidate>

              <input className="input is-large"
                     type="email"
                     placeholder="Indirizzo email"
                     onChange={this._handleEmailChange}/>
              {!this.state.email ? <span className="icon is-left">@</span> : null }
              <button type="button"
                      onChange={this._handleFormSubmit}
                      className="button is-primary is-medium">Iscriviti
              </button>
              {this.state.status === "error" && (
                <div className="sh-newsletter-error">
                  <div className="sh-newsletter-error has-text-weight-bold"
                       dangerouslySetInnerHTML={{ __html: this.state.msg }}
                  />
                </div>
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
};

export default SendToMailChimp;