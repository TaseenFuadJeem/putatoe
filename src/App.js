import './App.css';
import bg from './Components/Assets/stacked-waves-haikei.svg';
import AppInterface from './Components/AppInterface/AppInterface';

function App() {
  return (
    <section className='flex justify-center items-center h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bg})` }}>

      <div className="mockup-phone shadow-2xl">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard  phone-1 bg-[#eefafa] overflow-auto">
            <AppInterface />
          </div>
        </div>
      </div>

    </section>
  );
}

export default App;
