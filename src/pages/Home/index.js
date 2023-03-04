import {fetchAllMemes} from "../../services/api";

function Home() {
  fetchAllMemes();
  return (
    <h1>Salut</h1>
    )
}

export default Home;
