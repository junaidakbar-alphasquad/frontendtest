import { Provider } from 'react-redux'
import '../styles/globals.css'
import Store from "../store/store";
import Pagelayout from "../components/Pagelayout"
function MyApp({ Component, pageProps }) {
  return(
    
    <Provider store={Store}>
      <Pagelayout>
        <Component {...pageProps} />
      </Pagelayout>
  </Provider>)
}

export default MyApp
