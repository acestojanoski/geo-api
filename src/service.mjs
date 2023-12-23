import maxmind from "maxmind";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @typedef {import('maxmind').CountryResponse} Country */

/**
 * @typedef {{
 *  locateIp: (ip: string) => Promise<Country | null>
 * }} IService
 */

/** @type {Promise<import('maxmind').Reader<import('maxmind').CountryResponse>>} */
export const readerPromise = maxmind.open(
  path.resolve(dirname, "..", "data", "dbip-country-lite-2023-12.mmdb")
);

/** @type {IService} */
export const service = {
  async locateIp(ip) {
    const reader = await readerPromise;

    return reader.get(ip);
  },
};
