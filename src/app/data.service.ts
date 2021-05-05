import { Injectable } from '@angular/core';
import { Moment } from 'moment';

export interface IAnimal {
  id: number;
  name: string;
  age: number;
  isDog: boolean;
  isCat: boolean;
  species: string;
  foundDate: Date;
  adoptionDate?: Date;
  descriptionParagraphs: Array<string>;
  keywords: Array<string>;
  pictureUrl: string;
}

export class Animal implements IAnimal {
  constructor(public id: number, public name: string, public age: number, public isDog: boolean,
    public isCat: boolean, public species: string, public foundDate: Date, 
    public descriptionParagraphs: Array<string>, public keywords: Array<string>, public pictureUrl: string,
    public adoptionDate?: Date) {}
}

export class BlogPost {
  constructor(public title: string,
    public author: string,
    public publicationDate: Date,
    public paragraphs: Array<string>) {}
}

export class MailEntry {
  constructor(public title: string,
    public authorEmail: string,
    public recepientEmail: string,
    public sendDate: Date,
    public opened: boolean,
    public textParagraphs:
    Array<string>) {}
}

export class User {
  constructor(public id: number, public login: string, public password: string) {}
}

export interface IData {
  users: User[];
  animals: Animal[];
  posts: Array<BlogPost>;
  mailbox: MailEntry[];
  dogSpecies: Array<string>;
  catSpecies: Array<string>;
}

export interface ISearchQuery {
  searchBarWords?: Array<string>;
  species?: string;
  ageFrom?: number;
  ageTo?: number;
  foundDateFrom?: Moment;
  foundDateTo?: Moment;
  keywords?: Array<string>;
}

const initialState: IData = {
  users: [new User(1, 'admin', '123qwe')],
  animals: [new Animal(1, 'Ciapek', 2, true, false, 'Dog fracuski', new Date(2021, 1, 13), ["Pierwsza linia opisu", "Druga linia opisu"], ['dog', 'ciapek', 'radosny'], '../assets/dog.jpg'),
            {id: 2, name: 'Zeus', age: 3, isDog: true, isCat: false, species: 'Bernardyn', foundDate: new Date(2021, 1, 15), descriptionParagraphs: ["Bernardyn", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/dog-348572_1280.jpg'},
            {id: 3, name: 'Piorun', age: 2, isDog: true, isCat: false, species: 'Mieszaniec', foundDate: new Date(2021, 2, 3), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/pochacz-3429043_1280.jpg'},
            {id: 4, name: 'Naga', age: 3, isDog: true, isCat: false, species: 'Cheiwawa', foundDate: new Date(2021, 2, 5), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/dog-4608266_1280.jpg'},
            {id: 5, name: 'Popiół', age: 3, isDog: false, isCat: true, species: 'Kot perski', foundDate: new Date(2021, 3, 11), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/popiół.jpg'},
            {id: 6, name: 'Birma', age: 3, isDog: false, isCat: true, species: 'Kot', foundDate: new Date(2021, 3, 13), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/birma.jpg'},
            {id: 7, name: 'Garfield', age: 3, isDog: false, isCat: true, species: 'Kot', foundDate: new Date(2021, 3, 17), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/garfield.jpg'},
            {id: 8, name: 'Malachit', age: 3, isDog: false, isCat: true, species: 'Kot', foundDate: new Date(2021, 4, 1), descriptionParagraphs: ["Uroczy kot o pięknych oczach", "Druga linia opisu"], keywords: ['kot', 'malachit', 'oczy'], pictureUrl: '../assets/cats/malachit.jpg'},
          ],
  posts: [new BlogPost('Pierwszy post', 'Admin', new Date(2020, 12, 15), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost('Wesołych świąt', 'Admin', new Date(2020, 12, 23), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost('Nowy rok i ogon do góry', 'Admin', new Date(2021, 1, 3), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost('Problmy noworoczne psów', 'Admin', new Date(2021, 1, 5), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost('Porzucone "prezenty"', 'Admin', new Date(2021, 2, 7), ['Pierwszy akapit', 'Drugi akapit']),
  ],
  dogSpecies: ['Dog francuski', 'Bernardyn', 'Cheiwawa', 'Mieszaniec', 'Labrador', 'Husky syberyjski', 'Golden retriever', 'Owczarek niemiecki'],
  catSpecies: ['Kot perski', 'Brytyjski krótkowłosy', 'Maine Coon', 'Amerykański krótkowłosy', 'Kot sfinks', 'Kot syberyjski'],
  mailbox: [new MailEntry('Testowy mail', 'hello@ogondogory.pl', 'hello@ogondogory.pl', new Date(2020, 12, 15), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry('Sucha karma dla schroniska', 'marlena031@wp.pl', 'hello@ogondogory.pl', new Date(2020, 12, 29), false, ['Dzień dobry', 'Mam trochę suchej karmy dla psów']),
    new MailEntry('RE: Sucha karma dla schroniska', 'marlena031@wp.pl', 'hello@ogondogory.pl', new Date(2021, 1, 4), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry('Zagubiony pies, okolice schroniska', 'mieciuwarch67@o2.pl', 'hello@ogondogory.pl', new Date(2021, 1, 11), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry('Jakiś mail', 'kontakt@adriatyk.pl', 'hello@ogondogory.pl', new Date(2021, 2, 16), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry('Sample text', 'sample@text.pl', 'hello@ogondogory.pl', new Date(2021, 2, 18), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry('Nikt go nie znajdzie', 'witam@porywacz.pl', 'hello@ogondogory.pl', new Date(2021, 3, 6), false, ['Hello', 'Pierwszy mail!'])]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private state: IData = initialState;
  constructor() {}

   get(id: number) {
     let result = this.state.animals.find(a => a.id === id);
    return result as Animal;
   }

   addAnimal(animal: Animal) {
     this.state.animals.push(animal);
   }

   adoptAnimal(animal: IAnimal) {
     animal.adoptionDate = new Date();
     let originalAnimalExcluded = this.state.animals.filter(a => a.keywords !== animal.keywords);
     originalAnimalExcluded.push(animal);
   }

   searchAnimal(searchQuery: ISearchQuery): Array<IAnimal> {

    return [];
   }

   getMailbox(): Array<MailEntry> {
     return this.state.mailbox.sort((a, b) => a.sendDate < b.sendDate ? 1 : -1);
   }

   getAllDogs(): Array<IAnimal> {
     return this.state.animals.filter(a => a.isDog);
   }

   getAllCats(): Array<IAnimal> {
    return this.state.animals.filter(a => a.isCat);
  }

  getAllAnimalsRandom(): Array<IAnimal> {
    return this.shuffle(this.state.animals);
  }

  getBlogPosts(): Array<BlogPost> {
    let blogPosts = this.state.posts.sort((a, b) => a.publicationDate < b.publicationDate ? 1 : -1);
    return blogPosts;
  }

  getDogSpecies(): Array<string> {
    return this.state.dogSpecies;
  }

  addDogSpecie(newSpecies: string) {
    this.state.dogSpecies.push(newSpecies);
  }

  getCatSpecies(): Array<string> {
    return this.state.catSpecies;
  }

  addCatSpecies(newSpecies: string) {
    this.state.catSpecies.push(newSpecies);
  }

  sendNewMail(mail: MailEntry) {
    this.state.mailbox.push(mail);
  }

  readMail(mailIndex: number) {
    this.state.mailbox[mailIndex].opened = true;
  }

  hasUserWithLoginAndPassword(login: string, password: string) {
    return this.state.users.some(u => u.login === login && u.password === password);
  }

  addBlogPost(post: BlogPost) {
    this.state.posts.push(post);
  }

  /**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
  shuffle(a: Array<IAnimal>) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

}
