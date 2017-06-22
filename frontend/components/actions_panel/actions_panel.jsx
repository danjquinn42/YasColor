import React from 'react';

class ActionsPanel extends React.Component {

  render(){
    return (
      <section className="actions-panel group">
        <h3>Actions</h3>
        <ul>
          <li className="action-item">

          </li>
        </ul>
      </section>
    )
  }

}

export default ActionsPanel;


// editSaveIcon() {
//   if (this.state.justSaved) {
//     return (
//       <img className="pencil check"
//          src={window.check}>
//       </img>
//     );
//   } else {
//     return (
//       <img className="pencil"
//          src={window.pencil}>
//       </img>
//     );
//   }
// }
// addNewTag(newTag) {
//   return (event) => {
//     newTag = { title: newTag };
//     const newTheme = merge( {}, this.state.theme );
//     newTheme.tags.push(newTag);
//     this.props.updateTheme(newTheme);
//     this.setState({ newTag: "" });
//   };
// }

// deleteTag(tag) {
//   const that = this;
//   return (event) => {
//     const newTheme = merge( {}, that.state.theme );
//     const tagIndex = newTheme.tags.findIndex( (t) => {
//       	return t.title === tag.title;
//       });
//     newTheme.tags.splice(tagIndex, 1);
//     that.props.updateTheme(newTheme);
//   };
// }

// updateNewTag() {
//   return (event) => {
//     this.setState({ newTag: event.target.value });
//   };
// }
