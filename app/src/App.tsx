import './App.less';
import { TestUseWindowResize, TestUseUrlLoader } from './Panels'

function App() {
  return (
    <div className="App">
      <div>
        <TestUseWindowResize />
        <TestUseUrlLoader />
      </div>
    </div>
  )
}

export default App
