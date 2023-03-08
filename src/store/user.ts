import { makeAutoObservable } from 'mobx';

class User {
  userName = 'LiuJie1998';
  num = 0;

  constructor() {
    makeAutoObservable(this);
  }

  changeName() {
    this.userName = 'ling';
  }
  changeNum() {
    this.num++;
  }
}

export default new User();
