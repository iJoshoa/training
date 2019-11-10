#install
npm install -g @angular/cli

#new project
ng new ssru-class

#run
ng serve

#create component
ng generate component home

#import route in app.module.ts
import { RouterModule } from '@angular/router'
#add route in import
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

#install bootstrap
npm install bootstrap --save
npm install jquery --save
npm install popper.js --save

#install express on emtry folder
npx express-generator
npm install
npm start

#install nodemon for restart server after change code!! 
npm install -g nodemon

#nodemon change in package.json
"start": "node ./bin/www" to "start": "nodemon ./bin/www"

#install postman for look api 
on web
#install mysql driver
npm install mysql
#install setvice
ng g service Data


###### hackatron #######

--------create DB-----------
CREATE TABLE `ssru_db`.`post` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(256) NOT NULL,
  `message` VARCHAR(256) NOT NULL,
  `like` INT NULL,
  PRIMARY KEY (`post_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf16;
==================================================
 <div class="card" style="margin-bottom: 1em width: 50rem;">
      <h2>POST</h2>
      <input class="form-control" style="margin-bottom: 1em" type="text" placeholder="URL รูปภาพ">
      <input class="form-control" style="margin-bottom: 1em" type="text" placeholder="ข้อความ">
  </div>

  "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/popper.min.js"