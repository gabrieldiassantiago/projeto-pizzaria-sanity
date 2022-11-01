import styles from './ImageText.module.scss';
import Image from 'next/image';
import {useNextSanityImage} from 'next-sanity-image'
import client from '../../sanity'

const ImageText = ({data}) => {
    const imageProps = useNextSanityImage(client, data.image);

    return (
        <section className={styles.section}>
            <div className={styles.image}>
            <Image 
            src={imageProps} 
            loader={imageProps.loader}
             layout='fill' />
            </div>
            <div className={styles.content}>
                <span>{data.top_title}</span>
                <h2>{data.title}</h2>
                <p>{data.subtitle}</p>
                {data.email &&  <p>{data.email}</p>}
                {data.number &&  <p>{data.number}</p>}
               
                <a className='btn btn-primary' href={data.url}>{data.button} &rarr;</a>
            </div>
        </section>
    )
}
export default ImageText