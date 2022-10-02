// -----JS CODE-----
var obj = script.getSceneObject();

var X = 1;
var Y = 1;
var Z = 60;

function generateRandom(range) {
  return Math.floor(Math.random() * range)-Math.floor(Math.random() * range);
    
}

function RandomRotate() {
  var newEnding =  quat.fromEulerAngles(generateRandom(X), generateRandom(Y), generateRandom(Z));
  global.tweenManager.setEndValue(obj, "RandomRotate", newEnding);
  global.tweenManager.startTween(obj, "RandomRotate", RandomRotate,RandomRotate);
    
}

RandomRotate();
