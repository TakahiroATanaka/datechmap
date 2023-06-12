import { Card } from './Card';

export const List = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3">
      <Card
        alt="Visit Japan Webのウェブサイトを見る"
        imageUrl="/services/vjw.png"
        url="https://vjw-lp.digital.go.jp/ja/"
      />
      <Card alt="e-govのウェブサイトを見る" imageUrl="/services/e-gov.png" url="https://www.e-gov.go.jp/" />
      <Card
        alt="VRSのウェブサイトを見る"
        imageUrl="/services/vrs.png"
        url="https://info.vrs.digital.go.jp/dashboard/"
      />
      <Card alt="マイナポータルのウェブサイトを見る" imageUrl="/services/myna.png" url="https://myna.go.jp/" />
      <Card
        alt="法人設立ワンストップサービスのウェブサイトを見る"
        imageUrl="/services/corporation-one-stop.png"
        url="https://app.e-oss.myna.go.jp/Application/ecOssTop/"
      />
      <Card
        alt="レジストリカタログのウェブサイトを見る"
        imageUrl="/services/registry.png"
        url="https://catalog.registries.digital.go.jp/rc/dataset/"
      />
      <Card alt="gBizIDのウェブサイトを見る" imageUrl="/services/gbizid.png" url="https://gbiz-id.go.jp/top/" />
      <Card
        alt="マイ制度ナビのウェブサイトを見る"
        imageUrl="/services/my-seido.png"
        url="https://myseido-navi.go.jp/"
      />
      <Card
        alt="デジタル推進委員会のウェブサイトを見る"
        imageUrl="/services/digital-suishin.png"
        url="https://www.digital.gr.jp/"
      />
    </div>
  );
};
