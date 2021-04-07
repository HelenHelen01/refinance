//Delgetstei ajillah controller
var uiController = (function () {})();

//Sanhuutei ajillah controller

var financeController = (function () {})();

//Programmin holbogch controller

var appController = (function (uiCtrl, fnCtrl) {
  var ctrlAddItem = function () {
    console.log("Delgetsend ugugduluu avah heseg");
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);

/* 1. oruulah ugugdliig delgetsees olj avna.
    console.log("Delgetsees ugugduluu avah heseg");
    // 2. olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna
    // 3. olj avsan ugugdluudee web deere tohiroh hesegt n gargana
    // 4. Tusviig tootsoolno
    //5. Ettssiin uldegdel, tootsoog delgetsend gargana
  }
  document.querySelector(".add__btn").addEventListener("click", function () {
      
  });
  
  );
  document.addEventListener("keypress", function (event) {
    if (event.keyCode)
  });
})(uiController, financeController); */
