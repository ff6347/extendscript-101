var main = function() {
  var data = {
    "pw": 100,
    "ph": 100,
    "anchors": [
      [0, 50],
      [10, 60],
      [20, 40],
      [30, 60],
      [40, 40],
      [50, 60],
      [60, 40],
      [70, 60],
      [80, 40],
      [90, 60],
      [100, 50]
    ]
  };

  // we need a doc
  // use pw and ph from data
  var doc = app.documents.add({
    documentPreferences: {
      pageHeight: data.ph,
      pageWidth: data.pw
    }
  });

  // the page is already there
  var page = doc.pages.item(0); // <-- this could als be doc.pages[0]

  var gl = page.graphicLines.add(); // create a graphicLine

  // loop thru the data.anchors
  for (var i = 0; i < data.anchors.length; i++) {
    var point = gl.paths[0].pathPoints[i];
    /**
     * a graphicLine always has 2 pathpoints
     * so we need to add points only from the third
     * anchor from the data object
     */

    if (i < 2) {
      // the points are already there but we need to change their location
      $.writeln("Old location: " + point.anchor);
      point.anchor = data.anchors[i];
      $.writeln("New location: " + point.anchor);
    } else {
      point = gl.paths[0].pathPoints.add();
      point.anchor = data.anchors[i];
    }

    if ((i != data.anchors.length - 1) && i != 0) {
        point.rightDirection = data.anchors[i - 1];
    }
    point.leftDirection = data.anchors[i];
  }
  // lets add some styling to that line
  gl.endJoin = EndJoin.ROUND_END_JOIN;
  gl.endCap = EndCap.ROUND_END_CAP;
  gl.leftLineEnd = ArrowHead.CURVED_ARROW_HEAD;
  for (var s = 0; s < doc.strokeStyles.length; s++) {
    // write the stroke styles to the console
    $.writeln(doc.strokeStyles[s].name);
  }
  // select a random strokestyle
  gl.strokeType = doc.strokeStyles[parseInt(Math.random() * (doc.strokeStyles.length - 1))];
  try {
    // the next line could produce an error if the strokestyle does not support to be dashed
    // so we need to catch that error
    gl.strokeDashAndGap = [5, 10];
  } catch (e) {
    alert("This random strokeStyle does not support to be dashed. Maybe you are lucky the next time");
  }
}

main();