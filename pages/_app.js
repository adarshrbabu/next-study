import Layout from "../Components/layout/layout";
import Header from "../Components/ui/inclues/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header>
                <Component {...pageProps} />
            </Header>
        </>
    );
}

export default MyApp;
