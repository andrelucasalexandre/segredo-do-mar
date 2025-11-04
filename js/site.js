document.querySelectorAll('[data-bs-target="#lightboxModal"]').forEach(a => {
  a.addEventListener('click', (ev) => {
    const image = ev.currentTarget.getAttribute('data-bs-image');
    const img = document.getElementById('lightboxImage');
    if (img) img.src = image;
  });
});

// Filtros por categoria nos cards
const buttons = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('#cards [data-category]');

function applyFilter(cat){
  cards.forEach(c => {
    const show = (cat === 'todos') || c.getAttribute('data-category') === cat;
    c.classList.toggle('d-none', !show);
  });
}
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.category);
  });
});
