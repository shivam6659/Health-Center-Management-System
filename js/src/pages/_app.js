import { wrapper } from '../redux/store';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import "../../styles/globals.css";
function App({ Component, pageProps }) {
    return <div>
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
    </div>
}

export default wrapper.withRedux(App)