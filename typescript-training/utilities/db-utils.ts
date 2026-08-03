import{Client} from'pg';
import config from '../config/config.json' with {type:'json'};
import {top10HorrorMovies}
class DBDemo{

    async getData(query:string): Promise<Array<Object>>{

        //Create an instance config to connect DB
        const dbConfig.connect();
        const data =await dbConfig.query(query);
        await dbConfig.end();
        

        }
        return DataTransfer.rows;
    }
    let obj=new DBCommons();
    let dbData=await obj.getData(top10HorrorMovies);
