export default class User {
  id: number;
  name: string;
  username: string;
  email: string;
  adres?: any;
  phone: string;
  website: string;
  company?: any;
  constructor(params: User) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.adres = params.adres;
    this.phone = params.phone;
    this.email = params.email;
    this.website = params.website;
    this.company = params.company;
  }
}
