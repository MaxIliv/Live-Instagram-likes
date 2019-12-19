const likes = [];
const colors = ['pink', 'lightblue', 'lightcoral', 'olive', 'aliceblue', ];

const width = canvas.width;
const height = canvas.width;

const center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

setup();

function getProps() {
  return {
    ...bottomPos(),
    ...getColor(),
    remove: remove
  }
}

function remove(item) {
  for (let i = 0, len = likes.length; i < len; i++) {
      if (likes[i] === item) {
        likes.splice(i, 1);
        break;
      }
  }
}

function randomPos() {
  return {
    x: width * Math.random(),
    y: height * Math.random()
  }
}

function bottomPos() {
  return {
    x: width / 2,
    y: height
  }
}

function setup() {
  bindEvents();
  draw();
}
 
function draw() {
  background();
  drawItems();
  requestAnimationFrame(draw);
}

function drawItems() {
  for (let i = likes.length; i--;) {
    if (likes[i].checkBound()) {
      this.remove(likes[i]);
      continue;
    }
    likes[i].draw();
  }
}

function background() {
  ctx.clearRect(0, 0, width, height);
}

function like() {
  likes.push(new Like(getProps()));
}

function likeMore() {
  for (let i = 0; i < 10; i++) {
    like();
  }
}

function bindEvents() {
  canvas.addEventListener('click', () => {
    likes.push(new Like(getProps()));
  });

  const likeBtn = document.getElementById('like');
  const likesBtn = document.getElementById('likes');


  likeBtn.addEventListener('click', like);
  likesBtn.addEventListener('click', likeMore);
}

function getColor() {
  return {
    color: colors[Math.floor(Math.random() * colors.length)]
  };
}