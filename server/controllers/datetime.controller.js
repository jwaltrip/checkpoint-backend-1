// gets current dateTime as a string and returns it
module.exports.get_dateTime = function (req, res, next) {
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return res.send(date+' '+time);
};