async function getDataFromApi(): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });
}

//! getDataFromApi();
//=> UnhandledPromiseRejection

async function fetchData(): Promise<void> {
  try {
    const data = await getDataFromApi();
    console.log("Data :", data);
  } catch (error) {
    console.error("Error Fetching Data : ", error);
  }
}

fetchData();

function getDataFromApiThen(): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch data from API"));
    }, 2000);
  });
}

function fetchDataWithThen() {
  getDataFromApi()
    .then((data) => {
      console.log("output from then ", data);
    })
    .catch((error) => console.error("Error Fetching Data From Then:", error));
}
fetchDataWithThen();
