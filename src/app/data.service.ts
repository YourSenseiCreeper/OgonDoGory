import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

export interface IAnimal {
  id: number;
  name: string;
  age: number;
  isDog: boolean;
  isCat: boolean;
  species: string;
  foundDate: Moment;
  adoptionDate?: Moment;
  descriptionParagraphs: Array<string>;
  keywords: Array<string>;
  pictureUrl: string;
}

export class Animal implements IAnimal {
  constructor(public id: number, public name: string, public age: number, public isDog: boolean,
    public isCat: boolean, public species: string, public foundDate: Moment, 
    public descriptionParagraphs: Array<string>, public keywords: Array<string>, public pictureUrl: string,
    public adoptionDate?: Moment) {}
}

export interface BlogPost {
  title: string;
  publicationDate: Moment;
  author: string;
  paragraphs: Array<string>;
}

export interface MailEntry {
  title: string;
  authorEmail: string;
  sendDate: Moment;
  recipientEmail: string;
  isOpened: boolean;
  textParagraphs: Array<string>;
}

export interface IData {
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
  animals: [new Animal(1, 'Ciapek', 2, true, false, 'Dog fracuski', moment(), ["Pierwsza linia opisu", "Druga linia opisu"], ['dog', 'ciapek', 'radosny'], '../assets/dog.jpg'),
            {id: 2, name: 'Zeus', age: 3, isDog: true, isCat: false, species: 'Dog francuski', foundDate: moment(), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/dog-348572_1280.jpg'},
            {id: 3, name: 'Piorun', age: 2, isDog: true, isCat: false, species: 'Dog francuski', foundDate: moment(), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/pochacz-3429043_1280.jpg'},
            {id: 4, name: 'Naga', age: 3, isDog: true, isCat: false, species: 'Dog francuski', foundDate: moment(), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/dog-4608266_1280.jpg'},
            {id: 5, name: 'Popiół', age: 3, isDog: false, isCat: true, species: 'Kot', foundDate: moment(), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/popiół.jpg'},
            {id: 6, name: 'Birma', age: 3, isDog: false, isCat: true, species: 'Kot', foundDate: moment(), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/birma.jpg'},
            {id: 7, name: 'Garfield', age: 3, isDog: false, isCat: true, species: 'Kot', foundDate: moment(), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/garfield.jpg'},
            {id: 8, name: 'Malachit', age: 3, isDog: false, isCat: true, species: 'Kot', foundDate: moment(), descriptionParagraphs: ["Uroczy kot o pięknych oczach", "Druga linia opisu"], keywords: ['kot', 'malachit', 'oczy'], pictureUrl: '../assets/cats/malachit.jpg'},
          ],
  posts: [{title: 'Pierwszy post', publicationDate: moment(), author: 'Admin', paragraphs: ['Pierwszy akapit', 'Drugi akapit']}],
  dogSpecies: ['Dog francuski'],
  catSpecies: ['Kot perski'],
  mailbox: [{title: 'Testowy mail', authorEmail: 'hello@ogondogory.pl', recipientEmail: 'hello@ogondogory.pl', sendDate: moment(), isOpened: false, textParagraphs: ['Hello', 'Pierwszy mail!']}]
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
     animal.adoptionDate = moment();
     let originalAnimalExcluded = this.state.animals.filter(a => a.keywords !== animal.keywords);
     originalAnimalExcluded.push(animal);
   }

   searchAnimal(searchQuery: ISearchQuery): Array<IAnimal> {

    return [];
   }

   getMailbox(): Array<MailEntry> {
     return this.state.mailbox;
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
    let blogPosts = this.state.posts.sort((a, b) => a.publicationDate.isAfter(b.publicationDate) ? 1 : -1);
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
    this.state.mailbox[mailIndex].isOpened = true;
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
