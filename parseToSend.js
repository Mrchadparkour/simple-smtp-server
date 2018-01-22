//needs to return a html string
module.exports = function(body) {
  var keys = Object.keys(body);
  var htmlString = "";
  var emailList = [];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = body[key];
    if (key[i] !== "fileInfoArray"){
      if (/[Ee]mail/g.test(key)) emailList.push(value);
      var strToAppend = '<strong>'+ key +': </strong>' + '<p>'+ value +'</p>';
      htmlString += strToAppend
    };
  }

  var finalHtml = '<div>'+ htmlString +'</div>'

  let sheets = body.fileInfoArray.map(function(sheet) {
    return {
      filename: sheet.xlsxName,
      content: sheet.buffer,
      encoding: 'base64'
    }
  })

  return {
    html: finalHtml,
    sheets: sheets,
    emails: emailList
  };
}
