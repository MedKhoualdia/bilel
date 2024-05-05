import { BannerComponent } from './Front/body/banner/banner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateComponent } from './Front/all-template/all-template.component';
import { TrainingsComponent } from './Front/body/trainings/trainings.component';
import { ClassComponent } from './Front/body/class/class.component';
import { ShowsComponent } from './Front/body/shows/shows.component';
import { ShortCodeComponent } from './Front/body/short-code/short-code.component';
import { ContactComponent } from './Front/body/contact/contact.component';
import { AdminAllComponent } from './Back/admin-all/admin-all.component';
import { AdminHomeComponent } from './Back/admin/admin-home/admin-home.component';
import { RegisterComponent } from './Register/Register.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {ProfileComponent} from "./profile/profile.component";
import {LogoutComponent} from "./logout/logout.component";
import {ConfirmforgotpasswordComponent} from "./confirmforgotpassword/confirmforgotpassword.component";
import {ForumpostComponent} from "./Front/forumpost/forumpost.component";
import {AjouterPostComponent} from "./Front/ajouter-post/ajouter-post.component";
import {UpdatePostComponent} from "./Front/update-post/update-post.component";
import {ChatComponent} from "./chat-component/chat-component.component";
import {PrivateChatComponent} from "./private-chat/private-chat.component";
import {ReclamationListComponent} from "./reclamation-list/reclamation-list.component";
import {CreateReclamationComponent} from "./create-reclamation/create-reclamation.component";
import {UpdateReclamationComponent} from "./update-reclamation/update-reclamation.component";
import {PendingFriendRequestsComponent} from "./pending-friend-requests/pending-friend-requests.component";
import {MyReclamationListComponent} from "./my-reclamation-list/my-reclamation-list.component";
import {MonitoringComponent} from "./monitoring/monitoring.component";
import {
  ListCompetitionFrontComponent
} from "./Competition_consummer/list-competition-front/list-competition-front.component";
import {
  DetailCompetitionFrontComponent
} from "./Competition_consummer/detail-competition-front/detail-competition-front.component";
import {JoinCompetitionComponent} from "./Competition_consummer/join-competition/join-competition.component";
import {JoiningComponent} from "./Competition_consummer/joining/joining.component";
import {JoinFromDistanceComponent} from "./Competition_consummer/join-from-distance/join-from-distance.component";
import {VideoComponent} from "./Competition_consummer/video/video.component";
import {LiveComponent} from "./Competition_consummer/live/live.component";
import {UploadVideoComponent} from "./Competition_consummer/upload-video/upload-video.component";
import {WithTeamComponent} from "./Competition_consummer/with-team/with-team.component";
import {AddMultimediaComponent} from "./_Multimedia_consummer/add-multimedia/add-multimedia.component";
import {AddPaymentComponent} from "./_Payment_consummer/add-payment/add-payment.component";
import {DetailPaymentComponent} from "./_Payment_consummer/detail-payment/detail-payment.component";
import {LiveStreamComponent} from "./Competition_consummer/live-stream/live-stream.component";
import {ListCompetitionComponent} from "./_Competition_consummer/list-competition/list-competition.component";
import {AddCompetitionComponent} from "./_Competition_consummer/add-competition/add-competition.component";
import {UpdateCompetitionComponent} from "./_Competition_consummer/update-competition/update-competition.component";
import {DetailDanceVenueComponent} from "./_DanceVenue_consummer/detail-dance-venue/detail-dance-venue.component";
import {AddDanceVenueComponent} from "./_DanceVenue_consummer/add-dance-venue/add-dance-venue.component";
import {ListDanceVenueComponent} from "./_DanceVenue_consummer/list-dance-venue/list-dance-venue.component";
import {UpdateDanceVenueComponent} from "./_DanceVenue_consummer/update-dance-venue/update-dance-venue.component";
import {PaymentComponent} from "./payment-component/payment-component.component";

const routes: Routes = [
  { path:'DanceScape', component:AllTemplateComponent,
  children:[
    { path: 'reclamations/new', component: CreateReclamationComponent },
    {path:'home', component: BannerComponent},
    {path:'trainings', component: TrainingsComponent},
    {path:'posts', component:ForumpostComponent},
    {path:'chatRoom', component:ChatComponent},
    {path:'PrivateChatRoom', component:PrivateChatComponent},
    {path:'ajouterPost', component:AjouterPostComponent},
    {path:'updatePost/:id', component:UpdatePostComponent},
    {path:'friendRequests', component:PendingFriendRequestsComponent},
    {path:'reclamations/MyReclamations', component:MyReclamationListComponent},
    {path: 'listCompetition', component:ListCompetitionFrontComponent},
    {path: 'detailCompetition/:id', component:DetailCompetitionFrontComponent},
    {path: 'join', component: JoinCompetitionComponent},
    {path: 'joining', component:JoiningComponent},
    {path: 'joinFromADistance', component:JoinFromDistanceComponent},
    {path: 'video', component:VideoComponent},
    {path: 'live', component:LiveComponent},
    {path: 'upload', component:UploadVideoComponent},
    {path: 'team', component:WithTeamComponent},
    {path: 'cloudinary', component:AddMultimediaComponent},
    {path: 'payment', component:AddPaymentComponent},
    {path: 'paypal', component:DetailPaymentComponent},
    {path: 'stream', component:LiveStreamComponent},
    {path: 'class', component:ClassComponent},
    {path: 'shows', component: ShowsComponent},
    {path: 'shortcode', component:ShortCodeComponent},
    {path: 'contact', component:ContactComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'OnlinePayment', component: PaymentComponent }
  ]
},

{path: 'admin', component:AdminAllComponent,
children:[
  {path:'body', component:AdminHomeComponent},
  {path:'list-users',component:ListUserComponent},
  { path: 'reclamations', component: ReclamationListComponent },
  {path:'reclamation/:id', component:UpdateReclamationComponent},
  {path:'update-user/:userId',component:UserDetailsComponent},
  {path:'monitoring',component:MonitoringComponent},
  {path:'listCompetition', component:ListCompetitionComponent},
  {path:'addCompetition', component:AddCompetitionComponent},
  {path:'updateCompetition/:id', component:UpdateCompetitionComponent},
  {path:'show/:id', component:DetailDanceVenueComponent},
  {path:'addDanceVenue', component:AddDanceVenueComponent},
  {path:'listDanceVenue', component:ListDanceVenueComponent},
  {path:'updateDanceVenue/:id', component:UpdateDanceVenueComponent},
  {path:'admin/listCompetition/:danceVenueId', component:ListCompetitionComponent}
]
},

  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  {path:'Register',component:RegisterComponent},
  { path: 'forgot-password', component: ForgotpasswordComponent },
  {path:'forgot-password/:resetToken',component:ConfirmforgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
