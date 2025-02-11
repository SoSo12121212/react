import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import SectionC from "./components/Section";
import AsideC from "./components/Aside";
import Footer from "./components/Footer";

const appStyle = {
  padding: "20px",
};
const wrapStyle = {
  width: "100%",
  mixWidth: "760px",
  maxWidth: "1080px",
  margin: "0 auto",
};

function App() {
  return (
    <div style={{ background: "red", color: "white" }}>
      <Header />
      <Nav />
      <Main>
        <SectionC />
        <AsideC />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
