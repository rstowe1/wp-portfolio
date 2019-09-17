import React from 'react'
import styled from 'styled-components';

const Bak = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: block;
  background: white;
  box-shadow: 10px 10px 5px rgb(95, 77, 99);
  padding: 5px;
  position: absolute;
  border-radius: 10px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: -webkit-transform ease 500ms;
  transition: transform ease 500ms;
  background: white;
  transform: rotateY(-180deg);
  padding: 20px;
  font-size: 18px;
  /* back tile styles go here! */
`;

const Back = () => {
  return (
    <Bak className="back">
      <p><strong>Ryan Walker is a Fullstack developer with an emphasis in UI/UX engineering. Ryan has received his Full Stack certification from Georgia Tech</strong>, as well as working towards a certification in the use of the Amazon Web Server service.</p>

      <p>It is Ryan’s, admittedly audacious goal to help modernize family businesses for the 21st century. He has worked primarily in the private sector and his time in the private sector has made him into a swiss army knife of web development. Due to lack of company resources it had become incumbent on Ryan to fill the void for the organizations he’s worked for, he’s helped to install various systems that inured toward organizational stability and prosperity at law firms such as a "white-Shoe Firm", finance companies such Silverton Mortgage, and lease accounting software SaaS company LeaseQuery.</p>

      <p><strong>Ryan’s core belief is that if we can separate ego and help each other then there is no telling what can be accomplished.</strong> Ryan’s work with various forms of marketing analytics has helped him amass an innumerable component library that has helped him craft protocols that can be retrofitted as a bespoke approach for any business regardless of industry.</p>
    </Bak>
  )
}

export default Back;