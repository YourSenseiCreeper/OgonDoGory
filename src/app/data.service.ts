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
  constructor(public id: number,
    public title: string,
    public author: string,
    public publicationDate: Date,
    public paragraphs: Array<string>) {}
}

export class MailEntry {
  constructor(public id: number,
    public title: string,
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

const dogDescription = ["DOG jest psem, który potrafi stworzyć głęboką relację z osobą, której zaufa. Kocha długie spacery i węszenie. Nie przeszkadzają mu inne psy. Często, wraz ze spokojnymi psami, chodzi na spacery równoległe.", "Za smaczki zrobi wiele 😊 Lubi kontakt z człowiekiem. Przytulanie i głaskanie to jest to co DOG lubi najbardziej.", "Prawdopodobnie ze względu na swoją przeszłość boi się gwałtownych ruchów. DOG niestety jest psem broniącym zasobów. Z tego powodu powrócił z adopcji. Zabawka, miska, legowisko to niektóre rzeczy, których DOG często broni. Jest to problemy, który zapewne pojawi się w nowym domu. Przyszły właściciel powinien być otwarty na pracę pod okiem specjalisty."];
const initialState: IData = {
  users: [new User(1, 'admin', '123qwe')],
  animals: [new Animal(1, 'Ciapek', 2, true, false, 'Dog fracuski', new Date(2021, 1, 13), ["Ciapek jest psem, który potrafi stworzyć głęboką relację z osobą, której zaufa. Kocha długie spacery i węszenie. Nie przeszkadzają mu inne psy. Często, wraz ze spokojnymi psami, chodzi na spacery równoległe.", "Za smaczki zrobi wiele 😊 Lubi kontakt z człowiekiem. Przytulanie i głaskanie to jest to co Ciapek lubi najbardziej.", "Prawdopodobnie ze względu na swoją przeszłość boi się gwałtownych ruchów. Ciapek niestety jest psem broniącym zasobów. Z tego powodu powrócił z adopcji. Zabawka, miska, legowisko to niektóre rzeczy, których Ciapek często broni. Jest to problemy, który zapewne pojawi się w nowym domu. Przyszły właściciel powinien być otwarty na pracę pod okiem specjalisty."], ['dog', 'ciapek', 'radosny'], '../assets/dog.jpg'),
            new Animal(2, 'Zeus', 3, true, false, 'Bernardyn', new Date(2021, 1, 15), ["Zeus jest psem, który potrafi stworzyć głęboką relację z osobą, której zaufa. Kocha długie spacery i węszenie. Nie przeszkadzają mu inne psy. Często, wraz ze spokojnymi psami, chodzi na spacery równoległe.", "Za smaczki zrobi wiele 😊 Lubi kontakt z człowiekiem. Przytulanie i głaskanie to jest to co Zeus lubi najbardziej.", "Prawdopodobnie ze względu na swoją przeszłość boi się gwałtownych ruchów. Zeus niestety jest psem broniącym zasobów. Z tego powodu powrócił z adopcji. Zabawka, miska, legowisko to niektóre rzeczy, których Ciapek często broni. Jest to problemy, który zapewne pojawi się w nowym domu. Przyszły właściciel powinien być otwarty na pracę pod okiem specjalisty."], ['dog', 'ciapek', 'radosny'], '../assets/dog-348572_1280.jpg'),
            {id: 3, name: 'Piorun', age: 2, isDog: true, isCat: false, species: 'Mieszaniec', foundDate: new Date(2021, 2, 3), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/pochacz-3429043_1280.jpg'},
            {id: 4, name: 'Naga', age: 3, isDog: true, isCat: false, species: 'Cheiwawa', foundDate: new Date(2021, 2, 5), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/dog-4608266_1280.jpg'},
            {id: 5, name: 'Popiół', age: 3, isDog: false, isCat: true, species: 'Kot perski', foundDate: new Date(2021, 3, 11), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/popiół.jpg'},
            {id: 6, name: 'Birma', age: 3, isDog: false, isCat: true, species: 'Kot syberyjski', foundDate: new Date(2021, 3, 13), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/birma.jpg'},
            {id: 7, name: 'Garfield', age: 3, isDog: false, isCat: true, species: 'Kot amerykański', foundDate: new Date(2021, 3, 17), descriptionParagraphs: ["Pierwsza linia opisu", "Druga linia opisu"], keywords: ['dog', 'ciapek', 'radosny'], pictureUrl: '../assets/cats/garfield.jpg'},
            {id: 8, name: 'Malachit', age: 3, isDog: false, isCat: true, species: 'Maine Coon', foundDate: new Date(2021, 4, 1), descriptionParagraphs: ["Uroczy kot o pięknych oczach", "Druga linia opisu"], keywords: ['kot', 'malachit', 'oczy'], pictureUrl: '../assets/cats/malachit.jpg'},
          ],
  posts: [new BlogPost(1, 'Pierwszy post', 'Admin', new Date(2020, 12, 15), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost(2, 'Wesołych świąt', 'Admin', new Date(2020, 12, 23), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost(3, 'Nowy rok i ogon do góry', 'Admin', new Date(2021, 1, 3), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost(4, 'Noworoczne problemy psów', 'Admin', new Date(2021, 1, 5), ['Pierwszy akapit', 'Drugi akapit']),
    new BlogPost(5, 'Porzucone "prezenty"', 'Admin', new Date(2021, 2, 7), ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et velit quam. Sed vel nisl a velit vehicula varius. Sed a lobortis mauris. Donec ultrices, tellus sagittis pellentesque ornare, mi odio condimentum justo, non placerat libero leo ac tellus. Curabitur et elit laoreet, fermentum diam non, pharetra nibh. Sed ut odio vitae mauris luctus scelerisque. Sed sodales augue lectus, id rutrum nisi porttitor vel. Sed aliquam, ante eu vestibulum mollis, purus sapien placerat sapien, vel congue arcu lacus ac dolor. Sed quis placerat justo. Fusce quis posuere ligula. Vivamus erat libero, pellentesque eget nisl ac, dapibus gravida mauris. Integer in iaculis diam, vel pulvinar ligula. Suspendisse sed tellus lectus. Vivamus tempus turpis turpis, non lobortis elit sodales a. Proin a leo quis metus fermentum volutpat. Ut vel orci odio.', 'Integer et tortor tempor, iaculis libero non, posuere risus. Nunc dolor dui, eleifend a ante ut, viverra dignissim quam. Donec ut iaculis leo. Maecenas hendrerit, mi vitae mattis elementum, ex elit porta velit, id placerat quam nisi a turpis. Praesent a volutpat eros. Etiam luctus diam quis odio eleifend tristique. Aliquam a dictum nisl, in bibendum ex.', 'Aliquam viverra ligula dolor, nec vehicula erat gravida at. Suspendisse euismod varius condimentum. Vivamus posuere tellus eget tortor ultrices iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eu tortor quis ante vehicula dignissim. Sed sit amet tellus pulvinar ipsum viverra luctus cursus a enim. Morbi suscipit eros vitae aliquam scelerisque. Praesent at nunc in nulla lobortis vehicula.', 'Integer pellentesque cursus suscipit. Duis vulputate at sapien quis lacinia. Donec varius felis ipsum, ac rhoncus magna lacinia ut. Nunc non turpis ut enim ornare feugiat. Pellentesque placerat, neque sit amet ornare gravida, arcu lectus mollis nibh, eu varius justo urna eu arcu. Etiam eget euismod libero, et aliquet ipsum. Maecenas sit amet turpis sem. Phasellus pharetra condimentum nunc condimentum vestibulum. Donec augue justo, egestas vitae nunc id, volutpat porttitor risus. Sed sed ante tortor. Donec vulputate, nibh eu interdum iaculis, felis nibh ultrices tellus, non vehicula nulla tortor quis ligula. Curabitur egestas aliquet ipsum eu congue. Praesent commodo risus eros, vitae tincidunt libero lobortis sit amet. Aliquam nec sem dolor.']),
  ],
  dogSpecies: ['Dog francuski', 'Bernardyn', 'Cheiwawa', 'Mieszaniec', 'Labrador', 'Husky syberyjski', 'Golden retriever', 'Owczarek niemiecki'],
  catSpecies: ['Kot perski', 'Brytyjski krótkowłosy', 'Maine Coon', 'Amerykański krótkowłosy', 'Kot sfinks', 'Kot syberyjski'],
  mailbox: [new MailEntry(1, 'Testowy mail', 'hello@ogondogory.pl', 'hello@ogondogory.pl', new Date(2020, 12, 15), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry(2, 'Sucha karma dla schroniska', 'marlena031@wp.pl', 'hello@ogondogory.pl', new Date(2020, 12, 29), false, ['Dzień dobry', 'Mam trochę suchej karmy dla psów']),
    new MailEntry(3, 'RE: Sucha karma dla schroniska', 'marlena031@wp.pl', 'hello@ogondogory.pl', new Date(2021, 1, 4), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry(4, 'Zagubiony pies, okolice schroniska', 'mieciuwarch67@o2.pl', 'hello@ogondogory.pl', new Date(2021, 1, 11), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry(5, 'Jakiś mail', 'kontakt@adriatyk.pl', 'hello@ogondogory.pl', new Date(2021, 2, 16), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry(6, 'Sample text', 'sample@text.pl', 'hello@ogondogory.pl', new Date(2021, 2, 18), false, ['Hello', 'Pierwszy mail!']),
    new MailEntry(7, 'Nikt go nie znajdzie', 'witam@porywacz.pl', 'hello@ogondogory.pl', new Date(2021, 3, 6), false, ['Hello', 'Pierwszy mail!'])]
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
     // obrazki tylko z folderu assets
     let imagePath = "../assets/"+animal.pictureUrl;
     animal.pictureUrl = imagePath;
     this.state.animals.push(animal);
   }

   adoptAnimal(animal: IAnimal) {
     animal.adoptionDate = new Date();
     let originalAnimalExcluded = this.state.animals.filter(a => a.keywords !== animal.keywords);
     originalAnimalExcluded.push(animal);
   }

   getPost(id: number) {
    let result = this.state.posts.find(a => a.id === id);
    return result as BlogPost;
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
    mail.id = Math.max(...this.state.mailbox.map(p => p.id)) + 1;
    this.state.mailbox.push(mail);
  }

  readMail(mailIndex: number) {
    this.state.mailbox[mailIndex].opened = true;
  }

  hasUserWithLoginAndPassword(login: string, password: string) {
    return this.state.users.some(u => u.login === login && u.password === password);
  }

  addBlogPost(post: BlogPost) {
    // writeFileSync()

    post.id = Math.max(...this.state.posts.map(p => p.id)) + 1;
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
