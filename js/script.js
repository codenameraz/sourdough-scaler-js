const flour = 100;

const flourPercentages = {
  flour: flour,
  water: 0,
  salt: 0,
  starter: 0
};

function bakersPercentageCalculator(desiredWeight, flourPercentages) {

  const ratioAsDecimal = Object.values(flourPercentages).reduce((accum, curr) => {
    return accum + (curr / 100)
  }, 0)
  return Object.entries(flourPercentages).reduce((accum, [key, value]) => {
    return {
      ...accum,
      [key]: (desiredWeight / ratioAsDecimal) * (value / 100)
    }
  }, {})
}

$(document).ready(function() {

  $("form#ingredients").submit(function(event) {
    event.preventDefault();
    const desiredWeight = parseInt($("#desiredWeight").val());
    const flourPercentages = {
      flour: flour,
      water: parseInt($("#water").val()),
      salt: parseInt($("#salt").val()),
      starter: parseInt($("#starter").val())
    };
    
    const result = bakersPercentageCalculator(desiredWeight, flourPercentages);

    $("#output").text(JSON.stringify(result, null, 2));
  });
});

