export class LocateResponse {
  /**
   * @param {import("./service.mjs").Country} country
   */
  constructor(country) {
    this.country = {
      geonameId: country.country.geoname_id,
      isInEuropeanUnion: country.country.is_in_european_union,
      isoCode: country.country.iso_code,
      name: country.country.names.en,
    };

    this.continent = {
      code: country.continent.code,
      geonameId: country.continent.geoname_id,
      name: country.continent.names.en,
    };
  }
}
