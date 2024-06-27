import styles from "./Footer.module.sass"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.links}>
                <li><a href="https://classroom.google.com/u/1/c/NjIxNzEzMDc0ODU2"
                    className={styles.classroomLogo}><b>Google</b> Classroom</a></li>
                <li><a href="https://ampli.com.ua/"
                    className={styles.ampliLogo}>
                    <svg width="106" height="41" viewBox="0 0 106 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.94381 28.302C10.5618 28.302 11.1515 28.288 11.7128 28.26C12.1641 28.2428 12.6141 28.2007 13.0608 28.134V23.375C12.8081 23.319 12.4291 23.263 11.9238 23.207C11.4624 23.1535 10.9983 23.1255 10.5338 23.123C9.97742 23.1207 9.4215 23.1558 8.86981 23.228C8.39456 23.285 7.932 23.4202 7.50081 23.628C7.12652 23.808 6.80665 24.0841 6.57381 24.428C6.33764 24.8062 6.22026 25.2464 6.23681 25.692C6.19501 26.091 6.26556 26.4937 6.44049 26.8547C6.61542 27.2157 6.88777 27.5206 7.22681 27.735C8.06866 28.1544 9.00446 28.3497 9.94381 28.302ZM9.43881 9.939C11.0071 9.89821 12.5717 10.1116 14.0718 10.571C15.1946 10.923 16.214 11.5448 17.0408 12.382C17.7971 13.1905 18.3399 14.1749 18.6198 15.246C18.9412 16.469 19.0969 17.7296 19.0828 18.994V32.05C18.1841 32.2467 16.9348 32.4783 15.3348 32.745C13.4115 33.035 11.4678 33.1688 9.52281 33.145C8.21303 33.1576 6.90564 33.0306 5.62281 32.766C4.54813 32.5511 3.52549 32.1292 2.61181 31.524C1.77787 30.9579 1.10938 30.1804 0.674807 29.271C0.196479 28.1989 -0.0329216 27.0324 0.00380746 25.859C-0.0320671 24.7143 0.236767 23.5807 0.782808 22.574C1.28516 21.6933 2.00249 20.9543 2.86781 20.426C3.79098 19.872 4.80229 19.4803 5.85781 19.268C7.0087 19.0263 8.18182 18.9063 9.35781 18.91C10.0822 18.9054 10.8063 18.9404 11.5268 19.015C12.0457 19.0647 12.5597 19.1563 13.0638 19.289V18.699C13.0854 18.2274 13.0106 17.7564 12.844 17.3147C12.6774 16.873 12.4224 16.4699 12.0948 16.13C11.1385 15.382 9.92943 15.034 8.72181 15.159C7.66453 15.1584 6.60865 15.2359 5.56281 15.391C4.64282 15.5156 3.73806 15.7344 2.86281 16.044L2.06281 10.99C2.42814 10.878 2.88447 10.7587 3.43181 10.632C3.97914 10.5053 4.57581 10.393 5.22181 10.295C5.86781 10.197 6.54881 10.1127 7.26481 10.042C7.98081 9.97133 8.70514 9.937 9.43781 9.939H9.43881ZM36.9388 20.932C37.0512 19.4556 36.783 17.9751 36.1598 16.632C35.8694 16.1999 35.4675 15.8544 34.9968 15.6319C34.5261 15.4094 34.0041 15.3182 33.4858 15.368C33.0925 15.368 32.6855 15.389 32.2648 15.431C31.8441 15.473 31.4371 15.522 31.0438 15.578V32.678H24.7688V11.278C25.3021 11.1373 25.9268 10.99 26.6428 10.836C27.3588 10.682 28.1168 10.5417 28.9168 10.415C29.7168 10.2883 30.5381 10.19 31.3808 10.12C32.2235 10.05 33.0518 10.015 33.8658 10.015C35.1928 9.9689 36.5165 10.1763 37.7658 10.626C38.661 10.9725 39.4933 11.4634 40.2298 12.079C41.175 11.4105 42.2218 10.8986 43.3298 10.563C44.3699 10.2186 45.4563 10.0338 46.5518 10.015C48.0396 9.96497 49.5222 10.2156 50.9108 10.752C51.9849 11.1946 52.9224 11.914 53.6278 12.837C54.3242 13.7866 54.7991 14.88 55.0178 16.037C55.2822 17.3968 55.4092 18.7798 55.3968 20.165V32.674H49.1128V20.923C49.2253 19.4466 48.9571 17.9661 48.3338 16.623C48.0434 16.1909 47.6415 15.8454 47.1708 15.6229C46.7001 15.4004 46.1781 15.3092 45.6598 15.359C45.1806 15.3831 44.7065 15.4681 44.2488 15.612C43.7202 15.7471 43.2147 15.9601 42.7488 16.244C42.949 16.9092 43.076 17.5943 43.1278 18.287C43.1838 19.003 43.2118 19.7697 43.2118 20.587V32.675H36.9408L36.9388 20.932ZM75.2658 21.774C75.3491 20.1218 74.8905 18.4876 73.9598 17.12C73.5062 16.5339 72.9157 16.068 72.2401 15.7632C71.5645 15.4585 70.8244 15.3241 70.0848 15.372C69.5235 15.372 69.0041 15.393 68.5268 15.435C68.0495 15.477 67.6565 15.526 67.3478 15.582V26.912C67.8248 27.2 68.3432 27.4131 68.8848 27.544C69.5097 27.7116 70.1538 27.7967 70.8008 27.797C73.7788 27.797 75.2678 25.7893 75.2678 21.774H75.2658ZM81.6658 21.606C81.6839 23.1868 81.471 24.7618 81.0338 26.281C80.6577 27.5974 80.0283 28.8277 79.1808 29.903C78.3676 30.9123 77.331 31.7188 76.1528 32.259C74.8414 32.8421 73.4177 33.1295 71.9828 33.101C71.1617 33.1061 70.3425 33.0213 69.5398 32.848C68.7881 32.6816 68.0546 32.4418 67.3498 32.132V40.471H61.0748V11.283C61.6361 11.1143 62.2818 10.953 63.0118 10.799C63.7418 10.645 64.5085 10.5117 65.3118 10.399C66.1118 10.287 66.9261 10.1957 67.7548 10.125C68.5835 10.0543 69.3768 10.0193 70.1348 10.02C71.8 9.99235 73.4561 10.2706 75.0208 10.841C76.3796 11.3437 77.6135 12.1344 78.6378 13.159C79.6449 14.195 80.4137 15.4382 80.8908 16.802C81.4288 18.3453 81.6925 19.9708 81.6698 21.605L81.6658 21.606ZM86.1518 32.683L86.2458 1.01099L92.5218 0L92.2468 32.683H86.1518ZM104.778 32.683H98.5038V10.529H104.78L104.778 32.683ZM105.368 4.127C105.394 4.63414 105.307 5.14072 105.114 5.61044C104.921 6.08016 104.627 6.5014 104.252 6.84399C103.531 7.495 102.591 7.84876 101.62 7.834C100.649 7.84876 99.7084 7.495 98.9878 6.84399C98.613 6.5014 98.3186 6.08016 98.1256 5.61044C97.9327 5.14072 97.846 4.63414 97.8718 4.127C97.846 3.61985 97.9327 3.11328 98.1256 2.64355C98.3186 2.17383 98.613 1.75259 98.9878 1.41C99.7084 0.758989 100.649 0.405237 101.62 0.419998C102.591 0.405237 103.531 0.758989 104.252 1.41C104.627 1.75222 104.923 2.1733 105.116 2.64304C105.31 3.11278 105.397 3.61954 105.372 4.127H105.368Z"
                            fill="white"></path>
                    </svg>
                </a></li>
            </ul>
            <div>
                This site was created by <a href="/about">Furry Dev</a> as a graduation
                project for <b>AFE_34</b> group
            </div>
        </footer>
    )
}