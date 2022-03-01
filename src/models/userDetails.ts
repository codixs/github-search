class UserDetailsModel {
  name: string;
  bio: string;
  location: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  constructor(
    name: string,
    bio: string,
    location: string,
    login: string,
    avatar_url: string,
    followers: number,
    following: number
  ) {
    this.name = name || "";
    this.bio = bio || "";
    this.location = location || "";
    this.login = login || "";
    this.avatar_url = avatar_url || "";
    this.followers = followers || 0;
    this.following = following || 0;
  }
}

export default UserDetailsModel;
