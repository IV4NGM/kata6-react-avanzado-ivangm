import './App.css'
import ReactHookForm from './components/ReactHookForm/ReactHookForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import Main from './components/Mexico'
import Header from './components/MainComponent'
import ParentComponent from './components/ParentComponent'

function App() {
  const saludo = () => console.log('Hola mundo')
  return (
    <>
      <ReactHookForm />
      <SimpleForm />
      <Main />
      <Header title={'Título que yo quiera'} title2={'Este no lo recibo'} funcion={saludo}/>
      <ParentComponent />  
    </>
  )
}

export default App
