import { makeAutoObservable } from "mobx";
import { User } from "models/dontModify/User";

class AppStatesClass {
  CPNTreePath = "/PageMainContainer/abc";
  User: User|null = null;
  constructor() {
    makeAutoObservable(this);
  }
  setCPNTreePath(path: string) {
    this.CPNTreePath = path;
  }
  setUser(user: User|null) {
    this.User = user;
  }
}

export const AppStates = new AppStatesClass();
