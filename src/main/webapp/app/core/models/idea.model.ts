export class IdeaModel {
    public title: string;
    public synopsis: string;

    constructor(data?: any) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}
