import dateFormat from "dateformat";

class RepoItemModel {
  id: number;
  name: string;
  description: string;
  stars: number;
  language: string;
  updatedDate: any;
  //   license: Array<T>;
  constructor(
    id: number,
    name: string,
    description: string,
    stars: number,
    language: string,
    updatedDate: any

    // license: Array<T>
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stars = stars || 0;
    this.language = language || "";
    this.updatedDate = updatedDate;

    // this.license = license["name"];
  }
}

export default RepoItemModel;
