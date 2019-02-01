import * as PIXI from 'pixi.js';

/**
 * check other examples at https://pixijs.io/examples
 * feel free to [Ctrl+A + Del] this file to write your own
 */

const app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// you can import assets from 'src/assets'
const bunny = PIXI.Sprite.fromImage(
  require('src/assets/basics/bunny.png'),
);

bunny.anchor.set(0.5);

bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

app.ticker.add((delta) => {
  bunny.rotation += 0.1 * delta;
});
