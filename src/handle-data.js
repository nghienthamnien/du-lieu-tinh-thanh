async function handleData(data, collection) {
  try {
    for (const stt in data) {
      if (Object.hasOwnProperty.call(data, stt)) {
        const element = data[stt];
        element.code = parseInt(element.code);
        if (Object.hasOwnProperty.call(element, "parent_code")) {
          element.parent_code = parseInt(element.parent_code);
        }
        await collection.insertOne(element);
      }
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { handleData };
