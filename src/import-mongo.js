require("dotenv").config();
const process = require("process");
const MongoClient = require("mongodb").MongoClient;
const provinceData = require("../json/tinh.json");
const districtData = require("../json/huyen.json");
const commmuneData = require("../json/xa.json");
const { handleData } = require("./handle-data");

const url = process.env.MONGO_DB;
const dbName = process.env.DB_NAME;
(async () => {
  try {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);

    // province
    console.log("start import province");
    const provinceCollection = db.collection("provinces");
    await handleData(provinceData, provinceCollection);
    console.log("import province successfully");

    // district
    console.log("start import district");
    const districtCollection = db.collection("districts");
    await handleData(districtData, districtCollection);
    console.log("import district successfully");

    // commune
    console.log("start import commune");
    const communeCollection = db.collection("communes");
    await handleData(commmuneData, communeCollection);
    console.log("import commune successfully");
    client.close();
  } catch (error) {
    throw error;
  }
})();
