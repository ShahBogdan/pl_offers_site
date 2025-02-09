import { getOffers } from "@/lib/offers/get";
import { Offer } from "@/types/offer";
import OfferComponent from "./OfferComponent";
import InfoComponent from "./InfoComponent";
export default async function Index() {
    const offersList: Offer[] = await getOffers();
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-2 md:gap-4 my-5">
                {offersList.map((offer, index) => {
                    return <OfferComponent key={index} {...offer} />
                })}
            </div>
            <h2 className=" text-3xl text-black">Informacja o pożyczkodawcach:</h2>
            <div className="md:grid-cols-4 mx-auto gap-2 md:gap-4 my-5">
                {offersList.map((offer, index) => {
                    return <InfoComponent key={index} {...offer} />
                })}
            </div>
        </>
    )
}