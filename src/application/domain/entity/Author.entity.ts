import { Address } from '../value-objects/Address.value-object';

export class Author {
  address: Address; // value object
  id: string;
  name: string;
  email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Methods
}
