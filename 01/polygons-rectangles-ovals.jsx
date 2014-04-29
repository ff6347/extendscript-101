  /**
    * Rectangles ovals polygons
    */
    var  main = function(){
    var pw = 150; // for better handling
    var ph = pw/3; // also

    // make a document
    var doc = app.documents.add({
        documentPreferences:{
            pageWidth:pw,
            pageHeight:ph
            }
        });

    // there is already a page
    var page = doc.pages[0];
    // some variables for calculating positions
    // of our objects
    var step = (pw/3);
    var gutter = 10;
    var y1 = gutter;
    var x1 = gutter;
    var y2 = (ph - gutter);
    var x2 = (step - gutter);

    // make a rectangle
    var rect = page.rectangles.add({geometricBounds:[y1,x1,y2,x2]});
    // move to the right
    x1 += step;
    x2 = x2 + step;
    // make an oval
    var oval = page.ovals.add({geometricBounds:[y1,x1,y2,x2]});
    // move again
    x1 += step;
    x2 = x2 + step;
    // make a polygon
    var poly = page.polygons.add({geometricBounds:[y1,x1,y2,x2]});
    // now we throw tem in an array
    var items = [rect,oval,poly];


     if($.os.charAt(0) == 'W'){
            alert("You are working on windows. It could be that the path notation used in this script won't work. If so copy the content of this panel into an new issue at 'https://github.com/fabiantheblind/extendscript-101'\n" +
                "Path for the script is: " + ((File($.fileName)).path)
             );
        }else{
            // nothing to do here move along
        }

    // get the path of the scriptfile
    // the files we are going to load get found via their relativ path
    // needs testing on windows
    var path = ((File($.fileName)).parent.path) + "/assets/images/";
    // load 3 images provided with the repo
    // /assets/images/feet.jpg
    // /assets/images/frog.jpg
    // /assets/images/sky.jpg
    var images = [path +"feet.jpg",path +"frog.jpg",path +"sky.jpg"];


    for(var i = 0; i < items.length;i++){
        thing = items[i]; // isolate it we dont know what it is
        thing.strokeWeight = 0; // set to no stroke
        try {
        thing.place(File(images[i])); // place one of the images
        }catch(e){
            alert("I could not find the images. could be that they are gone or they are at ");
        }
        thing.fit(FitOptions.CENTER_CONTENT); // fit it
        thing.fit(FitOptions.FILL_PROPORTIONALLY); // fit it
        // you can find out what kind of object
        // you have by checking like this
        if(thing instanceof Rectangle){
            alert("I'm an "+ thing.constructor.name +". at index " + i + "");
            thing.bottomLeftCornerOption = CornerOptions.ROUNDED_CORNER;
            }; // close if
        }; // close loop

    return 0;
    }; // close main function

    main();