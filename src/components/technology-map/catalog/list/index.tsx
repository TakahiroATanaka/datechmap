import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';

export const TechnologyMapCatalogList: React.FC = () => {
  return (
    <ul>
      <li>目視等による施工・経年劣化・安全措置対策状況等確認のデジタル化を実現する製品・サービス一覧（掲載準備中）</li>
      <li>侵入痕跡・状況異変を検知する見張りのデジタル化を実現する製品・サービス一覧（掲載準備中）</li>
      <li>
        <Anchor href={canonicalPath('/technology-map/offer/?id=10004')}>
          広域な利用状況把握・被害等の把握のデジタル化を実現する製品・サービス一覧
        </Anchor>
      </li>
      <li>
        <Anchor href={canonicalPath('/technology-map/offer/?id=10003')}>
          事業場の管理・業務状況等の確認（実地調査）のデジタル化を実現する製品・サービス一覧
        </Anchor>
      </li>
      <li>
        <Anchor href={canonicalPath('/technology-map/offer/?id=10002')}>
          往訪閲覧・縦覧のデジタル化を実現する製品・サービス一覧
        </Anchor>
      </li>
      <li>
        <Anchor href={canonicalPath('/technology-map/offer/?id=10001')}>
          講習・試験のデジタル化を実現する製品・サービス一覧
        </Anchor>
      </li>
    </ul>
  );
};
