const router = require('express').Router();

const FilmsTvcontroller = require("../controllers/films_tv.controller")
const Foodscontroller = require("../controllers/foods.controller")
const Gendercontroller = require("../controllers/genders.controller")
const GoingOutcontroller = require("../controllers/going_out.controller")
const Hobbiescontroller = require("../controllers/hobbies.controller")
const Musicscontroller = require("../controllers/musics.controller")
const Petscontroller = require("../controllers/pets.controller")
const SportsAdventurecontroller = require("../controllers/sports_adventures.controller")
const UsersFilmTvcontroller = require("../controllers/user_film_tv.controller")
const UserFoodcontroller = require("../controllers/user_food.controller")
const UserGoingOutcontroller = require("../controllers/user_going_out.controller")
const UserHobbiescontroller = require("../controllers/user_hobby.controller")
const UserMusiccontroller = require("../controllers/user_music.controller")
const UserPetscontroller = require("../controllers/user_pet.controller")
const UserSportsAdventurecontroller = require("../controllers/user_sport_adventure.controller")
const UsersGallerycontroller = require("../controllers/users_gallery.controller")
const Userscontroller = require('../controllers/users.controller');

// users APIs
router.post('/register', Userscontroller.signup);
router.post('/login', Userscontroller.login);
router.get('/getuser/:id', Userscontroller.getuser);
router.put('/update/:id', Userscontroller.updateuser);
router.delete('/deleteuser/:id', Userscontroller.deleteUserById);
router.post('/changepassword/:id', Userscontroller.changePassword);

// genders APIs
router.post('/setgenders', Gendercontroller.setGenders);
router.get('/getgenders', Gendercontroller.getGenders);

// users_gallery APIs
router.post('/setusersgallery', UsersGallerycontroller.setUsersGallery);
router.get('/getusersgallery', UsersGallerycontroller.getUsersGallery);

// user_sport_adventure APIs
router.post('/usersportsadventures', UserSportsAdventurecontroller.UserSports);

// user_pet APIs
router.post('/userspets', UserPetscontroller.UserPets);

// user_music APIs
router.post('/usersmusics', UserMusiccontroller.UserMusic);

// user_hobby APIs
router.post('/usershobby', UserHobbiescontroller.UserHobby);

// user_going_out APIs
router.post('/usersgoingout', UserGoingOutcontroller.UserGoing);

// user_food APIs
router.post('/usersfoods', UserFoodcontroller.Userfoods);

// user_film_tv APIs
router.post('/usersfilmstv', UsersFilmTvcontroller.UserFilmTv);

// sports_adventures APIs
router.post('/setsportsadventures', SportsAdventurecontroller.setSportsAdevnture);
router.get('/getsportsadventures/:id', SportsAdventurecontroller.getSportsAdevnture);

// pets APIs
router.post('/setpets', Petscontroller.setPets);
router.get('/getpets/:id', Petscontroller.getPets);

// musics APIs
router.post('/setmusics', Musicscontroller.setMusics);
router.get('/getmusics/:id', Musicscontroller.getMusics);

// hobbies APIs
router.post('/sethobbies', Hobbiescontroller.setHobbies);
router.get('/gethobbies/:id', Hobbiescontroller.getHobbies);

// going_out APIs
router.post('/setgoingout', GoingOutcontroller.setGoingOut);
router.get('/getgoingout/:id', GoingOutcontroller.getGoingOut);


// foods APIs
router.post('/setfoods', Foodscontroller.setFoods);
router.get('/getfoods/:id', Foodscontroller.getFoods);

// films_tv APIs
router.post('/setfilmstv', FilmsTvcontroller.setFilmsTv);
router.get('/getfilmstv/:id', FilmsTvcontroller.getFilmsTv);



module.exports = router;