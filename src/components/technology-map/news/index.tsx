import { Anchor } from '@/components/ui/Anchor';
import React from 'react';

export const TechnologyMapNews: React.FC = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2>お知らせ</h2>

      <ul>
        <li>
          2024年2月22日
          <ul>
            <li>
              <Anchor href="https://www.digital.go.jp/policies/digital-extraordinary-administrative-research-committee/regtechmap/online-training">
                技術カタログの整備における「講習・試験のデジタル化を実現する製品・サービス一覧」を更新しました
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.digital.go.jp/policies/digital-extraordinary-administrative-research-committee/regtechmap/visitbrowsing">
                技術カタログの整備における「往訪閲覧・縦覧のデジタル化を実現する製品・サービス一覧」を掲載しました
              </Anchor>
            </li>
          </ul>
        </li>
        <li>
          2024年1月26日
          <ul>
            <li>
              <Anchor href="https://www.digital.go.jp/policies/digital-extraordinary-administrative-research-committee/regtechmap/technology-catalog#recruitment-information05">
                測定・分析のデジタル化を実現する製品・サービスの公募を開始しました
              </Anchor>
            </li>
          </ul>
        </li>
        <li>
          2023年12月5日
          <ul>
            <li>
              <Anchor href="#commentary">技術解説記事</Anchor>を掲載しました
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
