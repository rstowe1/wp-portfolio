import React from "react"
import { Container } from "react-grid-system"
import Layout from "../components/layout"
import BlogCard from "../components/about/BlogCard"
import "../components/about/App.scss"

const IndexPage = () => (
  <Layout>
    <Container>
      <div className='page-container'>
        <BlogCard/>
      </div>
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