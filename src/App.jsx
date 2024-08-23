import AboutMeSection from './components/aboutSection'
import BioSection from './components/bioSection'
import styled from '@emotion/styled'
import { screenSizes } from './themes'
import { Box } from '@mui/material'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 5% 0 5%;
  max-width: 60rem;
  align-items: center;

  @media (max-width: ${ screenSizes.medium }) {
      margin-top: 4%;
  }
`

function App() {
  return (
    <Box sx={{width: "100vw"}}>
    <Container>
      <BioSection/>
      <AboutMeSection/>
    </Container>
    </Box>
  )
}

export default App
