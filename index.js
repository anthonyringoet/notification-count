module.exports = Notifier;

function Notifier(count, el, left, right){
  if(!(this instanceof Notifier)){
    return new Notifier(count, left, right);
  }

  this.separatorLeft = left || '(';
  this.separatorRight = right || ')';
  this.count = count || 0;
  this.el = el || document.getElementsByTagName('title')[0];
}

Notifier.prototype.update = function() {
  var output = this.separatorLeft + this.count + this.separatorRight;
  var title = document.title;
  var left = title.indexOf(this.separatorLeft);
  var right = title.lastIndexOf(this.separatorRight);

  if(!this.count){
    document.title = document.title.substr(right + 2);
    return;
  }

  if(left == -1 && right == -1){
    document.title = output + ' ' + title;
  }
  else{
    var oldTitle = document.title.substr(right + 2);
    document.title = output + ' ' + oldTitle;
  }
}

Notifier.prototype.set = function(input){
  if(typeof input === 'undefined'){
    this.count = 1;
  }
  else{
    this.count = parseFloat(input);
  }

  this.update();
};

Notifier.prototype.default = function(input){
  this.count = 0;
  this.update();
}

Notifier.prototype.add = function(input){
  if(typeof input === 'undefined'){
    input = 1;
  }

  this.count += parseFloat(input);
  this.update();
}

Notifier.prototype.subtract = function(input){
  if(typeof input === 'undefined'){
    input = 1;
  }

  this.count -= parseFloat(input);

  if(this.count < 0){
    this.count = 0;
  }

  this.update();
}