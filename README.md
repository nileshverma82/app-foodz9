# AppFoodz9


    ng new appFoodz9 --routing -st --styles scss
    rm -rf appFoodz9/
    ng new appFoodz9 --routing -st --style scss 
    ng new app-foodz9 --routing -st --style scss
    cd app-foodz9/
    ng g module core 
    ng g s core/auth -m core
    ng g s core/data -m core
    ng g s core/routes -m core
    ng g g core/auth -m core 
    ng g g core/auth -m core
    npm install 
    npm install --save @angular/material @angular/cdk @angular/animations
    npm install --save hammerjs
    ng generate module material
    npm install firebase angularfire2 --save
    npm install --save @angular/flex-layout
    ng generate module fooditem
    ng g c fooditem/fooditem-list —dry run
    ng g c fooditem/fooditem-list 
    ng g c fooditem/fooditem-detail
    ng g c fooditem/fooditem-new
    ng g c fooditem/fooditem-modify

## Add following 

import 'hammerjs'; —- into src/main.ts

Copy into index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">


## create app-theme.scss and paste following

@import '~@angular/material/theming';

@include mat-core();

$app-primary: mat-palette($mat-blue-grey,500);
$app-accent:  mat-palette($mat-deep-orange, 600);
$app-warn:    mat-palette($mat-red);
$app-theme:   mat-light-theme($app-primary, $app-accent, $app-warn);

@include angular-material-theme($app-theme);

##styles.scss
/* You can add global styles to this file, and also import other style files */
body {
    margin: 0px;
    font-family: Roboto;
}



.top-toolbar {
    position: sticky;
    /* For Safari */
    position: -webkit-sticky;
    justify-content: space-between;
    top: 0;
    z-index: 1;
}

md-toolbar-row {
  justify-content: space-between;
}

md-sidenav-container {
    background: rgba(240, 20, 20, 0.03);
    background-color: blue;
}

.app-sidenav {
    width: 300px;
}

md-card {
    max-width: 100%;
    box-sizing: border-box;
    margin: 10px;

}

.card-container {
    display: flex;
    flex-flow: row wrap;
}

/* Material icon styles */
md-icon.md-18 {
    font-size: 18px;
}
md-icon.md-24 {
    font-size: 24px;
}
md-icon.md-36 {
    font-size: 36px;
}
md-icon.md-48 {
    font-size: 48px;
}

.app-action {
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
