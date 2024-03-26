import Link from "next/link";

export default function Title({ pageName }) {
    return <section id="breadcrumb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-24">
                <h1 className="h2 mt-6 text-center">{pageName}</h1>
            </div>
        </div>
    </section>
}