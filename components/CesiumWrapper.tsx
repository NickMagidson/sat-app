'use client'

import dynamic from 'next/dynamic';
import React from 'react';
import type { CesiumType } from '../app/types/cesium';
import type { Position } from '../app/types/position';

const CesiumDynamicComponent = dynamic(() => import('./CesiumComponents'), {
    ssr: false
});

export const CesiumWrapper:React.FunctionComponent<{
    positions: Position[]
}> = ({
    positions
}) => {
    const [CesiumJs, setCesiumJs] = React.useState<CesiumType | null>(null);
    
    React.useEffect(() => {
        if (CesiumJs !== null) return
        
        const loadCesium = async () => {
            try {
                // Set the base URL before importing Cesium
                (window as any).CESIUM_BASE_URL = '/cesium/';
                
                const CesiumImportPromise = import('cesium');
                const promiseResults = await Promise.all([CesiumImportPromise]);
                const { ...Cesium } = promiseResults[0];
                setCesiumJs(Cesium);
            } catch (error) {
                console.error('Error loading Cesium:', error);
            }
        };
        
        loadCesium();
    }, [CesiumJs]);

    return (
        CesiumJs ? <CesiumDynamicComponent CesiumJs={CesiumJs} positions={positions} /> : null
    )
}

export default CesiumWrapper;