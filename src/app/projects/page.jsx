"use client";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: 1,
        title: "Data Analytic SaaS",
        desc: "Built to drive insights from complex business data in real time with elegant dashboards.",
        img: "/analytic.png",
        link: "https://lama.dev",
    },
    {
        id: 2,
        title: "Ordering System SaaS",
        desc: "Multi-tenant platform enabling restaurants to manage and automate order workflows.",
        img: "/order.png",
        link: "https://lama.dev",
    },
    {
        id: 3,
        title: "Warehouse ERP System",
        desc: "Robust ERP integration for inventory, putaway, and ASN with real-time syncing.",
        img: "/loyalty.png",
        link: "https://lama.dev",
    },
    {
        id: 4,
        title: "Spotify Music App",
        desc: "Custom music streaming solution with a smooth mobile-first user experience.",
        img: "/images/spotify-app.png",
        link: "https://lama.dev",
    },
];

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <section className="text-center py-16 px-4">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">My Work</h1>
                <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                    Projects I've built — clean, performant, and user-centric.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12 lg:px-24 pb-24">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
                    >
                        <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                            <Image src={item.img} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                            <p className="text-gray-600">{item.desc}</p>
                            <div className="mt-auto">
                                <Link href={item.link}>
                                    <button className="mt-4 inline-block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition">
                                        See Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="w-full py-24 flex flex-col items-center bg-black text-white text-center px-4">
                <h2 className="text-3xl md:text-5xl font-semibold">Got a project in mind?</h2>
                <p className="mt-4 text-gray-300 max-w-xl">
                    Let’s build something minimal, bold, and high-performing — together.
                </p>
                <Link href="/contact">
                    <button className="mt-8 px-8 py-3 bg-white text-black rounded-full text-base font-medium hover:bg-gray-200 transition">
                        Hire Me
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default ProjectsPage;
