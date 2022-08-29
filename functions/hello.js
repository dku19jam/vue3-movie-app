exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'JAM',
      age: 23,
      email: "panzzang518@naver.com"
    })
  }
};
