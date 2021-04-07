import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

export interface Animal {
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
  animals: [{name: 'Ciapek', age: 2, isDog: true, isCat: false, species: 'Dog francuski', foundDate: moment(), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: ''}],
  posts: [{title: 'Pierwszy post', publicationDate: moment(), author: 'Admin', paragraphs: ['Pierwszy akapit', 'Drugi akapit']}],
  dogSpecies: ['Dog francuski'],
  catSpecies: ['Kot perski'],
  mailbox: [{title: 'Testowy mail', authorEmail: 'hello@ogondogory.pl', recipientEmail: 'hello@ogondogory.pl', sendDate: moment(), isOpened: false, textParagraphs: ['Hello', 'Pierwszy mail!']}]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private state: IData) {
    state = initialState;
   }

   addAnimal(animal: Animal) {
     this.state.animals.push(animal);
   }

   adoptAnimal(animal: Animal) {
     animal.adoptionDate = moment();
     let originalAnimalExcluded = this.state.animals.filter(a => a.keywords !== animal.keywords);
     originalAnimalExcluded.push(animal);
   }

   searchAnimal(searchQuery: ISearchQuery): Array<Animal> {

    return [];
   }

   getMailbox(): Array<MailEntry> {
     return this.state.mailbox;
   }

   getAllDogs(): Array<Animal> {
     return this.state.animals.filter(a => a.isDog);
   }

   getAllCats(): Array<Animal> {
    return this.state.animals.filter(a => a.isCat);
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

}
