```js
{
  sessions: {
    currentUser: {
      id: 1,
      username: "Dwayne"
    },
    signUp: {errors: []},
    logIn: {errors: []}
  }
  newComment: {
    errors: ["comment can't be blank"],
    body: ""
  },
  createTheme: {
    title: "new theme"
    colors: ["000000", "000000", "000000", "000000", "000000"]
  }
  tagFilter: [1], // Used to track selected Tags for filtering of themes
  searchTerms: "Blues",
  }
  themes: {
    1: {
      title: "Dwayne's Color Theme",
      colors: ["001F33", "001F33", "001F33", "001F33", "001F33"],
      author_id: 1,
      tags: {
        2: {
          id: 2,
          name: "Blues"
        },
      yas_count: 1,
      comments: {
        id: 1 {
        author_name: "Fatima",
        body: "Looks great!"
        }
      }
    },
  }
}
```
