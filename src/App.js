import './css/productCard.css'
import { useDispatch } from 'react-redux';
import { RecycleCard } from './components/RecycleCard';
import { ProductCards } from './components/ProductCards';
import { filterP } from './store/RecycleSlice';

export const App = () => {
  const dispatch = useDispatch()
  return (
    <div className="container">
      <div className='row mt-2'>
        <div className='col'>
          <ul className='menu-item'>
            <li onClick={() => dispatch(filterP('all'))}>All</li>
            <li onClick={() => dispatch(filterP('fruits'))}>Fruits</li>
            <li onClick={() => dispatch(filterP('vegetables'))}>Vegetables</li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-8 col-xl-9 col-12 col-sm-12 col-md-12 d-flex flex-wrap justify-content-between'>
          <ProductCards />
        </div>
        <div className='col-lg-4 col-xl-3 col-12 col-sm-12 col-md-12'>
          <RecycleCard />
        </div>
      </div>
    </div>
  );
}

