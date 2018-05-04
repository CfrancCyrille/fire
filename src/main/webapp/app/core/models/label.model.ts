export class LabelModel {
    public description: string;
    public mid: string;
    public score: number;
    public topicality: number;

    constructor(data: any) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}
