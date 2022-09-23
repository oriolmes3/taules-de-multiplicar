let número = game.askForNumber("Quina taula de multiplicar vols obtenir?")
let índex = 1
for (let index = 0; index < 9; index++) {
    game.splash("" + número + " x " + índex + " = " + índex * número)
    índex += 1
}
