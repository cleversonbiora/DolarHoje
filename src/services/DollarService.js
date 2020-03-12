const API_URL = "https://api.cotacoes.uol.com/currency";
export default class DollarService {
    
    static getNow = async () => { 
        try {
            const res = await fetch(`${API_URL}/intraday/list/paged/?format=JSON&fields=bidvalue,askvalue,maxbid,minbid,variationbid,variationpercentbid,openbidvalue,date&size=30&currency=1&`, 
            { method: 'GET'});
            const json = await res.json();
            return json;
        } catch (error) {
            return null;
        }
    }

    static getHistory = async () => { 
        try {
            const res = await fetch(`${API_URL}/interday/list/years/?format=JSON&fields=bidvalue,askvalue,maxbid,minbid,variationbid,variationpercentbid,openbidvalue,date&currency=1&`, 
            { method: 'GET'});
            const json = await res.json();
            return json;
        } catch (error) {
            return null;
        }
    }
}