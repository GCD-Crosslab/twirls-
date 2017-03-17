function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 

  // Initial position in the centre of the screen
  x = width / 2;
  y = height / 2;

  // dx and dy are the small change in position each frame
  dx = random( -1, 1 );
  dy = random( -1, 1 );
  // background(255,255,255); 
}

function draw() {

  // Blend the old frames into the background
  blendMode( BLEND );
  // fill(frameCount - 255 % 255,80,80, 10 );
  // rect( 6, 6, width, height ); // black
  rad = radians( frameCount );

  // Calculate new position
  x += dx;
  y += dy;

  var max = 1,
    min = 0.5,
    bx = x + 100 * sin( rad ),
    by = y + 100 * cos( rad );
    radius = 100 * sin( rad * 0.1 );
    handX = bx + radius * sin( rad * 3 );
    handY = by + radius * cos( rad * 3 );

  // When the shape hits the edge of the window, it reverses its direction and
  // changes velocity
  if ( x > width - 100 || x < 100 ) {

    dx = dx > 0 ? -random( min, max ) : random( min, max );
  }

  if ( y > height-100 || y < 100 ) {

    dy = dy > 0 ? -random( min, max ) : random( min, max );
  }

  fill(160);
  colorMode(HSB);
  stroke(frameCount % 255, 80, 80);
  line( bx, by, handX, handY );
  rect( handX, handY, 2, 2 );
}
