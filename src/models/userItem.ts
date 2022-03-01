class UserItemModel {
  id: number;
  avatar: string;
  login: string;

  constructor(id: number, avatar: string, login: string) {
    this.id = id;
    this.avatar = avatar;
    this.login = login;
  }
}

export default UserItemModel;
