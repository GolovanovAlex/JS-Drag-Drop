// ---- ---- Const ---- ---- //
const boxes = document.querySelectorAll('.box'),
  image = document.querySelector('.image');

// ---- ---- ---- ---- ---- //
boxes.forEach((box) => {
  // ---- ---- Drag ---- ---- //
  box.addEventListener('dragover', (e) => {
    e.preventDefault();
    box.classList.add('hover');
  });
  // ---- ---- Remove Hover ---- ---- //
  box.addEventListener('dragleave', () => {
    box.classList.remove('hover');
  });
  // ---- ---- Drop ---- ---- //
  box.addEventListener('drop', () => {
    box.appendChild(image);
    box.classList.remove('hover');
  });
});
