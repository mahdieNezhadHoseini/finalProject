"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var angular_font_awesome_1 = require("angular-font-awesome");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var about_us_component_1 = require("./about-us/about-us.component");
var avhivement_component_1 = require("./avhivement/avhivement.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var counter_component_1 = require("./counter/counter.component");
var education_component_1 = require("./education/education.component");
var error_component_1 = require("./error/error.component");
var events_component_1 = require("./events/events.component");
var fields_component_1 = require("./fields/fields.component");
var footer_component_1 = require("./footer/footer.component");
var forget_password_component_1 = require("./forget-password/forget-password.component");
var forums_component_1 = require("./forums/forums.component");
var gallery_component_1 = require("./gallery/gallery.component");
var hamayesh_component_1 = require("./hamayesh/hamayesh.component");
var header_component_1 = require("./header/header.component");
var header_second_component_1 = require("./header-second/header-second.component");
var last_notification_component_1 = require("./last-notification/last-notification.component");
var login_component_1 = require("./login/login.component");
var magazine_component_1 = require("./magazine/magazine.component");
var notification_component_1 = require("./notification/notification.component");
var pagination_component_1 = require("./pagination/pagination.component");
var register_component_1 = require("./register/register.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var single_component_1 = require("./single/single.component");
var slider_component_1 = require("./slider/slider.component");
var teachers_component_1 = require("./teachers/teachers.component");
var search_component_1 = require("./search/search.component");
var home_component_1 = require("./home/home.component");
var achivement_sidebar_component_1 = require("./sidebar/achivement-sidebar/achivement-sidebar.component");
var notification_sidebar_component_1 = require("./sidebar/notification-sidebar/notification-sidebar.component");
var education_sidebar_component_1 = require("./sidebar/education-sidebar/education-sidebar.component");
var hamayesh_sidebar_component_1 = require("./sidebar/hamayesh-sidebar/hamayesh-sidebar.component");
var magazine_sidebar_component_1 = require("./sidebar/magazine-sidebar/magazine-sidebar.component");
var calendar_sidebar_component_1 = require("./sidebar/calendar-sidebar/calendar-sidebar.component");
var teacher_single_component_1 = require("./teacher-single/teacher-single.component");
exports.appRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "about-us", component: about_us_component_1.AboutUsComponent },
    { path: "avhivement", component: avhivement_component_1.AvhivementComponent },
    { path: "contact-us", component: contact_us_component_1.ContactUsComponent },
    { path: "education", component: education_component_1.EducationComponent },
    { path: "error", component: error_component_1.ErrorComponent },
    { path: "events", component: events_component_1.EventsComponent },
    { path: "fields", component: fields_component_1.FieldsComponent },
    { path: "forget-password", component: forget_password_component_1.ForgetPasswordComponent },
    { path: "forums", component: forums_component_1.ForumsComponent },
    { path: "gallery", component: gallery_component_1.GalleryComponent },
    { path: "hamayesh", component: hamayesh_component_1.HamayeshComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "magazine", component: magazine_component_1.MagazineComponent },
    { path: "notification", component: notification_component_1.NotificationComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "search", component: search_component_1.SearchComponent },
    { path: "single", component: single_component_1.SingleComponent },
    { path: "teachers", component: teachers_component_1.TeachersComponent },
    { path: "teacher-single", component: teacher_single_component_1.TeacherSingleComponent },
    { path: "**", component: error_component_1.ErrorComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_us_component_1.AboutUsComponent,
                avhivement_component_1.AvhivementComponent,
                contact_us_component_1.ContactUsComponent,
                counter_component_1.CounterComponent,
                education_component_1.EducationComponent,
                error_component_1.ErrorComponent,
                events_component_1.EventsComponent,
                fields_component_1.FieldsComponent,
                footer_component_1.FooterComponent,
                forget_password_component_1.ForgetPasswordComponent,
                forums_component_1.ForumsComponent,
                gallery_component_1.GalleryComponent,
                hamayesh_component_1.HamayeshComponent,
                header_component_1.HeaderComponent,
                header_second_component_1.HeaderSecondComponent,
                last_notification_component_1.LastNotificationComponent,
                login_component_1.LoginComponent,
                magazine_component_1.MagazineComponent,
                notification_component_1.NotificationComponent,
                pagination_component_1.PaginationComponent,
                register_component_1.RegisterComponent,
                sidebar_component_1.SidebarComponent,
                single_component_1.SingleComponent,
                slider_component_1.SliderComponent,
                teachers_component_1.TeachersComponent,
                search_component_1.SearchComponent,
                home_component_1.HomeComponent,
                achivement_sidebar_component_1.AchivementSidebarComponent,
                notification_sidebar_component_1.NotificationSidebarComponent,
                education_sidebar_component_1.EducationSidebarComponent,
                hamayesh_sidebar_component_1.HamayeshSidebarComponent,
                magazine_sidebar_component_1.MagazineSidebarComponent,
                calendar_sidebar_component_1.CalendarSidebarComponent,
                teacher_single_component_1.TeacherSingleComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot(),
                forms_1.FormsModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                router_1.RouterModule.forRoot(exports.appRoutes)
            ],
            exports: [router_1.RouterModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map