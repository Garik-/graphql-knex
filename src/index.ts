import * as knex from 'knex'

const parseKey = (key: string): { columnName: string, token: string } => {
    const s = key.split('_')
    return {
        columnName: s[0],
        token: s.slice(1).join('_')
    }
}

const buildWhere = (query: knex.QueryBuilder, where: any): knex.QueryBuilder => {
    if (where !== null) {
        for (const key in where) {
            if (key in where && where[key] !== null) {
                const value: any = where[key]
                const { columnName, token } = parseKey(key)
                switch(token) {
                    case '':
                        query.where(columnName, value)
                        break
                    case 'not':
                        query.whereNot(columnName, value)
                        break
                    case 'in':
                        query.whereIn(columnName, value)
                        break
                    case 'not_in':
                        query.whereNotIn(columnName, value)
                        break
                    case 'lt':
                        query.where(columnName, '<', value)
                        break
                    case 'lte':
                        query.where(columnName, '<=', value)
                        break
                    case 'gt':
                        query.where(columnName, '>', value)
                        break
                    case 'gte':
                        query.where(columnName, '>=', value)
                        break
                    case 'contains':
                        query.where(columnName, 'like', `%${value}%`)
                        break
                    case 'not_contains':
                        query.whereNot(columnName, 'like', `%${value}%`)
                        break
                    case 'starts_with':
                        query.where(columnName, 'like', `${value}%`)
                        break
                    case 'not_starts_with':
                        query.whereNot(columnName, 'like', `${value}%`)
                        break
                    case 'ends_with':
                        query.where(columnName, 'like', `%${value}`)
                        break
                    case 'not_ends_with':
                        query.whereNot(columnName, 'like', `%${value}`)
                }
            }
        }
    }

    return query
}

const buildOrderBy = (query: knex.QueryBuilder, orderBy: string): knex.QueryBuilder => {
    if (orderBy !== null) {
        const { columnName, token } = parseKey(orderBy)
        query.orderBy(columnName, token)
    }

    return query
}

export const convertArgs = (query: knex.QueryBuilder, args: any): knex.QueryBuilder => {
    query = buildWhere(query, args.where)
    query = buildOrderBy(query, args.orderBy)
    if (args.first !== null) {
        query.limit(args.first)
    }
    if (args.skip !== null) {
        query.offset(args.skip)
    }
    return query
}