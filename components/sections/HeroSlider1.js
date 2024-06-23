
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, usePublicClient, useWriteContract } from "wagmi"
import { addressParse } from "@/components/utils/address"
import { useCollection } from "../providers/CollectionProvider"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import AIMintFactoryABI from "../utils/AIMintFactoryABI"
import axios from "axios"

const swiperOptions1 = {
    modules: [Autoplay, Pagination, Navigation],
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    autoplay: {
        delay: 1,
    },
    speed: 2000,
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 1,
        reverseDirection: true,
    },
    speed: 2000,
}
const swiperOptions3 = {
    modules: [Autoplay, Pagination, Navigation],
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 1,
    },
    speed: 2000,
}

export default function HeroSlider1() {
    const { open } = useWeb3Modal()
    const { address, isConnected } = useAccount()
    const [ collection, dispatch ] = useCollection()
    const [ prompt, setPrompt ] = useState()

    const { writeContractAsync } = useWriteContract()
    const publicClient = usePublicClient()

    return (
        <>

            <section className="tf-section hero-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-12">
                            <div className="block-text pt-24">
                                <h6 className="sub-title mb-6" data-aos="fade-up">FiNANCiE Event</h6>
                                <h2 className="title mb-26" data-aos="fade-up">イベントに参加して報酬をゲットしよう</h2>
                                <p className="desc mb-43" data-aos="fade-up">
                                    FiNANCiEのイベントやコミュニティにトークンでチェックインして、限定報酬を手に入れよう。
                                </p>

                                {true ? (
                                    <div class="d-flex flex-column flex-lg-row gap-4">
                                        <Link href="#events" className="btn-action style-2 text-center" data-aos="fade-up" data-aos-duration={1200}>
                                            Discover Events
                                        </Link>

                                        <Link href="https://financie.jp" target="_blank" className="btn-action style-2 text-center" data-aos="fade-up" data-aos-duration={1200}>
                                            FiNANCiE App
                                        </Link>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="d-flex w-100 mb-3">
                                            <div style={{ flexGrow: 1 }}>
                                                <input className="form-control" type="text" placeholder="" required value={prompt} onChange={e => setPrompt(e.target.value)} />
                                            </div>
                                        </div>

                                        <div style={collection.loading ? { opacity: 0.5, pointerEvents: 'none' } : {}}>
                                            <a className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200} onClick={async () => {
                                                try {
                                                    dispatch({ type: 'SET_LOADING', payload: true })

                                                    const collectionId = uuid()

                                                    const hash = await writeContractAsync({
                                                        address: process.env.NEXT_PUBLIC_FACTORY_ADDRESS,
                                                        abi: AIMintFactoryABI,
                                                        functionName: 'cloneNFT',
                                                        args: [
                                                            prompt,
                                                            'AIMINT',
                                                            collectionId,
                                                            address,
                                                            4,
                                                        ],
                                                    })

                                                    const tx = await publicClient.waitForTransactionReceipt({ hash })

                                                    dispatch({ type: 'SET_CONTRACT_ADDRESS', payload: tx.logs[0].address })

                                                    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/generate-images`, {
                                                        collection_id: collectionId,
                                                        prompt,
                                                    })

                                                    dispatch({ type: 'SET_COLLECTION_ID', payload: collectionId })
                                                } catch (err) {
                                                    console.error(err)
                                                } finally {
                                                    dispatch({ type: 'SET_LOADING', payload: false })
                                                }
                                            }}>Mint</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-12 d-none d-md-block">
                            <div className="content-right d-flex">
                                <div className="swiper-container swiper mySwiper1 swiper-h">
                                    <Swiper {...swiperOptions1} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="bg-2">
                                                <img src="/assets/images/events/wavehack.png" alt="AI-Mint" style={{ 
                                                    width: 500,
                                                    height: 320,
                                                    borderRadius: 10,
                                                    overflow: "hidden",
                                                    objectFit: "cover",
                                                    borderWidth: 1,
                                                }}  />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-1">
                                                <img src="/assets/images/events/ivs-demo.avif" alt="AI-Mint" style={{ 
                                                    width: 500,
                                                    height: 320,
                                                    borderRadius: 20,
                                                    overflow: "hidden",
                                                    objectFit: "cover",
                                                    borderWidth: 1,
                                                }}  />
                                                {/* <img src="/assets/images/items/item-01.jpeg" alt="AI-Mint" width={170} height={170}/> */}
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-2">
                                                <img src="/assets/images/events/ivs-party.webp" alt="AI-Mint" style={{ 
                                                        width: 500,
                                                        height: 320,
                                                        borderRadius: 10,
                                                        overflow: "hidden",
                                                        objectFit: "cover",
                                                        borderWidth: 1,
                                                    }}  />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-2">
                                                <img src="/assets/images/events/ivs.webp" alt="AI-Mint" style={{ 
                                                        width: 500,
                                                        height: 320,
                                                        borderRadius: 10,
                                                        overflow: "hidden",
                                                        objectFit: "cover",
                                                        borderWidth: 1,
                                                    }}  />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-1">
                                                <img src="/assets/images/events/wavehackglobal.webp" alt="AI-Mint" style={{ 
                                                        width: 500,
                                                        height: 320,
                                                        borderRadius: 10,
                                                        overflow: "hidden",
                                                        objectFit: "cover",
                                                        borderWidth: 1,
                                                    }}  />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-2">
                                                <img src="/assets/images/events/exclusive-party.webp" alt="AI-Mint" style={{ 
                                                        width: 500,
                                                        height: 320,
                                                        borderRadius: 10,
                                                        overflow: "hidden",
                                                        objectFit: "cover",
                                                        borderWidth: 1,
                                                    }}  />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
