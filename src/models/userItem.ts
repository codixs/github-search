class UserItemModel {
  id: number;
  avatar_url: string;
  login: string;

  constructor(id: number, avatar_url: string, login: string) {
    this.id = id;
    this.avatar_url = avatar_url;
    this.login = login;
  }
}

export default UserItemModel;
