import FooterPrimary from './components/footer/FooterPrimary';
import NavbarPrimary from './components/navbar/NavbarPrimary';
import Paths from './Paths';

function App() {
  return (
    <div className='overflow-hidden'>
      <div className='bg-white text-black container mx-auto'>
        <NavbarPrimary />
        <div className='flex-1'>
          <Paths />
        </div>
        <FooterPrimary />
      </div>
    </div>
  );
}

export default App;
