import { Card } from './Card';

export const List = () => {
  return (
    <div className="grid grid-cols-1 content-stretch gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        desc="マイナポータルの普及と利用促進を目指したハッカソンを開催"
        imageUrl="#"
        path="#"
        title="マイナポータル"
      />
      <Card
        desc="マイナポータルの普及と利用促進を目指したハッカソンを開催"
        imageUrl="#"
        path="#"
        title="マイナポータル"
      />
      <Card
        desc="マイナポータルの普及と利用促進を目指したハッカソンを開催"
        imageUrl="#"
        path="#"
        title="マイナポータル"
      />
      <Card
        desc="マイナポータルの普及と利用促進を目指したハッカソンを開催"
        imageUrl="#"
        path="#"
        title="マイナポータル"
      />
    </div>
  );
};
