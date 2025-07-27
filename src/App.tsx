// import { useState } from 'react';
import ProjectGrid from './components/ProjectGrid';
import Waves from './components/Waves';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Waves />

            <div className="page-wrapper">
                <div className="header">
                    <h1>plxl</h1>
                    <p>aka Jamie</p>
                </div>

                <div className="content">
                    <ProjectGrid />
                </div>
            </div>
        </>
    );
}

export default App;
