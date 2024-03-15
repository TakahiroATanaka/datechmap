import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';

export const TosContent = () => {
  return (
    <div>
      <p>
        コンテンツ利用の上での主な注意事項を以下に示します。
        <br />
        詳細は
        <Anchor
          className="text-link underline"
          href={canonicalPath('/pdf/20231225_policies_technology-catalog_outline_03.pdf')}
          target="_blank"
        >
          テクノロジーマップ及び技術カタログ利用規約（PDF/280KB）
        </Anchor>
        （2023年11月17日改訂）をご参照ください。
      </p>
      <ol className="mt-4">
        <li>
          掲載情報は、掲載技術に関する証明、認証及びその適法性その他何ら技術上又は法令上の裏付けを伴うものではないこと。
        </li>
        <li>
          掲載情報の内容について、事務局等（デジタル庁及び本コンテンツの運営事務局）が評価等を行っているものではないこと。また、掲載情報に関連する問い合わせ、苦情及び紛争等への対応は、情報掲載者（技術カタログに技術情報が掲載された者）が行うものであり、事務局等は何らの責任も有しないこと。
        </li>
        <li>
          掲載技術の利用は、個々の活用場面や関連する条件等を踏まえて技術利用者の判断と責任において行われるものであり、当該技術の関連法令の要求に対する適合性及び技術利用者が想定していた効果が得られることを事務局等が保証するものではないこと。
        </li>
        <li>掲載技術に関する特許権等知的財産権については、関係法令に基づき取り扱われるものであること。</li>
      </ol>
    </div>
  );
};
