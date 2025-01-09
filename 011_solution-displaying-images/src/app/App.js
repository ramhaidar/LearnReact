import Logo from "../assets/logo.png";
import Image from 'next/image';

function App() {
    return (
        <div className="App">
            <h1>Task: Add an image below</h1>
            <Image src={Logo} alt="Logo" width={500} height={300} />
        </div>
    );
};

export default App;