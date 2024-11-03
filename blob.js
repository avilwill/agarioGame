function Blob(x, y, r){
this.pos = createVector(x, y);
this.r = r;

this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if( d < this.r + other.r ){
        sum = PI * this.r * this.r + PI * other.r * other.r;
        this.r = sqrt(sum / PI);
        // this.r += other.r*0.2;
        return true;
    } else {
        return false;
    }
}

//this is the mouse movement
this.update = function() {
    // Calculate the direction vector towards the mouse position
    var vel = createVector(mouseX - width / 2, mouseY - height / 2);
    
    // Set the magnitude based on the size of the blob
    // The larger the blob, the smaller the magnitude
    let speed = map(this.r, 10, 100, 2, 0.3); // Adjust these values as needed
    vel.setMag(speed); // Set the velocity based on blob's size
    
    // Update position
    this.pos.add(vel);
}

this.color = color(random(255), random(255), random(255)); // Random color for each blob


this.show = function() {
  fill(this.color);
  ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);

}
}
