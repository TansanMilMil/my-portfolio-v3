import { useLayoutEffect } from "react";
import Styles from '../styles/index/index.module.scss';
import OwnStyles from '../styles/profile/profile.module.scss';
import Typewriter from 'typewriter-effect';

export default function Profile() {
    useLayoutEffect(() => {
        document.title = 'Profile - My Portfolio';
    });

    return (
        <div>
            <h1 id="profile" className={Styles.headerText}>
                <Typewriter onInit={(typewriter) => {
                    typewriter
                        .changeDelay(60)
                        .typeString('Profile')
                        .start();
                }}/>
            </h1>

            <div className="row justify-content-center">
                <div className="col-12 col-sm-5 col-xl-3">
                    <div className={`me-5 mb-5 text-center ${OwnStyles.profile}`}>
                        <img src="images/profile.png" alt="profile"/>
                    </div>
                </div>
                <div className="col-12 col-sm-7 col-xl-9">
                    <div>
                        <div className={Styles.keyText}>Name</div>
                        <div>T.M</div>
                    </div>

                    <div className="mt-4">
                        <div className={Styles.keyText}>BirthPlace</div>
                        <div>北海道</div>
                    </div>

                    <div className="mt-4">
                        <div className={Styles.keyText}>Address</div>
                        <div>大阪市内</div>
                    </div>

                    <div className="mt-4">
                        <div className={Styles.keyText}>Description</div>
                        <div>
                            <div>
                                大学卒業後、2013年から約4年半、委託給食業界の新卒総合職（ルート営業）として勤務。<br/>
                                その後小学生から趣味で触っていたWebサイトの知識を業務に活かしたいと思い、Webエンジニアに転職しました。<br/>
                                <br/>
                                転職先の自社開発の企業では、BtoBのWebアプリの開発を約3年半担当し、設計、開発、導入サポート、保守までの一連のフローを経験しました。<br/>
                                現在は、PL、PMとして自社Webアプリの利用ユーザー拡大の為の開発しており、利用者からのフィードバックの反映、技術サポート、アプリの保守がメインの業務です。<br/>
                                <br/>
                                フロントエンド・バックエンドの開発からインフラの設計・構築まで、開発に必要な技術は幅広く身に付けてきました。<br/>
                                業務外では、日々興味を持ったことや学んだことをアウトプットする場として<a href="https://tm-progapp.hatenablog.com/" target="_blank" rel="noreferrer noopener">技術ブログ</a>を運営中です。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  