body {
    color: #fff;
}

.choice-container {
    display: flex;
    margin-bottom: 0.8rem;
    width: 100%;
    border-radius: 4px;
    background: rgb(18, 93, 255);
    font-size: 3rem;
    min-width: 80rem;
}

.choice-container:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(6, 103, 247, 0.5);
    transform: scale(1.02);
    transform: transform 100ms;
}

.choice-prefix {
    padding: 2rem 2.5rem;
    color: white;
}

.choice-text {
    padding: 2rem;
    width: 100%;
}

.correct {
    background: linear-gradient(32deg, rgba(11, 223, 36) 0%, rgb(41, 232, 111) 100%);
}

.incorrect {
    background: linear-gradient(32deg, rgba(230, 29, 29, 1) 0%, rgb(224, 11, 11, 1) 100%);
}

/* Heads up Display */
#hud {
    display: flex;
    justify-content: space-between;
}

.hud-prefix {
    text-align: center;
    font-size: 2rem;
}

.hud-main-text {
    text-align: center;
}

#progressBar {
    width: 20rem;
    height: 3rem;
    border: 0.2rem solid rgb(11,223,36);
    margin-top: 2rem;
    border-radius: 50px;
    overflow: hidden;
}

#progressBarFull {
    height: 100%;
    background: rgb(11,223,36);
    width: 0%;
}

@media screen and (max-width: 768px) {
    .choice-container {
        min-width: 40rem;
    }
} 