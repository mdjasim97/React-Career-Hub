const getLocalStorageData = () => {
    const getData = localStorage.getItem('saveJobId')
    if (getData) {
        return JSON.parse(getData)
    }
    return []
}


const saveLocalStorage = (id) => {
    const getPreviewsData = getLocalStorageData()
    const isExits = getPreviewsData.find(job => job === id)
    if(!isExits){
        getPreviewsData.push(id)
        localStorage.setItem('saveJobId', JSON.stringify(getPreviewsData))
    }
}


export { getLocalStorageData, saveLocalStorage}



// const getStorageData = () => {
//     const storeJobApplication = localStorage.getItem("job-application");
//     if (storeJobApplication) {
//         return JSON.parse(storeJobApplication);
//     }
//     return []
// }
// const saveDataStorage = (idInt) => {
//     const appliedStoreData = getStorageData();
//     const isExit = appliedStoreData.find(jobId => jobId === idInt)
//     if (!isExit) {
//         appliedStoreData.push(idInt)
//         localStorage.setItem("job-application", JSON.stringify(appliedStoreData))
//     }
// }


// export { getStorageData, saveDataStorage }