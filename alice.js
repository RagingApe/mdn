const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const animate = function (alice) {
  alice.animate(aliceTumbling, aliceTiming);
};

const allAlice = [alice1, alice2, alice3];

// alice1.animate(aliceTumbling, aliceTiming);

// Implementing callback hell sequencing **

/* setTimeout(function () {
  alice2.animate(aliceTumbling, aliceTiming), setTimeout(function () {}, 2000);
  setTimeout(alice3.animate(aliceTumbling, aliceTiming), 2000);
}, 2000); */

// Callback hell to Promise **

// allAlice.reduce(function (last, alice) {
//   return last
//     .then(function () {
//       return animate(alice);
//     })
//     .then(function () {
//       return new Promise(function (res) {
//         setTimeout(res, 2000);
//       });
//     });
// }, Promise.resolve());

// Promise to async **

(async function animateSeq() {
  // const allAlice = [alice1, alice2, alice3];
  for (const alice of allAlice) {
    // await setTimeout(alice.animate(aliceTumbling, aliceTiming), 2000); // here is the question why are they firing at the same time?!
    await alice.animate(aliceTumbling, aliceTiming).finished;
  }
})();
