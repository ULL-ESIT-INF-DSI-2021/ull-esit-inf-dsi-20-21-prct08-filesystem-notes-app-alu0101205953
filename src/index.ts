import * as yargs from 'yargs';
import {manager} from "./manager";

let noteManager = new manager();

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
      },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string' && typeof argv.user === 'string') {
      noteManager.add(argv.title, argv.body, argv.color, argv.user);
    }
  },
});

yargs.command({
  command: 'remove',
  describe: 'Delete a note',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      noteManager.remove(argv.user, argv.title);
    }
  },
});

yargs.command({
  command: 'modify',
  describe: 'Modify a note',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    newTitle: {
      describe: 'New title',
      demandOption: false,
      type: 'string',
    },
    newBody: {
      describe: 'New body',
      demandOption: false,
      type: 'string',
    },
    newColor: {
      describe: 'New color',
      demandOption: false,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.newTitle === 'string' && typeof argv.newBody === 'string' && typeof argv.newColor === 'string') {
      noteManager.modify(argv.user, argv.title, argv.newTitle, argv.newBody, argv.newColor);
    } else if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.newTitle === 'undefined' && typeof argv.newBody === 'string' && typeof argv.newColor === 'string') {
        noteManager.modify(argv.user, argv.title, '', argv.newBody, argv.newColor);
    } else if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.newTitle === 'string' && typeof argv.newBody === 'undefined' && typeof argv.newColor === 'string') {
        noteManager.modify(argv.user, argv.title, argv.newTitle, '', argv.newColor);
    } else if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.newTitle === 'string' && typeof argv.newBody === 'undefined' && typeof argv.newColor === 'string') {
        noteManager.modify(argv.user, argv.title, argv.newTitle, argv.newBody, '');
    } else if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.newTitle === 'undefined' && typeof argv.newBody === 'undefined' && typeof argv.newColor === 'string') {
        noteManager.modify(argv.user, argv.title, '', '', argv.newColor);
    } else if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.newTitle === 'undefined' && typeof argv.newBody === 'string' && typeof argv.newColor === 'undefined') {
        noteManager.modify(argv.user, argv.title, '', argv.newBody, '');
    } else if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.newTitle === 'string' && typeof argv.newBody === 'undefined' && typeof argv.newColor === 'undefined') {
        noteManager.modify(argv.user, argv.title, argv.newTitle, '', '');
    }
  },
});

yargs.command({
  command: 'list',
  describe: 'List every note title',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      noteManager.list(argv.user);
    }
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      noteManager.read(argv.user, argv.title);
    }
  },
});

yargs.parse();