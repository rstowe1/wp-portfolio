import React from "react"
import { Container } from "react-grid-system"
import styled from 'styled-components';
import Layout from "../components/layout"
import BlogCard from "../components/about/BlogCard"
// import "../components/about/App.scss"


const Cont = styled.div`
.card-container {
    height: 650px;
    margin: 0;
    padding: 0;
    top: 20px;
    width: 550px;

    margin-top: 20px;
    margin-left: 155px;
    margin-right: 155px;
    position: relative;
    transform-style: preserve-3d;
    box-sizing: border-box;
    &.flipped {
        .front {
            transform: rotateY(180deg);
        }
        .back {
            transform: rotateY(0deg);
        }
   }
`;

const IndexPage = () => (
  <Layout>
    <Container>
      <Cont className='card-container'>
        <BlogCard/>
      </Cont>
    </Container>
  </Layout>
)

export default IndexPage


// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import BlogCard from '../components/about/BlogCard';
// import "../components/about/App.scss";
// import Layout from "../components/layout"
//
// class IndexPage extends React.Component {
//   render() {
//     return (
//       <Layout className="page-container">
//         <BlogCard />
//       </Layout>
//     )
//   }
// }
//
// export default IndexPage


// React-flip documentation: https://www.npmjs.com/package/react-card-flip