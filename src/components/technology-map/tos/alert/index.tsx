import { TosContent } from '../content';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const localStorageKey = 'technology-map.tos.agreement';

const styles = {
  content: {
    top: '5rem',
    left: '5rem',
    right: '5rem',
    bottom: '5rem',
    borderRadius: '1rem',
    padding: '1.5rem',
  },
  overlay: {
    top: 0,
    left: 0,
    zIndex: 1000,
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
      <div className="mt-3 text-left sm:ml-4 sm:mt-0">
        <h4>コンテンツ利用上の注意</h4>
        <div className="mt-2">
          <TosContent />
        </div>
      </div>
      <div className="flex justify-center px-4 py-8">
        <Button onClick={handleAgreementAction} size="md" variant="primary">
          確認
        </Button>
      </div>
    </Modal>
  );
};
