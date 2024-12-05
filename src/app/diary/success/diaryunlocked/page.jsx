'use client';

import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Angry, Annoyed, CirclePlus, Frown, Smile, Meh } from 'lucide-react';
import DiaryCard from './components/DiaryCard';
import Link from 'next/link';

const moodIconMap = {
    Smile: Smile,
    Angry: Angry,
    Frown: Frown,
    Annoyed: Annoyed,
    Meh: Meh,
};

const DiaryUnlockedPage = () => {
    const [diaries, setDiaries] = useState([]);

    useEffect(() => {
        const storedDiaries = JSON.parse(localStorage.getItem('diaries') || '[]');
        setDiaries(storedDiaries);
    }, []);

    return (
        <>
            <Flex pt='50px' justify='center'>
                <Image
                    src='/images/pattern/main/main-bg1.png'
                    alt='bg1'
                    width={390}
                    height={180}
                    className='opacity-50'
                />
            </Flex>
            <Flex
                width='100%'
                gap='3'
                direction='column'
                p='0 20px'
                className='absolute top-48 left-0'
                flexWrap='wrap'
                justifyContent='space-between'
            >
                <span className='text-xs text-gray-600'>2024</span>
                <DiaryCard MoodIcon={Smile} fill='lightgreen' />
                <DiaryCard MoodIcon={Angry} fill='tomato' />
                <DiaryCard MoodIcon={Frown} fill='#4892E0' />
                <DiaryCard MoodIcon={Annoyed} fill='#e0d648' />
                {diaries.map((diary, index) => {
                    const MoodIcon = moodIconMap[diary.mood.name];
                    return (
                        <DiaryCard
                            key={index}
                            MoodIcon={MoodIcon}
                            fill={diary.mood.fill}
                            title={diary.title}
                            text={diary.text}
                        />
                    );
                })}
            </Flex>
            <Box className='fixed bottom-20 left-1/2 -translate-x-1/2'>
                <Link href='/diary/success/diaryunlocked/newdiary'>
                    <CirclePlus color='white' fill='#4892E0' size={50} strokeWidth={1} />
                </Link>
            </Box>
        </>
    );
};

export default DiaryUnlockedPage;
