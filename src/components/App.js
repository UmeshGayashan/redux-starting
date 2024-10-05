import '../App.css';
import ButtonComponent from './ButtonComponent';
import PostList from './PostList';
import ShowPost from './ShowPost';

function App() {
  return (
    <div className="App">
      <h1>Redux Testing</h1>
      <ButtonComponent/>
      <br></br>
      <PostList/>
      <ShowPost/>
    </div>
  );
}

export default App;
