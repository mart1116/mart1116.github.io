document.body.style.background = "url('https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_960_720.png')"

const title = 'A Fruit Salad of Images'
const $title = document.getElementById('title')
$title.textContent = title

const intro = "Hi! Welcome to kats art design's fruit salad of images. These images were taken in January of 2019! Click on one to see what happens!"
const $intro = document.getElementById('intro')
$intro.textContent = intro

// used the cards exercise technique
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const gallery = []
for (const $n of n) {
  gallery.push(`
    <div class="pic pic${$n}"> <img alt="" src="fruit/${$n}.jpg"> </div>`)
}

const $gallery = document.getElementById('gallery')

$gallery.innerHTML = gallery.join(' ')

// this wont show up unless i put the div in the body
const footer = 'Copyright kats art designs 2019'
const $footer = document.getElementById('footer')
$footer.textContent = footer

// i couldnt figure out modal and it was giving me trouble, so i tried the ninja exercise technique, but it expands off the page
$gallery.addEventListener('click', function (e) {
  e.target.classList.toggle('grow')
})
