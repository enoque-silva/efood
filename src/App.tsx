import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { GlobalStyle } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
