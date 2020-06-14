import React, {useState} from 'react'; // useState is not default exported from react 
import Counter from './countApp';
                              // that's why we use "{" "}" around useState
import './App.css';

function App() {

//let [count, setCount] = useState(0);

  return (

    <div> 
      <Counter />
     </div>
 
  );
}

export default App; 

//*************Keep in mind ************** */
// Only one thing can be default exported in one file 
// no two things can be default exported in one file
// one component per file - strictly recommended :)

