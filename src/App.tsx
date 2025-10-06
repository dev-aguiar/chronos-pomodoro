import './styles/theme.css'
import './styles/global.css'
import {Container} from './components/Container';
import {Logo} from "./components/Logo";
import {Menu} from "./components/Menu";
import {Countdown} from "./components/Countdown";
import {Input} from "./components/Input";

export function App() {
    return (
        <>
            <Container>
              <Logo/>
            </Container>

          <Container>
            <Menu/>
          </Container>

          <Container>
            <Countdown/>
          </Container>

          <Container>
            <form className='form' action="">
              <div className='formRow'>
                <Input
                  labelText='Task:'
                  id='task'
                  type='text'
                  placeholder='Digite a sua task...'
                />
              </div>

              <div className='formRow'>
                <p>Lorem</p>
              </div>

              <div className='formRow'>
                <p>Ciclos</p>
                <p>0 0 0 0 0 </p>
              </div>

              <div className='formRow'>
                <button>Enviar</button>
              </div>
            </form>
          </Container>
        </>
    );
}
