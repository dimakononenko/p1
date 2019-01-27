import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';
import ava1 from '../../images/ava1.png';


export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      users : []
    }
  }
  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({users: data}))
    console.log(this.state.users);
    }

  render() {
    return (
      <InvestorBoxWrapper>
        <InvestorBox>
          <WithAva>
            <Img src={ava1}/>
            <WithAvaH3>
              <H3>{}</H3>
              <H3>Telecomunication Engineer</H3>
            </WithAvaH3>
          </WithAva>
          <P>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae</P>
        </InvestorBox>
      </InvestorBoxWrapper>
    )
  }
}
//   constructor(props){
//     super(props);
//     this.state = {
//       items: [],
//       name:'',
      
//     }   
//   }

//   componentDidMount(){
//     this.getItems();
//     this.setState({name: results })
//   }

//   getItems() {
//     fetch('https://randomuser.me/api/')
//       .then(results =>  console.log(results))
//   }

//   render() {
//     console.log(this.state);
    
//     return (
//       <div className='privet'>
//         {this.state.items.map(function(item, index) {
//           return (
//             <p key={this.index}>{this.item}</p>
//           )
//         })}
//       </div>
//     )
        
//   }
// };

// <InvestorBoxWrapper>
//   <InvestorBox>
//     <WithAva>
//       <Img src={ava1}/>
//       <WithAvaH3>
//         <H3></H3>
//         <H3>Telecomunication Engineer</H3>
//       </WithAvaH3>
//     </WithAva>
//     <P>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae</P>
//   </InvestorBox>
// </>


    
    
    
    
    
    

// import React from 'react'
// import styled from 'styled-components';
// import { device } from '../../theme/GlobalStyle';
// import data from '../../data/data';
// import ava1 from '../../images/ava1.png';

// export default class InvestorBox extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       investors: data.investors,
//       investor: data.investors[0],
//       index: data.investors[0].index,
//       name: data.investors[0].name,
//       ava: data.investors[0].ava
//     }
//   }
//    render() {
//     return (
// export default () => (
//   <InvestorBoxWrapper>
//     <InvestorBox>
//       <WithAva>
//         <Img src={ava1}/>
//         <WithAvaH3>
//           <H3>Fernando Soler</H3>
//           <H3>Telecomunication Engineer</H3>
//         </WithAvaH3>
//       </WithAva>
//       <P>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae</P>
//     </InvestorBox>
//   </InvestorBoxWrapper>
// )

export const InvestorBoxWrapper = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    position: relative;
    right: 150px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const WithAvaH3 = styled.div``

export const WithAva = styled.div`
  @media ${device.mobile} {
    display: flex;
    align-items: flex-start;
    margin: 47px 0px 0px 48px;
    Img {
      background: #FFFFFF;
      border-radius: 50%;
      box-shadow: 0 3px 20px 0 rgba(0,0,0,0.22);
      margin-right: 25px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const H3 = styled.h3`
  @media ${device.mobile} {
    font-family: Chivo-Bold;
    font-size: 18px;
    color: #263238;
    line-height: 24px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const P = styled.p`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const InvestorBox = styled.div`
  @media ${device.mobile} {
    margin-left: 40px;
    width: 408px;
    height: 296px;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0 #F0F2F4;
    font-size: 18px;
    line-height: 32px;
    font-family: Chivo-Regular;
    color: #324148;
    H3:first-of-type {
      color: #66BB6A;
      line-height: 0em;
    }
    H3 {
      width: 200px;
      font-family: Chivo-Bold;
      font-size: 18px;
      line-height: 24px;
    }
    P {
      width: 312px;
      margin-left: 48px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const Img = styled.img`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const Span = styled.span``