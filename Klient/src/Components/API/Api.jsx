import axios from "axios";

export default class Api {
  constructor() {
    this.baseAxios = axios.create({
    });
}
}