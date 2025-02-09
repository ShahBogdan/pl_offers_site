import { getData } from "../api";
import { Offer } from "@/types/offer";


export async function getOffers(): Promise<Offer[]> {
    return getData<Offer[]>({ endpoint: "offers/api",query: { country: "PL" } });
}
