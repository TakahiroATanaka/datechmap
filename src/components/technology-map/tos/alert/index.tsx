import { TosContent } from '../content';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const localStorageKey = 'technology-map.tos.agreement';

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '48rem',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    rounded: 'md',
  },
};

export const TosAlert = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAgreementAction = () => {
    localStorage.setItem(localStorageKey, 'true');
    setShowModal(false);
  };

  useEffect(() => {
    const agreement = localStorage.getItem(localStorageKey);

    if (agreement !== 'true') {
      setShowModal(true);
    }
  }, []);

  return (
    <Modal isOpen={showModal} style={styles}>
      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h4>コンテンツ利用上の注意</h4>
        <div className="mt-2">
          <TosContent />
        </div>
      </div>
      <div className="px-4 py-3 sm:flex sm:justify-center sm:px-6">
        <Button onClick={handleAgreementAction} size="md" variant="primary">
          確認
        </Button>
      </div>
    </Modal>
  );
};
