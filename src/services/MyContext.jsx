import { createContext, useState, useEffect } from "react";
import DataService from "./Data-services";

const DataContext = createContext();
export function DataProvider({children}) {

    const [vehicleBrandsList, setVehicleBrandsList] = useState([]);
    const [vehicleModel, setVehicleModel] = useState([]);
    const [vehicleColourList, setVehicleColourList] = useState([]);
    const [vehicleSTDFeatures, setVehicleSTDFeatures] = useState([]);
    const [vehicleTypeList, setVehicleTypeList] = useState([]);
    const [yearsList, setYearsList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [districList, setDistricList] = useState([]);
    const [proviceList, setProviceList] = useState([]);

    const yearList = ()=>{
      let year_satart = 1940;
      let year_end = (new Date).getFullYear(); // current year
      var years = [];
      for (let i = year_satart; i <= year_end; i++) {
        years.push(i);
      }
      //console.log(years);
      setYearsList(years);
    };

    const fetchAllVehicalCommonData = () => {
      DataService.getVehicleAllCommon().then((res) => {
        if (res) {
          setVehicleBrandsList(res[0]);
          setVehicleModel(res[1]);
          setVehicleColourList(res[2]);
          setVehicleSTDFeatures(res[3]);
          setVehicleTypeList(res[4]);
          setCityList(res[5]);
          setDistricList(res[6]);
          setProviceList(res[7]);

          //console.log(res[5]);
        } else {
          setVehicleBrandsList([]);
          setVehicleModel([]);
          setVehicleColourList([]);
          setVehicleSTDFeatures([]);
          setVehicleTypeList([]);
          setCityList([]);
          setDistricList([]);
          setProviceList([]);
        }
      })
    };

    useEffect(() => {
        yearList();
        fetchAllVehicalCommonData();

      }, []);

    return (
        <DataContext.Provider 
                    value={{
                        vehicleBrandsList,
                        vehicleModel,
                        vehicleColourList,
                        vehicleSTDFeatures,
                        vehicleTypeList,
                        yearsList,
                        cityList,
                        districList,
                        proviceList,

                    }}>
                        {children}
        </DataContext.Provider>
    );
}

export default DataContext;