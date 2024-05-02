import AppRouter from 'modules/navigation/routes';
import 'react-toastify/dist/ReactToastify.css';
import './icons/output/icons.css';
import './styles/styles.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuthorization } from './modules/auth/store/session/actions';
import UDSpinner from './modules/ud-ui/spinner';
import { isAuthCheckedSelector } from './modules/auth/store/session/selectors';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

import { ToastContainer } from 'react-toastify';
import { history } from './modules/store/store';

dayjs.locale(ru);

function App() {
  const dispatch = useDispatch();
  const queryClient = new QueryClient();
  const isAuthChecked = useSelector(isAuthCheckedSelector);

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  useEffect(() => {
    dispatch(checkAuthorization());
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppRouter />
      {!isAuthChecked && <UDSpinner fullScreen />}
      <ToastContainer position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
