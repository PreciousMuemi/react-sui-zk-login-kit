import {SuiClient} from '../../src'; // Ensure this import matches the one used in ZKLoginProvider

import {Content} from "./Content.tsx";
import {ZKLoginProvider} from '../../src';

const FULLNODE_URL = "https://fullnode.devnet.sui.io/";
const suiClient = new SuiClient({url: FULLNODE_URL});

function App() {
    return (
        <ZKLoginProvider client={suiClient}>
            <Content/>
        </ZKLoginProvider>
    )
}

export default App
