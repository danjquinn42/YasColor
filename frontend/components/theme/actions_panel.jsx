import React from 'react';
import { Link } from 'react-router';


const ActionsPanel = (
  theme,
  user,
  updateUser,
  updateNewTag,
  newTag,
  addNewTag,
  showSignIn,
  router) => {

  //
  const saveTheme = () => {
    const themeIDs = user.saved_themes.map((sTheme) => {
      return sTheme.id;
    });
    if (!themeIDs.includes(theme.id)){
      user.saved_themes.push(theme);
      updateUser(user);
    }
  };

  const verifyUser = () => {
    if (user) {
      return (<Link to="/mythemes" onClick={saveTheme}>
      <img className="action-icon" src={window.save}></img>
      <h4>Save to Library</h4>
    </Link>);
    } else {
      return ( <Link onClick={showSignIn}>
      <img className="action-icon" src={window.save}></img>
      <h4>Log in to Save</h4>
    </Link>);
    }
  };

  const updateTag = (tag) => {
    return(event) => {
      return "";
    };
  };

  const tagItems = () => {
    if ( user && user.id === theme.user.id ) {
      return theme.tags.map( (tag) => {
        return (
          <li
            key={tag.id}
            className="tag">
            {tag.title}
              <img className="delete"
                 src={window.close}>
              </img>
          </li>
        );
      });
    } else {
      return theme.tags.map( (tag) => {
        return (
          <li
            key={tag.id}
            className="tag">
            {tag.title}
          </li>
        );
      });
    }
  };

  const userIsOwner = () => {
    if ( user && user.id === theme.user.id ){
      return "";
    }else {
      return "non-display";
    }
  };

  let showHideNewTag = "non-display";

  return (

    <section className="actions-panel group">
      <h3>Actions</h3>
      <ul>
        <li className="action-item">
            { verifyUser() }
        </li>

        <li className="action-item">
          <Link to={`/create/${theme.id}`}>
            <img className="action-icon" src={window.edit}></img>
            <h4>Edit Copy</h4>
          </Link>
        </li>
      </ul>
      <h3>Info</h3>
      <ul>
        <li className="info-item"><h4 className="info-type">Created By:</h4><h4 className="info-content">{theme.user.name}</h4></li>
        <li className="info-item"><h4 className="info-type">Created At:&nbsp;</h4><h4 className="info-content">{theme.created_at.slice(0,10)}</h4></li>
        <li className="info-item box-below"><h4 className="info-type">Tags</h4>
          <ul id="tagbox">
            <form className={`new-tag-form ${userIsOwner()}`}
              onSubmit={addNewTag(newTag)}>
              <input
                className="new-tag"
                onChange={updateNewTag()}
                value={newTag}
                placeholder="Add a New Tag">
              </input>
              <input type="submit" className="non-display" value="submit"></input>
            </form>
          { tagItems() }
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default ActionsPanel;
