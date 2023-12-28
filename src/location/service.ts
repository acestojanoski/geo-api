import { repository } from './repository'
import type { IService } from './service.interface'

export const service: IService = {
	async locateIp(ip) {
		return repository.getLocationByIp(ip)
	},
}
