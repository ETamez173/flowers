import { useRetailers } from "./RetailerDataProvider.js"
import Retailer from "./Retailer.js"



//Are You Feeling Bouquet? - Flower Shops   DONE


const contentTarget = document.querySelector(".retailers")


export const RetailerList = () => {

    const allRetailers = useRetailers()


    const render = retailers => {

        contentTarget.innerHTML = `
            <div>
                <div>
                <h2> Retailers List </h2>
                </div>
            <section class="retailer__component">     
            
            <div class="retailer_item">
                    ${
            retailers.map(retailerObject => {
                const retailerHTML = Retailer(retailerObject)
                return retailerHTML
            }).join("")
            }
            </div>
            </section>
            </div>
         `

    }

    render(allRetailers)
}

export default RetailerList






