import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

class SendToMailChimp extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      status: "error"
    };
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== "success") {
          this.setState({
            status: "error",
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

  handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      {
        status: "sending",
        msg: null
      },
      // setState callback (subscribe email to MC)
      this.postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname
      })
    );
  };

  render() {

    const { confirmMessage } = this.props;

    return (
      <div>

        {this.state.status === "success" ? (
          <div className="sh-success-alert has-text-centered has-background-white">
            <span
              className="has-text-success has-text-weight-bold">{confirmMessage}</span>
          </div>
        ) : (<div>
            <form method="post"
                  id="email-capture"
                  noValidate>

              <input className="input is-large"
                     type="email"
                     placeholder="Indirizzo email"
                     onChange={this.handleEmailChange}/>
              {!this.state.email ?
                <span className="icon is-left at"></span>
                : ( this.validateEmail(this.state.email ) ?
                  <span className="icon is-left valid"></span> : <span className="icon is-left invalid"></span> ) }


                  <button type="button"
                          onClick={this.handleFormSubmit}
                          disabled={!this.validateEmail(this.state.email)}
                          className="button is-primary is-medium">Iscriviti</button>

              {this.state.status === "error" && (
                <div className="sh-newsletter-error">
                  <div className="sh-newsletter-error has-text-weight-bold"
                       dangerouslySetInnerHTML={{ __html: this.state.msg }}
                  /></div>
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