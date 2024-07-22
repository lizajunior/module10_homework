

document.querySelector('.gallery__upload_btn').addEventListener('click', async () => {
  await getPetPhoto();
});

async function getPetPhoto() {
  const loader = document.querySelector('.loader');
  try {
      loader.style.display = 'block'; 
      const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
      if (!response.ok) {
          throw new Error(`Запрос не выполнен --> ${response.status}`);
      }

      const data = await response.json();
      const imageUrls = data.message;

      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых изображений

      imageUrls.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
      });
 
  } catch (err) {
      console.error(err.message);  
  } finally{
      loader.style.display = 'none';
  }
}



