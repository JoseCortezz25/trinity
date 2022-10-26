/* eslint-disable camelcase */

const template = ({ css_file, component_name }) =>
  `import cn from 'classnames';

import s from './${css_file}';

const ${component_name} = (props) => {
  const classes = cn(s.test);

  return (
    <h1 className={classes}>Hello I'm a component called ${component_name}</h1>
  )
}

export default ${component_name}
`

module.exports = { template }
