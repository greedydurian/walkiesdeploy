import React from "react";
import Faq from "react-faq-component";

const data = {
    title: <p className='text-4xl text-center p-3'>FAQ</p>,
    rows: [
        {
            title: "Where are we located?",
            content: <p className='text-sm'>We are located in <a class='underline decoration-green-400'>Pasir Ris!</a></p>,
        },
        {
            title: "How much are your services?",
            content:
                <p className='text-sm'>To house a small dog, it will be <a class="underline decoration-pink-300">15/night</a> and for a big dog, it will be <a class="underline decoration-pink-500">40/night,</a></p>
        },
        {
            title: "How will payment be made?",
            content:
            <p className='text-sm'>You can contact us for further details. We accept both crypto and traditional cash</p>,
        },
        {
            title: "What do you feed the dogs?",
            content: <p className='text-sm'>We feed them <a class="underline decoration-blue-500">steamed chicken/beef</a>. However, we can tailor to your pets dietary requirements</p>,
        },
        {
            title: "Do you accept all dogs?",
            content:<p className='text-sm'>Yes, however, it will be <a class="underline decoration-red-700">subjected to the host, aka Taco</a></p>,
        },
        {
            title: "Is transportation provided?",
            content:<p className='text-sm'>Unfortunately no, you will have to bring the dog over to our place!</p>,
        },
        
    ],
};

const styles = {
    
    titleTextColor: "black",
    rowTitleColor: "grey",
    transitionDuration: "0.5s"
    
    
};




const FaqCard = () => {

    return (
        <div className='text-black text-center uppercase m-10 p-20 border-solid border-2 rounded-2xl leading-loose '>
            <Faq
                data={data}
                styles={styles}
              
            />
        </div>
    );
}

export default FaqCard;


