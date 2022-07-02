const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find the file🥲');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('could not write file');
      resolve('Success');
    });
  });
};

const getDog = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed:${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/${data}/image/random`
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random image saved to file!');
  } catch (err) {
    console.log(err);
  }
};
getDog();
// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed:${data}`);
//     return superagent.get(`https://dog.ceo/api/${data}/image/random`);
//   })
//   .then(res => {
//     console.log(res.body.message);
//     return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random image saved to file!');
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// // 'use strict';

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // const request = new XMLHttpRequest();
// // request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// // request.send();
// // console.log(request.responseText);

// // request.addEventListener('load', function () {
// //   const [data] = JSON.parse(this.responseText);
// //   console.log(data);

// //   const html = `<article class="country">
// //   <img class="country__img" src="${data.flag}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name.common}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>${data.population}</p>

// //   </div>
// // </article>`;

// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   countriesContainer.style.opacity = 1;
// // });
// // ///////////////////////////////////////
