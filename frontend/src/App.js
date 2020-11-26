import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container fluid>
          <h1>Welcome to shopping cart</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
