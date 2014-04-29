    /**
     *  Lets play with colors
     *  to use colors you NEED to create a swatch!
     */

    var main = function() {

      // make a document
      var pw = 300;
      var ph = 30;
      var doc = app.documents.add({
        documentPreferences: {
          pageHeight: ph,
          pageWidth: pw
        }
      });

      // inspect the existing swatches
      var random_num = parseInt(Math.random() * doc.swatches.length);
      var random_swatch = doc.swatches[random_num];
      alert("the swatch with the number " +
        random_num + " is always\n[" + random_swatch.name + "]");


      // now lets create some colors
      var colors = [];
      var num_of_colors = 42 * 5;
      // lets do it randomly
      for (var j = 0; j < num_of_colors; j++) {
        var r = Math.random() * 10;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        // important a color needs a unique name
        //
        var color = doc.colors.add();
        color.properties = {
          name: "color " + j,
          model: ColorModel.PROCESS,
          space: ColorSpace.RGB,
          colorValue: [r, g, b]
        };
        colors.push(color);
      } // end of loop


      // now we apply these colors

      var pg = doc.pages.item(0); // get the page
      var step = pw / colors.length; // calc the number of steps we have. one by color
      // coordiantes
      var x1 = 0;
      var y1 = 0;
      var x2 = step;
      var y2 = ph;
      // loop the colors
      for (var i = 0; i < colors.length; i++) {
        // add a rectangle
        var rect = pg.rectangles.add({
          geometricBounds: [y1, x1, y2, x2]
        });
        rect.fillColor = colors[i];
        rect.strokeWeight = 0;
        x1 = x2;
        x2 = x2 + step;
      } // end of loop

    }; // end of function main

    main();