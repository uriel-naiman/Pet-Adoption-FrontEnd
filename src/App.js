import ContextApp from './components/ContextApp';
import AuthProvider from './context/auth';


function App() {
  return(
    <AuthProvider>
      <ContextApp />
    </AuthProvider>
  );
}
export default App;