import { Button } from '../../components/Button/Button'
import { Title } from '../../components/Utils'

import s from './Development.module.css'

const Development = () => {
  return (
    <div className={s.container}>
      <Title title="Page for development components" />
      <div className={s.wrapper}>
        <div className={s.wrapperComponent}>
          <h2>component:</h2>

          <code>
            {/* this will be the component for test */}
            <br />
            <Button>button</Button>
          </code>
        </div>
      </div>
    </div>
  )
}

export default Development
