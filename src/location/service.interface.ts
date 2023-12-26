import { Location } from './entities'

export type IService = {
  locateIp: (ip: string) => Promise<Location | null>
}
