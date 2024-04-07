const getStorageData = () => {
    const storeJobApplication = localStorage.getItem("job-application");
    if (storeJobApplication) {
        return JSON.parse(storeJobApplication);
    }
    return []
}
const saveDataStorage = (idInt) => {
    const appliedStoreData = getStorageData();
    const isExit = appliedStoreData.find(jobId => jobId === idInt)
    if (!isExit) {
        appliedStoreData.push(idInt)
        localStorage.setItem("job-application", JSON.stringify(appliedStoreData))
    }
}


export { getStorageData, saveDataStorage }