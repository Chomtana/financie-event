
export default function Breadcrumb({ breadcrumbTitle, imgNum }) {
    return (
        <>

            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body ab">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">{breadcrumbTitle}</h2>
                                <p className="fs-24 mb-33">Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <img src={`/assets/images/items/${imgNum ? imgNum : "group-ntf"}.png`} alt="AI-Mint" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
