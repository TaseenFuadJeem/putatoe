import './App.css';
import AppInterface from './Components/AppInterface/AppInterface';

function App() {
  return (
    <section className='flex justify-center items-center h-screen'>

      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard  phone-1 bg-[#e4f8f9] overflow-auto">
            <AppInterface />
          </div>
        </div>
      </div>

    </section>
  );
}

export default App;
