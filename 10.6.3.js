const wsUrl = 'wss://echo-ws-service.herokuapp.com';

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    const userMsg = document.querySelector('.user-message');
    const serverMsg = document.querySelector('.server-message');
    const geoMsg = document.querySelector('.geolocation-message');
    const mapLink = document.querySelector('.maplink');

    let websocket = new WebSocket(wsUrl);

    websocket.onmessage = (event) => {
      serverMsg.textContent = event.data;
      serverMsg.classList.remove('hidden');
      serverMsg.classList.add('visible');
    };

    function sendMessage() {
      const inputMsg = document.getElementById('input').value.trim();
      if (inputMsg === '') {
        return; // если сообщение пустое, выходим из функции
      }

      userMsg.textContent = inputMsg;
      document.getElementById('input').value = '';

      userMsg.classList.remove('hidden');
      userMsg.classList.add('visible');

      websocket.send(inputMsg);
    }

    btn1.addEventListener('click', sendMessage);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = 'Гео-локация';

      geoMsg.classList.remove('hidden');
      geoMsg.classList.add('visible');
      setTimeout(()=>{
        mapLink.classList.remove('hidden');
        mapLink.classList.add('visible');
      }, 1000);
    };

    const error = () => {
      geoMsg.textContent = 'Не удалось получить ваше местоположение';
    };

    btn2.addEventListener('click', () => {
      mapLink.href = '';
      mapLink.textContent = '';

      //поддерживает ли браузер пользователя API геолокации
      if (!navigator.geolocation) {
        //navigator — это объект, который содержит информацию о состоянии и возможностях браузера.
        //geolocation — это свойство объекта navigator
        geoMsg.textContent = 'Geolocation не поддерживается вашим браузером';
      } else {
        geoMsg.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
        //getCurrentPosition — это метод, который запрашивает у пользователя разрешение на доступ к его геолокации и, если разрешение получено, определяет текущее местоположение.
      }
    });