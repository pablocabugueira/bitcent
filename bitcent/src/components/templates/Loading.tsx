import Image from 'next/image'
import loadingGif from '../../../public/loadingGif.gif'
import Page from './Page'

export default function Loading() {
    return (
        <Page extern className='justify-center items-center'>
            <Image
                priority
                src={loadingGif}
                alt="loading"
                width={40}
                height={40}
            />
        </Page>
    )
}