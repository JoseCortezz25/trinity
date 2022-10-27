import { useState } from 'react'

import { Button, colorSchema } from '../../components/Button'
import { Title } from '../../components/Utils'
import { Input, Select } from '../../components'
import { Label } from '../../components/Label'

import s from './Development.module.css'

const Development = () => {
  const [hidden, setHidden] = useState(false)
  const styleCode = hidden ? { backgroundColor: 'transparent' } : {}

  const handleClick = () => setHidden(!hidden)

  return (
    <div className={s.container}>
      <Title title="Page for development components" />
      <Button onClick={handleClick}>
        {hidden ? 'with background' : 'transparent'}
      </Button>
      <div className={s.wrapper}>
        <div className={s.wrapperComponent}>
          <h2>components:</h2>

          <code style={styleCode}>
            {/* this will be the component for test */}
            <br />
            <div className={s.wrapperButtons}>
              <Button color={colorSchema.gray}>gray button</Button>
              <Button color={colorSchema.blue}>blue button</Button>
              <Button color={colorSchema.black}>black button</Button>
            </div>
            <Button color={colorSchema.black} isLoading />
            <Input placeholder="Writing input" />
            <Select
              options={[
                { id: 0, label: 'Ruta Frontend' },
                { id: 1, label: 'Ruta Backend' },
                { id: 2, label: 'Ruta de complementos' }
              ]}
              onChange={(op) => console.log(op)}
            />
            <Input placeholder="escriba algo" />
            <Label name="correo">HOla</Label>
          </code>
        </div>
      </div>
    </div>
  )
}

export default Development
