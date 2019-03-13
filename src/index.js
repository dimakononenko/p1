import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import FirstSection from './components/body/FirstSection';
import SecondSection from './components/body/SecondSection';
import Footer from './components/Footer/Footer';
import ThirdSection from './components/body/ThirdSection';
import Carousel from './components/Body/Carousel';
import styled from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';



const Site = styled.div``

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      user: []
    }
  };

  loadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => {
      this.setState({
        users: json,
        user: json[0]
      })
    });
  }

  componentDidMount() {
    this.loadUsers()
  }

  render () {
    return (
      <React.Fragment>
        <Site>
          <GlobalStyle />
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Carousel users={this.state.users} />
          <Footer />
        </Site>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));

module.hot.accept();