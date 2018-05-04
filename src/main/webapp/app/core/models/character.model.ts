export class CharacterModel {

    public idUser: string;
    public firstname: string;
    public lastname: string;
    public pseudo: string;
    public bio: string;

    constructor(data?: any) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}
