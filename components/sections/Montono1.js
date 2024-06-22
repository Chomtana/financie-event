
"use client"
import Link from "next/link"
import { useCollection } from "../providers/CollectionProvider"

const HOST = process.env.NEXT_PUBLIC_API_HOST

function imgSrc(collection, id) {
    if (collection.loading) return "/assets/images/loading.webp"
    return `${HOST}/images/${collection.collectionId}-${id}.png`
}

function openseaUrl(collection, id) {
    return `https://optimism-sepolia.blockscout.com/token/${collection.contractAddress}/instance/${id}`
}

export default function Montono1() {
    const [ collection ] = useCollection()

    if (!collection.collectionId && !collection.loading) return <></>

    return (
        <>
            <section className="tf-section montono">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src={imgSrc(collection, 0)} alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href={openseaUrl(collection, 0)} className="h6" target="_blank">View on Blockscout</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1200}>
                                <img src={imgSrc(collection, 1)} alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href={openseaUrl(collection, 1)} className="h6" target="_blank">View on Blockscout</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1400}>
                                <img src={imgSrc(collection, 2)} alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href={openseaUrl(collection, 2)} className="h6" target="_blank">View on Blockscout</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1600}>
                                <img src={imgSrc(collection, 3)} alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href={openseaUrl(collection, 3)} className="h6" target="_blank">View on Blockscout</Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-05.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 5</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1200}>
                                <img src="/assets/images/items/montono-06.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 6</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1400}>
                                <img src="/assets/images/items/montono-07.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 7</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1600}>
                                <img src="/assets/images/items/montono-08.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 8</Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
