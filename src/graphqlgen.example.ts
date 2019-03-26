type StatisticOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "timestamp_ASC"
  | "timestamp_DESC"
  | "dailyPlayers_ASC"
  | "dailyPlayers_DESC"
  | "transactions_ASC"
  | "transactions_DESC"
  | "volume_ASC"
  | "volume_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"


  export interface StatisticWhereInput {
      // AND: StatisticWhereInput[]
      // OR: StatisticWhereInput[]
      // NOT: StatisticWhereInput[]
      id: string | null
      id_not: string | null
      id_in: string[]
      id_not_in: string[]
      id_lt: string | null
      id_lte: string | null
      id_gt: string | null
      id_gte: string | null
      id_contains: string | null
      id_not_contains: string | null
      id_starts_with: string | null
      id_not_starts_with: string | null
      id_ends_with: string | null
      id_not_ends_with: string | null
      timestamp: number | null
      timestamp_not: number | null
      timestamp_in: number[]
      timestamp_not_in: number[]
      timestamp_lt: number | null
      timestamp_lte: number | null
      timestamp_gt: number | null
      timestamp_gte: number | null
      dailyPlayers: number | null
      dailyPlayers_not: number | null
      dailyPlayers_in: number[]
      dailyPlayers_not_in: number[]
      dailyPlayers_lt: number | null
      dailyPlayers_lte: number | null
      dailyPlayers_gt: number | null
      dailyPlayers_gte: number | null
      transactions: number | null
      transactions_not: number | null
      transactions_in: number[]
      transactions_not_in: number[]
      transactions_lt: number | null
      transactions_lte: number | null
      transactions_gt: number | null
      transactions_gte: number | null
      volume: number | null
      volume_not: number | null
      volume_in: number[]
      volume_not_in: number[]
      volume_lt: number | null
      volume_lte: number | null
      volume_gt: number | null
      volume_gte: number | null
    }

  export interface ArgsStatistics {
      where: StatisticWhereInput | null
      orderBy: StatisticOrderByInput | null
      skip: number | null
      after: string | null
      before: string | null
      first: number | null
      last: number | null
  }
