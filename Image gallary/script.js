const accessKey = 'qXGELz2sbWKLSrF1QTZKzcO6BIkDuvZ26UczsqSDzm8'; // replace with your key

const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

let page = 1;
const perPage = 10;
let loading = false;

async function fetchImages() {
  if (loading) return;
  loading = true;
  loader.style.display = 'block';

  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?count=${perPage}&client_id=${accessKey}`);
    const data = await response.json();

    data.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.urls.small;
      img.alt = photo.alt_description || 'Unsplash Image';
      gallery.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    loader.style.display = 'none';
    loading = false;
  }
}

// Infinite scroll
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && !loading) {
    fetchImages();
  }
});

// Initial load
fetchImages();
