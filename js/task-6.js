    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів

      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        size += 10;
      }
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера
    }

    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const input = document.querySelector('input');

    createButton.addEventListener('click', function() {
      const amount = input.value;
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; // Очищаємо значення введеного числа після створення
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    });

    destroyButton.addEventListener('click', destroyBoxes);
