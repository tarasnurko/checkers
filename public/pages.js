export const mainPageHTML = (root) => {
  root.innerHTML = `
  <div class="page main-page">
    <div class="container">
      <h2 class="title main-title">Checkers</h2>
      <div class="wrapper main____wrapper">
        <a class="btn main__item create" href="#">Create</a>
        <a class="btn main__item join" href="#">Join</a>
      </div>
    </div>
  </div>
  `;
};

export const createMulPageHTML = (root) => {
  root.innerHTML = `
  <div class="page multiplayer-create__page">
    <div class="multiplayer-create__copy-modal">Copied</div>
    <div class="container">
    <h2 class="title multiplayer-create__title">Create Room</h2>
      <div class="wrapper multiplayer-create__wrapper">
        <div class="multiplayer-create__subtitle">Click to copy</div>
        <div class="multiplayer-create__item multiplayer-create__code">z3qssffc</div>
        <div class="multiplayer-create__item multiplayer-create__link">https://stackoverflow.com#z3qssffc</div>
        <div class="multiplayer-create__waiting">Waiting for second player...</div>
      </div>
    </div>
  </div>
  `;
};

export const joinMulPageHTML = (root) => {
  root.innerHTML = `
  <div class="page multiplayer-join__page">
    <div class="container">
      <h2 class="title multiplayer-join__title">Join Room</h2>
      <div class="wrapper multiplayer-join__wrapper">
        <input class="multiplayer-join__input" type="text" placeholder="room code">   
        <a class="btn multiplayer-join__button" href="#">Join</a>
      </div>
      
    </div>
  </div>
  `;
};

export const gamePageHTML = (root) => {
  root.innerHTML = `
  <div class="page game__page">
    <div class="game__end-wrapper">
      <div class="game__end-title">White (Opponent) Win</div>
      <a class="game__end-btn restart" href="#">Play Again</a>
      <a class="game__end-btn menu" href="#">To Menu</a>
    </div>
    <div class="container">
      <div class="game-info__wrapper">
        <div class="game-info__player"></div>
        <div class="game-info__move"></div>
      </div>
      <div class="game__board"></div>
    </div>
  </div>
  `;
};
