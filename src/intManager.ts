export interface intManager {
    add(title: string, body: string, color: string, user: string): void;
    remove(user: string, title: string): void;
    modify(user: string, title: string, newTitle: string, newBody: string, newColor: string): void;
    list(user: string): void;
    read(user: string, title: string): void;
}