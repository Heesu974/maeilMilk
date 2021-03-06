class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="inner">
            <div class="footer-content">
                <div class="content-contact">
                    <h1>Contact US</h1>
                    <h2>1588-1539</h2>
                    <h3>새로운 식문화를 창조하는 글로벌리더 매일유업</h3>
                </div>
                <div class="content-location">
                    <a class="modalBtn" data-alt="modal5" href="recruit-policy-1.html">개인정보처리방침</a>
                    <a class="modalBtn" data-alt="modal7" href="recruit-policy-2.html">이메일무단수집거부</a>
                    <a class="modalBtn" data-alt="modal9" href="#none">찾아오시는 길</a>
                    <span>&copy;Maeil Dairies Co, Ltd All rights reserved</span>
                </div>
                <div class="content-sns">
                    <p>SNS</p>
                    <div class="sns-container">
                        <div class="fb">
                            <a href="https://www.facebook.com/maeili">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div class="twitter">
                            <a href="https://twitter.com/freshmaeil">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div class="kakao">
                            <a href="https://story.kakao.com/ch/maeil">
                                <i class="fas fa-quote-right"></i>
                            </a>
                        </div>
                        <div class="youtube">
                            <a href="https://www.youtube.com/user/maeili2mo">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                        <div class="naver">
                            <a href="https://post.naver.com/my.nhn?memberNo=10582084">
                                <i class="fab fa-blogger-b"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            <div class="modal modal5">
                <div class="value-container">
                    <i class="fas fa-times-circle"></i>
                    <img src="images/recruit-value.png" alt="">
                </div>
            </div>
            <div class="modal modal7">
                <div class="value-container">
                    <i class="fas fa-times-circle"></i>
                    <img src="images/recruit-value.png" alt="">
                </div>
            </div>
            <div class="modal modal9">
                <div class="map-container">
                    <i class="fas fa-times-circle"></i>
                    <h1>찾아오시는 길</h1>
                    <div id="map"><iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12648.657938525486!2d126.9790562!3d37.5747443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xacaad5cec87ea944!2z66ek7J287Jyg7JeFKOyjvCk!5e0!3m2!1sko!2skr!4v1626313655212!5m2!1sko!2skr"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
                    <div id="map-content">
                        <h3> 본사 주소: 서울특별시 종로구 중학동 종로1길 50 더케이트윈타워</h3>
                        <p><i class="fas fa-bus"></i> <b>지선</b> 7016 1711</p>
                        <p><i class="fas fa-bus"></i> <b>광역</b> 3000</p>
                        <p><i class="fas fa-bus"></i> <b>간선</b> 109 502 708 261 702B</p>
                        <p><i class="fas fa-subway"></i> <b>3호선</b> 경복궁역</p>
                        <p><i class="fas fa-subway"></i> <b>5호선</b> 광화문역</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>`

    }
}
customElements.define('my-footer', MyFooter);