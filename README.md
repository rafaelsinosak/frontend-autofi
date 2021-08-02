# Frontend Coding Challenge - AutoFi

You are working on a new feed to promote the company social network activity, you are
provided with access to the account’s posts and comments, your job is to integrate that activity
into the website.

## Task

Build a ReactJS project that fetches from the **posts** and **comments** APIs, presents a list of posts and when any of the items is clicked show the list of comments that are associated with that specific post. ✔️

You are responsible for:

• - Fetching the data from the API. ✔️
• - Presenting the data in the view. ✔️
• - Relate comments to posts. ✔️

Stretch goals

• - Set up project to use redux ✔️
• - Test your components ✔️
• - Allow the user to comment on a post and save the comment on state/redux. ✔️

**Document any assumptions and design decisions you have made.**

Posts API: https://jsonplaceholder.typicode.com/posts Comments API:
https://jsonplaceholder.typicode.com/comments

<hr>

### Technologies

- Node.js v14.17.0
- Yarn v1.22.10
- Git

<hr>

### Code Technologies

**ReactJS** (mandatory)
**ReactRedux** (stretch goals)
**MaterialUI** (easy and user friendly)
**CSS** (to not extend the .js file with useStyles)

<hr>

### How to Run

```bash
# clone repository
git clone ---
```

```bash
# enter folder
cd frontend-autofi-master
```

create .env copying the **.env** PROD section

```bash
# install packages
yarn install
```

```bash
# start project
yarn start
```

<hr>

### How it Works

1 - Draw Main Component
2 - Draw Header Component
3 - Draw Footer Component
4 - Declare and Set State to empty
5 - GET on URLs
6 - Map Comments to each Posts
7 - Save to the State
8 - For Each Post on the State: draw a Individual Card with the payload including the comments
9 - When User comment on a post, the comment is saved on the State
10 - Draw the new comment from the State

<hr>

### Design Architecture

- Module to Store the Posts and Comments into the State (it's filled with the GET request);
- Module to choose the type (if is a Post or Comment);
- Module to make API Calls using Axios;
- Module to map Comments associated with each Post;
- Component to Draw each Post (from the State);
- Component to Draw each Comment on Post (from the State);
- Component to Draw the Header;
- Component to Draw the Footer.

<hr>

### Future Improvements

- User Authentication to allow send Comments and Posts with your account;
- User Permissions to see only posts allowed to each account;
- Delete Comments;
- Edit Comments.

<hr>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

<hr>

## License

[MIT](https://choosealicense.com/licenses/mit/)
<hr>

## .env

```javascript
//Example
REACT_APP_ENV=<REACT_ENV>
REACT_APP_API_URL=<API_URL>
REACT_APP_BASENAME=<BASENAME>
REACT_APP_HOSTNAME=<HOSTNAME>

//PROD
REACT_APP_API_URL=https://jsonplaceholder.typicode.com
REACT_APP_ENV=production
REACT_APP_BASENAME=
REACT_APP_HOSTNAME=
```
