# graphqlgen args to Knex Query
```TS
...
const storage = knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['public']
})
...
// graphQL resolver, storage in context
import { convertArgs } from 'grapqlgen-knex'
const resolver = async (parent, args, { storage }, info) => {
    return convertArgs(storage('table_name'), args)
}
```