# Battleships Game

Live link: [Battleships!!](https://niallantony.github.io/Battleships/)

## A simple battleships browser game, that can be played against a computer or another player.

Built using Javascript, this was an exercise in using Test Driven Development. The core mechanics of the game were designed and coded using entirely Test Driven Development, after which I created a graphical interface and other features, such as a menu for placing tokens, functionality for two-player games and simple computer AI.

Jest was used for testing.

Webpack was used to bundle the code.

The computer AI is a simple algorithm which I designed, which chooses a heading based on a previous hit, and follows that until it misses. If the heading is on the x-axis then it will continue to follow the x-axis and vice-versa for the y-axis. There is probably a better way to do this, but I've found that it works and the computer seems to play the game well enough.

### To-Do list

- Further improvements to the graphical interface - including images for the ships, a shinier interface and possibly trying to look at 3D with Three.js or other libraries.
