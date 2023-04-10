import Container from "@mui/material/Container"
import Header from "./components/Header"
import MyInfoCard from "./components/MyInfoCard"
import ToBeContinued from "./components/ToBeContinued"

export default function App() {
  return (
    <Container>
      <Header />
      <MyInfoCard />
      <ToBeContinued />
    </Container>
  )
}
