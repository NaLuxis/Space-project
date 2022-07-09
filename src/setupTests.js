import "@testing-library/jest-dom/extend-expect";

// Méthode qui résous une erreur dans les test de react-slick ↓
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
