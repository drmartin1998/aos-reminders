import { sortBy } from 'lodash'

// Supported Faction Types
export type TGloomspiteGitz = 'GLOOMSPITE_GITZ'
export type TIdonethDeepkin = 'IDONETH_DEEPKIN'
export type TIronjawz = 'IRONJAWZ'
export type TSeraphon = 'SERAPHON'
export type TSylvaneth = 'SYLVANETH'

// Exported Faction Names
export const GLOOMSPITE_GITZ: TGloomspiteGitz = 'GLOOMSPITE_GITZ'
export const IDONETH_DEEPKIN: TIdonethDeepkin = 'IDONETH_DEEPKIN'
export const IRONJAWZ: TIronjawz = 'IRONJAWZ'
export const SERAPHON: TSeraphon = 'SERAPHON'
export const SYLVANETH: TSylvaneth = 'SYLVANETH'

// Supported Factions
export type TSupportedFaction = TSeraphon | TGloomspiteGitz | TSylvaneth | TIdonethDeepkin | TIronjawz
export const SUPPORTED_FACTIONS: TSupportedFaction[] = sortBy([
  GLOOMSPITE_GITZ,
  IDONETH_DEEPKIN,
  IRONJAWZ,
  SERAPHON,
  SYLVANETH,
])
