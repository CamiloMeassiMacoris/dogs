import React from "react";

const Head = ({ title, description }) => {
  React.useEffect(() => {
    if (title) document.title = title + " | Dogs";
    if (description)
      document
        .querySelector("meta[name='description']")
        .setAttribute("content", description || "");
  }, [title, description]);
  return <></>;
};

export default Head;
