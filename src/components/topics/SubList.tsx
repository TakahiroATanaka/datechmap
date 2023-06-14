import { Card } from './Card';
import { prefix } from '@/utils';

export const SubList = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        desc={'マイナポータルの普及と利用促進を目指したハッカソンを開催'}
        imageUrl={`${prefix()}/attention-thumbnail.png`}
        path={'/#'}
      />

      <Card
        desc={'マイナポータルの普及と利用促進を目指したハッカソンを開催'}
        imageUrl={`${prefix()}/attention-thumbnail.png`}
        path={'/#'}
      />

      <Card
        desc={'マイナポータルの普及と利用促進を目指したハッカソンを開催'}
        imageUrl={`${prefix()}/attention-thumbnail.png`}
        path={'/#'}
      />
    </div>
  );
};
