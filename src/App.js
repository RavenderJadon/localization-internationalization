import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
          hi: "ff",
        },
      },
      fr: {
        translation: {
          "Welcome to React": "Bienvenue à React et react-i18next",
          "hi": "french",
        },
      },
    },
    lng: "fr",
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  const { t } = useTranslation();

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
        <h2>{t("Welcome to React")}</h2>
        <h1>{t("hi")}</h1>

      </div>
    </div>
  );
}

export default App;
