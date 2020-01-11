import { getRetailers } from "./RetailerDataProvider.js"

import RetailerList from "./RetailerList.js"


getRetailers()
  
    .then(RetailerList)
   