import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import Drugs from './components/Drugs'
import PainManagement from './components/PainManagement'
function App() {

  const [drugs, setDrugs] = useState(null);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [color, setColor] = useState(null)
  const [actionColor, setActionColor] = useState(null)

  const handleDrugSelection = (id) => {
    const sd = drugs.find( (d) => d.id === id)
    setSelectedDrug(sd)
    setColor( sd.Action === 'CAUTION' ? '#FEEAA6' : '#DCF1CB')
    setActionColor( sd.Action === 'CAUTION' ? '#E1A91C' : '#7AB648')
  }

  useEffect( () => {
    fetch(`http://localhost:4000`)
      .then((response) => response.json())
      .then((actualData) => {
        setDrugs(actualData);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [])

  return (
    <Container fluid>
      <h1>Drugs</h1>
      { !drugs && <p>Getting drugs...</p> }
      { drugs && <Drugs drugs={ drugs } handler={handleDrugSelection} /> }
      <br/>
      <br/>
      <h1>Pain Management</h1>
      { !selectedDrug && <p>Click on a drug button to see it's pain management table</p> }
      { selectedDrug && <PainManagement selectedDrug={selectedDrug} color={color} actionColor={actionColor} /> }
    </Container>
  )
}

export default App
