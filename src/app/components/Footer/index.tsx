import Link from "next/link";
import { GridContainer } from "../gridContainer";
import Image from "next/image";

const links = [
    {
        title: 'Product',
        links: [
            {
                title: 'Overview',
                href: '#'
            },
            {
                title: 'Features',
                href: '#'
            },
            {
                title: 'Solutions',
                href: '#'
            },
            {
                title: 'Tutorials',
                href: '#'
            },
            {
                title: 'Pricing',
                href: '#'
            },
            {
                title: 'Releases',
                href: '#'
            },
        ]
    },
    {
        title: 'Company',
        links: [
            {
                title: 'About Us',
                href: '#'
            },
            {
                title: 'Careers',
                href: '#'
            },
            {
                title: 'Press',
                href: '#'
            },
            {
                title: 'News',
                href: '#'
            },
            {
                title: 'Media kit',
                href: '#'
            },
            {
                title: 'Contact',
                href: '#'
            },
        ]
    },
    {
        title: 'Resources',
        links: [
            {
                title: 'Blog',
                href: '#'
            },
            {
                title: 'Newsletter',
                href: '#'
            },
            {
                title: 'Events',
                href: '#'
            },
            {
                title: 'Help centre',
                href: '#'
            },
            {
                title: 'Tutorials',
                href: '#'
            },
            {
                title: 'Support',
                href: '#'
            },
        ]
    },
    {
        title: 'Use cases',
        links: [
            {
                title: 'Startups',
                href: '#'
            },
            {
                title: 'Enterprise',
                href: '#'
            },
            {
                title: 'Government',
                href: '#'
            },
            {
                title: 'SaaS',
                href: '#'
            },
            {
                title: 'Marketplaces',
                href: '#'
            },
            {
                title: 'Ecommerce',
                href: '#'
            },
        ]
    },
    {
        title: 'Social',
        links: [
            {
                title: 'Twitter',
                href: '#'
            },
            {
                title: 'LinkedIn',
                href: '#'
            },
            {
                title: 'Facebook',
                href: '#'
            },
            {
                title: 'GitHub',
                href: '#'
            },
            {
                title: 'AngelList',
                href: '#'
            },
            {
                title: 'Dribbble',
                href: '#'
            },
        ]
    },
    {
        title: 'Legal',
        links: [
            {
                title: 'Terms',
                href: '#'
            },
            {
                title: 'Privacy',
                href: '#'
            },
            {
                title: 'Cookies',
                href: '#'
            },
            {
                title: 'Licenses',
                href: '#'
            },
            {
                title: 'Settings',
                href: '#'
            },
            {
                title: 'Contact',
                href: '#'
            },
        ]
    },
];

export function Footer() {
    return(
        <footer className="pt-16 pb-12 bg-gray-50">
            <GridContainer>
                <div className="flex justify-between">
                {
                    links.map((link) => (
                        <div key={link.title} className="flex flex-col gap-y-2">
                            <p className="text-gray-500 text-sm font-semibold">{link.title}</p>
                            {
                                link.links.map((item) => (
                                    <Link key={item.title} href={item.href} className="text-gray-600 font-semibold">{item.title}</Link>
                                ))
                            }
                        </div>
                    ))
                }
                </div>

                <hr className="border-gray-200 mt-16 mb-8"/>

                <div className="w-full flex justify-between items-center">
                    <Image 
                        src='logo.svg'
                        alt="logo"
                        width={139}
                        height={32}
                    />

                    <h1 className="text-gray-500">© 2077 Untitled UI. All rights reserved.</h1>
                </div>
            </GridContainer>
        </footer>
    )
}