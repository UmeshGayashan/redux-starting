import '../App.css';
import ButtonComponent from './ButtonComponent';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <h1>Redux Testing</h1>
      <ButtonComponent/>
      <br></br>
      <PostList/>
    </div>
  );
}

export default App;
