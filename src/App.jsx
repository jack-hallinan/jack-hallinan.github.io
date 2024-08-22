import BioSection from './components/bioSection'
import { Box } from '@mui/material'

function App() {
  return (
    <Box sx={{display:"flex", flexDirection: "column", alignItems:"center", gap:"2rem"}}>
      <BioSection/>
      <p>Fac</p>
    </Box>
  )
}

export default App
