'use babel';

module.exports = {

  activate() {

    this.subscription = inkdrop.commands.add(document.body, {
      'up': () => {
        const editor_is_active = inkdrop.isEditorActive();
        if (editor_is_active){
          const activeEditor = inkdrop.getActiveEditor();
          var cur = activeEditor.cm.getCursor();
          if(cur.line==0){  // the cursor is at the top line of textbody
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
        const editor_is_active = inkdrop.isEditorActive();
        if (editor_is_active){
          const activeEditor = inkdrop.getActiveEditor();
          var cur = activeEditor.cm.getCursor();
//          console.log(cur);
          if (cur.line>0){
            activeEditor.cm.setCursor(0,cur.ch);
//            cur = activeEditor.cm.getCursor();
//            console.log(cur);
          }
        }

      }
    })

  },

  deactivate() {
    this.subscription.dispose();
  }

};

