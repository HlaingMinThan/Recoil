import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';
// https://github.com/open-source-labs/Recoilize - for recolize dev tool


ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RecoilizeDebugger />
    <App />
  </RecoilRoot>
)
