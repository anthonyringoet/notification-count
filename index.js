module.exports = Notifier;

function Notifier(count, el, left, right){
  if(!(this instanceof Notifier)){
    return new Notifier(count, left, right);
  }

  this.separatorLeft = left || '(';
  this.separatorRight = right || ')';
  this.initial = count || 0;
  this.count = count || 0;
  this.el = el || document.getElementsByTagName('title')[0];

  if(this.initial){
    this.update();
  }
}

Notifier.prototype.update = function() {
  var output = this.separatorLeft + this.count + this.separatorRight;
  var left = this.el.textContent.indexOf(this.separatorLeft);
  var right = this.el.textContent.lastIndexOf(this.separatorRight);

  if(!this.count && right != -1){
    this.el.textContent = this.el.textContent.substr(right + 2);
    return;
  }

  if(left == -1 && right == -1){
    this.el.textContent = output + ' ' + this.el.textContent;
  }
  else{
    var oldTitle = this.el.textContent.substr(right + 2);
    this.el.textContent = output + ' ' + oldTitle;
  }
}

Notifier.prototype.set = function(input){
  if(typeof input === 'undefined'){
    this.count = 1;
  }
  else{
    this.count = parseFloat(input);
  }

  if(this.count < 0 || isNaN(this.count)){
    this.count = 0;
  }

  this.update();
};

Notifier.prototype.default = function(){
  this.count = this.initial;
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

  if(this.count < 0 || isNaN(this.count)){
    this.count = 0;
  }

  this.update();
}