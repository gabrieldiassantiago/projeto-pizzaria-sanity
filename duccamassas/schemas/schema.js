// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import header from './header'
import benefits from './benefits'
import about from './about'
import cardapio from './cardapio'
import clientes from './clientes'
import location from './location'
import menu from './menu'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([header, benefits, about, cardapio, clientes, location, menu]),
})
