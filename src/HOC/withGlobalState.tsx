import { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

const withGlobalState = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default withGlobalState;
