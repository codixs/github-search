export class RepoItemModel {
  id: number;
  name: string;
  description: string;
  stars: number;
  language: string;
  license: string;
  updatedDate: string;
  constructor(
    id: number,
    name: string,
    description: string,
    stars: number,
    language: string,
    license: string,
    updatedDate: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stars = stars || 0;
    this.language = language || "";
    this.license = license || "";
    this.updatedDate = updatedDate;
  }
}
