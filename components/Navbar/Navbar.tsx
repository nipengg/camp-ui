"use client"

import { NAV_LINKS } from "@/constant/url"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button/Button"
import { useState } from "react"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav className="flexBetween max-container padding-container relative z-30 py-5">
                <Link href="/">
                    <Image src="/Images/hilink-logo.svg" alt="logo" width={74} height={29} />
                </Link>
                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((x) => {
                        return (
                            <li>
                                <Link key={x.key} href={x.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{x.label}</Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="lg:flexCenter hidden">
                    <Button icon="/Images/user.svg" type="button" title="Log In" variant="btn_dark_green" />
                </div>

                <Image src="/Images/menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" onClick={toggleNav} />
            </nav>
            <ul className={`gap-12 lg:hidden ${isNavOpen ? 'block' : 'hidden'}`}>
                {NAV_LINKS.map((x) => {
                    return (
                        <li>
                            <Link href={x.href} key={x.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{x.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Navbar