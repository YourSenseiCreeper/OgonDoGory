import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";

export class ImageWithAnimalId {
    constructor(public id: number, public imageUrl: string) {}
}

@Component({
    selector: 'app-adoption-gallery',
    templateUrl: './adoption-gallery.component.html',
    styleUrls: ['./adoption-gallery.component.scss'],
})
export class AdoptionGalleryComponent implements OnInit {
    
    imagesWithAnimalIds: ImageWithAnimalId[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        // this.imagesWithAnimalIds = [new ImageWithAnimalId(1, "../../../assets/dog-1866530_1280.jpg")];
        this.imagesWithAnimalIds = this.dataService.getAllAnimalsRandom().map(a => new ImageWithAnimalId(a.id, "../../" + a.pictureUrl));
    }
}