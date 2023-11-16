import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../components/Mission';

const mockStore = configureStore([]);
const dummyData = [
  {
    mission_id: '1',
    mission_name: 'Test Mission 1',
    description: 'Test Mission 1 description',
    reserved: false,
  },
  {
    mission_id: '2',
    mission_name: 'Test Mission 2',
    description: 'Test Mission 2 description',
    reserved: false,
  },
];

describe('Mission component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      mission: {
        mission: dummyData,
        hasFetched: true,
      },
    });
  });

  test('should render the first mission', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const firstMission = getByTestId('1');

    expect(firstMission).toHaveTextContent('Test Mission 1');
  });
});
