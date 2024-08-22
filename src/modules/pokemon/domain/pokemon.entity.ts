export interface PokemonJSONPayload {
  id: number;
  name: string;
  image: string | null;
  order: number;
  weight: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export default class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public image: string | null,
    public order: number,
    public weight: number | null,
    public createdAt?: string | null,
    public updatedAt?: string | null,
  ) { }

  static fromJSON(payload: PokemonJSONPayload): Pokemon {
    return new this(
      payload.id,
      payload.name,
      payload.image,
      payload.order,
      payload.weight,
      payload.createdAt,
      payload.updatedAt,
    )
  }

  public getFormattedId(): string {
    if (this.id >= 10000) {
      return 'Special';
    }

    return `#${this.id.toString().padStart(4, '0')}`;
  }

  public getFormattedName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  public getFormattedWeight(): string {
    return this.weight ? `${this.weight / 10} kg` : 'unknown';
  }
}