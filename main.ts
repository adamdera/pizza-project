game.splash("Pizza Order")
let labour_cost = 0.75
let rent_on_shop_cost = 1
let pizza_length = game.askForNumber("Enter diameter of pizza\"")
game.splash("Getting your order ready", "Wait one second")
let constant = labour_cost + rent_on_shop_cost
let pizza_costconstand = pizza_length * 0.5
let totol_cost_without_hst = pizza_costconstand + constant
let total_costhst = totol_cost_without_hst * 1.13
let round = total_costhst * 100
let round_2 = Math.round(round)
let round_3 = round_2 / 100
game.splash("Total cost of Pizza is" + "$" + round_3 + "(HST included)")
let mySprite = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Player)
pause(2000)
game.reset()
