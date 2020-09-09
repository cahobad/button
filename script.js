const button = document.querySelector('.button-block__red-button');

const borderButton = document.querySelector('.button-block__btn-border');

const crackImage = document.querySelector('.crack-image');

const heading = document.querySelector('.heading');

const headingBlock = document.querySelector('.heading__block');

const buttonBlock = document.querySelector('.button-block');

const body = document.querySelector('.body');

button.onmousedown = () => {
  borderButton.classList.add('button-block__btn-border--press');

  headingBlock.removeChild(heading);

  crackImage.classList.add('crack-image--add');
  crackImage.classList.remove('non-visible');

  setTimeout(() => {
    (crackImage.setAttribute('src', 'images/crack2.png'));
  }, 750);

  setTimeout(() => {
    (crackImage.setAttribute('src', 'images/crack3.png'));
  }, 950);

  setTimeout(() => {
    (body.removeChild(buttonBlock));
  }, 2250);

}

button.onmouseup = () => {
  borderButton.classList.remove('button-block__btn-border--press');
}
