// Business Logic
function set(){
  // method to collect user inputs
  var importAmbi = $("form#collect").find("input#user-ambi").val();
  var importConv = $("form#collect").find("input#user-conv").val();
  var importCuli = $("form#collect").find("input#user-culi").val();
  var importCons = $("form#collect").find("input#user-cons").val();
  var importWait = $("form#collect").find("input#user-wait").val();
  var importWifi = $("form#collect").find("input#user-wifi").val();
  var importPric = $("form#collect").find("input#user-pric").val();
  var importFlav = $("form#collect").find("input#user-flav").val();
  var importLoca = $("form#collect").find("input#user-loca").val();
}
function reset(){
  // method to clear user inputs
  $("input#user-ambi").val("");
  $("input#user-conv").val("");
  $("input#user-culi").val("");
  $("input#user-cons").val("");
  $("input#user-wait").val("");
  $("input#user-wifi").val("");
  $("nput#user-pric").val("");
  $("input#user-flav").val("");
  $("input#user-loca").val("");
}
function Coffee (name,ambi,conv,culi,cons,wait,wifi,pric,flav,loca,count){
  // Object
  this.name = name;
  this.ambi = ambi;
  this.conv = conv;
  this.culi = culi;
  this.cons = cons;
  this.wait = wait;
  this.wifi = wifi;
  this.pric = pric;
  this.flav = flav;
  this.loca = loca;
  this.count = count;
  this.compile = [];
}
Coffee.prototype.select = function(){
  return this.count += 1
};
function Full (firstAll,secondAll,firstNE,secondNE,firstNW,secondNW,firstN,secondN,firstSE,secondSE,firstSW,secondSW){
  // Object
  this.firstAll = firstAll;
  this.secondAll = secondAll;
  this.firstNE = firstNE;
  this.secondNE = secondNE;
  this.firstNW = firstNW;
  this.secondNW = secondNW;
  this.firstN = firstN;
  this.secondN = secondN;
  this.firstSE = firstSE;
  this.secondSE = secondSE;
  this.firstSW = firstSW;
  this.secondSW = secondSW;
  this.compile = [];
}

// User Interface Logic
$(document).ready(function(){
  var ambiance;
  var convenience;
  var culinary;
  var consistency;
  var wait-time;
  var wi-fi;
  var price;
  var flavor;
  var location;
  var output;

  var starb = new Coffee("Starbucks","1","1","2","1","2","1","2","1","6",0);
  var dutch = new Coffee("Dutch Bros.","2","1","3","1","1","2","1","1","6");
  var woodl = new Coffee("Woodlawn Coffee & Pastry","3","1","2","2","3","1","3","2","2",0);
  var baris = new Coffee("Barista","4","2","1","2","4","1","4","2","2",0);
  var drago = new Coffee("DragonFly Coffee House","3","1","2","2","3","1","3","2","2",0);
  var sterl = new Coffee("Sterling Coffee Roasters","4","2","1","2","4","1","4","2","2",0);
  var annab = new Coffee("Anna Bannanas","3","1","2","2","3","1","3","2","2",0);
  var cathe = new Coffee("Cathedral Coffee","4","2","1","2","4","1","4","2","2",0);
  var fresh = new Coffee("The Fresh Pot","3","1","2","2","3","1","3","2","2",0);
  var eithe = new Coffee("Either/Or","4","2","1","2","4","1","4","2","2",0);
  var fehre = new Coffee("Fehrenbacher Hof","3","1","2","2","3","1","3","2","2",0);
  var heart = new Coffee("Heart Roasters","4","2","1","2","4","1","4","2","2",0);

  $(form#collect).submit(function(event){

    event.preventDefault();

    set(); // collects user inputs. import() represent string numbers

    // coffee objects
    var userCoffee = new Coffee(name,importAmbi,importConv,importCuli,importCons,importWait,importWifi,importPric,importFlav,importLoca,count);
    var newFulls = new Full (starb,dutch,woodl,baris,drago,sterl,annab,cathe,fresh,eithe,fehre,heart);

    // these 9 loops check for matching between user properties and coffeshop properties and increments the "count" property for the coffeeshop that macthes
    newFulls.compile.forEach(function(newFull){
      if (newFull.ambi = userCoffee.ambi){
        (ambiance = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.conv = userCoffee.conv){
        (convenience = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.culi = userCoffee.culi){
        (culinary = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.cons = userCoffee.cons){
        (consistency = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.wait = userCoffee.wait){
        (wait-time = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.wifi = userCoffee.wifi){
        (wi-fi = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.pric = userCoffee.pric){
        (price = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.flav = userCoffee.flav){
        (flavored = newFull.name
        newFull.count = newFull.count.select())
      };
    });
    newFulls.compile.forEach(function(newFull){
      if (newFull.loca = userCoffee.loca){
        (location = newFull.name
        newFull.count = newFull.count.select())
      };
    });

    // loop to compare counts to see which coffee shop wins
    newFulls.compile.forEach(function(newFull){
      if (newFull.count >= 0){
      output = newFull.name
      };
    });

    // display

    reset(); // clears user inputs

  });
});
