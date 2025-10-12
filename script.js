  const items = () => Array.from(document.querySelectorAll('.grid-item'));

  document.getElementById('change_button').addEventListener('click', () => {
    const id = String(document.getElementById('block_id').value).trim();
    const color = document.getElementById('colour_id').value.trim();

    // reset all to transparent first
    items().forEach(el => el.style.backgroundColor = 'transparent');

    // then color the chosen block (if valid)
    const cell = document.getElementById(id);
    if (cell && color) cell.style.backgroundColor = color;
  });

  document.getElementById('reset_button').addEventListener('click', () => {
    items().forEach(el => el.style.backgroundColor = 'transparent');
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
  });