import './App.css';
import Header from './Pages/Header';
import Item from './Pages/item';
import ModelS from './Images/models.jpeg'
import Modely from './Images/modely.jpg'
import Modelx from './Images/teslax.jpeg'
import Model3 from './Images/tesla3.png'

function App() {
  return (
    <div >
      <Header />

      <div className='item_containers'>
        <Item
          title='Model S'
          desc='Order Online for Touchless Delivery'
          backgroundImg={ModelS}
        />

        <Item
          title='Model Y'
          desc='Order Online for Touchless Delivery'
          backgroundImg={Modely}
        />

        <Item
          title='Model X'
          desc='Order Online for Touchless Delivery'
          backgroundImg={Modelx}
        />

        <Item
          title='Model 3'
          desc='Order Online for Touchless Delivery'
          backgroundImg={Model3}
        />
      </div>

    </div>
  );
}

export default App;
