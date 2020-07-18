export function headerTemplate() {
  let header = `<header class="site-header">
                  <div class="inner">
                    <div class="site-header__title">
                      <h1 class="site-header__title__img">
                        <a href="index.html">
                          <img src="./../images/siteTitle.png" alt="Dental Clinic">
                        </a>
                      </h1>
                      <div class="contact-box default-text">
                        <p class="contact-box__title">“地域に根付いた歯科医院” デンタル クリニック</p>
                        <div class="contact-box__reception">
                          <div class="contact-box__reception__tel">
                            <p class="phone-number">03-0000-0000</p>
                          </div>
                          <p class="contact-box__reception__time">予約受付時間 10:00～19:30 <span class="attention">日祝 休診</span></p>
                        </div>
                      </div>
                    </div>
                    <nav class="site-header__nav">
                      <a href="index.html">トップページ<br><span class="sub-text">HOME</span></a>
                      <a href="clinic.html">医院紹介<br><span class="sub-text">CLINIC</span></a>
                      <a href="service.html">診療案内<br><span class="sub-text">SERVICE</span></a>
                      <a href="staff.html">院長・スタッフ紹介<br><span class="sub-text">STAFF</span></a>
                      <a href="access.html">アクセス<br><span class="sub-text">ACCESS</span></a>
                    </nav>
                  </div>
                </header>`
  $('.main-area').before(header);
}

export function menuTemplate() {
  let menu = `<div class="menu-box">
                <div class="menu">
                  <h3 class="menu__title">一般歯科</h3>
                  <ul class="default-text">
                    <li><a href="service.html#service1" class="link-general">虫歯治療</a></li>
                    <li><a href="service.html#service2" class="link-general">歯周病治療</a></li>
                    <li><a href="service.html#service3" class="link-general">入れ歯</a></li>
                    <li><a href="service.html#service4" class="link-general">予防歯科</a></li>
                  </ul>
                </div>

                <div class="menu">
                  <h3 class="menu__title">審美歯科</h3>
                  <ul class="default-text">
                    <li><a href="service.html#service5" class="link-beauty">ホワイトニング</a></li>
                    <li><a href="service.html#service6" class="link-beauty">オーラルセラミック</a></li>
                    <li><a href="service.html#service7" class="link-beauty">セラミックインレー</a></li>
                    <li><a href="service.html#service8" class="link-beauty">PMTC</a></li>
                  </ul>
                </div>
              </div>`
  $('.page-main-box').before(menu);
  $('.main-area').addClass('clearfix');
}

export function footerTemplate() {
  let footer = `<footer class="site-footer">
                  <div class="inner">
                    <nav class="footer-nav">
                      <ul>
                        <li><a href="index.html">トップページ</a></li>
                        <li><a href="clinic.html">医院紹介</a></li>
                        <li><a href="service.html">診療案内</a></li>
                        <li><a href="staff.html">院長・スタッフ紹介</a></li>
                        <li><a href="access.html">アクセス</a></li>
                      </ul>
                    </nav>
                    <div class="footer-address">
                      <p class="default-text">デンタル クリニック 東京都新宿区市谷左内町21-13 TEL:03-0000-0000</p>
                    </div>
                    <div class="copyright">
                      <p class="default-text">Copyright 2012 Dental Clinic CO.,LTD All Rights Reserved.</p>
                    </div>
                  </div>
                </footer>`
  $('.main-area').after(footer);
}