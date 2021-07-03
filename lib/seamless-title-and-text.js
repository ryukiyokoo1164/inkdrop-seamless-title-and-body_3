'use babel';

module.exports = {

  activate() {

    this.subscription = inkdrop.commands.add(document.body, {
      'up': () => {
        const editor_is_active = inkdrop.isEditorActive();
        if (editor_is_active){
          const activeEditor = inkdrop.getActiveEditor();
          const currentLine = activeEditor.cm.getCursor().line;
          if(currentLine==0){  // the cursor is at the top line of textbody
            inkdrop.commands.dispatch(
              document.body, "editor:title:focus"
            )
          }else{
            inkdrop.commands.dispatch(
              activeEditor.wrapper.wrapper, "editor:go-line-up"
            )
          }
        }
      },

      'down': () => {
        inkdrop.commands.dispatch(
          document.body, "editor:focus"
        )

      }
    })

  },

  deactivate() {
    this.subscription.dispose();
  }

};

