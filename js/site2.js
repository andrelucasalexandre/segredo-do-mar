

// ===== Soft ocean emoji background =====
(function(){
  const holder = document.getElementById('ocean-anim');
  if(!holder) return;
  const EMOJIS = ['🐟','🐠','🐙','🐬','🐳','🐢','🌊','⭐'];
  function spawn(){
    const el = document.createElement('span');
    el.className = 'o-emoji';
    el.textContent = EMOJIS[Math.floor(Math.random()*EMOJIS.length)];
    const left = Math.random()*100;
    const dx = (Math.random()*20 - 10) + 'vw';
    el.style.left = left + 'vw';
    el.style.bottom = '-10vh';
    el.style.setProperty('--x','0vw');
    el.style.setProperty('--dx', dx);
    el.style.setProperty('--startY','0vh');
    el.style.setProperty('--dur', (18 + Math.random()*22) + 's');
    el.style.opacity = 0.22 + Math.random()*0.2;
    holder.appendChild(el);
    setTimeout(()=> holder.removeChild(el), 45000);
  }
  for(let i=0;i<10;i++){ setTimeout(spawn, i*600); }
  setInterval(spawn, 1800);
})();
