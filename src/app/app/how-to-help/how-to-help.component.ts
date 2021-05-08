import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

export class Option {
    constructor(public option: string, public header: string, public text: string[]) {}
}
@Component({
    selector: 'app-how-to-help',
    templateUrl: './how-to-help.component.html',
    styleUrls: ['./how-to-help.component.scss'],
})
export class HowToHelpComponent implements OnInit {
    
    selectedOptionObject: Option = new Option('', '', []);
    options: string[] = [];
    optionsWithText: Option[] = [
        {option: "Mam czas i chęci", header: 'Czas to najcenniejsza waluta', text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla massa, luctus nec elit id, porttitor pellentesque lorem. Curabitur auctor mauris vitae ultricies sodales. Phasellus pulvinar in purus id faucibus. In hac habitasse platea dictumst. Donec auctor eros magna, et eleifend risus condimentum sit amet.", "Suspendisse egestas vestibulum dignissim. Praesent tempus vehicula ipsum. Proin eget quam a urna consequat vulputate."]},
        {option: "Mam trochę pieniędzy", header: 'Każdy grosz się liczy', text: ["Nam quis sapien vitae tortor convallis tempus at vitae neque. Maecenas et felis eu ante iaculis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dictum ante nec massa iaculis, nec tincidunt ligula varius. Fusce dui sapien, porttitor vel facilisis vitae, volutpat sed erat. Morbi sodales felis sapien, non luctus metus elementum sed. Cras ultricies et mi nec blandit.", "Suspendisse egestas vestibulum dignissim. Praesent tempus vehicula ipsum. Proin eget quam a urna consequat vulputate."]},
        {option: "Mam trochę miejsca w domu", header: 'Co moje to twoje', text: ["Nullam interdum at mi non ultrices. Suspendisse aliquet diam vitae hendrerit volutpat. Aliquam consectetur velit et molestie commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus quis venenatis ex, eu bibendum urna. Cras gravida, dui ac hendrerit feugiat, leo massa tempus nibh, a maximus neque libero sed justo. Vivamus bibendum augue sed fermentum fringilla.", "Suspendisse egestas vestibulum dignissim. Praesent tempus vehicula ipsum. Proin eget quam a urna consequat vulputate."]},
        {option: "Mam znajomości", header: 'Od słowa do słowa', text: ["Curabitur quis arcu nisi. Nulla venenatis commodo odio at dignissim. Nulla sed erat in orci iaculis euismod vel sit amet felis. Quisque lacinia magna vel ligula molestie, vel rutrum mauris blandit. Maecenas auctor justo a sapien porta efficitur. Mauris quis augue ultrices, consectetur elit non, faucibus sem. Vestibulum augue nulla, scelerisque vitae pellentesque viverra, tempor quis neque. Quisque iaculis est augue, et commodo dui auctor posuere. Aliquam tempor augue ut ligula ultrices dictum. Ut eleifend libero mi, ac faucibus diam fringilla et. Nam fermentum nunc vel diam accumsan consectetur. Curabitur mi est, ornare at ipsum nec, accumsan bibendum lorem. Ut in consectetur nunc. Nulla eu ante in nisi interdum pellentesque. Vivamus vel nisi tincidunt, commodo nulla quis, interdum tortor. Aliquam mattis in nulla eget egestas.", "Suspendisse egestas vestibulum dignissim. Praesent tempus vehicula ipsum. Proin eget quam a urna consequat vulputate."]},
        {option: "Mam inny pomysł", header: 'Słuchamy!', text: ["Donec vitae malesuada ligula, vestibulum lobortis purus. Morbi eu ligula augue. Sed eget tortor vel arcu tincidunt vestibulum a fermentum nulla. Aliquam sit amet elit congue, laoreet tellus quis, fringilla turpis. Suspendisse vehicula leo tristique nisi semper, rutrum accumsan erat ultrices. Nulla ante dui, ultrices sed nisi eget, venenatis rhoncus velit. Aliquam ac elit eu nisl rutrum tempor. Sed iaculis varius suscipit. Morbi condimentum, nisi mattis porttitor sodales, tellus leo tincidunt justo, et accumsan ex arcu ut lectus. Duis nunc nibh, congue nec viverra non, sagittis non diam. Curabitur at orci at sapien tristique tristique in in nunc. Nunc ut placerat libero, quis vehicula lacus."]}
    ];

    constructor(private title: Title) {
        this.options = this.optionsWithText.map(o => o.option);
        this.selectedOptionObject = this.optionsWithText[0];
    }

    selectOption(option: string) {
        this.selectedOptionObject = this.optionsWithText.find(o => o.option === option) as Option;
    }

    ngOnInit() {
        this.title.setTitle("Jak pomagać?");
    }
}