import React from 'react'
import '../assets/fonts/Fonts.css'
import './Inicio.css'

function Inicio() {
    return(
        <div className='BannerInicio'>
            <div className='BannerInicio__imageWrapper'>
                <svg className='BannerInicio__svg' viewBox="0 0 186 86" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="186" height="86" fill="url(#pattern0_118_454)"/>
                    <defs>
                        <pattern id="pattern0_118_454" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_118_454" transform="scale(0.00537634 0.0116279)"/>
                        </pattern>
                        <image id="image0_118_454" width="186" height="86" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>
                <div className='BannerInicio__overlay' />
            </div>
            <div className='BannerInicio__text'>
                <span>Apenas Sprites!</span>
                <strong>Há Gratuitos e sob encomenda</strong>
            </div>
        </div>
    );
}


export default Inicio;