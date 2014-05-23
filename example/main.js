var doc = document;
var N = require('../index');
var n = N(); // alternatively: var n = new N();

doc.getElementById('n-more').addEventListener('click', function(e){
  e.preventDefault();
  n.add();
});

doc.getElementById('n-less').addEventListener('click', function(e){
  e.preventDefault();
  n.subtract();
});

doc.getElementById('n-default').addEventListener('click', function(e){
  e.preventDefault();
  n.default();
});

doc.getElementById('n-form').addEventListener('submit', function(e){
  e.preventDefault();
  n.set(this.querySelector('.n-exact').value);
});

doc.getElementById('n-form-specific-more').addEventListener('submit', function(e){
  e.preventDefault();
  n.add(this.querySelector('.n-exact').value);
});

doc.getElementById('n-form-specific-less').addEventListener('submit', function(e){
  e.preventDefault();
  n.subtract(this.querySelector('.n-exact').value);
});