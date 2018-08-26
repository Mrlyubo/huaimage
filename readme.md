RESTFUL routers:

name    url       verb     desc.
=========================================================
INDEX  /dogs      GET      Display a list of all dog
NEW    /dogs/new  GET      Displays form to make a new dog
CREATE /dogs      POST     Add new dog to DB
SHOW   /dogs/:id  GET      Shows info about one dog

##Auth Pt. 1 - Add User Model
 * Install all packages needed for auth
   (npm i passport passport-local passport-local-mongoose express-session --save)
 * Define User model
##Auth Pt. 2 - Register
 * Configure Passport
 * Add register routes
 * Add register template
##Auth Pt. 3 - Login 
 * Add login routes
 * Add login template
##Auth Pt. 4 - Logout/Navbar
 * Add logout route
 * Prevent user from adding a comment if not signed in
 * Add links to navbar
 * Show/hide auth links correctly
 
##Auth Pt. 5 - Show/Hide links
 * Show/Hide auth links in navbar correctly.  
 
##Refacter the Routes
 * Use Express router to reorganize all routes
 
##Users + Comments
 * Associate users and comments
 * Save author's name to a comment automatically 
   
##Editing Campgrounds
 * Add Method-override
 * Add Edit Route for Campgrounds
 * Add Link to Edit Page
 * Add Update Route
 * Fix $set problem
 
 ##Deleting Campgrounds
  * Add Destroy Route
  * Add Delete button
  
 ## Authorization
  * User can only edit his/her campgrounds
  * User can only delete his/her campgrounds
  * Hide/Show edit and delete buttons 
  
 ## Editing Comments
  * Add Edit route for comments
  * Add Edit button
  * Add Update route
  
  /campgrounds/:id/edit
  /campgrounds/:id/comments/:comment_id/edit
  
 ## Deleting Comments
  * Add Destroy route
  * Add Delete button 
 
 ## Authorization Pt. 2: Comments
  * User can only edit/delete his/her comments
  * Hide/Show edit and delete buttons
  * Refactor Middleware
  
 ##Adding in Flash!
  * Demo wordking version.
  * Install and configure connect-flash
  * Add bootstrap alerts to header 
  
 ## Deploying
  * heroku config:set MY_CUSTOM_VALUE=foobar
  * export DATABASEURL=mongodb://localhost:27017/yelp_camp_7