var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    flash          = require("connect-flash"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    methoedOverride = require("method-override"),
    seedDB        = require("./seeds")
    User          = require("./models/user"),
    Comment       = require("./models/comment");

//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");

//console.log(process.env.DATABASEURL);"mongodb://localhost:27017/yelp_camp_7"
//mongoose.connect("mongodb://lyubo:lb1800@ds147411.mlab.com:47411/yelpcamp_lyubo", { useNewUrlParser: true });
var url = process.env.DATABASEURL || "mongodb://localhost:27017/huahua";
mongoose.connect(url, { useNewUrlParser: true });


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methoedOverride("_method"));
app.use(flash());
//seedDB();  //seed the database

//PASSPORT CONFIGURATION
app.use(require("express-session")(
    {
        secret: "Once again BaoBao wins cutest dog",
        resave: false,
        saveUninitialized: false
    }
));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Add currentUser to every ROUTES
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT || 3000, function(){
   console.log("YelpCamp Server is listening!");
});

/*
mongod(F:\Program Files\MongoDB\Server\4.0\bin,  ./mongod to open)
mongo(open another shell, ./mongo  to connect, ^c to quit)
help
show dbs
use
insert
find
update
remove

CRUD= "create read update($set) destroy"
* */