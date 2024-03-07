import React from 'react';


function About() {
  return (
    <div className="about-container ">
      <div className="about-box">
        <h2 className="about-heading">Introduction to Bitcoin</h2>
        <p className="about-text">
          Bitcoin is a decentralized digital currency, without a central bank or single administrator,
          that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
        </p>
      </div>
      <div className="about-box">
        <h2 className="about-heading">History of Bitcoin</h2>
        <p className="about-text">
          Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto
          and started in 2009 when its implementation was released as open-source software.
        </p>
      </div>
      <div className="about-box">
        <h2 className="about-heading">How Bitcoin Works</h2>
        <p className="about-text">
          Bitcoin transactions are verified by network nodes through cryptography and recorded in a public
          distributed ledger called a blockchain. Bitcoin was the first cryptocurrency to be created and is
          currently the most widely used and valuable digital currency.
        </p>
      </div>
    </div>
  );
}

export default About;
