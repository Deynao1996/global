import {useMediaQuery} from 'react-responsive';
import {DataProvider} from '../../contexts/DataContext.js';

import Perspective from '../perspective/Perspective';
import AnimatedRoutes from '../animatedRoutes/AnimatedRoutes';
import Offer from '../offer/Offer';

const App = () => {
  const isTablet = useMediaQuery(
    {query: '(max-width: 768px) and (min-width: 576px)'},
    {orientation: 'landscape'}
  );
  const isMobile = useMediaQuery(
    {query: '(max-width: 346px)'},
    {orientation: 'landscape'}
  );


  return (
    isTablet || isMobile ?
    <Offer /> :
    <DataProvider>
      <Perspective>
        <AnimatedRoutes />
      </Perspective>
    </DataProvider>
  )
};

export default App;
