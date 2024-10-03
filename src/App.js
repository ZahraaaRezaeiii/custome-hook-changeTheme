import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useChangeTheme } from './useChangeTheme';

function App() {
  const [theme, changeTheme] = useChangeTheme()

  return (
    <div className={`App container ${theme} vh-100 mt-5 mb-5`}  >
      <div className="user-select-none" onClick={changeTheme}>change theme</div>
    </div>
  );
}

export default App;
