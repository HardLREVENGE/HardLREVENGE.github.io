// Minimal JS for menu, particles and animations
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('mobile-menu-toggle');
  var nav = document.getElementById('nav-menu');
  if (toggle && nav) toggle.addEventListener('click', function(){ nav.classList.toggle('active'); });

  // simple particle generator
  var pwrap = document.getElementById('particles');
  if(pwrap){
    for(var i=0;i<30;i++){
      var d = document.createElement('div');
      d.className = 'particle';
      var size = Math.random()*6 + 2;
      d.style.width = d.style.height = size + 'px';
      d.style.left = (Math.random()*100) + '%';
      d.style.top = (Math.random()*100) + '%';
      d.style.opacity = 0.2 + Math.random()*0.4;
      pwrap.appendChild(d);
    }
  }

  // reveal on scroll
  function reveal(){ document.querySelectorAll('.feature-item, .game-item, .stagger-animation, .event-highlight').forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.top < window.innerHeight - 120) el.classList.add('visible');
  }); }
  reveal(); window.addEventListener('scroll', reveal);
});
