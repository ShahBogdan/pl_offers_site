import { Offer } from "@/types/offer";
import { CogIcon, RocketLaunchIcon, UserCircleIcon, FireIcon } from '@heroicons/react/24/solid'
import { FC } from "react";
import MainBtn from "../../MainBtn";
import Image from "next/image";
interface ItemProps {
    Icon: React.ComponentType<React.ComponentProps<'svg'>>;
    label: string;
    text: string;
}

const Item: FC<ItemProps> = ({ Icon, label, text }) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="inline-flex gap-1">
                <Icon className=" w-5 h-5 text-gray-500" />
                <span>{label}</span>
            </div>
            <span>{text}</span>
        </div>
    );
};

export default function OfferComponent(offer: Offer) {
    return (
        <div className="bg-white p-1 md:p-4 rounded-lg shadow relative text-black">
            {/* TODO fix src */}
            {offer.zero_first && <div className=" absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-full text-sm inline-flex gap-1">
                <FireIcon className=" w-5 h-5" />
                <span>Pierwsza za darmo</span>
            </div>}
            <div className=" mt-8 md:mt-2 h-10 w-auto mx-auto">
                <Image
                    src={"https://arb-api.website" + offer.image}
                    style={{ objectFit: "contain", margin: "auto", maxHeight: "100px" }}
                    alt="Picture of the author"
                    width={150}
                    height={100}
                />
            </div>
            <p className=" my-5 border text-center border-dashed border-gray-500 ">{offer.offer_advantage}</p>
            <div className="flex flex-col">
                <Item Icon={CogIcon} label="Pierwsza" text={` ${offer.first_amount} zl`} />
                <Item Icon={RocketLaunchIcon} label="Kwota" text={`${offer.second_amount} zl`} />
                <Item Icon={UserCircleIcon} label="Wiek" text={`18-${offer.age}`} />
            </div>
            <MainBtn text="Weź pożyczkę" href={offer.offer_url} />
        </div>
    )
}