import Beams from "./components/blocks/Backgrounds/Beams/Beams";

function App() {
    return (
        <div>
            <div className="w-full h-[100vh] relative">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
                <h1 className="text-3xl font-bold underline">Hello World</h1>
            </div>
        </div>
    );
}

export default App;
