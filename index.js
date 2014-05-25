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
  var regexString = '^(\\' + this.separatorLeft + ')\\w+(\\' + this.separatorRight + ') ';
  var reg = new RegExp(regexString, 'g');
  var oldTitle = this.el.textContent.replace(reg, '');

  if(this.count){
    this.el.textContent = output + ' ' + oldTitle;
  }
  else{
    this.el.textContent = oldTitle;
  }

  return this;
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

  return this;
};

Notifier.prototype.default = function(){
  this.count = this.initial;
  this.update();

  return this;
}

Notifier.prototype.add = function(input){
  if(typeof input === 'undefined'){
    input = 1;
  }

  this.count += parseFloat(input);
  this.update();

  return this;
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

  return this;
}