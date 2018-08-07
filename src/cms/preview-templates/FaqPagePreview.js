import React from "react";
import PropTypes from "prop-types";
import { FaqPageTemplate } from "../../templates/faq-page";


const FaqPagePreview = ({ entry }) => {

  const entryFaq = entry.getIn(["data", "faq"]);
  const faq = entryFaq ? entryFaq.toJS() : [];

  return (
    <FaqPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(['data', 'heroImage'])}
      heading={entry.getIn(["data", "heading"])}
      faq={faq}
    />
  );
}

FaqPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default FaqPagePreview;
