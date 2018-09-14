"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.imagesBasic = [
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg", description: "Image 1" },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg", description: "Image 2" },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg", description: "Image 3" },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg", description: "Image 4" },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg", description: 'Image 5' },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg", description: 'Image 6' },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg", description: 'Image 7' },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg", description: 'Image 8' },
            { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg", description: 'Image 9' }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map