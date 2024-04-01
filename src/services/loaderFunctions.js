import api from "./api";

export const getModules = async () => {
    try {
        console.log("Calling modules api");
        let response = await api.get("/api/admin/modules");
        return response.data.data;
    } catch (error) {
        return [];
    }
}

export const getBatches = async () => {
    try {
        console.log("Calling Batch api");
        let response = await api.get("/api/admin/batches");
        return response.data.data;
    } catch (error) {
        return [];
    }
  }

  
