
import Link from "next/link"

export default function Portfolio1() {
    return (
        <>

            <section className="tf-section porfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Join</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Join To Mint Instantly</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Become an AI-Minter 
                                    Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-61">
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up">
                                <div className="icon">
                                    <img src="/assets/images/icon/wallet.png" alt="AI-Mint" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 01</p>
                                    <Link href="#" className="h5">
                                        Connect Your Wallet
                                    </Link>
                                    <p className="fs-18">Securely connect your digital wallet to the AI-Mint platform. This ensures your creations are safely stored and ready to be minted as NFTs. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="icon">
                                    <img src="/assets/images/icon/shopping-cart.png" alt="AI-Mint" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 02</p>
                                    <Link href="#" className="h5">
                                        Enter Your Prompt
                                    </Link>
                                    <p className="fs-18">Describe your vision in a few words. Our advanced AI will interpret your prompt to generate a unique piece of digital art that matches your description.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up">
                                <div className="icon">
                                    <img src="/assets/images/icon/folder.png" alt="AI-Mint" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 03</p>
                                    <Link href="#" className="h5">
                                        Customize Your Artwork
                                    </Link>
                                    <p className="fs-18">Use our intuitive tools to tweak and refine the generated art. Adjust colors, shapes, and other elements to make it truly yours.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="icon">
                                    <img src="/assets/images/icon/money-bag.png" alt="AI-Mint" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 04</p>
                                    <Link href="#" className="h5">
                                        Mint Your NFT
                                    </Link>
                                    <p className="fs-18">Once you're satisfied with your creation, mint it as a unique NFT with just a few clicks. Our secure blockchain integration ensures your NFT is verifiable and unique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
