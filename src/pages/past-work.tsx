import { useLayoutEffect } from "react";
import Styles from '../styles/index/index.module.scss';
import OwnStyles from '../styles/past-work/past-work.module.scss';
import Typewriter from 'typewriter-effect';

export default function PastWork() {
    useLayoutEffect(() => {
        document.title = 'PastWork - My Portfolio';
    });

    return (
        <div>
            <h1 id="past-work" className={Styles.headerText}>
                <Typewriter onInit={(typewriter) => {
                    typewriter
                        .changeDelay(60)
                        .typeString('PastWork')
                        .start();
                }}/>
            </h1>

            <div className={OwnStyles.item}>
                <h3>社食・弁当予約アプリ</h3>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Terms</div>
                    <div>2019/03~2022/01</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Business in charge</div>
                    <div>PM, PL, SE, PG, 顧客サポート</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Configuration</div>
                    <div>
                        <li>AWS(Lambda, S3, RDS, CloudFront, ECS, StepFunctions, EventBridge, Glue, Cognito)</li>
                        <li>Angular</li>
                        <li>ASP.NET Core</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>Swift</li>
                        <li>PostgreSQL</li>
                    </div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Description</div>
                    <div>社員食堂や弁当の予約・実績管理をWeb上で実現するアプリです。</div>
                    <div>個人社員は、自身のスマホやPCからWebアプリを利用して予約をすることができます。</div>
                    <div>予約をした後、食堂でICカード付きの社員証をICカードリーダーにスキャンすることで喫食の記録を付けることが可能です。</div>
                    <div>喫食管理専用のアプリはSwiftで実装し、Appleストアで公開しています。</div>
                </div>
            </div>

            <div className={OwnStyles.item}>
                <h3>Web日報アプリ</h3>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Terms</div>
                    <div>2018/11~現在</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Business in charge</div>
                    <div>PM, PL, SE, PG, 顧客サポート</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Configuration</div>
                    <div>
                        <li>AWS(Lambda, S3, RDS, CloudFront, EventBridge, Cognito)</li>
                        <li>Angular</li>
                        <li>ASP.NET Core</li>
                        <li>PostgreSQL</li>
                    </div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Description</div>
                    <div>出退勤管理、スケジュール管理をWeb上で実現するアプリです。</div>
                </div>
            </div>

            <div className={OwnStyles.item}>
                <h3>Web承認管理アプリ</h3>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Terms</div>
                    <div>2018/08~2018/11</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Business in charge</div>
                    <div>PG</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Configuration</div>
                    <div>
                        <li>AWS(Lambda, S3, RDS, CloudFront, EventBridge, Cognito)</li>
                        <li>Angular</li>
                        <li>ASP.NET Core</li>
                        <li>PostgreSQL</li>
                    </div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Description</div>
                    <div>稟議書等の社内承認をWeb上で実施・管理するアプリです。</div>
                </div>
            </div>

            <div className={OwnStyles.item}>
                <h3>理美容向けWEB受発注アプリ</h3>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Terms</div>
                    <div>2018/05~2018/08</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Business in charge</div>
                    <div>PG</div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Configuration</div>
                    <div>
                        <li>AWS(Lambda, S3, RDS, CloudFront, EventBridge, Cognito)</li>
                        <li>Angular</li>
                        <li>ASP.NET Core</li>
                        <li>PostgreSQL</li>
                    </div>
                </div>
                <div className={OwnStyles.area}>
                    <div className={Styles.keyText}>Description</div>
                    <div>理美容業界に特化したカタログ形式で受発注ができるWebアプリです。</div>
                </div>
            </div>
        </div>
    )
}
