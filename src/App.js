import "./App.css";
import { getTrans as t } from "./Languages/localization";

function App() {
  return (
    <div className="App">
      <h1>hello React</h1>
      <label for="cars">Choose a Language:</label>

      <select name="language" id="language">
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="german">German</option>
        <option value="french">French</option>
      </select>

      <div>
        <h2>{t("one")}</h2>
        <h1>{t("two")}</h1>
      </div>
    </div>
  );
}

export default App;
