export function formatDate(strDate){
    let year = strDate.substring(0,4);
    let month = strDate.substring(4,6);
    let day = strDate.substring(6,8);
    let hour = strDate.substring(8,10);
    let minute = strDate.substring(10,12);
    return `${day}/${month}/${year} ${hour}:${minute}`;
}