import React from "react";

const FooterComponent = ({ linkedInURL, emailAddress, githubURL, CV }) => {
  return (
    <div style={styles.footer}>
      {/* <a
        href={CV}
        style={styles.linkText}
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a> */}
      <a
        href={linkedInURL}
        style={styles.linkText}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

      <a
        href={githubURL}
        style={styles.linkText}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a href={`mailto:${emailAddress}`} style={styles.linkText}>
        Email
      </a>
    </div>
  );
};

const styles = {
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "20% 0 10% 0",
  },
  linkText: {
    fontSize: "1.2vw",
    color: "rgba(255,255,255,0.5)",
    margin: "0 1%",
    textDecoration: "none",
  },
};

export default FooterComponent;
