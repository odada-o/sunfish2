'use client';

import React from 'react';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { useSelectedLayoutSegments } from 'next/navigation';

const DiaryUnlockedLayout = ({ children }) => {
    const segments = useSelectedLayoutSegments();
    const isNewDiaryPage = segments.includes('newdiary');

    // pimple 페이지일 경우 Header를 렌더링하지 않음
    if (isNewDiaryPage) {
        return <>{children}</>;
    }
    return (
        <>
            <Header />
            <Main className='bg-custom-blue-200'>{children}</Main>
        </>
    );
};

export default DiaryUnlockedLayout;
