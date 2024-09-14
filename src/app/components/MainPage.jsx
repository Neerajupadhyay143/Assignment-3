import React from 'react';
import MenuBar from './MenuBar';
import DisplayComponent from './DisplayComponent';

function MainPage() {
    return (
        <div className='flex flex-row'>
            {/* Hide the MenuBar on mobile view, show only on small screens and above */}
            <div className='hidden sm:block w-[90px] relative'>
                <MenuBar />
            </div>

            {/* DisplayComponent takes full width on mobile but maintains layout on desktop */}
            <div className='flex-1  bg-[#01B0F1]/10 sm:ml-20'>
                <DisplayComponent />
            </div>
        </div>
    );
}

export default MainPage;
