// pages/image/[id].tsx
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './image.module.css';
import NavBar from '../../../app/components/ui/navBar/NavBar';
import { ClerkProvider } from '@clerk/nextjs';
import imageData from '../../../app/data/imageData.json';

export default function ImagePage() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null;

  const image = imageData.find(img => img.id === Number(id));
  if (!image) return null;

 

  return (
<>
{/* <ClerkProvider>
    <NavBar />

    <button 
        onClick={() => router.back()} 
        style={{ display: 'block', margin: '10px', padding: '10px', backgroundColor: 'lightblue' }}
      >
        Back
      </button>
    <div className={styles.main}>
      <div className={styles.imageContainer}>
      <Image 
        src={`/images/4/${id}.jpeg`} 
        alt="description" 
        layout="fill" // This will make the image fill its container
          objectFit="contain" // This will scale the image down to fit its container, preserving its aspect ratio
          className={styles.image}
      />
      </div>
      <p>{image.description}</p>
    </div>
    </ClerkProvider> */}
    </>
  );
}