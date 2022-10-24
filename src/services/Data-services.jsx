import axiosInstance from "./Axios";

  const getVehicleAllData = async () =>{
    const response = await axiosInstance.get("v_ads/get_all_ads.php");
    return response.data;
  }

  const getVehicleAllCommon = async () =>{
    const response = await axiosInstance.get("v_common_details/get_common_details.php");
    return response.data;
  }

  const uploadAdsImg = async (uploadedFiles)=> {
    const data = new FormData();
    for (let i = 0; i < uploadedFiles.length; i++) {
      data.append("file[]", uploadedFiles[i]);
    }
    return axiosInstance.post("/file_upload/multiple_files_upload.php", data, {
    }).then((response)=>{
        return response.data;
    });
}


const DataService = {
    getVehicleAllData,
    getVehicleAllCommon,
    uploadAdsImg,
  }
  export default DataService;

