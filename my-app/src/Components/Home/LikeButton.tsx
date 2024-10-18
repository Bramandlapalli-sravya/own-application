import React from "react";
import { LikeButtonStyles } from "./styles.ts";
import _ from "lodash";
import { clear } from "console";

const LikeButton = () => {
    const [like, setLike] = React.useState<boolean>(false);
    const [isLiking, setIsLiking] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>('');

    const handleClick = async () => {
        if (isLiking) return;

        setIsLiking(true);
        const button = document.querySelector('button') as HTMLButtonElement;
        button.textContent = 'liking...';

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ like: !like })
        };

        try {
            const response = await fetch('https://www.greatfrontend.com/api/questions/like-button', requestOptions);
            const res = await response.json();

            if (response.ok) {
                setLike(!like);
                button.textContent = 'liked';
            } else {
                setError(res.message || 'An error occurred');
                button.textContent = 'like';
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred');
            button.textContent = 'like';
        } finally {
            setIsLiking(false);
        }
    };

    const mydebounce = (cb, dep) => {
        let timer;
        clearTimeout(timer);
        return function (...args) {
            timer = setTimeout(() => {
                cb(...args);
            }, dep)
        }
    }

    var debounce = mydebounce(() => {
        console.log('debounced');
    }, 800);

    debounce();

    return (
        <LikeButtonStyles>
            <button className={like ? 'likedbtn' : ''} onClick={handleClick}>
                {like ? 'liked' : 'like'}
            </button>
            {error && <div>{error}</div>}
        </LikeButtonStyles>
    );
};

export default LikeButton;
