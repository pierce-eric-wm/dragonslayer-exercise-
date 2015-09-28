/**
 * Created by session1 on 9/28/15.
 */
/**
 * Created by session1 on 9/28/15.
 */
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while (slaying) {
    if (youHit) {
        console.log("You hit the Dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            alert ("You Win! You slew the Dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        alert("The Dragon burns you to a crisp. No one can identify you. You LOSE!");
        slaying = false;
    }
}
/* this is going to play the game again (refresh or re-do i don't know) then for the else if it will make the tab close
 (still need the code to put it in)
 */
var again = prompt("Do you want to play again? (Y/N)")
if (again=== "y") {
    var slaying = true;
    var youHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var totalDamage = 0;
    while (slaying) {
        if (youHit) {
            console.log("You hit the Dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;

            if (totalDamage >= 4) {
                alert("You Win! You slew the Dragon!");
                slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
            }
        }
        else {
            alert("The Dragon burns you to a crisp. No one can identify you. You LOSE!");
            slaying = false;
        }
    }
}
else if (again === "n") {
    alert("GAME OVER")
}
