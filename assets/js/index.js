let root = document.getElementById("root");

var player = document.createElement("div");
player.className = "player";

// root.appendChild(player);
speedX = 1;
speedY = 1
var x = 0;
var y = 0;

let level =`
  #####################
  #                   #
  #     o o           #
  #      =    =       #
  #  =                #
  #     ###           #
  #         | ##      #
  # o                 #
  #     ##      | ##  #
  # @                ##
  #####    ##  ####  ##
  #####++++##++####++##
  #####################`;

var rows = level.trim().split("\n").map((v,i) => {
  return [...v.trim()];
});

rows.forEach(row => {
  row.forEach((v,i) => {
    if(v === "#"){
      var wall = document.createElement("div");
      wall.className = "block wall "+ (i + 1) ;
      root.appendChild(wall);
    } else if(v === "o"){
      var space = document.createElement("div");
      space.className = "block blank-space " + (i + 1) ;
      
      var coin = document.createElement("div");
      // var top = space.offsetTop;
      // var left = space.offsetLeft;
      
      // coin.style.top = top + "px";
      // coin.style.left = left + "px";
      
      coin.className = "block coin " + (i + 1) ;
      space.appendChild(coin);
      root.appendChild(space);
    } else if(v === "="){
      var space = document.createElement("div");
      space.className = "block blank-space " + (i + 1) ;
      
      var horizontalLava = document.createElement("div");
      
      // var top = space.offsetTop;
      // var left = space.offsetLeft;
      
      // horizontalLava.style.top = top + "px";
      // horizontalLava.style.left = left + "px";
      
      horizontalLava.className = "block horizontal-lava " + (i + 1) ;
      space.appendChild(horizontalLava);
      root.appendChild(space);
    } else if(v === "|"){
      var space = document.createElement("div");
      space.className = "block blank-space " + (i + 1) ;
      
      
      var verticalLava = document.createElement("div");

      // var top = space.offsetTop;
      // var left = space.offsetLeft;

      // verticalLava.style.top = top + "px";
      // verticalLava.style.left = left + "px";
      verticalLava.className = "block vertical-lava " + (i + 1) ;
      space.appendChild(verticalLava);
      root.appendChild(space);
      // root.appendChild(verticalLava);
    } else if(v === " "){
      var space = document.createElement("div");
      space.className = "block blank-space " + (i + 1) ;
      root.appendChild(space);
    } else if(v === "+"){
      var staticLava = document.createElement("div");
      staticLava.className = "block static-lava " + (i + 1) ;
      root.appendChild(staticLava);
    } else if(v === "@") {
      var space = document.createElement("div");
      space.className = "block blank-space " + (i + 1) ;
      
      // var player = document.createElement("div");
      
      // var top = space.offsetTop;
      // var left = space.offsetLeft;
      
      // player.style.top = top + "px";
      // player.style.left = left + "px";
      // player.className = "player";
      
      space.appendChild(player);
      root.appendChild(space);
    } else if(!v){
      console.log("null...");
    } 
  })
});


document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight"){
    x += 1;
    // y += 1;
    console.dir(player);
    console.log(x ,y , "arrorw-right...");
    // player.classList.add("move-forward");
    // var a = player.style.left.includes("px") ? player.style.left.slice(0, player.length-2) : player.style.left;
    console.log(player, "player.style.left...");
    // player.style.left = (a + 10) + "px";
    player.offsetLeft += x + "px";
    // player.style.left = (player.style.left + x) + "px";

    // player.style.marginLeft = player.style.marginLeft + x + "px";

  } else if(e.key === "ArrowLeft"){
    x -= 1;
    // y -= 1;
    console.dir(player)
    console.log(x, "arrorw-left...");
    // player.classList.add("move-backward");
    player.style.left = player.style.left - 10;
  } else if(e.key === "ArrowDown"){
    console.dir(player);
    console.log("arrorw-down...");
    // player.classList.add("duck-down");
  } else if(e.key === "ArrowUp"){
    jump(player, "jump");
    // y += 1;
    console.dir(player);
    console.log(y, "arrorw-up");
    player.classList.add("jump");
    player.style.bottom = "20px";    
  } else {
    return null;
  }
});

function jump(elm,attr){
  elm.classList.add(attr);
  setTimeout(() => {
    elm.classList.remove(attr);
  }, 100);
}

document.addEventListener("keyup", (e) => {
  if(e.key === "ArrowRight"){
    console.log("stop animation right...");
  } if(e.key === "ArrowLeft"){
    // player.classList.add("move-backward");    
    console.log("stop animation left...");
  } if(e.key === "ArrowDown"){
    // player.classList.add("duck-down");
    console.log("stop animation down...");
  } if(e.key === "ArrowUp"){
    player.classList.remove("jump");
    console.log("stop animation up...");
  } else {
    return null;
  }
})


// navigator.userAgent.includes("Android"){

// }







