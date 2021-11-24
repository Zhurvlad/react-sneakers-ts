import ContentLoader from "react-content-loader";
import React, {FC} from "react";



export const LoadingBlock:FC = () => {
    return (
        <ContentLoader
            className={'content__card'}
            speed={2}
            width={160}
            height={265}
            viewBox="0 0 160 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="160" height="160" />
            <rect x="0" y="167" rx="5" ry="5" width="160" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
    )
}

