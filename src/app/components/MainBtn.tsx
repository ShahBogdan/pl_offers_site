'use client'
import { BanknotesIcon } from '@heroicons/react/20/solid'
import { sendGAEvent } from '@next/third-parties/google'
function handleClick(href: string) {
    window.open(href, '_blank');
    sendGAEvent('event', 'offerClicked')
}

export default function MainBtn({ text, href }: { text: string, href: string }) {
    return <button
        type="button"
        onClick={() => handleClick(href)}
        className="my-5 inline-flex w-full text-center justify-center items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        {text}
        <BanknotesIcon aria-hidden="true" className="-mr-0.5 size-5" />
    </button>
}