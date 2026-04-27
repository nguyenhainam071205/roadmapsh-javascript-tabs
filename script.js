const tabButtons = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const clickedTabButton = e.target;
    clickedTabButton.classList.add('active');

    const tabID = clickedTabButton.getAttribute('data-target');
    const newContentTab = document.getElementById(tabID);
    newContentTab.classList.add('active');
  })
})