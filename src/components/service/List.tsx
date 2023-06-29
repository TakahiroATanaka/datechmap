import { Card } from './Card';
import { prefix } from '@/utils';

export const List = () => {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        alt="Visit Japan Webのウェブサイトを見る"
        imageUrl={`${prefix()}/services/vjw.png`}
        title="Visit Japan Web"
        url="https://vjw-lp.digital.go.jp/ja/"
      />
      <Card
        alt="e-Govポータルのウェブサイトを見る"
        imageUrl={`${prefix()}/services/e-gov.png`}
        title="e-Govポータル"
        url="https://www.e-gov.go.jp/"
      />
      <Card
        alt="ワクチン接種記録システム (VRS)のウェブサイトを見る"
        imageUrl={`${prefix()}/services/vrs.png`}
        title="新型コロナワクチン接種証明書アプリ"
        url="https://www.digital.go.jp/policies/vaccinecert/"
      />
      <Card
        alt="マイナポータルのウェブサイトを見る"
        imageUrl={`${prefix()}/services/myna.png`}
        title="マイナポータル"
        url="https://myna.go.jp/"
      />
      <Card
        alt="法人設立ワンストップサービスのウェブサイトを見る"
        imageUrl={`${prefix()}/services/corporation-one-stop.png`}
        title="法人設立ワンストップサービス"
        url="https://app.e-oss.myna.go.jp/Application/ecOssTop/"
      />
      <Card
        alt="レジストリカタログのウェブサイトを見る"
        imageUrl={`${prefix()}/services/registry.png`}
        title="レジストリカタログ"
        url="https://catalog.registries.digital.go.jp/rc/dataset/"
      />
      <Card
        alt="GビズIDのウェブサイトを見る"
        imageUrl={`${prefix()}/services/gbizid.png`}
        title="GビズID"
        url="https://gbiz-id.go.jp/top/"
      />
      <Card
        alt="マイ制度ナビのウェブサイトを見る"
        imageUrl={`${prefix()}/services/my-seido.png`}
        title="マイ制度ナビ"
        url="https://myseido-navi.go.jp/"
      />
      <Card
        alt="デジタル推進委員会のウェブサイトを見る"
        imageUrl={`${prefix()}/services/digital-suishin.png`}
        title="デジタル推進委員会"
        url="https://www.digital.go.jp/policies/digital_promotion_staff/"
      />
    </div>
  );
};
