var blob;
var zoom = 1;
var blobs = [];

function setup() {
    createCanvas(600, 600);
    //this is the player blob
    blob = new Blob(0, 0, 32);

    //this is all the random blobs
    for (var i = 0; i < 500; i++) {
        var x = random(-width, width);
        var y = random(-height, height);

        blobs[i] = new Blob(x, y, 8);
    };
}
function draw() {
     // Set a background color if desired
     background(260); // Light gray or any preferred background color
    
     // Draw grid lines for the "graph paper" effect
     stroke(200); // Light gray color for the grid lines
     strokeWeight(1); // Thin line for grid
 
     let gridSize = 15; // spacing of the grid lines
 
     // Vertical lines
     for (let x = -width * 2; x <= width * 2; x += gridSize) {
         line(x, -height * 2, x, height * 2);
     }
 
     // Horizontal lines
     for (let y = -height * 2; y <= height * 2; y += gridSize) {
         line(-width * 2, y, width * 2, y);
     }
 
    //this makes the blob stay in the center and moves the screen
    translate(width/2, height/2);
    //shrink screen
    var newZoom = 64 / blob.r;
    zoom = lerp(zoom, newZoom, 0.1);
    scale(zoom);
    //this is the movement of the player blob
    translate(-blob.pos.x, -blob.pos.y);

    blob.show();
    blob.update();
    for (var i = blobs.length-1; i >=0; i--) {
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
            blobs.push(new Blob(random(-width, width*2), random(-height, height*2), 8));
        }

        blobs[i].show();
    }
}
