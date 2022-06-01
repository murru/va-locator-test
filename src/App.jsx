import { Container } from '@mui/material'
import Drugs from './components/Drugs'
import PainManagement from './components/PainManagement'
function App() {
  return (
    <Container fluid>
      <h1>Drugs</h1>
      <Drugs />
      <br/>
      <br/>
      <h1>Pain Management</h1>
      <PainManagement />
    </Container>
  )
}

export default App
