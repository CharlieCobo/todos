import withStyled from './HOC/withStyled';
import withGlobalState from './HOC/withGlobalState';

import Dashboard from './pages/Dashboard';

function App() {
  return <Dashboard />;
}

export default withGlobalState(withStyled(App));
