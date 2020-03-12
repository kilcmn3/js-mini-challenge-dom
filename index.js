/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)

const divContainer = document.getElementsByClassName("player-container")[0];

PLAYERS.forEach(function(player){
    const divPlayer = document.createElement("div")
    const h3Tag = document.createElement("h3");
    const img = document.createElement("img");

    divPlayer.class = "player"
    divPlayer.dataset.number = `${player.number}`;

    divPlayer.innerHTML = `
    <h3>
    ${player.name} (<em>${player.nickname}</em>)
    </h3>
    <img src=${player.photo} alt=${player.name}>`


    divContainer.append(divPlayer);
});




/***** Deliverable 4 *****/

//byebye Man.city!
const deletePlayer = divContainer.querySelector(`div[data-number="7"]`).remove()