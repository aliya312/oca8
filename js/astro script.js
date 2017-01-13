var planets = [
    { planet: 'The Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'The Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];

// calculate weight on selected planet
function calculate(){
  
    var select = document.getElementById('planetaryChoice').selectedIndex;

    var weight=document.getElementById('weight').value;

    var yourWeight = parseInt(weight) * planets[select].gravity;

    var msg = "If you were on the " + planets[select].planet + ", you would weigh " + yourWeight + "! Wow!";
      document.getElementById("results").innerHTML=msg;
}

// populate the select using the array of planets

var select = document.getElementById('planetaryChoice');

for (var i = 0; i<planets.length; i++){

    var opt = document.createElement('option');
    opt.value = planets[i].gravity;
    opt.innerHTML = planets[i].planet;
    select.appendChild(opt);
}


$(#button).click(function(){
    $('#calculate').html("If you were on " + planets[select].planet + ", you would weigh " + yourWeight + "! Wow!";
      document.getElementById("results");

    });
});