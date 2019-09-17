import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;

const BlogP = styled.div`
  height: 100%; 
`;

const BlogD = styled.p`
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 14px;
`;

const BlogC = styled.p`
  font-size: 20px;
  position: relative;
  bottom: 0px;
  text-align: left;
`;

const Read = styled.p`
  font-size: 20px;
  position: relative;
  bottom: 0px;
  text-align: right;
`;

const MainArea = () => {
  return (
    <Main className="main-area">
      <BlogP className="blog-post">
        <BlogD className="date">Accountant/Developer</BlogD>
        <BlogC className="blog-content">
          Ryan Walker is a Full-stack developer with an emphasis in UI/UX engineering.</BlogC>
        <Read className="read-more">Click to read more...</Read>
      </BlogP>
    </Main>
  )
}

export default MainArea;