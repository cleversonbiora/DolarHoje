import DollarService from "../services/DollarService";
import AsyncStorage from '@react-native-community/async-storage';

const DOLLAR_NOW = "@dollarNow";
const DOLLAR_HISTORY = "@dollarHistory";
export default class DollarRepository {
    
    static getNow = async () => { 
        try {
            let nextUpdateDate = new Date((new Date()).getTime() - 10 * 60000);
            let result = JSON.parse(await AsyncStorage.getItem(DOLLAR_NOW));
            if(!result || new Date(result.updateDate) < nextUpdateDate){
                result = await DollarService.getNow();
                result.updateDate = new Date();
                DollarRepository.setNow(result);
            }
            return result;
        } catch (error) {
            return null;
        }
    }

    static setNow = async (list) => { 
        try {
            await AsyncStorage.setItem(DOLLAR_NOW, JSON.stringify(list));
        } catch (error) {
            return null;
        }
    }

    static getHistory = async () => { 
        try {
            let nextUpdateDate = new Date((new Date()).getDate() - 1);
            let result = JSON.parse(await AsyncStorage.getItem(DOLLAR_HISTORY));
            if(!result || new Date(result.updateDate) < nextUpdateDate){
                result = await DollarService.getHistory();
                result.updateDate = new Date();
                DollarRepository.setHistory(result);
            }
            return result;
        } catch (error) {
            return null;
        }
    }

    static setHistory = async (list) => { 
        try {
            await AsyncStorage.setItem(DOLLAR_HISTORY, JSON.stringify(list));
        } catch (error) {
            return null;
        }
    }
}