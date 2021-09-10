import './styles.css'
import logo from './react-logo.png'
import ClickCounter from './ClickCounter'

export const App = () => {
  return (
    <>
      <h2>
        React Type script webpack application started in `{process.env.NODE_ENV}
        ` mode. Application created by {process.env.name}
      </h2>
      <img src={logo} alt="react-logo" width="300" height="200" />
      <ClickCounter />
      Test Hot Reload
    </>
  )
}
