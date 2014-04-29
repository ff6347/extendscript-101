/**
 *
 * This script needs:
 * - a document
 * - some objects on the first page
 * - some objects in the selection
 *
 * It shows the usage of the selection and groups
 * all items in the selection get added to the group
 *
 */
var main = function(){

  var doc, page;
  if(app.documents.length < 1){
    alert("You need a document");
    return "no doc";
  }else{
    // houston we have a document
    doc = app.activeDocument;
    // now get the activePage
    page = app.activeDocument.layoutWindows[0].activePage;

    if(doc.selection.length < 2){
    // if there are not enough items in the selection abort
      alert("You need to select at least 2 page items");
      return "not enough selection";
    }else{
      // got enough items now add them to an array
      var grp = [];
      for(var i = 0; i < doc.selection.length;i++){
        grp.push(doc.selection[i]);
      }
      // this is simple to create a group
      // you need to add an array of items to the groups of the page
      page.groups.add(grp);
    }
  }
return "done";
};

main();