class RepoItemModel {
  id: number;
  name: string;
  description: string;
  stars: number;
  language: string;
  updated_at: any;
  //   license: Array<T>;
  constructor(
    id: number,
    name: string,
    description: string,
    stars: number,
    language: string,
    updated_at: any

    // license: Array<T>
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stars = stars || 0;
    this.language = language || "";
    this.updated_at = updated_at;

    // this.license = license["name"];
  }
}

export default RepoItemModel;
