import BioSection from './components/bioSection'
import { Box, Divider } from '@mui/material'

function App() {
  return (
    <Box sx={{display:"flex", flexDirection: "column", gap:"2rem", margin:"0 5%"}}>
      <BioSection/>
      <h2>About Me</h2>
      <Divider/>
    </Box>
  )
}

export default App
