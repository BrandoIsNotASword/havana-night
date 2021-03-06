import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './header'
import Gallery from './gallery'

import 'normalize.css'

import bg from '../images/bg-anayjose.jpg'

const MIN_WIDTH = '768px'

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14px;
    font-family: futura-pt, sans-serif;
    
    @media(min-width: ${MIN_WIDTH}) {
      font-size: 16px;
    }
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  background: url(${bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.15);

  @media (min-width: 1440px) {
    padding: 0 15%;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  margin: 0;
`

const Footer = styled.footer`
  padding: 15px;
  box-sizing: border-box;
  font-size: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
    padding: 25px 80px;
  }
`

const FooterColumn = styled.div`
  display: flex;

  a {
    color: initial;
    margin-left: 10px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Content>
          <Header />
          <Main>{children}</Main>
        </Content>
      </Wrapper>
      <Gallery />
      <Footer>
        <p>© Hotel Ana y José. All Rights Reserved.</p>
        <FooterColumn>
          <a
            href="https://anayjose.com/reservation-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservation policy
          </a>
          <a href="https://anayjose.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
        </FooterColumn>
      </Footer>
    </>
  )
}

export default Layout
