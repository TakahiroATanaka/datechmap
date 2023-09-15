import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';
import { LinkedInIcon } from '@/components/ui/icons/sns/LinkedInIcon';
import { NoteIcon } from '@/components/ui/icons/sns/NoteIcon';
import { XIcon } from '@/components/ui/icons/sns/XIcon';
import { YouTubeIcon } from '@/components/ui/icons/sns/YouTubeIcon';

export const Info = () => {
  return (
    <div className="col-span-full flex flex-col justify-between gap-4 md:col-span-3">
      <div className="flex gap-4 self-center md:self-end">
        <UnstyledAnchor href="https://twitter.com/digital_jpn" target="_blank">
          <XIcon />
        </UnstyledAnchor>
        <UnstyledAnchor href="https://www.youtube.com/channel/UCKmJk25wcPwCecf7nV9HwCw" target="_blank">
          <YouTubeIcon />
        </UnstyledAnchor>
        <UnstyledAnchor href="https://digital-gov.note.jp/" target="_blank">
          <NoteIcon />
        </UnstyledAnchor>
        <UnstyledAnchor href="https://www.linkedin.com/company/digital-agency-of-japan/" target="_blank">
          <LinkedInIcon />
        </UnstyledAnchor>
      </div>
      <p className="text-center text-pc-s md:text-end">© Digital Agency, Government of Japan</p>
    </div>
  );
};
