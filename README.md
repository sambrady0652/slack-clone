# Stackgroup 

React application serving Cocktail Recipes from Flask API

See Cocktail Hour live [here](https://cocktailhours.herokuapp.com/)

## Main Features

1. User Profile
Users will sign up/sign in, and their session will be persisted until they log out using JSON Web Tokens in an Express backend.
Users will be able to upload a photo as well as relevant details about themselves

2. Channels
Users can search for, join, and leave existing channels through features on the navbar.
Joined channels will appear in the navbar. clicking on a channel will display that channel.
Each channel will contain a members list, a topic, and a log of messages sent from other members of the channel.
Users have full CRUD capability with messages in the channel, and they can Like/Unlike messages.
Channels will be protected routes: If a user is not a member of the channel, they will be unable to view the channel.

3. Live messaging features implemented using websockets to ensure persistent connection throughout; no need to refresh to receive or send messages

## Screen Views

### Home Page 

### Signin/Signup Forms

### Main Channel and Navbar Component

