import React, { Component } from 'react'
import { connect } from 'react-redux'

class Terms extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="page-static">
        <div className="top">
          <h2 className="top-heading">Try IT 利用規約</h2>
        </div>
        <div className="content">
          <h3 className="content-heading">第1条（Try ITサービス）</h3>
          <div className="content-text">
            <ol>
              <li>
                「Try IT」へようこそ！「Try IT」サービスとは、株式会社トライグループ（以下「当社」といいます。）が提供する、学校教育の補習その他学力の向上を目的とするスマートフォン、コンピュータ、タブレット等の機器で利用できるウェブサービス、またはスマートフォンアプリ(以下｢本アプリ｣といいます。)を利用した映像授業(以下｢本映像授業｣といいます。)の提供およびこれに付属または関連する各種サービスの総称をいいます（以下「Try IT」といいます。）。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第2条（規約の適用）</h3>
          <div className="content-text">
            <ol>
              <li>
                この「Try IT利用規約」（以下「本規約」といいます。）は、Try ITの受講者（以下「ユーザー」といいます。）およびユーザーの親権者・後見人等の法定代理人（ユーザーが成人の場合はユーザー自身をいいます。以下「保護者」といい、ユーザーと保護者の両者を総称して「ユーザー等」といいます。）によるTry ITの利用について適用されるものとし、ユーザー等は、本規約に同意のうえTry ITを利用するものとします。
              </li>
              <li>
                ユーザー等は、本規約を注意深く読んで、十分に理解した上でこれに同意してこれを遵守するものとします。また、保護者は、自らの責任と負担でユーザーに本規約の内容を通知のうえ遵守させるものとし、ユーザーによる本規約の違反と遵守について責任を負うものとします。
              </li>
              <li>
                当社が本アプリ上または当社ウェブサイトで別途定めるTry ITに関する規程等（以下「規程等」といいます。）が存在する場合には、規程等はそれぞれ本規約の一部を構成するものとします。
              </li>
              <li>
                保護者は、第4条に定める会員登録に際し、本規約に同意するものとします。また、保護者は、当社に対し、ユーザーに本規約の内容を説明して適切に理解させ、これを遵守させることを約束し、当社は、ユーザーが本アプリにログインしたことをもってユーザーも本規約に同意したものとみなします。なお、ユーザーが未成年者の場合、ユーザーは、あらかじめ保護者が本規約に同意をした場合に初めて、Try ITを利用できることとなります。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第3条（サービス内容）</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、本映像授業を、インターネットを利用したオンライン配信の方法により、第4条の会員登録をしたユーザー等に対し提供します。
              </li>
              <li>
                本映像授業の提供に附随するサービスとしては、添削指導サービス、わからない通知機能サービス、公式問題集/授業テキスト購入サービス、その他当社が追加して提供する場合には当該サービスがあります。
              </li>
              <li>
                「添削指導サービス」とは、ユーザーがスマートフォンをシェイクしたり、ブラウザ上のボタンを押したりすることにより、Try ITのコンテンツ等に関する質問を当社にオンライン送信し、この質問に対し当社が契約する教師陣が、オンライン返信によって添削指導を行うという有料サービスであり、同サービスに関する利用料等の詳細については第5条に定めるものとします。
              </li>
              <li>
                「わからない通知機能」サービスとは、当社が提供する「家庭教師のトライ」または「個別教室のトライ」にかかるサービスの提供を受けているユーザー等のみが利用できる無料サービスであり、ユーザーがスマートフォンをシェイクしたり、ブラウザ上のボタンを押したりすることにより、十分に理解できない（“わからない”）箇所の履歴を記録・蓄積し、この情報を「家庭教師のトライ」または「個別教室のトライ」における当該ユーザーの担当教師に提供して、次の指導内容に可能な範囲で反映する、というサービスです。
              </li>
              <li>
                「公式問題集/授業テキスト購入サービス」とは、本映像授業で利用する専用の問題集の販売・購入に関する有料サービスです。
              </li>
              <li>
                添削指導サービス、わからない通知機能サービス、公式問題集/授業テキスト購入サービスその他のサービスの内容の詳細については、本規約に定めるほか、本アプリ内または当社ウェブサイトにおいて掲示いたします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第4条（会員登録）</h3>
          <div className="content-text">
            <ol>
              <li>
                ユーザーがTry ITの受講を希望する場合、ユーザー等は以下の方法により会員登録を行い、Try ITの利用に必要なIDおよびパスワード（以下「ユーザーアカウント情報」といいます。）を取得するものとします。なお、会員登録は当社がこれを承認した場合に完了するものとします。
                <br/>
                ＜会員登録の方法＞
                <br/>
                保護者がTry ITの利用に関する契約（以下「利用契約」といいます。）の締結を希望し、Try ITの仕組み、Try ITにより提供されるサービスの内容および本規約を理解・承諾の上、当社指定の申込フォームにより、当社の定める手順に従い、ユーザー及び保護者の両者についての個人情報（『プライバシーポリシー』の定義に従います。）およびその他当社の指定する情報（以下「ユーザー情報」といいます。）を当社に提供して、ユーザーアカウントを取得するものとする。
              </li>
              <li>
                当社は、会員登録が完了した場合、当該ユーザー等に対し、必要なユーザーアカウント情報を付与するものとします。
              </li>
              <li>
                ユーザー等は、会員登録の際に入力または提供した情報の内容が正確であることを保証・表明し、この点について自ら責任を負うものとします。
              </li>
              <li>
                当社は、ユーザー情報が誤っている場合、保護者からの有効な同意が確認できない場合など、当社が適当でないと判断したときは、Try ITの提供を行わない場合があります。
              </li>
              <li>
                当社が発行したユーザーアカウント情報は、当該ユーザーアカウントの発行を受けた特定のユーザー等のみが利用可能なものとし、ユーザー等は、これを秘密かつ厳正に管理し、第三者への譲渡、貸与、開示をしてはならないものとします。
              </li>
              <li>
                発行されたユーザーアカウント情報の利用によるTry IT上での行為は、すべて当該ユーザーアカウント情報の発行を受けたユーザー等の行為とみなすものとし、ユーザー等は、自らの責任のもとで、Try ITの利用、およびユーザーアカウントおよびユーザーアカウント情報の管理を行うものとします。ユーザーアカウントの第三者による盗用に伴う損害の発生について当社は一切の責任を負いません。
              </li>
              <li>
                当社は、ユーザー情報、その他会員登録にあたって提供された情報については、原則として開示を行いませんが、以下の場合には、関係法令に反しない範囲で、事前に通知することなく第三者に個人情報およびユーザー等の利用履歴、その他メッセージの内容等を提供することがあります。
                <br/>
                ① 公的機関その他から法令に基づき開示を求められたとき。
                <br/>
                ② ユーザー等の同意を得たとき。
                <br/>
                ③ 人の生命、身体または財産の保護のために必要がある場合であって、ユーザー等の同意を得ることが困難であるとき。
                <br/>
                ④ その他法令で開示することが認められているとき。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第5条（添削指導サービス）</h3>
          <div className="content-text"> 
            <ol>
              <li>
                添削指導サービスの利用を希望する場合、保護者は、同サービスの仕組みおよび有料サービスの内容を理解・承諾の上、当社に対し、当社指定の申込フォームにより、当社の定める手順に従いクレジットカード情報を提供して、添削指導サービスの利用を申し込むものとします。
              </li>
              <li>  
                保護者は、前項の申込みに際し、利用回数に応じた利用料（利用料の詳細は本アプリまたは当社ウェブサイトに掲示します。）に相応する消費ポイント（１ポイント＝１円相当）について、１ヶ月単位での限度額（限度ポイント数）を設定し当社に申告するものとします。保護者は１ヶ月毎に同限度額を定めるものとします。なお、本限度額は、第6条の公式問題集/授業テキスト購入にも適用されるものとします。
              </li>
              <li>
                添削指導サービスに関する有料サービス提供契約は、保護者が１ヶ月ごとに前項の限度額を定めた限度で翌月の利用を申し込み、当社がこれを承諾することによって、１ヶ月ごとに成立するものとします。
              </li>
              <li>
                当社は、毎月末日締めで、当該ユーザーによる消費ポイントを計算し、同ポイントに対応する消費金額を、消費者が登録したクレジットカードからの引落額として請求し、保護者はかかる支払いをするものとします。
              </li>
              <li>
                保護者は、ユーザーによる当該月間の添削指導サービスの利用状況に鑑み、既に設定済みの当該月の利用限度額（限度ポイント数）をいつでも増額変更することができるものとします。
              </li>
              <li>
                当社は、当社が契約する教師陣が、ユーザーの質問を当社が受信した日から当社が別途定める一定期間内にユーザーに返信できないときは、当該質問に関するポイント消費および課金は要求せ
                ず、一度ポイントが消費された場合には当該ポイントを返還して復元するものとします。
              </li>
              <li>
                添削指導サービスに関するその他詳細については、別途本アプリ内または当社ウェブサイトで定めます。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第6条（公式問題集/授業テキスト購入サービス）</h3>
          <div className="content-text">
            <ol>
              <li>
                公式問題集/授業テキストの販売価格は、Try ITアプリにおける公式問題集/授業テキスト購入サービスのページに表示されます。
              </li>
              <li>
                保護者は、公式問題集/授業テキスト購入サービスのページで、当社の定める手順に従いクレジットカード情報を提供して、公式問題集/授業テキストを購入することができます。
              </li>
              <li>
                ユーザーは、保護者が前条の定めによって限度額（限度ポイント数）を設定したポイントを利用して、公式問題集/授業テキストを購入することができます。
              </li>
              <li>
                公式問題集/授業テキストの返品は、商品の性格に照らし、乱丁、落丁、商品違いその他の瑕疵がある場合を除き、一切受け付けられません。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第7条（禁止行為）</h3>
          <div className="content-text">
            <ol>
              <li>
                ユーザー等は、Try ITにおいて以下の行為または以下の行為に該当するおそれのある行為をしてはならないものとします。
                <br/>
                （１）意図的に虚偽の情報または誤解を招く情報を登録する行為
                <br/>
                （２）著作権、商標権、氏名権、肖像権、プライバシー権、名誉等の他人の権利を侵害する行為
                <br/>
                （３）個人や団体を誹謗中傷する行為
                <br/>
                （４）法令、公序良俗に反する行為、またはそのおそれがある行為
                <br/>
                （５）当社がTry IT上で提供する各種サービスを不正の目的をもって利用する行為（Try ITに発生した不具合の利用による当該行為を含みます。）
                <br/>
                （６）Try ITに関する講師、教師、当社スタッフ等に対するハラスメント行為や、講師等によるハラスメントを誘発しようとする行為
                <br/>
                （７）Try ITに関する講師、教師、当社スタッフとの授業外での接触行為
                <br/>
                （８）当社の事前の書面による承諾なく、営利を目的とした情報提供や、Try ITを利用した他のユーザー等に対する教育指導、学習塾運営等の行為。また、第三者によるTry ITを利用したかかる教育指導、学習塾運営等の行為に関与したり、指導を受けたりする行為。
                <br/>
                （９）Try ITの運営を妨げる行為、または当社の信頼を毀損する行為
                <br/>
                （10）わいせつな表現、差別的表現、他者に著しい不快感を与える表現等を送信等する行為
                <br/>
                （11）コンピュータ・ウィルスその他の有害なプログラムやツール等を送信等する行為、当社のシステムを攻撃したり、過大な負荷をかけたりする行為
                <br/>
                （12）その他当社が不適切・不適当であると判断した行為
              </li>
              <li>
                前項に掲げる行為によって、当社または第三者に損害が生じた場合、ユーザー等はすべての責任を負うものとし、当社および第三者に損害を与えないものとします。
              </li>
              <li>
                当社は、ユーザー等が第１項に掲げる行為を行ったと合理的に判断した場合、事前に通知することなく、Try ITの利用を停止することができるものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第8条（Try ITの利用）</h3>
          <div className="content-text">
            ユーザー等は、Try ITを利用するにあたって必要な通信端末および通信機器等の通信環境を自らの費用と責任において整えるものとします。また、Try ITの利用にあたって必要な通信費用等はユーザー等が負担するものとします。
          </div>
          <h3 className="content-heading">第9条（著作権等）</h3>
          <div className="content-text">
            <ol>
              <li>
                ユーザー等は、Try ITおよびTry ITに関連して発生する著作物、公式問題集/授業テキストに関連する著作権、システム等についての著作権その他の知的財産権は、当社または当社に使用許諾を行った第三者に帰属するものであることを確認し、いかなる目的であれ転載、複製、送信、翻訳・翻案、改変・追加等の一切の使用行為を行わないものとします。
              </li>
              <li>
                本条の規定に違反して紛争が生じた場合、ユーザー等は、自己の費用と責任において、当該紛争を解決するとともに、当社および第三者に一切の損害を与えないものとします。
              </li>
              <li>
                ユーザー等は、自らが投稿、アップロード又は送信したあらゆる内容や、これに関する著作権、特許権、商標権その他の知的財産権や所有権について、無償で、非独占的で、ロイヤルティの発生しない、永久の、全世界的な、サブライセンス可能で、譲渡可能なライセンスを、当社に付与するものとします。本ライセンスは、ユーザー等が、自らまたは当社によって、Try ITの利用を中止または停止した後であっても消滅しないものとします。ユーザー等は、当社又は当社から同様の権利を承継する第三者に対して、著作者人格権を含む人格権を行使しないことにも同意します。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第10条（当社の免責）</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、以下の事項を保証するものではありません。
                <br/>
                （１）Try ITの提供に不具合やエラーや障害（学習履歴その他Try IT内のデータの消失を含みますが、これに限られません。）が生じないこと
                <br/>
                （２）Try ITから得られる情報等が正確なものであること
                <br/>
                （３）Try ITを通じて入手できる役務、情報等がユーザー等の期待を満たすものであること
              </li>
              <li>
                ユーザー等は、当社がTry ITにおいて当社または第三者より提供される情報（広告その他第三者により提供される情報等を含みますが、これらに限られません。）について、その最新性、真実性、合法性、安全性、適切性、有用性、Try ITによる効果（Try ITの利用によるユーザーの学力の向上等を含みます。）一切について何ら保証しないことを了承のうえ、自己の責任においてTry ITを利用するものとします。万一、ユーザー等につき、当該情報に関して何らかのトラブルが生じた場合にも、当社は、何ら責任を負いません。ただし、当社の故意または重過失により当該トラブルが発生した場合は、この限りではありません。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第11条（個人情報）</h3>
          <div className="content-text">
            <ol>
              <li>
                Try ITの利用によって当社が取得するユーザー等の個人情報の取扱いについては、別途定めるプライバシーポリシーに従うものとします。
              </li>
              <li>
                ユーザー等は、Try ITの利用にあたってユーザー等提供した個人情報を当社または提携サービス運営者が利用することに同意するものとします。
              </li>
              <li>
                ユーザーは、Try ITの利用にあたって取得されるTry ITの利用状況、成績、個人情報などについて、当社が利用保護者に提供できることに同意するものとします。
              </li>
              <li>
                ユーザーは、第3条第4項に定めるわからない通知機能を利用することにより、当該ユーザーの担当教師等に対し、当該ユーザーを特定する情報を含む、わからない箇所の学習履歴情報が通知・提供されることに予め同意するものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">
            第12条（統計情報・属性情報・利用記録の閲覧、集計および利用）</h3>
          <div className="content-text">
            当社は、会員登録・抹消の前後を問わず、Try ITを利用してユーザー等が登録したユーザー等の個人情報、Try ITの利用履歴（ページビュー、動画閲覧履歴、各種演習問題の学習履歴、Try ITを通じた学習の過程、態様、成否のステータス等を含みますが、これらに限られません。）、およびこれらを個人を特定または特定しないで解析した後、個人を特定または特定しないで加工、集計および分析した統計データ、属性情報等を作成し、当該解析結果、利用履歴、統計データ、属性情報等につき何らの制限なく利用（ユーザーに関するこれらの情報を利用保護者に提供すること、企業への提案、市場の調査、新サービスの開発を含みますが、これらに限られません。）することができるものとし、ユーザー等はこれをあらかじめ承諾します。
          </div>
          <h3 className="content-heading">第13条（当社の責任）</h3>
          <div className="content-text">
            <ol>
              <li>
                Try ITの各種サービスは、当社が定める水準（教師・講師の質、サポートの内容・提供手段、授業における音質、通信速度、通信の安定性等を含みますが、これらに限られません。）に基づき提供されるものであり、ユーザー等は、当該サービスの内容・サービス水準がユーザー等の期待を全て満たすものではないことを予め承諾するものとします。
              </li>
              <li>
                当社は、ユーザー等によるTry ITの利用（これに付随する当社または第三者の情報提供行為等を含みます）、その他Try ITを通じてアクセスできる第三者が提供するウェブサイトおよびサービス（提携サービスを含みますが、これに限られません。）によりユーザー等に生じる一切の損害（Try ITの利用により生じた通信端末等の障害、第三者とのトラブル、精神的苦痛またはその他の金銭的損失を含む一切の不利益を含みますが、これらに限られません。）につき、当社の責に帰すべき事由がない限り、一切の責任を負わないものとします。
              </li>
              <li>
                当社が債務不履行、不法行為等当社の責に帰すべき事由によりユーザー等に損害を与えた場合、当社は、ユーザー等について発生した直接かつ通常の損害に限り、賠償します。ただし、当社に故意または重過失がありこれにより損害を生じた場合は、かかる上限を超えて賠償するものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第14条（反社会的勢力の排除）</h3>
          <div className="content-text">
            <ol>
              <li>
                １．ユーザー等は、現在および将来にわたり、次の各号のいずれにも該当しないことを表明し、保証するものとします。
                <br/>
                （１）暴力団、暴力団員、暴力団員でなくなった時から５年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団その他これらに準ずる者（以下これらを暴力団員等という）。
                <br/>
                （２）暴力団員等に経営を支配され、または経営に実質的に関与されていると認められる関係その他社会的に非難されるべき関係にある者。
                <br/>
                （３）自己もしくは第三者の不正利益目的または第三者への加害目的等、不当に暴力団員等を利用していると認められる関係にある者。
                <br/>
                （４）暴力団員等への資金等提供、便宜供与などの関与をしていると認められる関係にある者。
              </li>
              <li>
                ユーザー等は、自らまたは第三者を利用して次の各号の一にでも該当する行為を行わないことを確約するものとします。
                <br/>
                （１）暴力的または法的な責任を超えた不当な要求行為。
                <br/>
                （２）脅迫的な言動、暴力を用いる行為をし、または風説の流布、偽計もしくは威力を用いて当社の信用を毀損し、または当社の業務を妨害する行為。
                <br/>
                （３）その他前各号に準ずる行為。
              </li>
              <li>
                ユーザー等が前２項に違反したときは、当社は、ユーザー等に対する何らの通知催告を要することなく、Try ITの退会、利用停止、各種契約を解除できるものとし、また、当社に生じた損害を賠償する責を負うものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第15条（譲渡等禁止）</h3>
          <div className="content-text">
            <ol>
              <li>
                ユーザー等は、当社の事前の書面による承諾なしに、本契約により生じた権利義務を第三者に譲渡し、承継させ、貸与し、または担保に供することはできないものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第16条（利用停止）</h3>
          <div className="content-text">
            <ol>
              <li>
                ユーザー等（保護者がいる場合は保護者のみを意味するものとします。）は、Try ITの利用の全部または一部を停止したい場合、当社所定の利用停止手続きを行うことで、Try ITの利用の全部または一部を一時的に停止することができるものとします。
              </li>
              <li>
                当社は、ユーザー等が前項の停止をした場合、Try ITにおいて登録または利用した情報の全部または一部を削除する権限を有するものとし、ユーザー等はこれに異議を唱えられないものとします。ユーザー等は、自らの責任で必要な情報を保管するものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第17条（退会）</h3>
          <div className="content-text">
            <ol>
              <li>
                保護者は、Try ITの利用の全部または一部を中止したい場合、当社所定の退会手続きを行うことで、Try ITの利用の全部または一部を中止し、利用契約の全部または一部を解約することができるものとします。
              </li>
              <li>
                当社は、保護者が前項の退会をした場合、Try ITにおいて登録または利用した情報の全部または一部を削除する権限を有するものとし、保護者はこれに異議を唱えられないものとします。保護者は、自らの責任で必要な情報を保管するものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第18条（会員登録の抹消等）</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、ユーザーまたは保護者のいずれかが本規約に違反したと判断した場合、ユーザー等に対し事前に通知することなく、当該ユーザー等に対して、Try ITの全部または一部の利用の一時停止、会員登録の抹消、将来にわたる利用または会員登録の禁止、並びにメッセージまたはTry ITにおいて入力された情報の全部または一部の停止・削除、当該情報のTry IT上での非表示処理等、当社が適切と判断した措置を行うことができるものとします。
              </li>
              <li>
                当社は、利用契約が終了するなど合理的にみて必要となる場合、ユーザー等に対し事前に通知することなく、前項に定める措置を行うことができるものとします。
              </li>
              <li>
                当社は、ユーザーが一定期間以上Try ITを利用しない場合、その他当社が合理的にみて必要と認めた場合には、当該ユーザー等に対し事前に通知したうえで、会員登録を抹消することがあります。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第19条（サービスの中断、変更、終了）</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、ユーザー等へ事前に通知することなく、Try ITが提供するサービス内容の変更、一時的もしくは長期的な中断、またはサービス自体を終了することができ、ユーザー等はこれを予め承諾するものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第20条（サービスの一時的な停止）</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、以下の各号のいずれかに該当する場合には、ユーザー等への事前の通知をすることなく、Try ITおよび当該サイト上で提供するサービスの一時的な運営の停止を行うことがあります。
                <br/>
                （１）Try ITの保守または仕様の変更を行う場合
                <br/>
                （２）天変地異その他非常事態が発生し、または発生するおそれがあり、Try ITおよび当該サイト上で提供する各種サービスの運営ができなくなった場合
                <br/>
                （３）当社がやむを得ない事由によりTry ITおよび当該サイト上で提供する各種サービスの運営上一時的な停止が必要であると判断した場合
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第21条（不可抗力）</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、通常講ずるべき対策では防止できないウィルス被害、停電被害、サーバ故障、回線障害、および天変地異による被害、その他当社の責によらない不可抗力に基づく事由（以下「不可抗力」といいます。）による被害がユーザー等に生じた場合、一切責任を負わないものとします。
              </li>
              <li>
                前項は、Try ITを運営するにあたっての当社の提携企業（当該提携企業の提携先・再委託先等も含み、以下「提携先等」といいます。）に発生する不可抗力においても適用されるものとし、提携先等が事業を行う国・地域における自然災害、暴動、労働争議および政情不安等の提携先等の責によらない事由により、Try ITの提供が不可能である場合においても当然に適用されるものとします。
              </li>
              <li>
                当社は、不可抗力に起因してTry ITにおいて管理または提供されるデータが消去・変更されないことを保証しません。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第22条（規約の変更）</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、当社ウェブサイトまたは本アプリに事前掲示することにより、本規約および規程等を変更（追加・削除を含みます。）することができるものとします。
              </li>
              <li>
                変更された本規約および規程等は、前項の事前掲示の際に定めた効力発生日から効力を生じるものとします。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">第23条（分離条項）</h3>
          <div className="content-text">
            本規約および規程等に定めるいずれかの条項が管轄権のある裁判所により無効である旨判断された場合には、かかる条項は、法律が許容する限りで、本来の条項の趣旨を最大限実現するように変更または解釈されるものとし、また、本規約および規程等のその他の条項の効力には何らの影響を与えないものとします。
          </div>
          <h3 className="content-heading">第24条（準拠法および管轄）</h3>
          <div className="content-text">
            本規約の準拠法は日本法とし、本規約に関する一切の紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            <br/>
            <br/>
            （附則）
            2015年7月21日作成・適用
          </div>
        </div>

        <div className="top">
          <h2 className="top-heading">プライバシーポリシー</h2>
        </div>
        <div className="content">
          <div className="content-text">
            株式会社トライグループ（以下、「当社」といいます）は、「個人情報の保護に関する法律」（以下、「法」といいます）に基づき、個人情報の適切な保護と利用に関する個人情報保護方針を制定し、公表いたします。
          </div>

          <h3 className="content-heading">個人情報保護方針</h3>
          <div className="content-text">
            <ol>
              <li>
                当社は、個人情報の適切な保護と利用に関し、関連法令等に加えて、本方針に定めた事項を遵守し、お客さまの個人情報の適切な保護と利用に努めるとともに、情報化の進展に適切に対応するため、当社における個人情報保護の管理体制およびその取組みについて、継続的な改善に努めます。
              </li>
              <li>
                当社は、お客さまの個人情報について、利用目的を特定するとともに、法で定める場合等を除き、その利用目的の達成に必要な範囲内において利用いたします。
              </li>
              <li>
                当社では、前記２で特定した利用目的の達成に必要な範囲で、適正かつ適法な手段により、お客さまの個人情報を取得いたします。
              </li>
              <li>
                当社は、法に定める場合を除き、あらかじめご本人の同意を得ることなく、お客さまの個人情報を第三者に提供することはいたしません。
              </li>
              <li>
                当社は、お客さまの個人情報に関し、情報の紛失・改ざんおよび漏えい等の防止のため、適切な安全管理措置を実施いたします。また、お客さまの個人情報を取扱う全ての役職員に対し、個人情報保護の重要性についての教育を行うとともに、お客さまの個人情報を委託する場合には、委託先について適切に監督いたします。
              </li>
              <li>
                当社は、保有個人データ（開示、内容の訂正等の権限を有する個人データであって、その存否が明らかになることにより公益その他の利益が害されるものとして政令で定めるもの、または６ヶ月以内に消去することとなるもの以外のものをいいます）につき、法令に基づきご本人からの開示、訂正等に応じます。当社の個人情報の取扱いにつきまして、ご意見・ご質問がございましたら、当社の個人情報相談窓口にて対応させて頂きます。
              </li>
              <li>
                当社は、取り扱う個人情報につき、ご本人からの苦情に対し迅速かつ適切に取り組み、そのための社内体制の整備に努めます。
              </li>
              <li>
                当社は本方針の内容を継続的に見直し、その改善に努めます。
              </li>
            </ol>
          </div>
          <h3 className="content-heading">個人情報保護法に基づく公表文</h3>
          <div className="content-text">
            当社は、個人情報の保護に関する法律、個人情報の保護に関する基本方針（閣議決定）、個人情報の保護に関する法律施行令および個人情報の保護に関する法律に基づく主務大臣の定めるガイドライン等に基づき、取得する個人情報および保有個人データの利用目的、第三者提供、開示、訂正等のご請求、および苦情受付に関する事項を公表いたします。
            <br/>
            <br/>
            なお、従業員などの雇用管理に関する個人情報については、本公表には含みません。
          </div>
          <h3 className="content-heading">公表事項</h3>
          <h4 className="content-subheading">1．個人情報の利用目的について</h4>
          <div className="content-text">
            当社は、個人情報の保護に関する法律（平成15年5月30日法律第57号）に基づき、お客さまの個人情報を、下記業務ならびに利用目的の達成に必要な範囲で利用いたします。
            <br/>
            <br/>
            &lt;業務内容&gt;
            <br/>
            1 家庭教師の派遣事業
            <br/>
            2 個別指導塾での授業提供事業
            <br/>
            3 インターネットによる家庭教師の授業提供事業
            <br/>
            4 インターネットによる教材提供事業
            <br/>
            5 インターネットによる動画配信事業
            <br/>
            6 その他、上記各項に関連し、または附帯する事業
            <br/>
            <br/>
            &lt;利用目的&gt;
            <br/>
            1 各種商品の申込受付のため
            <br/>
            2 本人確認法に基づくご本人さまの確認等や、商品やサービスをご利用いただく資格等の確認のため
            <br/>
            3 授業のスケジュール管理等、継続的な役務における管理のため
            <br/>
            4 授業のお申込や継続的なご利用等に際しての判断のため
            <br/>
            5 お客さまとの契約や法律等に基づく権利の行使や義務の履行のため
            <br/>
            6 市場調査、ならびにデータ分析やアンケートの実施等による商品やサービスの研究や開発のため
            <br/>
            7 ダイレクトメールの発送等、商品やサービスに関する各種ご提案のため
            <br/>
            8 提携会社等の商品やサービスの各種ご提案のため
            <br/>
            9 各種ご契約の解約やお取引解約後の事後管理のため
          </div>
          <h4 className="content-subheading">2．個人データの正確性の確保について</h4>
          <div className="content-text">
            当社は、利用目的の達成に必要な範囲内において、個人データが正確かつ最新の内容に保たれるよう努めます。お届け事項に変更があったときは、書面によりお取引店にお届け下さい。
          </div>
          <h4 className="content-subheading">3．個人情報の当グループでの共同利用について</h4>
          <div className="content-text">
            （1）共同利用における皆様の個人情報の利用目的は次のとおりです。
            <br/>
            ・各種指導契約の締結、継続・維持管理
            <br/>
            ・各種商品・サービスのご案内・提供
            <br/>
            ・ＤＭ発送
            <br/>
            ・当グループの業務に関する情報提供・運営管理、商品・サービスの充実
            <br/>
            <br/>
            （2）当グループの業務に関する情報提供・運営管理、商品・サービスの充実互に提供し、上記利用目的の達成に必要な範囲内で、その情報を取得・利用いたします。
            <br/>
            <br/>
            （3） 相互提供項目は次のとおりです。
            <br/>
            1） ご本人に関して
            <br/>
            氏名、生年月日、性別、連絡先（住所・電話番号、メールアドレスなど）、職業、就業先および勤務先、口座振替に使用する口座情報
            <br/>
            2） ご契約に関して
            <br/>
            契約種類、契約日、契約期間、契約終了日、授業料の金額および支払い方法、契約時にご提出いただく各種書類の記載事項
            <br/>
            <br/>
            （4） 共同利用における当社が保持する皆様の個人情報に関しては当社が管理責任を負います。
            皆様の個人情報のトライ企業グループでの共同利用に関するお問い合わせ、お申し出は、お近くの家庭教師のトライおよび個別教室のトライにて受け付けております。
          </div>
          <h4 className="content-subheading">4．当社は、法第24条2項、第25条、第26条1項、ならびに第27条1項および2項に基づき（以下、これらの手続きを総称して「開示請求等手続」といいます）、ご本人またはその代理人からのご依頼により、以下の要領で開示請求等手続に対応いたします。なお、法第24条2項に基づき利用目的の通知をご希望される場合、および、法第27条1項および2項に基づき保有個人データの利用停止等をお申し出の場合は、最寄りの本社または支店にお申し出下さい。</h4>
          <div className="content-text">
            （1）開示請求等手続きの対象となる保有個人データの項目
            氏名、住所、電話番号、生年月日、勤務先（勤務先名または職業・電話番号）、取引の履歴に関する情報等
            <br/>
            <br/>
            （2）開示請求等手続きの受付窓口
            <br/>
            1 全国の本社および全支店・教室
            <br/>
            2 郵送でご依頼いただく場合は、下記宛に、所定の依頼書に必要書類を添付の上、ご郵送下さい。
            <br/>
            <br/>
            〒102-0072 東京都千代田区飯田橋1-10-3 トライグループ東京本社 総務部
            <br/>
            <br/>
            （3） ご提出いただくもの
            <br/>
            1 個人情報開示依頼書
            <br/>
            2 本人確認のための書類（運転免許証やパスポート等の写し１点）
            <br/>
            3 定代理人による開示請求等の場合は、上記2）に加え代理権があることを確認するための書類
            <br/>
            <br/>
            （4） 手数料
            <br/>
            法第25条に基づく開示請求の場合は、当社所定の手数料をいただきます。
            <br/>
            <br/>
            <div className="table">
              <div className="table-row">
                <div className="table-row-column">
                  開示を依頼する情報
                </div>
                <div className="table-row-column">
                  手数料（税別）
                </div>
              </div>
              <div className="table-row">
                <div className="table-row-column">
                  氏名、生年月日、性別、連絡先（住所・電話番号、メールアドレスなど）、職業、就業先および勤務先
                </div>
                <div className="table-row-column">
                  左記一括 800円
                </div>
              </div>
              <div className="table-row">
                <div className="table-row-column">
                  契約種類、契約日、契約期間、契約終了時、授業料の金額および支払い方法、契約時にご提出いただく各種書類の記載事項
                </div>
                <div className="table-row-column">
                  左記一括 2,000円
                </div>
              </div>
            </div>
            <br/>
            （5） 回答方法
            <br/>
            ご本人よりお届けいただいた住所宛てにご郵送する方法で遅滞なく書面にて回答いたします。なお、代理人によるご依頼の場合であっても、ご本人に直接回答することがございますので、予めご了承願います。
            <br/>
            <br/>
            （6）開示請求等手続きに関して取得した個人情報の利用目的
            <br/>
            開示請求等手続きにより当社が取得した個人情報は、当該手続きのための調査、ご本人ならびに代理人の本人確認、および当該開示請求等に対する回答に利用いたします。
            <br/>
            <br/>
            （7）開示しない場合のお取扱いについて
            <br/>
            次に定める場合は、開示いたしかねますので、予めご了承願います。開示しないことを決定した場合は、その旨理由を付して通知申し上げます。
            <br/>
            1 ご本人の確認ができない場合
            <br/>
            2 代理人によるご依頼に際して、代理権が確認できない場合
            <br/>
            3 所定の依頼書類に不備があった場合
            <br/>
            4 ご依頼のあった情報項目が、保有個人データに該当しない場合
            <br/>
            5 本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
            <br/>
            6 当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合
            <br/>
            7 当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合
            <br/>
            <br/>
            以 上
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Terms);