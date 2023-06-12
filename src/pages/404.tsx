import { BaseLayout } from '@/components/common/BaseLayout';
import { P } from '@/components/ui/P';

export const Custom404 = () => {
  return (
    <BaseLayout>
      <main className="grid grid-cols-1 gap-22" id="main" style={{ gridColumn: '1 / -1' }}>
        <h1 className="text-web-xl">Not Found</h1>

        <section className="flex flex-col gap-4">
          <h2 className="text-web-lg">指定されたページまたはファイルは存在しません</h2>
          <P>
            アクセスしていただいたページは、削除もしくは移動した可能性があります。
            <br />
            大変お手数ですが、アドレス（URL）をご確認の上再度お探しいただくか、トップページからご利用ください。
          </P>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-web-lg">The page or file does not exist</h2>
          <P>
            The page you have accessed may have been deleted or moved.
            <br />
            We apologize for the inconvenience, but please check the address (URL) and look again, or use the top page.
          </P>
        </section>
      </main>
    </BaseLayout>
  );
};

export default Custom404;
