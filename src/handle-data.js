async function handleData(data, collection) {
  try {
    for (const stt in data) {
      if (Object.hasOwnProperty.call(data, stt)) {
        const element = data[stt];
        element.code = parseInt(element.code);
        await collection.insertOne(element);
      }
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { handleData };
