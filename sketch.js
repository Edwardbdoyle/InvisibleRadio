let mic, fft;

function setup() {
  createCanvas(800, 400);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);

  // Analyze the frequency spectrum
  let spectrum = fft.analyze();

  // Set up parameters for the matrix visual
  let rows = 10;
  let cols = 20;
  let rectSize = width / cols;

  // Generate matrix-inspired visual using different frequency bands
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Map frequency band amplitudes to rectangle size
      let index = i * cols + j;
      let size = map(spectrum[index], 0, 255, 10, rectSize);

      // Calculate position
      let x = j * rectSize;
      let y = i * rectSize;

      // Draw rectangles
      fill(255);
      noStroke();
      rect(x, y, size, size);
    }
  }
}
