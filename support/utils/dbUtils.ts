// /* eslint-disable @typescript-eslint/no-shadow */
// /* eslint-disable global-require */
// /* eslint-disable @typescript-eslint/no-var-requires */
// import * as sql from "mssql";
// import oracledb from "oracledb";
// import CommonConstants from "../constants/CommonConstants";
// import DBConstants from "../constants/DBConstants";

// static readonly PROTOCOL = ';PROTOCOL=TCPIP';
// static readonly CERTIFICATE = ';trustServerCertificate=true;encrypt=false';
// static readonly USER = 'user:';
// static readonly PASSWORD = 'password:';
// static readonly CONNECTION_STRING = 'connectString:';

// export default class DBConstants {
//     static readonly PROTOCOL = ';PROTOCOL=TCPIP';
//     static readonly CERTIFICATE = ';trustServerCertificate=true;encrypt=false';
//     static readonly USER = 'user:';
//     static readonly PASSWORD = 'password:';
//     static readonly CONNECTION_STRING = 'connectString:';
// }

// export default class CommonConstants {
//     static readonly SEMICOLON = ';';
//     static readonly BLANK = '';
//     static readonly ZERO = 0;
//     static readonly ONE = 1;
//     static readonly TWO = 2;
//     static readonly THREE = 3;
//     static readonly HALF = 0.5;
//     static readonly ONE_THOUSAND = 1000;
//     static readonly DOWNLOAD_PATH = "./test-results/downloads/";
//     static readonly SOAP_XML_REQUEST_PATH = "src/resources/API/SOAP/";
//     static readonly REST_JSON_REQUEST_PATH = "src/resources/API/REST/";
//     static readonly TEST_FOLDER_PATH = "../../tests/";
//     static readonly TEST_SUITE_FILE_FORMAT = ".test.ts";
//     static readonly PARALLEL_MODE = "parallel";
//     static readonly SERIAL_MODE = "serial";
//     static readonly REPORT_TITLE = "Test Execution Report";
//     static readonly RESULTS_PATH = "./test-results/results";
//     static readonly JUNIT_RESULTS_PATH = `${CommonConstants.RESULTS_PATH}/results.xml`;
//     static readonly SIXTY = 60;
//     static readonly WAIT = parseInt(process.env.WAIT_TIME, 10) * CommonConstants.ONE_THOUSAND * CommonConstants.SIXTY;
//   }
  

// export default class DBUtil {

//   public static async executeMSSQLQuery(dbConfig: string, query: string) {
//     try {
//       const pool = await sql.connect(`${dbConfig}${DBConstants.CERTIFICATE}`);
//       const result = await pool.request().query(query);
//       return { rows: result.recordset, rowsAffected: result.rowsAffected };
//     } catch (err) {
//       throw new Error(`Error while executing query\n${err.message}`);
//     }
//   }


//   public static async executeOracleQuery(dbConfig: string, query: string) {
//     const configs = dbConfig.split(CommonConstants.SEMICOLON);
//     const config = {
//       user: configs[0].replace(DBConstants.USER, CommonConstants.BLANK).trim(),
//       password: configs[1].replace(DBConstants.PASSWORD, CommonConstants.BLANK).trim(),
//       connectString: configs[2].replace(DBConstants.CONNECTION_STRING, CommonConstants.BLANK).trim(),
//     };
//     let connection: oracledb.Connection;
//     try {
//       connection = await oracledb.getConnection(config);
//       const result = await connection.execute(query);
//       return { rows: result.rows, rowsAffected: result.rowsAffected };
//     } catch (err) {
//       throw new Error(`Error while executing query\n${err.message}`);
//     } finally {
//       if (connection) {
//         try {
//           await connection.close();
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     }
//   }


//   public static async executeDB2Query(dbConfig: string, query: string) {
//     const ibmdb = require('ibm_db');
//     let connection: any;
//     try {
//       connection = ibmdb.openSync(`${dbConfig}${"PROTOCOL=TCPIP"}`);
//       const result = connection.querySync(query);
//       return { rows: result, rowsAffected: result.length };
//     } catch (error) {
//       throw new Error(`Error while executing query\n${error.message}`);
//     } finally {
//       if (connection) {
//         try {
//           connection.closeSync();
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     }
//   }
// }
