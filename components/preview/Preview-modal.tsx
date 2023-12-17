"use-client";

import Modal from "@/components/ui/modal";
import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery/Gallery";
import Info from "@/components/info/Info";


const PreviewModal = () => {

    const previewModal = usePreviewModal();
    const product = usePreviewModal((state) => state.data)

    if (!product) {
        return null;
    }

    return (
        <Modal
            open={previewModal.isOpen}
            onClose={previewModal.onClose}
        >

            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-7 lg:col-span-8">
                    <Gallery images={product.images}/>
                </div>
            </div>
            <div className="sm:col-span-5 lg:col-span-4">
                <Info data={product}/>
            </div>
        </Modal>
    )
}

export default PreviewModal;