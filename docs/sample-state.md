```js
{
  currentUser: {
    id: 1,
    username: "Dwayne"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createComment: {errors: ["comment can't be blank"]},
    createTheme: {
      title: "new theme"
      colors: ["000000", "000000", "000000", "000000", "000000"]
    }
    edit_tags: {
      1: {
        id: 1,
        name: "Black"
      }
      new_tag: {
        name: ""
      }
    }
  },
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
    tagFilters: [1] // Used to track selected Tags for filtering of themes
  }
}
```
