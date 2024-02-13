document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.btn');
  const container = document.getElementById('container');

  button.addEventListener('click', function() {
    container.innerHTML = `
      <span class="color color--white" data-value="1"></span>
      <span class="color color--red" data-value="1"></span>
      <span class="color color--pink" data-value="1"></span>
      <span class="color color--white" data-value="1"></span>
    `;
  });
});
