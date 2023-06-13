import { Card } from './Card';

export const List = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3">
      <Card
        alt="Visit Japan Webのウェブサイトを見る"
        imageUrl="/experimental/services/vjw.png"
        url="https://vjw-lp.digital.go.jp/ja/"
      />
      <Card
        alt="e-govのウェブサイトを見る"
        imageUrl="/experimental/services/e-gov.png"
        url="https://www.e-gov.go.jp/"
      />
      <Card
        alt="ワクチン接種記録システム (VRS)のウェブサイトを見る"
        imageUrl="/experimental/services/vrs.png"
        url="https://info.vrs.digital.go.jp/dashboard/"
      />
      <Card
        alt="マイナポータルのウェブサイトを見る"
        imageUrl="/experimental/services/myna.png"
        url="https://myna.go.jp/"
      />
      <Card
        alt="法人設立ワンストップサービスのウェブサイトを見る"
        imageUrl="/experimental/services/corporation-one-stop.png"
        url="https://app.e-oss.myna.go.jp/Application/ecOssTop/"
      />
      <Card
        alt="レジストリカタログのウェブサイトを見る"
        imageUrl="/experimental/services/registry.png"
        url="https://catalog.registries.digital.go.jp/rc/dataset/"
      />
      <Card
        alt="gBizIDのウェブサイトを見る"
        imageUrl="/experimental/services/gbizid.png"
        url="https://gbiz-id.go.jp/top/"
      />
      <Card
        alt="マイ制度ナビのウェブサイトを見る"
        imageUrl="/experimental/services/my-seido.png"
        url="https://myseido-navi.go.jp/"
      />
      <Card
        alt="デジタル推進委員会のウェブサイトを見る"
        imageUrl="/experimental/services/digital-suishin.png"
        url="https://www.digital.gr.jp/"
      />
    </div>
  );
};
