export default function checkHistory(historyList, search){
    let flag = false;
    for(let i = 0; i < historyList.length; i++){
        if(historyList[i].title === search){
            flag = true;
            break;
        }
    }
    return flag;
}