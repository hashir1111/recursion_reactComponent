// import './App.css';
// import Dummypage from './DummyCode';
import Family from './Family';
import Tree from './Tree';
import { familyTree } from './data';
import { TreeData } from './treedata';

function App() {
  return (
    <div className="App">
      <Family familyTree={familyTree} />
      <Tree tree={TreeData} />
      {/* <Dummypage /> */}
    </div>
  );
}

export default App;
