// Dependencies
import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

// Languages
import { en, es } from './internalization'

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'es',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
