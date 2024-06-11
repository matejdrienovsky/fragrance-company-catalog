import Hamburger from "./components/Hamburger";
import GridLayout from "./components/GridLayout";
import ContentSection from "./components/ContentSection";
import { BrowserRouter as Router } from 'react-router-dom';


import './App.css'

function App() {

    return (
        <Router>
            {/* Grid layout for the entire app */}
            <GridLayout>
                <ContentSection/>
            </GridLayout>

            {/* The Hamburger component used for a small devices menu icon */}
            <Hamburger />
        </Router>
    )
}

export default App
