import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

function App() {
  function whatClicked(index) {
    console.log(index);
  }
  return (
    <div>
      <Message title="Welcome">
        <p>You are amazing!</p>
      </Message>

      <ListGroup
        items={["Breaking Bad", "Better call Saul", "Avengers"]}
        name="Best Movies"
        parentJob={whatClicked}
      />
      <ListGroup
        items={["Breaking", "Better call", "Runaway"]}
        name="Best Musics"
        parentJob={whatClicked}
      />
    </div>
  );
}

export default App;
