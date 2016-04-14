// Business Logic

function reset() {
  // method to clear user inputs
  $("#ambiance").val("");
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

  var starb = new Coffee("Starbucks", "1", "1", "2", "1", "2", "1", "2", "1", "6", 0);
  var dutch = new Coffee("Dutch Bros.", "2", "1", "3", "1", "1", "2", "1", "1", "6", 0);
  var woodl = new Coffee("Woodlawn Coffee & Pastry", "3", "1", "2", "2", "3", "1", "3", "2", "2", 0);
  var baris = new Coffee("Barista", "4", "2", "1", "2", "4", "1", "4", "2", "2", 0);
  var drago = new Coffee("DragonFly Coffee House", "3", "1", "2", "2", "3", "1", "3", "2", "1", 0);
  var sterl = new Coffee("Sterling Coffee Roasters", "4", "2", "1", "2", "4", "1", "4", "2", "1", 0);
  var annab = new Coffee("Anna Bannanas", "3", "1", "2", "2", "3", "1", "3", "2", "4", 0);
  var cathe = new Coffee("Cathedral Coffee", "4", "2", "1", "2", "4", "1", "4", "2", "4", 0);
  var fresh = new Coffee("The Fresh Pot", "3", "1", "2", "2", "3", "1", "3", "2", "4", 0);
  var eithe = new Coffee("Either/Or", "4", "2", "1", "2", "4", "1", "4", "2", "4", 0);
  var fehre = new Coffee("Fehrenbacher Hof", "3", "1", "2", "2", "3", "1", "3", "2", "3", 0);
  var heart = new Coffee("Heart Roasters", "4", "2", "1", "2", "4", "1", "4", "2", "3", 0);

  $("form#collect").submit(function(event){
    event.preventDefault();
    //
    // set(); // collects user inputs. import() represent string numbers
    //
    var importAmbi = $("#ambiance").val();
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
    var stores = [starb, dutch, woodl, baris, drago, sterl, annab, cathe, fresh, eithe, fehre, heart];

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

// [starb, dutch, woodl, baris, drago, sterl, annab, cathe, fresh, eithe, fehre, heart];

console.log(starb.count);
console.log(dutch.count);
console.log(woodl.count);
console.log(baris.count);
console.log(drago.count);
console.log(sterl.count);
console.log(annab.count);
console.log(cathe.count);
console.log(fresh.count);
console.log(eithe.count);
console.log(fehre.count);
console.log(heart.count);

  var outputStores = [];
  var highestCount = 0;
console.log(highestCount);
  stores.forEach(function(store) {
    if (store.loca === userCoffee.loca){
      if (store.count >= highestCount) {
        highestCount = store.count;
      }
    }
  });
console.log(highestCount);

  stores.forEach(function(store) {
    if (store.count === highestCount && store.loca === userCoffee.loca) {
      outputStores.push(store.name);
    }
    if (store.count === highestCount && store.loca === "6") {
      outputStores.push(store.name);
    }
  });
console.log(outputStores);


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


    reset(); // clears user inputs

  });
});
