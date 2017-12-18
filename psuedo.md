*high level overview:

user will have a submit form where they can input a name of a burger and hit "submit"
the burger name will then go into the database, api, and to the ui along with a "devour" button
    will have a burger_name varchar, burger_id int, devoured boolean default false
after at least one burger is one the ui, the user can then devour the burger by hitting the "devour" button
when this "devour" button is hit, the burger will go to the devoured div of the ui
    devour button will disappear, devoured boolean will change to true
the user can add and devour as many burgers as they would like

mid level

model: burger.js: core logic of the app that drives the whole process. talks to the database, does calculations on the data, deletes data
views: what the user will see and interact with
     : index.handlebars: contains the template that handlebars will render to. contains the submit button
     : layouts: main.handlebars: contains links, refs, outline of html template
controller: middle-man/traffic-cop, talks to model and view
router: like a mini-app, a module of routes that we plug in