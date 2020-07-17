$(function() {
  $('.link-to-top').click(function() {
    var topTemplate = `<div class="clinic-image">
                      <img src="./../images/in01.jpg" alt="画像">
                    </div>
                    <div class="news-box default-text">
                      <div class="news">
                        <h3 class="contents-title">新着情報</h3>
                        <div class="news__text-box">
                          <dl>
                            <dt>2012年08月01日</dt>
                            <dd>【診療時間変更のお知らせ】長期休診の前日8月11日は、通常より1時間長く診療をすることにしました。ご予約をお待ちしております。</dd>
                            <dt>2012年07月24日</dt>
                            <dd>【8月の休診のお知らせ】8月12日～16日の間は休診とさせていただきます。何卒よろしくお願いいたします。</dd>
                            <dt>2012年07月02日</dt>
                            <dd>【こどもデンタル教室のご案内】毎月第2土曜日に行っているこどもデンタル教室では、参加してくださるお子様を募集しております。</dd>
                            <dt>2012年06月20日</dt>
                            <dd>【7月休診日のお知らせ】7月は土日祝日以外の休診日はありません。ご来院お待ちしております。</dd>
                            <dt>2012年06月01日</dt>
                            <dd>ホームページをリニューアルしました。</dd>
                          </dl>
                        </div>
                      </div>
                    </div>`
    $('.page-main-box').empty();
    $('.page-main-box').append(topTemplate);
  });

  $('.link-to-clinic').click(function() {
    var clinicTemplate = `<div class="introduce-box default-text">
                      <h2 class="title">医院紹介</h2>
                      <div class="contents-box">
                        <h3 class="contents-title">診療コンセプト</h3>
                        <div class="concept-box">
                          <h3 class="concept-box__title">予防の大切さを知ってもらう</h3>
                          <div class="concept-box__text">
                            <p>毎月行っている「こどもデンタル教室」では、お子さんたちに虫歯や口腔内の疾患の予防を指導しています。</p>
                            <p>正しい歯磨きのやり方、しっかり噛むことでどのような効果があるのか、進行した虫歯の恐ろしさなど…大人の方にも是非聞いていただきたい内容です。</p>
                            <p>お子さんたちは真剣に内容に取り組んでくれています。検診の際に歯の一本一本をチェックして、「お家で実践してくれている。保護者の方も協力してくださっているのだな」と成果を垣間見ることができます。</p>
                            <p>こういった取り組みの始まりは、一時期のお子さんたちの虫歯の増加が発端になっています。</p>
                            <p>医院に通ってくださるお子さんや、検診で伺った小学校の児童さんの歯の状態が非常によくなかったのです。原因は様々だと思いますが、正しく予防さえできればすぐに改善できるのはわかりました。皆さん、知らないだけなのです。</p>
                            <p>以前は歯医者さんに対して「痛いことをされる怖いところ」だと思われていましたが、今では少し変わってきて「痛くならないようにしてくれるところ」だと思っていただけているみたいです。</p>
                            <p>教室を始めて、顔を出してくださるお子さんは少しずつ増えてきました。今では翌月の予約がすぐに埋まってしまうようなありがたい状態です。</p>
                            <p>一も二もなく、まずは予防することです。</p>
                            <p>虫歯になっても削ってしまえば済むことでは？と思われる方も少なくありませんが、歯は大切な臓器です。減らしたり失ったりすることはよいことではありません。</p>
                            <p>歯医者さんは、歯を大切にする方法を教えるところに変わっていくべきなのです。</p>
                            <p>私たちは、予防するという医療を地域に根付かせていきたいと日々努力しています。</p>
                          </div>
                        </div>
                        <h3 class="contents-title">休診日・診療案内</h3>
                        <div class="reception-box">
                          <table>
                            <tr>
                              <th></th>
                              <th>月</th>
                              <th>火</th>
                              <th>水</th>
                              <th>木</th>
                              <th>金</th>
                            </tr>
                            <tr>
                              <td>午前</td>
                              <td>●</td>
                              <td>●</td>
                              <td>●</td>
                              <td>●</td>
                              <td>●</td>
                            </tr>
                            <tr>
                              <td>午後</td>
                              <td>●</td>
                              <td>●</td>
                              <td>午後休診</td>
                              <td>●</td>
                              <td>●</td>
                            </tr>
                          </table>
                          <div class="reception-box__text-box">
                            <p><span>休診日</span>土日祝日・水曜日午後休診</p>
                            <p><span>診療時間</span>午前　9:00～13:00 / 午後　14:00～19:00</p>
                            <p>
                              当院では、ご予約の患者さんを優先して診察しております。
                              <br>
                              ご来院の際は、ぜひご予約をお願いいたします。
                            </p>
                            <p>
                              ご予約はお電話で
                              <br>
                              03-0000-0000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>`
    $('.page-main-box').empty();
    $('.page-main-box').append(clinicTemplate)
  });
});