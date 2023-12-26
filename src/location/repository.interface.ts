import { Location } from './entities'

export type IRepository = {
  getLocationByIp: (ip: string) => Promise<Location | null>
}
