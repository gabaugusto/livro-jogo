import Image from 'next/image';

export default function Gallery(props) {
    return (
        <figure className="demo-1__gallery__figure">
             <Image
                src={props.pathImage}
                alt="Picture of the author"
            />
        </figure>
    );
};