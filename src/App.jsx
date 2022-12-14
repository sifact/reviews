import "./App.css";
import { FaQuoteLeft } from "react-icons/fa";

import Review from "./components/Review";

function App() {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2> Reviews</h2>
                    <div className="underline"></div>
                </div>

                <Review />
            </section>
        </main>
    );
}

export default App;
