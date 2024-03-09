import { currentUser } from '@clerk/nextjs';
import styles from './car.module.css';
import { DOMAIN } from '@clerk/nextjs/server';
import Link from 'next/link';

async function getCars() {
  let cars = [];
  try {
    const res = await fetch(`http://localhost:3005/api/cars`);
    //`${DOMAIN}/api/cars`
    if (res.ok) {
      const body = await res.json();
      cars = body;
    }

    throw new Error(`error ${res.status} ${res.statusText}`);
  } catch (error: any) {
    console.error(error.message);
  }
  return cars;
}
const CarPage = async () => {
  const user = await currentUser();
  const cars = await getCars();

  return (
    <div className="main">
      <div className={styles.user}>
        Hello, {user?.lastName} {user?.firstName} !
      </div>
      <p className={styles.title}>here are the list of cars</p>
      <div className={styles.main}>
        <section className={styles.cars}>
          {cars?.map((car: any) => {
            console.log(`${DOMAIN}/api/cars/${car.id}`);
            return (
              <Link
                href={`/cars/${car.id}`}
                className={styles.car}
                key={car.id}
              >
                {/* eslint-disable-next-line @next/next/no-img-element  */}
                <img src={`http://localhost:3005${car?.url.src}`} alt="car" />
                <div>
                  <p>{car.description}</p>
                </div>
                {/* img will be replaced with image component from next */}
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default CarPage;
