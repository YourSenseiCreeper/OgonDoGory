import { BlogPost, DataService } from '../../data.service';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['../app.component.scss', './post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
    
    public post = new BlogPost(1, 'Ładowanie', 'Admin', new Date(), ['Linia 1', 'Linia 2']);
    
    constructor(private title: Title,
        private dataService: DataService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            let postId = Number(paramMap.get('id'));
            this.post = this.dataService.getPost(postId);
            this.title.setTitle(this.post.title);
        });
    }
}