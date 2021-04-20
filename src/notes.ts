import {intNotes} from "./intNotes";

export class Notes implements intNotes {
    constructor(public title: string, public body: string, public color: string) {}
    getTitle() {
        return this.title;
    }
    getBody() {
        return this.body;
    }
    getColor() {
        return this.color;
    }
    setTitle(newTitle: string) {
        this.title = newTitle;
    }
    setBody(newBody: string) {
        this.body = newBody;
    }
    setColor(newColor: string) {
        this.color = newColor;
    }
    toJSON(): string {
        return '{\n\"title\": \"' + this.title + '\",\n\"body\": \"' + this.body + '\",\n\"color\": \"' + this.color + '\"\n}';
    }
}