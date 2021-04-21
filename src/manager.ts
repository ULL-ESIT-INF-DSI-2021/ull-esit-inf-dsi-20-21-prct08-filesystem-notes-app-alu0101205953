import {intManager} from "./intManager";
import {Notes} from "./notes";
import * as fs from 'fs';
import * as chalk from 'chalk';

export class manager implements intManager {
    constructor() {}
    add(title: string, body: string, color: string, user: string): void {
        let note: Notes = new Notes(title, body, color);
        if(fs.existsSync(`./${user}`) == false) fs.mkdirSync(`./${user}`);
        if(fs.existsSync(`./${user}/${title}.json`) == false) {
            fs.writeFileSync(`./${user}/${title}.json`, note.toJSON());
            console.log(chalk.green('Note successfully created!'));
        } else {
            console.log(chalk.red('This note already exists!'));
        }
    }

    remove(user: string, title: string): void {
        if(fs.existsSync(`./${user}/${title}.json`) == true) {
            fs.rmSync(`./${user}/${title}.json`);
            console.log(chalk.green('Note successfully deleted!'));
        } else {
            console.log(chalk.red('This note doesn\'t exist!'));
        }
    }

    modify(user: string, title: string, newTitle: string, newBody: string, newColor: string): void {
        if(fs.existsSync(`./${user}/${title}.json`) == true) {
            let buffer = fs.readFileSync(`./${user}/${title}.json`);
            let obj = JSON.parse(buffer.toString());
            let note: Notes = new Notes(obj.title, obj.body, obj.color);
            if(newTitle !== '') note.setTitle(newTitle);
            if(newBody !== '') note.setBody(newBody);
            if(newColor !== '') note.setColor(newColor);
            fs.writeFileSync(`./${user}/${title}.json`, note.toJSON());
            console.log(chalk.green('Note successfully modified!'));
        } else {
            console.log(chalk.red('This note doesn\'t exist!'));
        }
    }

    list(user: string): void {
        console.log(chalk.magenta.underline("\nCurrent filenames:"));
        fs.readdirSync(`./${user}`).forEach((file) => {
            let buffer = fs.readFileSync(`./${user}/${file}`);
            let obj = JSON.parse(buffer.toString());
            switch (obj.color) {
              case 'yellow':
                console.log(chalk.yellow(file));
              break;
              case 'red':
                console.log(chalk.red(file));
              break;
              case 'blue':
                console.log(chalk.blue(file));
              break;
              case 'green':
                console.log(chalk.green(file));
              break;
              default:
                console.log(chalk.red('Color not available'));
                break;
            }
        });
    }

    read(user: string, title: string): void {
        if(fs.existsSync(`./${user}/${title}.json`) == true) {
            let buffer = fs.readFileSync(`./${user}/${title}.json`);
            let obj = JSON.parse(buffer.toString());
            switch (obj.color) {
              case 'yellow':
                console.log(chalk.yellow(`${obj.title}\n${obj.body}`));
              break;
              case 'red':
                console.log(chalk.red(`${obj.title}\n${obj.body}`));
              break;
              case 'blue':
                console.log(chalk.blue(`${obj.title}\n${obj.body}`));
              break;
              case 'green':
                console.log(chalk.green(`${obj.title}\n${obj.body}`));
              break;
              default:
                console.log(chalk.red('Color not available'));
                break;
            }
        } else {
            console.log(chalk.red('This note doesn\'t exist!'));
        }
    }
}