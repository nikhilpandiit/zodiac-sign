const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeColor = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "red";
      break;

    case "taurus":
      body.style.backgroundColor = "green";
      break;

    case "gemini":
      body.style.backgroundColor = "yellow";
      break;

    case "cancer":
      body.style.backgroundColor = "silver";
      break;

    case "leo":
      body.style.backgroundColor = "golden";
      break;

    case "virgo":
      body.style.backgroundColor = "brown";
      break;

    case "libra":
      body.style.backgroundColor = "pink";

      break;

    case "scorpio":
      body.style.backgroundColor = "#1f1f1f";
      break;

    case "sagittarius":
      body.style.backgroundColor = "purple";
      break;

    case "capricorn":
      body.style.backgroundColor = "gray";
      break;

    case "aquarius":
      body.style.backgroundColor = "blue";
      break;

    case "pisces":
      body.style.backgroundColor = "light-green";

      break;
  }
};
