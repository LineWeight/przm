let user = Symbol();
let userEnforcer = Symbol()
import uuid from 'uuid'

class User {

  constructor(enforcer) {
    if(enforcer !== userEnforcer) throw "Cannot construct user";
    this.id = uuid.v4();
  }

  static get instance() {
    if(!this[user]) {
      this[user] = new User(userEnforcer);
    }
    return this[user];
  }
}

export default User
