const detailsButton = document.getElementById("showDetails");
const h1Element = document.getElementById("accountnumber");
const amountElement = document.getElementById("amount");

const pElement = document.getElementById("accountname");
const details = [
  {
    accountnumber: 1234567891,
    accountname: "Albert Einstein",
  },
  {
    accountnumber: 2333444578,
    accountname: "Aisha Aisha",
  },
  {
    accountnumber: 2333456578,
    accountname: "Zaynab Zaynab",
  },
];

h1Element.textContent = details[0].accountnumber;
pElement.textContent = details[0].accountname;
detailsButton.addEventListener("click", () => {
  const randomNo = Math.floor(Math.random() * 1000);
  const randomNumber = Math.floor(Math.random() * details.length);

  console.log(randomNo);

  amountElement.textContent = randomNo;
  h1Element.textContent = details[randomNumber].accountnumber;
  pElement.textContent = details[randomNumber].accountname;
});
