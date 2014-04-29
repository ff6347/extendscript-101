var main = function() {
  /**
   *  Lets work with text
   *  This is what we came here for? didn't we?
   *  A textframe holds
   *  paragraphs
   *  lines
   *  words
   *  characters
   *
   *  also
   *
   *  a line has characters
   *  a word has characters
   *  a line has words
   *
   *  you see yo can acces them in many diffrent ways
   *  like this:
   */

  // create doc, get page, add textframe
  var doc = app.documents.add({
    documentPreferences: {
      pageHeight: 150,
      pageWidth: 150
    }
  });

  var page = doc.pages[0]; // get first page
  var docpref = doc.documentPreferences;
  var pw = docpref.pageWidth;
  var ph = docpref.pageHeight;
  var tf = page.textFrames.add({
    geometricBounds: [12.7, 12.7, ph - 12.7, pw - 12.7]
  });

  // add some placeholder text
  tf.contents = TextFrameContents.PLACEHOLDER_TEXT;
  for(var p = 0; p < tf.paragraphs.length;p++){
    // random font for each paragraph
    // fonts can be a bit tricky see
    // https://github.com/fabiantheblind/extendscript/wiki/Fonts
    tf.paragraphs[p].appliedFont = app.fonts[parseInt(Math.random()* (app.fonts.length - 1))];
  }

  // loop thru the lines
  for (var i = 0; i < tf.lines.length; i++) {
    tf.lines[i].fillTint = (100 - ((100 / tf.lines.length) * i));
    // if i is 0 change the characters in it
    if (i === 0) {
      for (var j = 0; j < tf.lines[i].characters.length; j++) {
        tf.lines[i].characters[j].pointSize = 5 + (0.5 * j);
      }
    }
  }
  // select a random word and change its color
  tf.words[parseInt(Math.random()* (tf.words.length - 1))].fillColor = doc.swatches[4];
  return 'Done';
};

main();