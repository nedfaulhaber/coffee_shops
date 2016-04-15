// Business Logic

function reset() {
  // method to clear user inputs
  $("#ambience").val("");
  $("input:radio[name=convenient]").attr("checked", false);
  $("#culinary").val("");
  $("input:radio[name=consistent]").attr("checked", false);
  $("#wait").val("");
  $("input:radio[name=wifi]").attr("checked", false);
  $("#price").val("");
  $("input:radio[name=flavor]").attr("checked", false);
  $("#location").val("");
};

function Coffee (name, ambi, conv, culi, cons, wait, wifi, pric, flav, loca, count) {
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
};

// Coffee.prototype.select = function() {
//   return this.count += 1
// };

// function Full (firstAll, secondAll, firstNE, secondNE, firstNW, secondNW, firstN, secondN, firstSE, secondSE, firstSW, secondSW) {
//   // Object
//   this.firstAll = firstAll;
//   this.secondAll = secondAll;
//   this.firstNE = firstNE;
//   this.secondNE = secondNE;
//   this.firstNW = firstNW;
//   this.secondNW = secondNW;
//   this.firstN = firstN;
//   this.secondN = secondN;
//   this.firstSE = firstSE;
//   this.secondSE = secondSE;
//   this.firstSW = firstSW;
//   this.secondSW = secondSW;
//   this.compile = [];
// }

// User Interface Logic
$(document).ready(function(){

  var audio = new Audio("audio/background.mp3");
  audio.play();

  // var ambiance;
  // var convenient;
  // var culinary;
  // var consistent;
  // var wait;
  // var wifi;
  // var price;
  // var flavor;
  // var location;
  // var output;

  var starb1 = new Coffee("Starbucks", "1", "1", "2", "1", "2", "1", "2", "1", "NE", 0);
  var starb2 = new Coffee("Starbucks", "1", "1", "2", "1", "2", "1", "2", "1", "SE", 0);
  var starb3 = new Coffee("Starbucks", "1", "1", "2", "1", "2", "1", "2", "1", "NW", 0);
  var starb4 = new Coffee("Starbucks", "1", "1", "2", "1", "2", "1", "2", "1", "SW", 0);
  var starb5 = new Coffee("Starbucks", "1", "1", "2", "1", "2", "1", "2", "1", "N", 0);
  var dutch1 = new Coffee("DutchBros", "2", "1", "3", "1", "1", "2", "1", "1", "NE", 0);
  var dutch2 = new Coffee("DutchBros", "2", "1", "3", "1", "1", "2", "1", "1", "SE", 0);
  var dutch3 = new Coffee("DutchBros", "2", "1", "3", "1", "1", "2", "1", "1", "NW", 0);
  var dutch4 = new Coffee("DutchBros", "2", "1", "3", "1", "1", "2", "1", "1", "SW", 0);
  var dutch5 = new Coffee("DutchBros", "2", "1", "3", "1", "1", "2", "1", "1", "N", 0);
  var woodl = new Coffee("Woodlawn", "3", "1", "2", "2", "3", "1", "3", "2", "NE", 0);
  var baris = new Coffee("Barista", "4", "2", "1", "2", "4", "1", "4", "2", "NE", 0);
  var drago = new Coffee("DragonFly", "3", "1", "2", "2", "3", "1", "3", "2", "NW", 0);
  var sterl = new Coffee("Sterling", "4", "2", "1", "2", "4", "1", "4", "2", "NW", 0);
  var annab = new Coffee("AnnaBannanas", "3", "1", "2", "2", "3", "1", "3", "2", "N", 0);
  var cathe = new Coffee("Cathedral", "4", "2", "1", "2", "4", "1", "4", "2", "N", 0);
  var fresh = new Coffee("FreshPot", "3", "1", "2", "2", "3", "1", "3", "2", "SE", 0);
  var eithe = new Coffee("EitherOr", "4", "2", "1", "2", "4", "1", "4", "2", "SE", 0);
  var fehre = new Coffee("FehrenbacherHof", "3", "1", "2", "2", "3", "1", "3", "2", "SW", 0);
  var heart = new Coffee("HeartRoasters", "4", "2", "1", "2", "4", "1", "4", "2", "SW", 0);

  $("form#collect").submit(function(event){
    event.preventDefault();
    //
    // set(); // collects user inputs. import() represent string numbers
    //

    var audio2 = new Audio("audio/milk-frothing.mp3");
    audio2.play();

    var importAmbi = $("#ambience").val();
    var importConv = $("input:radio[name=convenient]:checked").val();
    var importCuli = $("#culinary").val();
    var importCons = $("input:radio[name=consistent]:checked").val();
    var importWait = $("#wait").val();
    var importWifi = $("input:radio[name=wifi]:checked").val();
    var importPric = $("#price").val();
    var importFlav = $("input:radio[name=flavor]:checked").val();
    var importLoca = $("#location").val();
    var count = 0;

    // coffee objects
    var userCoffee = new Coffee(name, importAmbi, importConv, importCuli, importCons, importWait, importWifi, importPric, importFlav, importLoca, count);
    // var newFulls = new Full (starb,dutch,woodl,baris,drago,sterl,annab,cathe,fresh,eithe,fehre,heart);
    var stores = [starb1, starb2, starb3, starb4, starb5, dutch1, dutch2, dutch3, dutch4, dutch5, woodl, baris, drago, sterl, annab, cathe, fresh, eithe, fehre, heart];

    // these 9 loops check for matching between user properties and coffeshop properties and increments the "count" property for the coffeeshop that macthes

    stores.forEach(function(store){
      if (store.ambi === userCoffee.ambi){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.conv === userCoffee.conv){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.culi === userCoffee.culi){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.cons === userCoffee.cons){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.wait === userCoffee.wait){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.wifi === userCoffee.wifi){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.pric === userCoffee.pric){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.flav === userCoffee.flav){
        store.count = store.count + 1;
      };
    });
    stores.forEach(function(store){
      if (store.loca === userCoffee.loca){
        store.count = store.count + 1;
      };
    });

    var outputStores = [];
    var highestCount = 0;

    stores.forEach(function(store) {
      if (store.loca === userCoffee.loca){
        if (store.count >= highestCount) {
        highestCount = store.count;
        }
      }
    });

    stores.forEach(function(store) {
      if (store.count === highestCount && store.loca === userCoffee.loca) {
        outputStores.push(store.name);
      }
    });

    $("#collect").slideUp("slow");
    $("#goldilocks").fadeOut();
    $("#output").fadeIn("slow");

    // if (outputStores[0] === "Starbucks"){
    //   $("#starbucksNE").show()
    // }

    stores.forEach(function(store) {
      for (var index = 0; index <= outputStores.length; index +=1) {
        if (store.name === outputStores[index] && store.loca === importLoca) {
          $("#" + store.name + importLoca).show();
        }
        if (store.name === outputStores[index] && store.loca === importLoca) {
          $("#" + store.name).show();
        }
      }
    });

    reset(); // clears user inputs

  });
});

// these 9 loops check for matching between user properties and coffeshop properties and increments the "count" property for the coffeeshop that macthes
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.ambi = userCoffee.ambi){
    //     ambiance = newFull.name;
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.conv === userCoffee.conv){
    //     convenient = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.culi === userCoffee.culi){
    //     culinary = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.cons === userCoffee.cons){
    //     consistent = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.wait === userCoffee.wait){
    //     wait = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.wifi === userCoffee.wifi){
    //     wifi = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.pric === userCoffee.pric){
    //     price = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.flav === userCoffee.flav){
    //     flavor = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.loca === userCoffee.loca){
    //     location = newFull.name
    //     newFull.count = newFull.count.select()
    //   };
    // });

    // loop to compare counts to see which coffee shop wins
    // newFulls.compile.forEach(function(newFull){
    //   if (newFull.count >= 0){
    //   output = newFull.name
    //   };
    // });


    // display section  ---------------
    // if () {
    //   $("#output").show();
    //   $("#starbucks").show();
    // }
    // else if () {
    //   $("#output").show();
    //   $("#dutch-bros").show();
    // }
