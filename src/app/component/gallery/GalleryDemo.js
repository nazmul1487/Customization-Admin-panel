import React from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Viewer from "images-viewer-react";
import './galleryStyle.css'
export default function GalleryDemo () {
    const [visible, setVisible] = React.useState(false);
    return (
        <>
            <div>
                <button
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    show
                </button>
                <Viewer
                    visible={visible}
                    onClose={() => {
                        setVisible(false);
                    }}
                    images={[{ src: "media/news/pickabooBangla.jpg", alt: "img-1" }]}

                />
            </div>
        </>
    )
}
