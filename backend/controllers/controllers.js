// Imports the Google Cloud client library
// const {Storage} = require('@google-cloud/storage');
// const path = require("path");

// // For more information on ways to initialize Storage, please see
// // https://googleapis.dev/nodejs/storage/latest/Storage.html

// // Creates a client using Application Default Credentials
// const storage = new Storage({
//   keyFilename: path.join(__dirname, "../../euphoric-effect-377118-e841913dd820.json"),
//   projectId: "euphoric-effect-377118"
// });

// // // Creates a client from a Google service account key
// // // const storage = new Storage({keyFilename: 'key.json'});

// // /**
// //  * TODO(developer): Uncomment these variables before running the sample.
// //  */
// // // The ID of your GCS bucket
// const bucketName = "file-manager-hw";

// async function configureBucketCors() {
//   const maxAgeSeconds = 3600; // 1 hour
//   const method = ["GET", "HEAD", "OPTIONS"];
//   const origin = ["http://localhost:3000"];
//   const responseHeader = ["Content-Type"];

//   await storage.bucket(bucketName).setCorsConfiguration([
//     {
//       maxAgeSeconds,
//       method,
//       origin,
//       responseHeader,
//     },
//   ]);

//   console.log(`Bucket ${bucketName} was updated with a CORS config
//       to allow ${method} requests from ${origin} sharing
//       ${responseHeader} responses across origins`);
// }

// const grabUrl = async (fileName) => {
//   const filePaths = {
//     "buildfile.csv": 'web_hw_files/CustomerA/Flange/PathPlanning/buildfile.csv',
//     "part.csv": 'web_hw_files/CustomerA/Flange/PathPlanning/part.csv',
//     "part_out_test2.csv": 'web_hw_files/CustomerA/Flange/PathPlanning/part_out_test2.csv',
//     "part_test2.csv": 'web_hw_files/CustomerA/Flange/PathPlanning/part_test2.csv'
//   }
//   let bucket = storage.bucket(bucketName)
//   let file = bucket.file('web_hw_files/CustomerA/Flange/PathPlanning/part.csv')
//   let url = `https://storage.googleapis.com/${bucket.name}/${file.name}`
//   console.log("bucket!!!!!!" + url)
// }

// const testFunc = () => {
//   console.log("the func is exporting")
// }

// // configureBucketCors().catch(console.error)
// grabUrl().catch(console.error);
// // module.exports.grabUrl = grabUrl;
// module.exports.testFunc = testFunc;