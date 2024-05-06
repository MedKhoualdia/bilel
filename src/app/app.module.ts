import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateComponent } from './Front/all-template/all-template.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { BodyComponent } from './Front/body/body.component';
import { TrainingsComponent } from './Front/body/trainings/trainings.component';
import { BannerComponent } from './Front/body/banner/banner.component';
import { ClassComponent } from './Front/body/class/class.component';
import { ShowsComponent } from './Front/body/shows/shows.component';
import { ShortCodeComponent } from './Front/body/short-code/short-code.component';
import { ContactComponent } from './Front/body/contact/contact.component';
import { AdminAllComponent } from './Back/admin-all/admin-all.component';
import { AdminFooterComponent } from './Back/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './Back/admin-header/admin-header.component';
import { AdminSideBarComponent } from './Back/admin-side-bar/admin-side-bar.component';
import { AdminHomeComponent } from './Back/admin/admin-home/admin-home.component';
import { RegisterComponent } from './Register/Register.component';
import {HttpClientModule} from '@angular/common/http'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RoleToStringPipe } from './role-to-string.pipe';
import { LoginComponent } from './login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerConfigComponent } from './datepicker-config/datepicker-config.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import {CommonModule, DatePipe} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {DataTablesModule} from "angular-datatables";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ConfirmforgotpasswordComponent } from './confirmforgotpassword/confirmforgotpassword.component';
import {AjouterPostComponent} from "./Front/ajouter-post/ajouter-post.component";
import {ForumpostComponent} from "./Front/forumpost/forumpost.component";
import {UpdatePostComponent} from "./Front/update-post/update-post.component";
import {ChatComponent} from "./chat-component/chat-component.component";
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { CreateReclamationComponent } from './create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { PendingFriendRequestsComponent } from './pending-friend-requests/pending-friend-requests.component';
import { MyReclamationListComponent } from './my-reclamation-list/my-reclamation-list.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import {MatTabsModule} from "@angular/material/tabs";
import {AddCompetitionComponent} from "./_Competition_consummer/add-competition/add-competition.component";
import {ListCompetitionComponent} from "./_Competition_consummer/list-competition/list-competition.component";
import {DetailCompetitionComponent} from "./_Competition_consummer/detail-competition/detail-competition.component";
import {UpdateCompetitionComponent} from "./_Competition_consummer/update-competition/update-competition.component";
import {AddDanceVenueComponent} from "./_DanceVenue_consummer/add-dance-venue/add-dance-venue.component";
import {UpdateDanceVenueComponent} from "./_DanceVenue_consummer/update-dance-venue/update-dance-venue.component";
import {ListDanceVenueComponent} from "./_DanceVenue_consummer/list-dance-venue/list-dance-venue.component";
import {DetailDanceVenueComponent} from "./_DanceVenue_consummer/detail-dance-venue/detail-dance-venue.component";
import {DetailMultimediaComponent} from "./_Multimedia_consummer/detail-multimedia/detail-multimedia.component";
import {AddMultimediaComponent} from "./_Multimedia_consummer/add-multimedia/add-multimedia.component";
import {UpdateMultimediaComponent} from "./_Multimedia_consummer/update-multimedia/update-multimedia.component";
import {ListMultimediaComponent} from "./_Multimedia_consummer/list-multimedia/list-multimedia.component";
import {AddPaymentComponent} from "./_Payment_consummer/add-payment/add-payment.component";
import {UpdatePaymentComponent} from "./_Payment_consummer/update-payment/update-payment.component";
import {ListPaymentComponent} from "./_Payment_consummer/list-payment/list-payment.component";
import {DetailPaymentComponent} from "./_Payment_consummer/detail-payment/detail-payment.component";
import {UpdateTicketComponent} from "./_Ticket_consummer/update-ticket/update-ticket.component";
import {AddTicketComponent} from "./_Ticket_consummer/add-ticket/add-ticket.component";
import {ListTicketComponent} from "./_Ticket_consummer/list-ticket/list-ticket.component";
import {DetailTicketComponent} from "./_Ticket_consummer/detail-ticket/detail-ticket.component";
import {CompetitionComponent} from "./_Competition_consummer/competition/competition.component";
import {
  ListCompetitionFrontComponent
} from "./Competition_consummer/list-competition-front/list-competition-front.component";
import {
  DetailCompetitionFrontComponent
} from "./Competition_consummer/detail-competition-front/detail-competition-front.component";
import {JoinCompetitionComponent} from "./Competition_consummer/join-competition/join-competition.component";
import {JoinButtonComponent} from "./Competition_consummer/join-button/join-button.component";
import {JoinWithTeamComponent} from "./Competition_consummer/join-with-team/join-with-team.component";
import {JoinFromDistanceComponent} from "./Competition_consummer/join-from-distance/join-from-distance.component";
import {JoinFaceToFaceComponent} from "./Competition_consummer/join-face-to-face/join-face-to-face.component";
import {JoiningComponent} from "./Competition_consummer/joining/joining.component";
import {VideoComponent} from "./Competition_consummer/video/video.component";
import {LiveComponent} from "./Competition_consummer/live/live.component";
import {UploadVideoComponent} from "./Competition_consummer/upload-video/upload-video.component";
import {LiveStreamComponent} from "./Competition_consummer/live-stream/live-stream.component";
import {WithTeamComponent} from "./Competition_consummer/with-team/with-team.component";
import {AffectationComponent} from "./_Competition_consummer/affectation/affectation.component";
import {NgxPaginationModule} from "ngx-pagination";
import {PaymentComponent} from './payment-component/payment-component.component';
import {CloudinaryModule} from "@cloudinary/ng";
import { EvaluationadminComponent } from './evaluationadmin/evaluationadmin.component';
import { StaticCompetionComponent } from './static-competion/static-competion.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserscoreComponent } from './userscore/userscore.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    AllTemplateComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TrainingsComponent,
    BannerComponent,
    ClassComponent,
    ShowsComponent,
    ShortCodeComponent,
    ContactComponent,
    AdminAllComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSideBarComponent,
    AdminHomeComponent,
    RegisterComponent,
    ListUserComponent,
    UserDetailsComponent,
    RoleToStringPipe,
    LoginComponent,
    DatepickerConfigComponent,
    AjouterPostComponent,
    ForumpostComponent,
    MyReclamationListComponent,
    PendingFriendRequestsComponent,
    UpdateReclamationComponent,
    UpdatePostComponent,
    ChatComponent,
    PrivateChatComponent,
    ProfileComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    ConfirmforgotpasswordComponent,
    PrivateChatComponent,
    ReclamationListComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    PendingFriendRequestsComponent,
    MyReclamationListComponent,
    MonitoringComponent,
    AddCompetitionComponent,
    ListCompetitionComponent,
    DetailCompetitionComponent,
    UpdateCompetitionComponent,
    AddDanceVenueComponent,
    UpdateDanceVenueComponent,
    ListDanceVenueComponent,
    DetailDanceVenueComponent,
    DetailMultimediaComponent,
    AddMultimediaComponent,
    UpdateMultimediaComponent,
    ListMultimediaComponent,
    AddPaymentComponent,
    UpdatePaymentComponent,
    ListPaymentComponent,
    DetailPaymentComponent,
    AddTicketComponent,
    UpdateTicketComponent,
    ListTicketComponent,
    DetailTicketComponent,
    CompetitionComponent,
    ListCompetitionFrontComponent,
    DetailCompetitionFrontComponent,
    JoinCompetitionComponent,
    JoinButtonComponent,
    JoinWithTeamComponent,
    JoinFromDistanceComponent,
    JoinFaceToFaceComponent,
    JoiningComponent,
    VideoComponent,
    LiveComponent,
    UploadVideoComponent,
    LiveStreamComponent,
    WithTeamComponent,
    AffectationComponent,
    EvaluationadminComponent,
    StaticCompetionComponent,
    FeedbackComponent,
    UserscoreComponent,


  ],
  imports: [
    CommonModule,
    DataTablesModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    NgbModule,
    DropdownModule,
    DataTablesModule,
    MatTabsModule,
    ReactiveFormsModule,
    CloudinaryModule,


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
