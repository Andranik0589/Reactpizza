import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <circle cx="137" cy="110" r="109" />
        <rect x="0" y="209" rx="0" ry="0" width="176" height="0" />
        <rect x="2" y="269" rx="9" ry="9" width="280" height="88" />
        <rect x="2" y="234" rx="8" ry="8" width="280" height="19" />
        <rect x="1" y="384" rx="13" ry="13" width="95" height="30" />
        <rect x="130" y="371" rx="26" ry="26" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton
