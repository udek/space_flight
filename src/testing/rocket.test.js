import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

describe('Rocket component', () => {
  test('should render without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Rockets />
        </MemoryRouter>
      </Provider>,
    );
  });
});
