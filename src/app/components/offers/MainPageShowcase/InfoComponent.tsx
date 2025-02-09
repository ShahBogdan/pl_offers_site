import { Offer } from "@/types/offer";
import { CogIcon, RocketLaunchIcon, UserCircleIcon, FireIcon } from '@heroicons/react/24/solid'
import MainBtn from "../../MainBtn";

const DetailsItem = ({ label, text }: { label: string, text: string }) => {
    return (
        <div className=" flex flex-row justify-between">
            <div className=" text-gray-700 flex flex-row gap-1 normal-case">
                {label}
            </div>
            <span className=" text-right">{text}</span>
        </div>
    );
};


const LicenseItem = ({ label, text }: { label: string, text: string }) => {
    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold">{label}</p>
            <p>{text}</p>
        </div>
    );
};


export default (offer: Offer) => {
    return (
        <div
            className="mt-5 p-5 border border-gray-200 rounded-md bg-gray-5 bg-white text-black"
        >
            <h3 className=" text-black font-bold text-xl mb-5">
                {offer.name} ({offer.legal_entity})
            </h3>
            <div className="flex flex-col md:flex-row gap-3 0">
                <div className="flex-1 flex flex-col gap-1">
                    <p className="font-bold">{"Szczegółowe informacje"}</p>
                    <DetailsItem
                        text={"do " + offer.first_amount + " zl"}
                        label="Pierwszy kredyt"
                    />
                    <DetailsItem
                        text={"do " + offer.second_amount + " zl"}
                        label="Powtórny kredyt"
                    />
                    <DetailsItem
                        text={offer.term_to + ""}
                        label="Okres do
"
                    />
                    <DetailsItem
                        text={"od 18 do " + offer.age}
                        label="Wiek pożyczkobiorcy"
                    />
                    <DetailsItem
                        text={
                            "od " +
                            offer.real_annual_rate_from +
                            " do " +
                            offer.real_annual_rate_to +
                            "%"
                        }
                        label="RRSO"
                    />
                    <p className=" mt-5">{offer.calculate_template}</p>
                </div>
                <div className="flex-1 flex flex-col gap-0">
                    <LicenseItem label={"Licencja:"} text={offer.license} />
                    <LicenseItem
                        label={"Osoba prawna:"}
                        text={offer.legal_entity}
                    />
                    <LicenseItem label={"E-mail:"} text={offer.email} />
                    <LicenseItem label={"Adres:"} text={offer.address} />
                    <LicenseItem label={"Telefon:"} text={offer.phone} />
                </div>
            </div>

        </div>
    );
};
