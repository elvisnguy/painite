import { HTTP } from "./http-common.js";

class CompaniesDataServices {
  getAll() {
    return HTTP.get("/companies");
  }
}

export default new CompaniesDataServices();
