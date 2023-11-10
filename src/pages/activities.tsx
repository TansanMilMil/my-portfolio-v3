import { useEffect, useLayoutEffect } from "react";
import Styles from "../styles/index/index.module.scss";
import OwnStyles from "../styles/activities/activities.module.scss";
import Typewriter from "typewriter-effect";
declare var Luminous: any;

export default function Activities() {
  useLayoutEffect(() => {
    document.title = "Activities - My Portfolio";
  });

  useEffect(() => {
    const targetSelectors = [".aircon-conf", ".newspi-conf", ".portfolio-conf"];
    targetSelectors.forEach((selector, i) => {
      const className = `luminous-target-el-${i}`;
      const targetEl: HTMLElement = document.querySelector(
        selector,
      ) as HTMLElement;

      // avoid duplicated applying
      if (targetEl.classList.contains(className)) {
        return;
      }
      targetEl.classList.add(className);

      new Luminous(targetEl);
    });
  }, []);

  return (
    <div>
      <h1 id="activities" className={Styles.headerText}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.changeDelay(60).typeString("Activities").start();
          }}
        />
      </h1>

      <div className={OwnStyles.item}>
        <div className="d-flex align-items-stretch">
          <div className={OwnStyles.imageHeader}>
            <a
              href="https://tm-progapp.hatenablog.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={`${OwnStyles.bgImage} ${OwnStyles.blogImage}`}>
                {" "}
              </div>
            </a>
          </div>
          <div className={`flex-grow-1 ${OwnStyles.body}`}>
            <a
              href="https://tm-progapp.hatenablog.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <h3>技術ブログ</h3>
            </a>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>Description</div>
              <div>
                日々学んだことや開発に関連することをアウトプットする場として運営しています。
              </div>
              <div>
                その時々で興味のあることや、失敗談も随時書いていっています。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={OwnStyles.item}>
        <div className="d-flex align-items-stretch">
          <div className={`flex-grow-1 ${OwnStyles.body}`}>
            <a
              href="https://tm-progapp.hatenablog.com/entry/2020/11/14/002239"
              target="_blank"
              rel="noreferrer noopener"
            >
              <h3>AirController</h3>
            </a>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>Description</div>
              <div>
                Raspberry
                PiとReactで実装したスマホから赤外線操作で家電操作ができるWebアプリです。
              </div>
              <div>
                赤外線を発信する回路をブレッドボードで組み、Raspberry
                PiからGPIOを制御しています。
              </div>
              <div>
                Firebase HostingでホスティングしたWebサイト経由で、Raspberry
                Piを操作できるようになっており、外出先からでも自宅のエアコンや照明の操作が可能です。
              </div>
            </div>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>SourceCode</div>
              <li>
                <a
                  href="https://github.com/TansanMilMil/webcon-node"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Node.js(Raspberry Pi)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TansanMilMil/webcon-react"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  React
                </a>
              </li>
            </div>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>Configuration</div>
              <div>
                <a
                  className="aircon-conf"
                  href="https://cdn-ak.f.st-hatena.com/images/fotolife/t/tansantktk/20201115/20201115112908.png"
                >
                  <img
                    className={OwnStyles.conf}
                    src="https://cdn-ak.f.st-hatena.com/images/fotolife/t/tansantktk/20201115/20201115112908.png"
                    alt="AirController Configuration"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={OwnStyles.imageHeader}>
            <a
              href="https://tm-progapp.hatenablog.com/entry/2020/11/14/002239"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={`${OwnStyles.bgImage} ${OwnStyles.airconImage}`}>
                {" "}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={OwnStyles.item}>
        <div className="d-flex align-items-stretch">
          <div className={OwnStyles.imageHeader}>
            <a
              href="https://tm-progapp.hatenablog.com/entry/2020/11/22/122309"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={`${OwnStyles.bgImage} ${OwnStyles.newsPiImage}`}>
                {" "}
              </div>
            </a>
          </div>
          <div className={`flex-grow-1 ${OwnStyles.body}`}>
            <a
              href="https://tm-progapp.hatenablog.com/entry/2020/11/22/122309"
              target="_blank"
              rel="noreferrer noopener"
            >
              <h3>News-Pi</h3>
            </a>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>Description</div>
              <div>
                Raspberry PiとGCPのCloud Text-toSpeech
                APIで毎朝ニュースを取得して自動的に読み上げてくれるアプリです。
              </div>
              <div>
                cronでニュースを読み上げる時間を予め設定しておき、時刻になるとPythonコードを実行します。
              </div>
            </div>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>SourceCode</div>
              <li>
                <a
                  href="https://github.com/TansanMilMil/news-pi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Python(Raspberry Pi)
                </a>
              </li>
            </div>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>Configuration</div>
              <div>
                <a
                  className="newspi-conf"
                  href="https://cdn-ak.f.st-hatena.com/images/fotolife/t/tansantktk/20201121/20201121210720.png"
                >
                  <img
                    className={OwnStyles.conf}
                    src="https://cdn-ak.f.st-hatena.com/images/fotolife/t/tansantktk/20201121/20201121210720.png"
                    alt="News-Pi Configuration"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={OwnStyles.item}>
        <div className="d-flex align-items-stretch">
          <div className={`flex-grow-1 ${OwnStyles.body}`}>
            <h3>My Portfolio</h3>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>Description</div>
              <div>
                今、閲覧頂いているポートフォリオサイトです。React.jsで某IDE風のUIに仕上げました。
              </div>
              <div>AWSのCloudFrontでホスティングしています。</div>
            </div>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>SourceCode</div>
              <li>
                <a
                  href="https://github.com/TansanMilMil/my-portfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Next.js
                </a>
              </li>
            </div>
            <div className={OwnStyles.area}>
              <div className={Styles.keyText}>Configuration</div>
              <div>
                <a
                  className="portfolio-conf"
                  href="images/my-portofolio-v3-configuration.png"
                >
                  <img
                    className={OwnStyles.conf}
                    src="images/my-portofolio-v3-configuration.png"
                    alt="My Portfolio Configuration"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={OwnStyles.imageHeader}>
            <div className={`${OwnStyles.bgImage} ${OwnStyles.portfolioImage}`}>
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
