// src/types/offer.ts
export interface Offer {
    id: number;
    order: number;
    updated_at: string;
    created_at: string;
    name: string;
    offer_url: string;
    image: string;
    first_amount: number;
    second_amount: number;
    amount_from: number;
    percent_per_day: string;
    term_from: number;
    term_to: number;
    real_annual_rate_from: string;
    real_annual_rate_to: string;
    advantages: Advantage[];
    repayment_methods: RepaymentMethod[];
    documents: Document[];
    age: number;
    cash: boolean;
    time_to_get: number;
    on_lending: boolean;
    bank_card: boolean;
    bankID: boolean;
    around_the_clock: boolean;
    basic_characteristics_href: string;
    user_warning: string;
    license: string;
    email: string;
    address: string;
    phone: string;
    legal_entity: string;
    recommended: boolean;
    zero_first: boolean;
    offer_advantage: string;
    country: string;
    calculate_template: null | string;
}

export interface Advantage {
    id: number;
    text: string;
}

export interface RepaymentMethod {
    id: number;
    text: string;
}

export interface Document {
    id: number;
    text: string;
}
