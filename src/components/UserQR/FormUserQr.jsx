import React from 'react';
import './userQr.css'
import { CoverGreetings } from '../Utils/Utils';
import { Button, colorSchema } from '../../components/Button/Button'
import {
  Input,
  Label,
  // Button,
  // colorSchema,
} from '../../components'

const UserQr = () => {
  // const [error, setError] = useState({ error: false, message: '' })
  return (
    <div className='Dashboard'>
      <CoverGreetings
        greeting="Crear nuevo usuario"
        isHome={false}
      />

      <form action="" className="FormContaner">
        <div className="InputsGroup">
          <Label htmlFor="fullName">Nombre</Label>
          <Input
            id="fullName"
            name="fullName"
            // value={user.fullName ?? inputs.fullName}
            type="text"
            minLength="8"
            placeholder="Escribe el nombre del usuario"
          // onInput={handleChange}
          />
        </div>

        <div className="InputsGroup">
          <Label htmlFor="fullName">Descripción</Label>
          <Input
            id="fullName"
            name="fullName"
            // value={user.fullName ?? inputs.fullName}
            type="text"
            minLength="8"
            placeholder="Escribe el nombre del usuario"
          // onInput={handleChange}
          />
        </div>

        {/* {error.error && <p className="ErrorMessage"> {error.message}</p>} */}

        <Button type="submit" color={colorSchema.black}>
          {/* {informativeMessages.btnSubmitMessage} */}
          Registrar
        </Button>

      </form>
    </div>
  );
};

export default UserQr;