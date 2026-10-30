const canvas = document.getElementById('foamCanvas'), ctx = canvas.getContext('2d'); let isDrawing = false;
function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; draw(); }
function draw() { ctx.fillStyle = '#f3f4f6'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = 'rgba(255,255,255,0.65)'; for (let i = 0; i < 35; i++) { ctx.beginPath(); ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 30 + 15, 0, Math.PI * 2); ctx.fill(); } }
function scratch(e) { if (!isDrawing) return; const rect = canvas.getBoundingClientRect(), x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left, y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top; ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(x, y, 45, 0, Math.PI * 2); ctx.fill(); }
canvas.addEventListener('mousedown', () => isDrawing = true); canvas.addEventListener('mouseup', () => isDrawing = false); canvas.addEventListener('mousemove', scratch);
canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }); canvas.addEventListener('touchend', () => isDrawing = false); canvas.addEventListener('touchmove', (e) => { e.preventDefault(); scratch(e); }, { passive: false });
window.addEventListener('load', resize); window.addEventListener('resize', resize);
function setupToggle(id) { const btns = document.querySelectorAll(`#${id} button, #${id} .cal-day`); btns.forEach(b => b.addEventListener('click', () => { btns.forEach(x => x.classList.remove('active-tag')); b.classList.add('active-tag'); })); }
setupToggle('fG'); setupToggle('cG'); setupToggle('cntG');
document.getElementById('orderForm').addEventListener('submit', function (e) { e.preventDefault(); alert('Заявка принята! Мы свяжемся с вами.'); this.reset(); });
